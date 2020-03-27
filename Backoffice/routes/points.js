var express = require("express");
var router = express.Router();

var knex = require("../utils/databaseConection");

//Usage:
//body.data = id do ponto a eliminar(json)
router.delete("/delete", async function(req, res, next){
    //ToDo: Terá de ser verificado se o utilizador a solicitar o delete é
    //um administrador ou o utilizador que o criou

    let del = false;

    //Verificar se o ponto existe
    await knex('Interesse')
    .where({id: req.body.id})
    .then(result => {
        if(!result.length == 0){
            del = true;
        } else {
            let errormesage = {sucess: false, mesage: "Point doesn't exist"};
            res.send(errormesage);
        }
    })
    .catch(async function(err){
        await file("error/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate()+"_"+d.getUTCHours()+"_"+d.getUTCMinutes()+"_"+d.getUTCSeconds(), "a",""+err.stack);
      let errormesage = { sucess : false , mesage: "token not used" };
      res.send(errormesage);
    });

    //Eliminar o ponto
    if(del){
        await knex('Interesse')
        .where({id: req.body.id})
        .del();
    }

    let errormesage= {sucess: true, mesage: "Point sucessfully deleted"};
    res.send(errormesage);
});

module.exports = router;