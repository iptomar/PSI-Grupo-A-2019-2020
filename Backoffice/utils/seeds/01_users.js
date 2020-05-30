exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        email: 'admin@admin.com',
        password: 'admin',
        name: "admin",
        surname: "admin" ,
        age: 20,
        token: "VNIMKOeoP0VBOIphd0RJGzlKytNMAREAR3mS6p4O7WCzpbZSGmg4yNUyEnkZni57",
        isadmin:true
      },
      {
        id: 2,
        email: 'a@email.com',
        password: 'a',
        name: "Jacinto",
        surname: "Ribeiro" ,
        age: 21,
        token: "Rx7US4kBzWu2m7GXcTUFiCqy5yqHSuxcwxkL2cRKqHUFAF2SKAJHeUSwM5OKT6Io",
        isadmin:false

      },
      {
        id: 3,
        email: 'b@email.com',
        password: 'b',
        name: "Carolina",
        surname: "Silva" ,
        age: 34,
        token: "TKfmQhXnGtIX8cTwftOwcSQd6TqiRNTCFNyi8myvyFimhA12gcesrTm3mntUAtJV",
        isadmin:false
      },
      {
        id: 4,
        email: 'c@email.com',
        password: 'c',
        name: "Hugo",
        surname: "Oliveira" ,
        age: 52,
        token: "6ESr3WTBO6ab0nfhhiZoDXwRaoMfmVU4A62qIp8REzUDPqTqtQed1NJqovCid61S",
        isadmin:false
      }
    ]);
  });
};
