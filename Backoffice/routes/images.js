var express = require("express");
var router = express.Router();
var fs = require('fs');
var knex = require("../utils/databaseConection");
const {file } = require('../helpers')

//Usage:
//retorna todas imagens dado o ponto de interesse
//body.data = <Interesse_id>
router.post("/search", async function(req, res, next){

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  await knex('images')
  .select("*")
  .where({Interesse_id:req.body.data})
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

  /*let errormesage= {sucess: false, mesage: "something went wrong and we are working on it"};
  res.send(errormesage);*/
});

//Usage:
//retorna todas imagens dado o ponto de interesse
//body.data = path
router.post("/getimage", async function(req, res, next){

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

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');

  var d = new Date();
  req.body.data.dados.Path = ""+Date.now();
  fs.writeFileSync("./files/images/"+req.body.data.dados.Path+".txt", req.body.data.imagem);
  await knex("images")
  .insert(req.body.data.dados)
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

  let errormesage= {sucess: true, mesage: "Image sucessfully inserted"};
  res.send(errormesage);
});


//Usage:
//body.data = {id:<id>} para apagar
router.post("/delete", async function(req, res, next){

  //Activar chaves estrangeiras
  await knex.schema.raw('PRAGMA foreign_keys = ON;');
  
  let errormesage
  
  await knex("images")
    .select("Path")
    .where({ id: ""+req.body.data.id })
    .then(rows => {
      for(var keys in rows)
      console.log(keys);
      /*fs.unlink("./files/images/"+body.data.path+".txt").catch(async function(err) {
        var d = new Date();
        await file(
          "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
          "a",
          err.stack
        );
        errormesage = { sucess : false , mesage: "something went wrong and we are working on it 1" };
        res.send(errormesage);
        console.log(err);*/
      });
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );
       errormesage = { sucess : false , mesage: "something went wrong and we are working on it 2" };
      res.send(errormesage);
      console.log(err);
    });

    await knex("images")
    .where({ id: req.body.data.id })
    .del()
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );
       errormesage = { sucess : false , mesage: "something went wrong and we are working on it 3" };
      res.send(errormesage);
      console.log(err);
    });

    errormesage= {sucess: true, mesage: "image sucessfully deleted"};
    res.send(errormesage);
});



module.exports = router;