//Manejar as rotas do usuário

const { Router, response } = require('express')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const uploadConfig = require("../config/upload")

const multer = require('multer')

const UserController = require('../controllers/UserController')
const UserAvatarController = require('../controllers/UserAvatarController')

const userController = new UserController()
const userAvatarController = new UserAvatarController()

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticated, userController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes