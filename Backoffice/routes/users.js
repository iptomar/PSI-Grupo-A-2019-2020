var express = require("express");
var router = express.Router();

var knex = require('../utils/databaseConection');

/* GET users listing. */
router.get("/", async function(req, res, next) {
  res.send(req.url);
});

router.post("/login", async function(req, res, next) {
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
    .catch(function() {
      res.send("An error occurred");
      })
    ;
});

router.post("/register", async function(req, res, next) {
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
    .catch(function() {
      res.send("An error occurred");
      });
});

module.exports = router;
