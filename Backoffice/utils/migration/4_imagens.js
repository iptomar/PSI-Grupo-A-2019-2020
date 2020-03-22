exports.up = (knex, Promise) => {
  return knex.schema.createTable('images', (table) => {
    table.increments('id').primary()
    table.string('path')
    table.string('legenda')
    table.string('autorFonte')
    table.string('Interesse_id')
    table.foreign('Interesse_id').references('Interesse.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('images')
}
