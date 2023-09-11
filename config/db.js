const knexFile = require('../knexfile')
const knex = require("knex")

const environtment = process.env.NODE_ENV || "development";
const db = knex(knexFile[environtment])

module.exports = db;