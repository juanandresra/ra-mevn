'use strict'

const Permission = require('../models/permission')

function create(req, res) {

    const permission = new Permission({
        name: req.body.name
    })

    permission.save((err) => {

        if (err) return res.status(500).send({
            message: `Error al crear el permiso: ${err}`
        })

        return res.status(201).send({
            status: true, message: 'Permiso creado'
        })
    })

}

function getPermissions(req, res) {
    Permission.find({}).exec(function (error, permissions) {
        res.json(permissions)
    });
}

module.exports = {
    create,
    getPermissions
}