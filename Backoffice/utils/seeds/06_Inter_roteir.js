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
          id_roteir: 2,
          id_inter: 1,
        },
        {
          id_roteir: 3,
          id_inter: 1,
        },
      ]);
    });
};
