exports.up = (knex, Promise) => {
  return knex.schema.createTable('Roteiro', (table) => {
    table.string('id').primary();
    table.string('nome');
    table.string('descricao');
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Roteiro')
}