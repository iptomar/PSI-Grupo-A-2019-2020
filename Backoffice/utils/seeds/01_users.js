exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        email: 'a@email.com',
        password: 'a',
        first_name: "Jacinto",
        last_name: "Ribeiro" ,
        age: 21
      },
      {
        id: 2,
        email: 'b@email.com',
        password: 'b',
        first_name: "Carolina",
        last_name: "Silva" ,
        age: 34
      },
      {
        id: 3,
        email: 'c@email.com',
        password: 'c',
        first_name: "Hugo",
        last_name: "Oliveira" ,
        age: 52
      }
    ]);
  });
};
