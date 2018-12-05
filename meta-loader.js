module.exports = function (source, map) {
  console.log('meta-loader')
  this.callback(
    null,
    `export default function (Component) {
      Component.options._meta = ${
        JSON.stringify(source)
      }
    }`,
    map
  )
}