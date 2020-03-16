exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        email: 'a@a.a',
        password: 'a'
      },
      {
        id: 2,
        email: 'b@b.b',
        password: 'b'
      },
      {
        id: 3
        email: 'c@c.c',
        password: 'c'
      }
    ]);
  });
};