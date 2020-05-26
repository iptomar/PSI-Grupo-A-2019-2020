var knex = require("../utils/databaseConection");
const file = require('./file')
const validateUser = async (email) => {
    var aux="false3";
    await knex
    .from("users")
    .select("isadmin")
    .where({ email: email })
    .then(result => {
        if(result[0].isadmin)
        aux = true;
        else
        aux = false;
    })
    .catch(async function(err) {
        var d = new Date();
        await file(
          "error/" + d.getFullYear() + "_" + d.getMonth() + "_" + d.getDate(),
          "a",
          err.stack
        );
        aux = false;
      });
      return aux;

    }

module.exports = validateUser;