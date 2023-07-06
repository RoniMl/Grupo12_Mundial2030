const path = require('path')
const cardsControllers = {
    art: (req, res) => {
        res.render(path.join(__dirname + "../../views/art.ejs")); 
      }
              
}
module.exports = cardsControllers