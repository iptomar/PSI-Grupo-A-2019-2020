exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("prop")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("prop").insert([
        {
          id: 1,
          name: "Januário Godinho de Almeida",
          work: "Arquiteto",
          user_id: 1,
        },
        {
          id: 2,
          name: "Amândio Pinto Marcelino",
          work: "Arquiteto",
          user_id: 1,
        },
        {
          id: 3,
          name: "Jorge Ribeiro de Oliveira",
          work: "Arquiteto",
          user_id: 1,
        },
        {
          id: 4,
          name: "João Pedro de Figueiredo Mota Lima",
          work: "Arquiteto",
          user_id: 1,
        },
        {
          id: 5,
          name: "José Inácio da Costa Rosa",
          work: "Arquiteto",
          user_id: 1,
        },
        {
          id: 6,
          name: "João Manuel Santos Faria",
          work: "Construtor Civil",
          user_id: 1,
        },
        {
          id: 7,
          name: "João Pedro de Figueiredo da Mota Lima e Pinto da Cunha",
          work: "Arquitetos",
          user_id: 1,
        },
        {
          id: 8,
          name: "António Rodrigues",
          work: "Arquiteto",
          user_id: 1,
        },
      ]);
    });
};
