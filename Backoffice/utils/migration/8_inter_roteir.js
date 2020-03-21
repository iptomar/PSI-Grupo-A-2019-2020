exports.up = (knex, Promise) => {
  return knex.schema.createTable('Inter_Roteir', (table) => {
	   //M-n 
    table.string('id_roteir').primary();
	table.string('id_inter').primary();
	table.foreign('id_roteir').references('id').inTable('Roteiro');
	table.foreign('id_inter').references('id').inTable('Interesse');

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Inter_Roteir')
}