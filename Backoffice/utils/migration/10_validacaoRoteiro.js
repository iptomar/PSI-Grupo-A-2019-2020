exports.up = (knex, Promise) => {
    return knex.schema.table('Roteiro', table => {
    table.boolean('isvalid');
})
}
exports.down = (knex, Promise) => {
  }
  