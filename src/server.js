'use strict'

const path = require('path')
const webpack = require('webpack')
const webpackDev = require('webpack-dev-middleware')
const webpackHot = require('webpack-hot-middleware')
const config = require('../webpack.config')

const express = require('express')
const app = new express()
const port = 8080

app.use(express.static('build'))

const compiler = webpack(config)
app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(webpackHot(compiler))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(port, (error) => {
  if (error) {
    return console.error(error)
  }
  console.info('==> 🌎  Listening on port %s.', port)
})
