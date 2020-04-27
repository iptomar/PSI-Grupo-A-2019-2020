exports.up = (knex, Promise) => {
  return knex.schema.createTable('prop', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('work').notNullable();
    
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('prop')
}
