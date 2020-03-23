exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    // table.string('user_id');
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.string('password').notNullable();
    table.integer('age');
    table.string('email').notNullable();
    table.unique('email');
    table.string('token').notNullable();
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
