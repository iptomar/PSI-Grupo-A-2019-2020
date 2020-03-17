var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  res.send(req.url);
});

router.get("/login/:user/:password", async function(req, res, next) {
  let query;
  await knex
    .from("users")
    .select("*")
    .where({ username: req.params.user })
    .then(result => {
      query = result;
    })
    .catch(function() {
      res.send("An error occurred");
    });
    if (!query.length == 0) {
      query = query[0];
    }
    if (
      req.params.password == query.password
    ) {
      res.send(query);
    } else {
      let error = { error: "User or password incorret" };
      res.send(error);
    }
});

router.get("/register/:user/:password", async function(req, res, next) {
  let query;
  await knex
    .from("users")
    .select("*")
    .where({ username: req.params.user })
    .then(result => {
      query = result;
    })
    .catch(function() {
      res.send("An error occurred");
    });
  if (!query.length == 0) {
    let error = { error: "User already exists", sucess: false };
    res.send(error);
    return;
  }
  var chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";

  var randomstring = "";

  for (var i = 0; i < 64; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }

  await knex("users").insert({
    username: req.params.user,
    password: req.params.password,
    token: randomstring,
    role: "user"
  });

  await knex("users")
  .select("*")
  .where({ username: req.params.user })
  .then((select)=>{
    console.log(select);
    select = select[0];
    res.send(select);
  })
});

module.exports = router;
