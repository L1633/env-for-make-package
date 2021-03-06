const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multipart = require('connect-multiparty');
const atob = require('atob');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackConfig = require('./webpack.config');
const path = require('path');
const open = require('open');
require('./server2');

const app = express();
const compiler = webpack(WebpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname))

app.use(bodyParser.json())
// app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const router = express.Router()

registerSimpleRouter()

app.use(router)

const port = process.env.PORT || 8080;
module.exports = app.listen(port, () => {
  open(`http://localhost:${port}`);
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
})

function registerSimpleRouter () {
  router.get('/simple/get', function(req, res) {
    res.json({
      msg: `hello world`
    })
  })
}

