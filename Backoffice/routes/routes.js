var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");
const {file,validateUser } = require('../helpers')

//Usage:
//Return all routes
router.get("/list", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Roteiro')
  .select()
  .where({ isvalid:true })
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
});

//Usage:
//body.data = { nome:"nome", descricao:"descrição", user_id:"user_id" }
router.post("/insert", async function(req, res, next){
  d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  req.body.data.isvalid=false;
      var aux = true;
        //Activar chaves estrangeiras
        await knex.schema.raw('PRAGMA foreign_keys = ON;');

        await knex("Roteiro")
        .insert(req.body.data)
        .catch(async function(err) {
          d = new Date();
          await file(
            "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
            "a",
            err.stack
          );
          aux=!aux;
          let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
          res.send(errormesage);
          console.log(err);
        });
      if(aux){

        let errormesage= {sucess: true, mesage: "Route sucessfully inserted"};
        res.send(errormesage);
      }
});

//Usage:
//body.id = id do proprietário a actualizar
//body.data = informação a actualizar(json)
//body.email = e-mail do utilizador
router.post("/update", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  req.body.data.isvalid=false;
  
      var aux = true;
      //ToDo: 
      //- Terá de ser verificado se o utilizador a solicitar o update é o criador do roteiro
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
            aux=!aux;
              let errormesage = {sucess: false, mesage: "Route doesn't exist"};
              res.send(errormesage);
          }
      })
      .catch(async function(err){
        d = new Date();
        aux=!aux;
        await file(
          "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
          "a",
          err.stack
        );
        let errormesage = { sucess : false , mesage: "token not used" };
        res.send(errormesage);
      });

      //Actualiza o ponto
      if(upd){
          await knex('Roteiro')
          .where({id: req.body.id})
          .update(req.body.data);
      }
      if(aux){
      let errormesage= {sucess: true, mesage: "Route sucessfully updated"};
      res.send(errormesage);
      }

});


//Usage:
//body.data = id do roteiro a eliminar(json)
//body.email = e-mail do utilizador
router.delete("/delete", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));

  var aux = true;
  if(await validateUser(req.body.email)){
    
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
          aux=!aux;
            let errormesage = {sucess: false, mesage: "Route doesn't exist"};
            res.send(errormesage);
        }
    })
    .catch(async function(err){
      d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );      aux=!aux;
      let errormesage = { sucess : false , mesage: "token not used" };
      res.send(errormesage);
    });

    
    //Eliminar o ponto
    if(del){
      await knex('Roteiro')
      .where({id: req.body.id})
      .del();
    }
    if(aux){
    let errormesage= {sucess: true, mesage: "Route sucessfully deleted"};
    res.send(errormesage);
    }
  }
  else
  {
    let errormesage= {sucess: false, mesage: "admin only"};
    res.send(errormesage);
  }
});


//Usage:
//body.data = {"iduser" = "<id do utilizador>" }
router.post("/userSearch", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Roteiro')
  .select("*")
  .where({user_id:req.body.data.iduser})
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

});

//Usage:
//body.email = email do utilizador atual
router.post("/getnonvalidated", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));

  if(await validateUser(req.body.email)){
  
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('Roteiro')
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
//body.data = <id Roteiro>
//body.email = email do utilizador atual
router.post("/validate", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  if(await validateUser(req.body.email)){
    await knex('Roteiro')
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

module.exports = router;