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

//usage:
//body.user = token
//body.data = informação de atualização(json)
router.post("/update", async function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  for(var key in req.body.data)
  if(key == "id" || key == "token")
  {
    let errormesage = { sucess : false , mesage: "WE CANT UPDATE THIS"};
    res.send(errormesage);
  }else{
  try{
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  var admin = false;
      return await knex('users').where({ token: req.body.user }).update(req.body.data).then(async function( resp ){ 
        let errormesage = { sucess : true , mesage: "update sucessfull" };
        res.send(errormesage);
    }).catch(async function(err) {
      await file("error/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate()+"_"+d.getUTCHours()+"_"+d.getUTCMinutes()+"_"+d.getUTCSeconds(), "a",""+err.stack);
      let errormesage = { sucess : false , mesage: "token not used" };
      res.send(errormesage);
        });

  }
  catch (err){
    await file("error/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate()+"_"+d.getUTCHours()+"_"+d.getUTCMinutes()+"_"+d.getUTCSeconds(), "a",""+err.stack);
    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
  }

}});
module.exports = router;
