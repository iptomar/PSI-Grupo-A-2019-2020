exports.up = (knex, Promise) => {
  return knex.schema.createTable('Roteiro', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('descricao').notNullable();

    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Roteiro')
}