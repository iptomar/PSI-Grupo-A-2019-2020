var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");
const {file,validation,validateUser } = require('../helpers')

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
  // vai validar o que recebe no body
  if (req.body.email == null || req.body.password == null) {
    let errormesage = { sucess : false , mesage:  "Incorrect parameters" };
    res.send(errormesage);
    //res.status(400).send(error);
  }
  // verifica se o utilizador existe, caso exista retorna a entrada da db
  await knex
    .from("users")
    .select("*")
    .where({ email: req.body.email })
    .then(result => {
      if (!result.length == 0) {
        result = result[0];
      }
      if (req.body.password == result.password) {
        let errormesage = { sucess : true , mesage: result };
        res.send(errormesage);
        //res.send(result);
      } else {
        let errormesage = { sucess : false , mesage: "User or password incorret" };
        res.send(errormesage);
        //res.status(401).send(error);
      }
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );

      console.log(err);
      let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
      //res.send(err);
    });
});
// RECEBE tokenAdmin
// DEVOLVE {sucess: true}
router.get("/getUsers/:tokenAdmin", async function(req, res, next) {
  // o token é o do administrador?
  await knex("users")
    .select("*")
    .where({ token: req.params.tokenAdmin })
    .then(result => {
      if (!result[0].isadmin) {
        let errormesage = {
          sucess: false,
          mesage: "The token provided is not the admin's",
        };
        res.send(errormesage);
       // res.status(401).send(error);
        return;
      }
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );
      console.log(err);
      let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
      //res.send(err);
    });

  // Se chegar aqui tem permissão para aceder a todos os utilizadores, sendo que estes são enviados
  await knex("users")
    .select('id','name','surname','email','age','isadmin')
    .whereNot({ name: "admin" })
    .then(response => {
      let errormesage = { sucess : true , mesage: response };
      res.send(errormesage);
      //res.send(response);
    });
});

// RECEBE {email: "", password:"", name:"", surname:"", age:"", tokenAdmin:""}
// DEVOLVE {sucess: true}
router.post("/register", async function(req, res, next) {
  // o body está preenchido? se não pede para preencher todos os campos
  if (
    req.body.email == null ||
    req.body.password == null ||
    req.body.name == null ||
    req.body.surname == null ||
    req.body.age == null
  ) {
    //let error = { error: "Incorrect parameters" };
    let errormesage = { sucess : false , mesage: "Incorrect parameters" };
    res.send(errormesage);
    //res.status(400).send(error);
    return;
  }

  let query;

  // verifica se o utilizador já existe, se já devolve um erro
  await knex
    .from("users")
    .select("*")
    .where({ email: req.body.email })
    .then(result => {
      query = result;
      console.log(result);
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );

      console.log(err);
    });
  if (!query.length == 0) {
    let errormesage = { sucess : false , mesage: "User already exists" };
    res.send(errormesage);
    //res.status(401).send(error);
    return;
  }
  // criação da chave do utilizador
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

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
      token: randomstring,
      isadmin: false
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );
      let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
      console.log(err);
    });

  await knex("users")
    .select("*")
    .where({ name: req.body.name })
    .then(select => {
      let errormesage = { sucess : true , mesage: { id: select[0].id, email: select[0].email } };
      res.send(errormesage);
      //let response = { id: select[0].id, email: select[0].email };
      //res.send(response);
    })
    .catch(async function(err) {
      var d = new Date();
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );
      let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
      console.log(err);

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
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );      let errormesage = { sucess : false , mesage: "token not used" };
      res.send(errormesage);
        });

  }
  catch (err){
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
  }

}});

//usage:
//body.user = token
//body.data = id do utilizador a eliminar(json)
//body.email = e-mail do utilizador a eliminar
router.delete("/delete", async function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  if(!(await validateUser(req.body.email))){

  let del = false;

  //Verifica se o user existe
  await knex('users')
    .where({id: req.body.id})
    .then(result => {
      if(!result.length == 0){
        del = true;
      } else {
        /*let error = { error: "User doesn't exist"};
        res.send(error);*/

        let errormesage = { sucess : false , mesage: "User doesn't exist" };
        res.send(errormesage);
      }
    })
    .catch(async function(err){
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );      let errormesage = { sucess : false , mesage: "token not used" };
      res.send(errormesage);
    });

    //Elimina o utilizador, caso exista
    if(del){
      await knex('users')
        .where({id:req.body.id})
        .del();
    }

    //let msg = {msg: "User successfully deleted"};
    let errormesage = { sucess : true , mesage: "User successfully deleted" };
      res.send(errormesage);
    //res.send(msg);
  }
  else
  {
    let errormesage= {sucess: false, mesage: "admins cant be deleted"};
    res.send(errormesage);
  }
});

//usage:
//body.user = email do utilizador para dar administrador
//body.email = email do utilizador atual
router.post("/giveadmin", async function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  if(await validateUser(req.body.email)){
  try{
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  var admin = false;
      return await knex('users').where({ email: req.body.user }).update({isadmin:true}).then(async function( resp ){ 
        let errormesage = { sucess : true , mesage: "update sucessfull" };
        res.send(errormesage);
    }).catch(async function(err) {
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );      let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
        });

  }
  catch (err){
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
  }
  }
  else
  {
    let errormesage= {sucess: false, mesage: "only admins can do this"};
    res.send(errormesage);
  }

});


//usage:
//body.user = email do utilizador para dar administrador
//body.email = email do utilizador atual
router.post("/removeadmin", async function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  if(await validateUser(req.body.email)){
  try{
  var d = new Date();
  await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a",JSON.stringify(req.body)+""+JSON.stringify(req.params)+""+JSON.stringify(req.baseUrl));
  var admin = false;
      return await knex('users').where({ email: req.body.user }).update({isadmin:false}).then(async function( resp ){ 
        let errormesage = { sucess : true , mesage: "update sucessfull" };
        res.send(errormesage);
    }).catch(async function(err) {
      await file(
        "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
        "a",
        err.stack
      );      let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
      res.send(errormesage);
        });

  }
  catch (err){
    await file(
      "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
      "a",
      err.stack
    );    let errormesage = { sucess : false , mesage: "something went wrong and we are working on it" };
    res.send(errormesage);
  }
  }
  else
  {
    let errormesage= {sucess: false, mesage: "only admins can do this"};
    res.send(errormesage);
  }

});

//usage:
//body.email = email do utilizador atual
router.post("/isadmin", async function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  if(await validateUser(req.body.email)){
 
    let errormesage = { sucess : true , mesage: "is admin" };
    res.send(errormesage)
  
  }
  else
  {
    let errormesage= {sucess : true , mesage: "is not admin" };
    res.send(errormesage);
  }

});

module.exports = router;
