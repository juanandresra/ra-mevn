'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = Schema({
    name: String,
    permissions: [{ type: Schema.Types.ObjectId, ref: 'Permission'}],
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
})

module.exports = mongoose.model('Role', RoleSchema)