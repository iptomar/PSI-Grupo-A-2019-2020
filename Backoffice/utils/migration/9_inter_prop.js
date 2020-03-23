exports.up = (knex, Promise) => {
  return knex.schema.createTable('Inter_Prop', (table) => {
    //1-n sem obrigatorio
	table.string('id_inter');
	table.string('prop_id');
	table.foreign('id_inter').references('id').inTable('Interesse');
	table.foreign('prop_id').references('id').inTable('prop');
  table.primary(['id_inter', 'prop_id']);
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Inter_Prop')
}
