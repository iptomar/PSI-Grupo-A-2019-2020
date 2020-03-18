var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  res.send(req.url);
});

router.post("/login", async function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  await knex
    .from("users")
    .select("*")
    .where({ username: req.body.user })
    .then(result => {
      if (!result.length == 0) {
        result = result[0];
      }
      if (
        req.body.user == result.username &&
        req.body.password == result.password
      ) {
        res.send(result);
      } else {
        let error = { error: "User or password incorret" };
        res.send(error);
      }
    }
    )
    .catch(async function(err){
      res.send("An error occurred");
    });
  if (!query.length == 0) {
    query = query[0];
  }
  if (req.params.password == query.password) {
    res.send(query);
  } else {
    let error = { error: "User or password incorret" };
    res.send(error);
  }
});

router.post("/register", async function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  await knex
    .from("users")
    .select("*")
    .where({ username: req.body.user })
    .then(result => {
      if (!result.length == 0) {
        let error = { error: "User already exists", sucess: false };
        res.send(error);
        return;
      }
      console.log(result);
      var chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";

      var randomstring = "";

      for (var i = 0; i < 64; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }
      knex("users")
        .insert({
          username: req.body.user,
          password: req.body.password,
          token: randomstring,
          role: "user"
        })
        .then(() => {
          res.send({ error: "User created", sucess: true });
        });
    })
    .catch(async function(err) {
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
    .then(select => {
      console.log(select);
      select = select[0];
      res.send(select);
    });
});
module.exports = router;
