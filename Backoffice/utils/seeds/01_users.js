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
        token: "K(+?y/(Le0lMnpP+!vZ)GQToI=WesVRXapAc21AXqXx*M8S78KTgx7i-vn)dUu?0"
      },
      {
        id: 2,
        email: 'a@email.com',
        password: 'a',
        name: "Jacinto",
        surname: "Ribeiro" ,
        age: 21,
        token: "/qp*NHi7Pk9ROCCKcN(UlyD28!*e5?(g1EXRJtx+dGT/QdH3ANKT*-uvNQfhmk6h"

      },
      {
        id: 3,
        email: 'b@email.com',
        password: 'b',
        name: "Carolina",
        surname: "Silva" ,
        age: 34,
        token: "rK/+pz!d?d&n+?3*7Q*mKBcVT1TZw!vDEkJfZPFFCWnG&Kq4&lQqq3SH*ZeW7f9Q"
      },
      {
        id: 4,
        email: 'c@email.com',
        password: 'c',
        name: "Hugo",
        surname: "Oliveira" ,
        age: 52,
        token: "P6+aRiq38s*zRrE7ciqzWo&JP*R!25h+H8p/QOR9/V)pZ)+z!&7c/*Oc&3ch5MGg"
      }
    ]);
  });
};
