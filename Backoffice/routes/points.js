var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");
const {file,validateUser } = require('../helpers')

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
    req.body.data.isvalid=false;
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
  req.body.data.isvalid=false;

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
  .join('prop', 'Interesse.prop_id', '=', 'prop.id')
  .select("*")
  //.where({ id: req.body.data,isvalid:true })
  .whereRaw('Interesse.user_id = ?', [req.body.data])
  .where({isvalid:true})
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

  //let errormesage= {sucess: false, mesage: "something went wrong and we are working on it"};
  //res.send(errormesage);
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
//body.data = user_id
router.post("/searchuser", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex.raw("select Interesse.id as id , Interesse.titulo as titulo, Interesse.descricao as descricao,  Interesse.coordenadas as coordenadas,  Interesse.data as data,  Interesse.tipoEdif as tipoEdif, Interesse.user_id as user_id, Interesse.prop_id as prop_id,  Interesse.isvalid as isvalid , prop.id as prop_id , prop.name as name , prop.work as work, prop.user_id as propuser_id from interesse,prop where interesse.prop_id = prop.id")
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

  await knex("Inter_Roteir")
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


//Usage:
//body.email = email do utilizador atual
router.post("/getnonvalidated", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));

  if(await validateUser(req.body.email)){
  
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Interesse')
  .select("*")
  .where({isvalid:false})
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
}else
{
  let errormesage= {sucess: false, mesage: "only admins can do this"};
  res.send(errormesage);
}
});

//Usage:
//retorna todos os dados das imagens dado o ponto de interesse
//body.data = <id Interesse>
//body.email = email do utilizador atual
router.post("/validate", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  if(await validateUser(req.body.email)){
    await knex('Interesse')
    .where({id: req.body.id})
    .update({isvalid:true}).then(async function( resp ){ 
      let errormesage = { sucess : true , mesage: "update sucessfull" };
      res.send(errormesage);
  }).catch(async function(err) {
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );      let errormesage = { sucess : false , mesage: "token not used" };
    res.send(errormesage);
      });
}else
{
  let errormesage= {sucess: false, mesage: "only admins can do this"};
  res.send(errormesage);
}
});
//Usage:
//Return all points
router.get("/list", async function(req, res, next){

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Interesse')
  .join('prop', 'Interesse.prop_id', '=', 'prop.id')
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


module.exports = router;
