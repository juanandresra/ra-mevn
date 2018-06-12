'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let api = require('./routes/api')
let web = require('./routes/web')
let path = require('path')

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/api', api)
app.use('/', web)

// static files
app.use(express.static(path.join(__dirname, 'dist')));

if (module.hot) {
    module.hot.accept();
}

module.exports = app