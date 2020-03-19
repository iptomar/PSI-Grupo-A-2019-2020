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

router.post("/login", async function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);

  await knex
    .from("users")
    .select("*")
    .where({ username: req.body.user })
    .then(result => {
      if (!result.length == 0) {
        result = result[0];
      }
      if (req.body.password == result.password) {
        res.send(result);
      } else {
        let error = { error: "User or password incorret" };
        res.send(error);
      }
    })
    .catch(async function(err) {
      console.log(err);
      res.send(err)
    });
});

router.post("/register", async function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  await knex("users")
    .select("*")
    .where({username: "admin"})
    .then(result =>{
      result = result[0];
      // se o token enviado não for o de admin, retorna
      if(req.body.token != result.token){
        let error = { error: "The token provided is not the admin's", sucess: false };
        res.send(error);
        return;
      }
    });

  let query;
  // verifica se o utilizador já existe, se já devolve um erro
  await knex
    .from("users")
    .select("*")
    .where({ username: req.body.user })
    .then(result => {
      query = result;
    })
    .catch(async function(err) {
      res.send("An error occurred");
    });
  if (!query.length == 0) {
    let error = { error: "User already exists", sucess: false };
    res.send(error);
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

  await knex("users").insert({
    username: req.body.user,
    password: req.body.password,
    token: randomstring,
    role: "user"
  });

  await knex("users")
    .select("*")
    .where({ username: req.body.user })
    .then(select => {
      console.log(select);
      select = select[0];
      res.send(select);
    });
});
module.exports = router;
