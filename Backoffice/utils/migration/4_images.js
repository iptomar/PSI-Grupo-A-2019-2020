exports.up = (knex, Promise) => {
  return knex.schema.createTable('images', (table) => {
    table.increments('id').primary();
    table.string('Path').notNullable();
    table.string('Legenda').notNullable();
    table.string('AutorFonte').notNullable();

    table.integer('Interesse_id').unsigned().notNullable();
    table.foreign('Interesse_id').references('Interesse.id').onDelete('CASCADE').onUpdate('CASCADE');
    
    //Que acção será tomada ao ser eliminado o utilizador que criou o roteiro?
    table.integer('usersid').unsigned().notNullable();
    table.foreign('usersid').references('users.id');
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('images')
}
