/**
 * 多页面的自动路由
 * 单页面可以直接使用 [vue-route-generator](https://github.com/ktsn/vue-route-generator)
 * options {Object} 配置参数
 *  - pages {String|Array} 支持globby的匹配，支持字符串或者数组 [globbing-patterns](https://github.com/sindresorhus/globby#globbing-patterns)
 *  - importPrefix {String} 默认是`../views/`, `vue-route-generator`默认的是`@/pages`, 异步组件的默认路径，eg：import('../views/account.vue')
 */
const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')
const assert = require('assert')
const globby = require('globby')
const vueRouteGenerator = require('vue-route-generator')
const watch = require('watch')
const pluginName = 'autoRouterWebpackPlugin'

class autoRouterWebpackPlugin {
  constructor (options) {
    this.options = Object.assign({ importPrefix: './views/' }, options)
    this.watchState = {}
    assert(options, chalk.red.bold(`${pluginName} options is required!!!`))
    assert(options.pages, chalk.red.bold(`${pluginName} options.pages is required!!!`))
  }
  apply(compiler) {
    const generate = async (compilation) => {
      const pages = await globby(this.options.pages, { onlyFiles: false })

      Array.isArray(pages) && pages.forEach(page => {
        const pageName = path.basename(path.dirname(page))
        const code = vueRouteGenerator.generateRoutes({ pages: page, importPrefix: this.options.importPrefix })
        this.watchState[pageName] = this.watchState[pageName] ? this.watchState[pageName] : false
        
        // Fix: It's not allowed to load an initial chunk on demand. The chunk name "xxx" is already used by an entrypoint.
        const content = code.replace(/: "((\w|-)+)\"/gm, `: "${pageName}-$1"`)
        const to = path.resolve(page, '../routes.js')

        // New File must be trigger generate
        !this.watchState[pageName] &&
        process.env.NODE_ENV !== 'production' &&
        watch.createMonitor(page, {
          // 2000ms
          interval: 2,
          // only watch *.vue files
          filter: f => /\.vue$/g.test(f)
        }, monitor => {
          this.watchState[pageName] = true
          monitor.on("created", () => process.nextTick(generate))
          monitor.on("remove", () => process.nextTick(generate))
        })

        if (fs.existsSync(to) && fs.readFileSync(to, 'utf-8').trim() === content.trim()) {
          return
        }

        if (!fs.existsSync(to)) fs.ensureFileSync(to)
        fs.writeFileSync(to, content)
      })
    }
    
    compiler.hooks.done.tap(pluginName, generate)
  }
}

module.exports = autoRouterWebpackPlugin