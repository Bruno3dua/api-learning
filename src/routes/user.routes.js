//Manejar as rotas do usuário

const { Router } = require('express')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')


const UserController = require('../controllers/UserController')

const userController = new UserController()

const usersRoutes = Router()

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticated, userController.update)

module.exports = usersRoutes