const express = require('express')

const routes = require('./routes')

const app = express()
app.use(express.json()) //indica para a aplicação que o response vai vir em JSON
app.use(routes)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))