var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");

//Usage:
//body.data = { name:"name", work:"work", user_id:"user_id" }
router.post("/insert", async function(req, res, next){

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