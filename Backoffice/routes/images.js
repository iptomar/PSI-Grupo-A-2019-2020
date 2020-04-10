var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");
const {file } = require('../helpers')

//Usage:
//Return all owners
router.get("/list", async function(req, res, next){

    await knex('prop')
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

    let errormesage= {sucess: false, mesage: "something went wrong and we are working on it"};
    res.send(errormesage);
});

//Usage:
//body.data = { Path:"", Legenda:"Legenda", AutorFonte:"AutorFonte" , Interesse_id:"Interesse_id", usersid:"usersid"}
router.post("/insert", async function(req, res, next){
    var d = new Date();
    body.data.path = "images/"+ + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate();
    await knex("images")
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

    let errormesage= {sucess: true, mesage: "Image sucessfully inserted"};
    res.send(errormesage);
});


//Usage:
//body.data = { name:"name", work:"work", user_id:"user_id" }
router.post("/delete", async function(req, res, next){

    await knex("prop")
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

    let errormesage= {sucess: true, mesage: "Point sucessfully inserted"};
    res.send(errormesage);
});



module.exports = router;