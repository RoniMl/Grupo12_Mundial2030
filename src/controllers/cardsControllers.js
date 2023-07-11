const path = require('path')
const cardsControllers = {
    subirArt: (req, res) => {
        res.render(path.join(__dirname + "../../views/subir-art.ejs")); 
      }
              
}

module.exports = cardsControllers