exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
  .then(function () {
    // Inserts seed entries
    return knex('images').insert([
      {
        id:"1" ,
        Legenda: "Tribunal da Comarca de Tomar: Vista exterior, 2017",
        AutorFonte: "Filipe Marques, LabIPT",
        Path: "1",
        Interesse_id: 1,
        usersid: 1
	  },    
      {
        id:"2" ,
        Legenda: "Tribunal da Comarca de Tomar: Fonte e estrutura da sala de audiências, 2017",
        AutorFonte: "Gonçalo Figueiredo, LabIPT",
        Path: "2",
        Interesse_id: 1,
        usersid: 1
		},
      {
        id:"3" ,
        Legenda: "Tribunal da Comarca de Tomar: Pátio interno, 2017",
        AutorFonte: "Gonçalo Figueiredo, LabIPT",
        Path: "3",
        Interesse_id: 1,
        usersid: 1
		}
    ]);
  });
};