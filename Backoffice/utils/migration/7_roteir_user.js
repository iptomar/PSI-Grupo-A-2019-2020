exports.up = (knex, Promise) => {
  return knex.schema.createTable('Roteir_User', (table) => {
    //1-n sem n obrigatorio
	table.string('id_roteir').primary()
	table.string('user_id')
	table.foreign('id_roteir').references('Roteiro.id')
	table.foreign('user_id').references('users.user_id')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Roteir_User')
}