exports.up = (knex, Promise) => {
  return knex.schema.createTable(' users', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    // table.string('username')
    table.string('first_name')
    table.string('last_name')
    table.string('password')
    table.integer('age')
    table.unique('email')
    table.string('token')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
