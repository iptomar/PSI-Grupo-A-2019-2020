
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('user_id')
    // table.string('username')
    table.string('password')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
