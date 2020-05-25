exports.up = (knex, Promise) => {
    return knex.schema.table('users', table => {
    table.boolean('isadmin');
})
}
exports.down = (knex, Promise) => {
  }
  