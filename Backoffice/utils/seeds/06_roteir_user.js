exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Roteir_User').del()
  .then(function () {
    // Inserts seed entries
    return knex('Roteir_User').insert([
      {
        user_id: '1',
        id_roteir: '1'
	  },
      {
        user_id: '2',
        id_roteir: '1'
		},
      {
        user_id: '3',
        id_roteir: '1'
		}
    ]);
  });
};