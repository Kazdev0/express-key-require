let keysLists = require('./database/keys').keys
module.exports = {
  example: async function(req, res) {
                      var {key} = req.query;
      if(!keysLists.includes(key) || !key) {
        return res.json({ error: "Enter Please Your Key ?key=key" })
      } else {
        res.json({ example: "Bla Bla ..." })
      }          
  }
}