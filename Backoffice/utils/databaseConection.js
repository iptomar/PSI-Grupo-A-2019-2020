const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: process.env.filename
        
    },
    migrations: {
        directory: process.env.migration
    },
    seeds: {
        directory: process.env.seed
    }
  })
  
  module.exports = knex
  