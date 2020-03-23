exports.up = (knex, Promise) => {
  return knex.schema.createTable('Inter_Roteir', (table) => {
	   //M-n 
    table.string('id_roteir');
	  table.string('id_inter');
	  table.foreign('id_roteir').references('id').inTable('Roteiro');
  	table.foreign('id_inter').references('id').inTable('Interesse');
    table.primary(['id_roteir', 'id_inter']);
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Inter_Roteir')
}