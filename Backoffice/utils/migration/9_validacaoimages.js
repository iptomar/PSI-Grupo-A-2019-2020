exports.up = (knex, Promise) => {
    return knex.schema.table('images', table => {
    table.boolean('isvalid');
})
}
exports.down = (knex, Promise) => {
  }
  