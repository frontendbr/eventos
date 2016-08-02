'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.config')
const port = 8080

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './build',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.info('==> 🌎  Listening on port %s', port)
})
