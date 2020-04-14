var express = require("express");
var router = express.Router();
var fs = require('fs');
var knex = require("../utils/databaseConection");
const {file } = require('../helpers')

//Usage:
//retorna todas imagens dado o ponto de interesse
//body.data = <Interesse_id>
router.post("/search", async function(req, res, next){

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
      let errormesage = { sucess : true , mesage: await fs.readFileSync("./files/"+req.body.data+".txt", 'utf8')
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
    body.data.dados.path = "images/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate();
    fs.writeFileSync("./files/"+body.data.dados.path+".txt", body.data.imagem);
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
//body.data = id para apagar
router.post("/delete", async function(req, res, next){
  let errormesage
  await knex("images")
    .select("Path")
    .where({ id: req.body.data })
    .then(rows => {
      for(var keys in rows)
      fs.unlink("./files/"+body.data.path+".txt", body.data.imagem).catch(async function(err) {
        var d = new Date();
        await file(
          "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
          "a",
          err.stack()
        );
        errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
        res.send(errormesage);
        console.log(err);
      });
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack()
      );
       errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
      console.log(err);
    });

     errormesage= {sucess: true, mesage: "Point sucessfully inserted"};
    res.send(errormesage);

    await knex("images")
    .where({ id: req.body.data })
    .del()
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack()
      );
       errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
      console.log(err);
    });

    errormesage= {sucess: true, mesage: "Point sucessfully inserted"};
    res.send(errormesage);
});



module.exports = router;