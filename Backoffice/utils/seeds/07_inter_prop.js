exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Inter_Prop').del()
  .then(function () {
    // Inserts seed entries
    return knex('Inter_Prop').insert([
      {
        prop_id: 1,
        id_inter: 1
	  },
      {
        prop_id: 2,
        id_inter: 1
		},
      {
        prop_id: 3,
        id_inter: 1
		}
    ]);
  });
};
