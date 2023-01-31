const AppError = require('../utils/AppError');

class UserController {
    create(request, response) {
        const { name, email, password } = request.body

        response.status(201).json({ name, email, password })

        if(!name) {
            throw new AppError('Name is required')
        }
    }
}

module.exports = UserController