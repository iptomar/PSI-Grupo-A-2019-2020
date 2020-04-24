exports.up = (knex, Promise) => {
  return knex.schema.createTable('Inter_Roteir', (table) => {
	   //M-n 
    table.integer('id_roteir').unsigned().notNullable();
    table.integer('id_inter').unsigned().notNullable();
    
    table.foreign('id_roteir').references('Roteiro.id').onDelete('CASCADE').onUpdate('CASCADE');
    table.foreign('id_inter').references('Interesse.id').onDelete('CASCADE').onUpdate('CASCADE');
    table.primary(['id_roteir', 'id_inter']);
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Inter_Roteir')
}