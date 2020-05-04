var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");
const {file } = require('../helpers')

//Usage:
//Return all owners
router.get("/list", async function(req, res, next){

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Roteiro')
  .select()
  .then(rows => {
      let errormesage = { sucess : true , mesage: rows };
      res.send(errormesage);
    })
  .catch(async function(err) {
    var d = new Date();
    await file(
      "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack()
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });
});

//Usage:
//body.data = { nome:"nome", descricao:"descrição", user_id:"user_id" }
router.post("/insert", async function(req, res, next){

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex("Roteiro")
  .insert(req.body.data)
  .catch(async function(err) {
    var d = new Date();
    await file(
      "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack()
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });

  let errormesage= {sucess: true, mesage: "Route sucessfully inserted"};
  res.send(errormesage);
});

//Usage:
//body.id = id do proprietário a actualizar
//body.data = informação a actualizar(json)
router.post("/update", async function(req, res, next){
  //ToDo: 
  //- Terá de ser verificado se o utilizador a solicitar o update é um administrador ou o criador do roteiro
  //- Não poderá ser permitido o update ao ID do roteiro

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  let upd = false;

  //Verificar se o ponto existe
  await knex('Roteiro')
  .where({id: req.body.id})
  .then(result => {
      if(!result.length == 0){
          upd = true;
      } else {
          let errormesage = {sucess: false, mesage: "Route doesn't exist"};
          res.send(errormesage);
      }
  })
  .catch(async function(err){
      await file("error/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate()+"_"+d.getUTCHours()+"_"+d.getUTCMinutes()+"_"+d.getUTCSeconds(), "a",""+err.stack);
    let errormesage = { sucess : false , mesage: "token not used" };
    res.send(errormesage);
  });

  //Actualiza o ponto
  if(upd){
      await knex('Roteiro')
      .where({id: req.body.id})
      .update(req.body.data);
  }

  let errormesage= {sucess: true, mesage: "Route sucessfully updated"};
  res.send(errormesage);
});


//Usage:
//body.data = id do roteiro a eliminar(json)
router.delete("/delete", async function(req, res, next){
  //ToDo: Terá de ser verificado se o utilizador a solicitar o delete é
  //um administrador ou o utilizador que o criou

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  let del = false;

  //Verificar se o ponto existe
  await knex('Roteiro')
  .where({id: req.body.id})
  .then(result => {
      if(!result.length == 0){
          del = true;
      } else {
          let errormesage = {sucess: false, mesage: "Route doesn't exist"};
          res.send(errormesage);
      }
  })
  .catch(async function(err){
      await file("error/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate()+"_"+d.getUTCHours()+"_"+d.getUTCMinutes()+"_"+d.getUTCSeconds(), "a",""+err.stack);
    let errormesage = { sucess : false , mesage: "token not used" };
    res.send(errormesage);
  });

  
  //Eliminar o ponto
  if(del){
    await knex('Roteiro')
    .where({id: req.body.id})
    .del();
  }

  let errormesage= {sucess: true, mesage: "Route sucessfully deleted"};
  res.send(errormesage);
});



module.exports = router;