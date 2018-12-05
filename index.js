const autoRouterWebpackPlugin = require('./autoRouterWebpackPlugin')
module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    // 添加meta-loader
    webpackConfig.module
                  .rule('meta')
                    .resourceQuery(/blockType=route-meta/)
                    .use('meta-loader')
                      .loader(require.resolve('./meta-loader'))

    // 添加auto-router-webpack-plugin
    webpackConfig.plugin('auto-router-webpack-plugin')
                  .use(autoRouterWebpackPlugin, [{
                    pages: './src/pages/*/views/'
                  }])
  })
}