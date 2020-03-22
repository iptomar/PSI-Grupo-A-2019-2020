exports.up = (knex, Promise) => {
  return knex.schema.createTable('images', (table) => {
    table.increments('id').primary()
    table.string('Path')
    table.string('Legenda')
    table.string('AutorFonte')
    table.string('Interesse_id')
    table.foreign('Interesse_id').references('Interesse.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('images')
}
