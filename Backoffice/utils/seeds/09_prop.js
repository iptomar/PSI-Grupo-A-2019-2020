exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prop').del()
  .then(function () {
    // Inserts seed entries
    return knex('prop').insert([
      {
        id: 1 ,
        first_name: "Januário Godinho de Almeida",
        work: "Arquiteto",
        user_id: 1
	  },    
      {
        id:2 ,
        first_name: "Amândio Pinto Marcelino",
        work: "Arquiteto",
        user_id: 1
		},
      {
        id:3 ,
        first_name: "João Pedro de Figueiredo Mota Lima",
        work: "Arquiteto",
        user_id: 1  
		}
    ]);
  });
};