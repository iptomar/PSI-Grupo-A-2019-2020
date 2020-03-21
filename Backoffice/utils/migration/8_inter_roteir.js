exports.up = (knex, Promise) => {
  return knex.schema.createTable('Inter_Roteir', (table) => {
    table.string('id_roteir').primary()
	table.string('id_inter').primary()
	table.foreign('id_roteir').references('Roteiro.id')
	table.foreign('id_inter').references('Interesse.id')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Inter_Roteir')
}