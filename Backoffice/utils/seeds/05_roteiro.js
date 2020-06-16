exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Roteiro').del()
  .then(function () {
    // Inserts seed entries
    return knex('Roteiro').insert([
      {
        id: 1,
        nome: 'Roteiro de Arquitetura Moderna',
        descricao: 'Roteiro com os edificios da Arquitetura Moderna',
        user_id:1,
        isvalid:true
      },
      
    ]);
  });
};
