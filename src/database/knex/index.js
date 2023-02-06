const path = require('path')

const config = require(path.resolve(__dirname, "..", "..", "..", "knexfile.js"))
const knex = require('knex')

const connection = knex(config.development)

module.exports = connection