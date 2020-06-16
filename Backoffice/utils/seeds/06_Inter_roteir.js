exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("Inter_Roteir")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Inter_Roteir").insert([
        {
          id_roteir: 1,
          id_inter: 1,
        },
        {
          id_roteir: 1,
          id_inter: 2,
        },
        {
          id_roteir: 1,
          id_inter: 3,
        },
        {
          id_roteir: 1,
          id_inter: 4,
        },
        {
          id_roteir: 1,
          id_inter: 5,
        },
        {
          id_roteir: 1,
          id_inter: 6,
        },
        {
          id_roteir: 1,
          id_inter: 7,
        },
        {
          id_roteir: 1,
          id_inter: 8,
        },
        {
          id_roteir: 1,
          id_inter: 9,
        },
        {
          id_roteir: 1,
          id_inter: 10,
        },
        {
          id_roteir: 1,
          id_inter: 11,
        },
        {
          id_roteir: 1,
          id_inter: 12,
        },
        {
          id_roteir: 1,
          id_inter: 13,
        },
        {
          id_roteir: 1,
          id_inter: 14,
        },
        {
          id_roteir: 1,
          id_inter: 15,
        },
        {
          id_roteir: 1,
          id_inter: 16,
        },
        {
          id_roteir: 1,
          id_inter: 17,
        },
        {
          id_roteir: 1,
          id_inter: 18,
        },
        {
          id_roteir: 1,
          id_inter: 19,
        },
        {
          id_roteir: 1,
          id_inter: 20,
        },
        {
          id_roteir: 1,
          id_inter: 21,
        },
        {
          id_roteir: 1,
          id_inter: 22,
        },
        {
          id_roteir: 1,
          id_inter: 23,
        },
        {
          id_roteir: 1,
          id_inter: 24,
        },
        {
          id_roteir: 1,
          id_inter: 25,
        },
      ]);
    });
};
