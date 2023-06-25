const path = require('path')
const controllerAnfitriones = {
    argentina: (req, res) => {
        res.render(path.join(__dirname + "../../views/argentina.ejs")); 
      },
    uruguay: (req, res) => {
      res.render(path.join(__dirname + "../../views/uruguay.ejs")); 
    },
    chile: (req, res) => {
      res.render(path.join(__dirname + "../../views/chile.ejs")); 
    },
    paraguay: (req, res) => {
      res.render(path.join(__dirname + "../../views/paraguay.ejs")); 
    },
           
}
module.exports = controllerAnfitriones