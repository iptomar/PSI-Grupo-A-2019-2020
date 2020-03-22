exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prop').del()
  .then(function () {
    // Inserts seed entries
    return knex('prop').insert([
      {
        id: 1 ,
        name: "Januário Godinho de Almeida",
        work: "Arquiteto",
        user_id: 1
	  },    
      {
        id:2 ,
        name: "Amândio Pinto Marcelino",
        work: "Arquiteto",
        user_id: 1
		},
      {
        id:3 ,
        name: "João Pedro de Figueiredo Mota Lima",
        work: "Arquiteto",
        user_id: 1  
		}
    ]);
  });
};