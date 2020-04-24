exports.up = (knex, Promise) => {
  return knex.schema.createTable('Interesse', (table) => {
    table.increments('id').primary();
	  table.string('titulo').notNullable();
    table.string('descricao');
    table.string('coordenadas').notNullable();
	  table.string('data');
    table.string('tipoEdif');

    //Que acção será tomada ao ser eliminado o utilizador que criou o roteiro?
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('users.id');
    
    table.integer('prop_id').unsigned().notNullable();
    table.foreign('prop_id').references('prop.id');
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Interesse')
}