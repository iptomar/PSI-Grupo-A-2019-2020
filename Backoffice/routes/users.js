var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  res.send(req.url);
});

router.post("/", async function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(req.url);
});

// RECEBE {email: "", password:""}
// DEVOLVE a entrada da db do utilizador se os dados estiverem corretos
router.post("/login", async function(req, res, next) {
  // vai pesquisar se o utilizador existe. caso exista devolve-o
  if (req.body.email == null || req.body.password == null) {
    let error = { error: "Incorrect parameters" };
    res.status(400).send(error);
  }
  await knex
    .from("users")
    .select("*")
    .where({ email: req.body.email })
    .then(result => {
      if (!result.length == 0) {
        result = result[0];
      }
      if (req.body.password == result.password) {
        res.send(result);
      } else {
        let error = { error: "User or password incorret" };
        res.status(401).send(error);
      }
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err
      );

      console.log(err);

      res.send(err);
    });
});

// RECEBE {email: "", password:"", name:"", surname:"", age:"", tokenAdmin:""}
// DEVOLVE {sucess: true}
router.post("/register", async function(req, res, next) {
  if (
    req.body.email == null ||
    req.body.password == null ||
    req.body.name == null ||
    req.body.surname == null ||
    req.body.age == null ||
    req.body.tokenAdmin == null
  ) {
    let error = { error: "Incorrect parameters" };
    res.status(400).send(error);
    return;
  }

  // o token enviado é o do admin
  await knex("users")
    .select("*")
    .where({ name: "admin" })
    .then(result => {
      result = result[0];
      
      // O token enviado tem que ser o do admin
      if (req.body.tokenAdmin != result.token) {
        let error = {
          error: "The token provided is not the admin's",
          sucess: false
        };
        res.status(401).send(error);
        return;
      }
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err
      );

      console.log(err);

      res.send(err);
    });

  let query;
  
  // verifica se o utilizador já existe, se já devolve um erro
  await knex
    .from("users")
    .select("*")
    .where({ name: req.body.name })
    .then(result => {
      query = result;
      console.log(result);
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err
      );

      console.log(err);
    });
  if (!query.length == 0) {
    let error = { error: "User already exists", sucess: false };
    res.status(401).send(error);
    return;
  }
  // criação da chave do utilizador
  var chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";

  var randomstring = "";

  for (var i = 0; i < 64; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }

  await knex("users")
    .insert({
      name: req.body.name,
      surname: req.body.surname,
      password: req.body.password,
      age: req.body.age,
      email: req.body.email,
      token: randomstring
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err
      );

      console.log(err);
    });

  await knex("users")
    .select("*")
    .where({ name: req.body.name })
    .then(select => {
      let response = { id: select[0].id, email: select[0].email };
      res.send(response);
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "logs/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err
      );

      console.log(err);
    });
});
module.exports = router;
