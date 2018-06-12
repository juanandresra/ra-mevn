'use strict'

const Role = require('../models/role')

function getRoles(req, res) {
    
    Role.find({}).populate('permissions')
    .exec(function (error, roles) {
        res.json(roles)
    });
}

function create (req, res) {

    const role = new Role({
        name: req.body.name,
        permissions: req.body.permissions
    })

    role.save((err) => {

        if (err) return res.status(500).send({
            message: `Error al crear el permiso: ${err}`
        })

        return res.status(201).send({
            status: true,
            message: 'Rol creado'
        })
    })

}

function update (req, res) {
    return res.status(201).send({
        status: true,
        message: 'Actualizado'
    })
}

module.exports = {
    create,
    update,
    getRoles
}