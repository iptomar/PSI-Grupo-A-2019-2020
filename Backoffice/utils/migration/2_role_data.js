exports.up = (knex, Promise) => {
    return knex.schema.createTable('roles', (table) => {
      table.increments('id')
      table.string('nome')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('roles')
  }