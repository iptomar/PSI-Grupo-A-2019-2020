exports.up = (knex, Promise) => {
  return knex.schema.createTable('Inter_Prop', (table) => {
    //1-n sem obrigatorio
	table.string('id_inter').primary();
	table.string('prop_id');
	table.foreign('id_inter').references('id').inTable('Interesse');
	table.foreign('prop_id').references('id').inTable('prop');

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Inter_Prop')
}