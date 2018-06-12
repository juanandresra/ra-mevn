'use strict'

const express = require('express')
const web = express.Router()
const path = require('path')

// GET / 
// web.get('*', (req, res) => {
//     res.sendFile(path.resolve('./dist/index.html'))
// })

module.exports = web