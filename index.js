const fs = require('fs')
const path = require('path')
const autoRouterWebpackPlugin = require('./autoRouterWebpackPlugin')

const merge = (source, dest) => {
  for (let prop in source) {
    if (dest && dest[prop]) source[prop] = dest[prop]
  }
  return source
}

module.exports = (api, options) => {
  const defaultConf = { pages: './src/pages/*/views/', importPrefix: './views/' }
  const pkgFile = path.resolve(process.cwd(), 'package.json')
  let pkgConf = {}
  if (fs.existsSync(pkgFile)) {
    pkgConf = require(pkgFile) || {}
  }

  api.chainWebpack(webpackConfig => {
    // 添加meta-loader
    webpackConfig.module
                  .rule('meta')
                    .resourceQuery(/blockType=route-meta/)
                    .use('meta-loader')
                      .loader(require.resolve('./meta-loader'))

    // 添加auto-router-webpack-plugin
    webpackConfig.plugin('auto-router-webpack-plugin')
                  .use(autoRouterWebpackPlugin, [merge(defaultConf, pkgConf.autoRouterConf)])
  })
}