exports.up = (knex, Promise) => {
    return knex.schema.table('Interesse', table => {
    table.boolean('isvalid');
})
}
exports.down = (knex, Promise) => {
  }
  