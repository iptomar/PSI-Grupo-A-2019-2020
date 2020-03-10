var express = require("express");
var router = express.Router();

//Knex initial config
var dbConfig = {
  client: 'sqlite3',
    connection: {
      filename: './db/mydb.db'
    }
};
var knex = require('knex')(dbConfig);

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send(req.url);
});

router.get("/:users", function(req, res, next) {
  res.send("okay boomer");
  //get em knex com arrow function
  knex
    .from('testes')
    .select('*')
    .then( (result)=>{console.log(result)} );
  

});
module.exports = router;
