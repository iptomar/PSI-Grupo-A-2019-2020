exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Inter_Roteir').del()
  .then(function () {
    // Inserts seed entries
    return knex('Inter_Roteir').insert([
      {
        id_roteir: 1,
        id_inter: 1
    },
    {
      id_roteir: 1,
      id_inter: 2
  },
  {
    id_roteir: 1,
    id_inter: 3
},
      {
        id_roteir: 2,
        id_inter: 1
		},
      {
        id_roteir: 3,
        id_inter: 1
		}
    ]);
  });
};
