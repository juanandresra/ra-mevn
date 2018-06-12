'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermissionSchema = Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
})

module.exports = mongoose.model('Permission', PermissionSchema)