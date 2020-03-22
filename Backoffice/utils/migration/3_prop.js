exports.up = (knex, Promise) => {
  return knex.schema.createTable(' prop', (table) => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('user_id')
    table.string('owner_id')
    table.foreign('user_id').references('users.id')
    table.foreign('owner_id').references('Interesse.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('prop')
}
