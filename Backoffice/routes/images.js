var express = require("express");
var router = express.Router();
var fs = require('fs');
var knex = require("../utils/databaseConection");
const {file,validateUser } = require('../helpers')

//Usage:
//retorna todos os dados das imagens incluindo as proprias imagens dado o ponto de interesse
//id =  <Interesse_id> (isto no url)
router.get("/searchgetimage", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');
  var datas=[];
  await knex('images')
  .select("*")
  .where({Interesse_id:req.query.id,isvalid:true})
  .then(async rows => {
      for(var i = 0;i<rows.length;i++){
      try{
        datas.push({
          "id": rows[i].id,
          "img": await fs.readFileSync("./files/images/"+rows[i].Path+".txt", 'utf8'),
          "Legenda": rows[i].Legenda,
          "AutorFonte": rows[i].AutorFonte,
          "Interesse_id": rows[i].Interesse_id,
          "usersid": rows[i].usersid
        });
      }
      catch (err) {
        d = new Date();
        await file(
          "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
          "a",
          err.stack
        );
      }
      finally{
        continue;
      }
    }
      let errormesage = { sucess : true , mesage: datas };
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
//retorna todos os dados das imagens dado o ponto de interesse
//body.data = <Interesse_id>
router.post("/search", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('images')
  .select("*")
  .where({Interesse_id:req.body.data,isvalid:true})
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
//retorna todos os dados das imagens dado o ponto de interesse
//body.data = <Interesse_id>
router.post("/searchinterest", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('images')
  .select("id,titulo,descricao,data")
  .where({Interesse_id:req.body.data,isvalid:true})
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
//retorna todos os dados das imagens dado o ponto de interesse
//body.data = id do ponto
router.post("/pointdata", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('images')
  .select("*")
  .where({id:req.body.data,isvalid:true})
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
//retorna todas imagens dado o ponto de interesse
//body.data = path
router.post("/getimage", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

    let errormesage = { sucess : true , mesage: await fs.readFileSync("./files/images/"+req.body.data+".txt", 'utf8')
  };
  if(errormesage.mesage==null)
      errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
  res.send(errormesage);
});

//Usage:
//body.data.dados = { Path:"", Legenda:"Legenda", AutorFonte:"AutorFonte" , Interesse_id:"Interesse_id", usersid:"usersid"}
//body.data.imagem = <base 64 da imagem>
router.post("/insert", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');
  req.body.data.dados.isvalid=false;
  d = new Date();
  req.body.data.dados.Path = ""+Date.now();
  fs.writeFileSync("./files/images/"+req.body.data.dados.Path+".txt", req.body.data.imagem);
  await knex("images")
  .insert(req.body.data.dados)
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
//body.data = {id:<id>} para apagar
router.delete("/delete", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');
  
  let errormesage
    await knex("images")
    .where({ id: req.body.data.id })
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

  await knex('images')
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
//body.data = <id imagem>
//body.email = email do utilizador atual
router.post("/validate", async function(req, res, next){
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  if(await validateUser(req.body.email)){
    await knex('images')
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