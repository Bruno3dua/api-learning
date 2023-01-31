//Manejar as rotas do usuário

const { Router } = require('express')

const UserController = require('../controllers/UserController')
const userController = new UserController()

const usersRoutes = Router()

function myMiddleware(request, response, next) {
    console.log("você passou pelo mid")
    const { isAdmin } = request.body

    if(!isAdmin) {
        return response.json({'message': 'User unauthorized'})
    }

    next() 
}
usersRoutes.use(myMiddleware)
usersRoutes.post('/', userController.create)

module.exports = usersRoutes