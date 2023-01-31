require('express-async-errors')

const AppError = require('./utils/AppError')
const express = require('express')
const routes = require('./routes')
const migrationsRun = require('./database/sqlite/migrations')

const app = express()
app.use(express.json()) //indica para a aplicação que o response vai vir em JSON

app.use(routes)

migrationsRun()

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.log(error)

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))