var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");
const {file } = require('../helpers')

//Usage:
//Return all owners
router.get("/list", async function(req, res, next){
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('prop')
  .select()
  .then(rows => {
      let errormesage = { sucess : true , mesage: rows };
      res.send(errormesage);
    })
  .catch(async function(err) {
    var d = new Date();
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });

  let errormesage= {sucess: false, mesage: "something went wrong and we are working on it"};
  res.send(errormesage);
});

//Usage:
//body.data = { name:"name", work:"work", user_id:"user_id" }
router.post("/insert", async function(req, res, next){
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex("prop")
  .insert(req.body.data)
  .catch(async function(err) {
    var d = new Date();
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });

  let errormesage= {sucess: true, mesage: "Point sucessfully inserted"};
  res.send(errormesage);
});

//Usage:
//body.id = id do proprietário a actualizar
//body.data = informação a actualizar(json)
router.post("/update", async function(req, res, next){
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));

  //ToDo: 
  //- Terá de ser verificado se o utilizador a solicitar o update é um administrador
  //- Não poderá ser permitido o update ao ID do ponto

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  let upd = false;

  //Verificar se o ponto existe
  await knex('prop')
  .where({id: req.body.id})
  .then(result => {
      if(!result.length == 0){
          upd = true;
      } else {
          let errormesage = {sucess: false, mesage: "Proprietary doesn't exist"};
          res.send(errormesage);
      }
  })
  .catch(async function(err){
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );    let errormesage = { sucess : false , mesage: "token not used" };
    res.send(errormesage);
  });

  //Actualiza o ponto
  if(upd){
      await knex('prop')
      .where({id: req.body.id})
      .update(req.body.data);
  }

  let errormesage= {sucess: true, mesage: "Proprietary sucessfully updated"};
  res.send(errormesage);
});

module.exports = router;