exports.up = (knex, Promise) => {
  return knex.schema.createTable('Interesse', (table) => {
    table.string('id').primary()
	table.string('titulo')
    table.string('descricao')
    table.string('coordenadas')
	table.string('data')
	table.string('tipoEdif')
	

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Interesse')
}