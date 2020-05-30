exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Roteiro').del()
  .then(function () {
    // Inserts seed entries
    return knex('Roteiro').insert([
      {
        id: 1,
        nome: 'Roteiro dos Monumentos',
        descricao: 'Se tem algo que eu adoro no centro oeste de Portugal é poder andar poucos quilômetros entre suas cidades. Tomar é um desses casos.',
        user_id:1,
        isvalid:true
      },
      {
        id: 2,
        nome: 'Roteiro dos Bares',
        descricao: 'Restaurantes, bares, loja de discos, cafés, lojas de decoração  trouxeram uma vida de agitação constante e não faltam sítios para exercitar o cotovelo. ',
        user_id:1,
        isvalid:true
	  },
      {
        id: 3,
        nome: 'Roteiro de Tomar',
        descricao: 'A cidade de Tomar, merece, sem dúvida alguma, uma visita, pela sua riqueza artística e cultural. Esta cidade encantadora, banhada pelo Rio Nabão, promete um dia em cheio. ',
        user_id:2,
        isvalid:true
      }
    ]);
  });
};
