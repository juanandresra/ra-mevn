'use strict'

// GET     controller/ controller.index
// POST    controller/ controller.create
// GET     controller/:id  controller.show
// PUT     controller/:id  controller.update
// DELETE  controller/:id  controller.delete

// MIDDLEWARES 
const auth = require('../middlewares/auth')

//EXPRESS ROUTER 
//DOCUMENTATION ON http://expressjs.com/en/guide/routing.html
const express = require('express')
const api = express.Router()

// EXAMPLE AUTHORIZATION RBAC
api.get('/private', auth.isAuth, auth.roleAuthorization(["permiso 1"]), (req, res) => {
    res.status(200).send({
        message: 'Tienes acceso'
    })
})

// Role-based access control RBAC

const userCtrl = require('../controllers/user')
api.get('/users', userCtrl.getUsers)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

const roleCtrl = require('../controllers/role')
api.get('/role', roleCtrl.getRoles)
api.post('/role', roleCtrl.create)
api.put('/role', roleCtrl.update)

const permissionCtrl = require('../controllers/permission')
api.get('/permission', permissionCtrl.getPermissions)
api.post('/permission', permissionCtrl.create)

module.exports = api
