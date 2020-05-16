var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");
const {file } = require('../helpers')

//Usage:
//body.id = id do ponto a actualizar
//body.data = informação a actualizar(json)
router.post("/update", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
    //ToDo: 
    //- Terá de ser verificado se o utilizador a solicitar o update é
    //um administrador ou o utilizador que criou o ponto
    //- Não poderá ser permitido o update ao ID do ponto

    //Activar chaves estrangeiras
    await knex.schema.raw('PRAGMA foreign_keys = ON;');

    let upd = false;

    //Verificar se o ponto existe
    await knex('Interesse')
    .where({id: req.body.id})
    .then(result => {
        if(!result.length == 0){
            upd = true;
        } else {
            let errormesage = {sucess: false, mesage: "Point doesn't exist"};
            res.send(errormesage);
        }
    })
    .catch(async function(err){
      d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );      let errormesage = { sucess : false , mesage: "token not used" };
      res.send(errormesage);
    });

    //Actualiza o ponto
    if(upd){
        await knex('Interesse')
        .where({id: req.body.id})
        .update(req.body.data);
    }

    let errormesage= {sucess: true, mesage: "Point sucessfully updated"};
    res.send(errormesage);
});

//Usage:
//body.data = id do ponto a eliminar(json)
router.delete("/delete", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
    //ToDo: Terá de ser verificado se o utilizador a solicitar o delete é
    //um administrador ou o utilizador que o criou

    //Activar chaves estrangeiras
    await knex.schema.raw('PRAGMA foreign_keys = ON;');

    let del = false;

    //Verificar se o ponto existe
    await knex('Interesse')
    .where({id: req.body.id})
    .then(result => {
        if(!result.length == 0){
            del = true;
        } else {
            let errormesage = {sucess: false, mesage: "Point doesn't exist"};
            res.send(errormesage);
        }
    })
    .catch(async function(err){
      d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );      let errormesage = { sucess : false , mesage: "token not used" };
      res.send(errormesage);
    });

    
    //Eliminar o ponto
    if(del){
      await knex('Interesse')
      .where({id: req.body.id})
      .del();
    }

    let errormesage= {sucess: true, mesage: "Point sucessfully deleted"};
    res.send(errormesage);
});

//Usage:
//body.data = { titulo:"titulo", descricao:"descricao" , coordenadas:"coordenadas" , data:"data" , tipoEdif:"tipoEdif" , user_id:user_id , prop_id:prop_id }
//RETURN - {sucess: true/false, id do ponto inserido}
router.post("/insert", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //ID do registo inserido
  let idCreated;

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex("Interesse")
  .returning('id')
  .insert(req.body.data)
  .then(function (id) {
    idCreated = id;
    let errormesage= {sucess: true, id:idCreated};
    res.send(errormesage);
  })
  .catch(async function(err) {
    d = new Date();
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });

  //let errormesage= {sucess: true, mesage: "Point sucessfully inserted", id:idCreated};
  //res.send(errormesage);
});

//Usage:
//point to return data
//body.data = id
router.post("/searchpoint", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Interesse')
  .select("*")
  .where({ id: req.body.data })
  .then(rows => {
      let errormesage = { sucess : true , mesage: rows };
      res.send(errormesage);
      
    })
  .catch(async function(err) {
    d = new Date();
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
//Return all points id
//body.data = idRoteiro
router.post("/search", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Inter_Roteir')
  .select("id_inter")
  .where({ id_roteir: req.body.data })
  .then(rows => {
      let errormesage = { sucess : true , mesage: rows };
      res.send(errormesage);
      
    })
  .catch(async function(err) {
    d = new Date();
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });

  /*let errormesage= {sucess: false, mesage: "something went wrong and we are working on it"};
  res.send(errormesage);*/
});

//Usage:
//Return all points id
//body.data = idRoteiro
router.post("/searchuser", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Interesse')
  .select("*")
  .where({ user_id: req.body.data })
  .then(rows => {
      let errormesage = { sucess : true , mesage: rows };
      res.send(errormesage);
      
    })
  .catch(async function(err) {
    d = new Date();
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });

  /*let errormesage= {sucess: false, mesage: "something went wrong and we are working on it"};
  res.send(errormesage);*/
});

//Usage:
//associa um ponto a uma rota
//body.data = {"idrot" = "<idroteiro>" , "idpoint" = "<idponto>"}
router.post("/pointtoroute", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex("images")
  .insert({ id_roteir: req.body.data.idrot, id_inter: req.body.data.idpoint})
  .catch(async function(err) {
    d = new Date();
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
    console.log(err);
  });

  let errormesage= {sucess: true, mesage: "Image sucessfully inserted"};
  res.send(errormesage);
});


//Usage:
//desassocia um ponto a uma rota
//body.data = {"idrot" = "<idroteiro>" , "idpoint" = "<idponto>"}
router.delete("/pointoutroute", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
        //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');
  
  let errormesage
    await knex("Inter_Roteir")
    .where({ id_roteir: req.body.data.idrot, id_inter: req.body.data.idpoint})
    .del()
    .catch(async function(err) {
      d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );
       errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
      console.log(err);
    });

    errormesage= {sucess: true, mesage: "image sucessfully deleted"};
    res.send(errormesage);
});

module.exports = router;