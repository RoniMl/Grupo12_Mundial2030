const path = require('path')
const controllerAnfitriones = {
    argentina: (req, res) => {
        res.render( "argentina"); 
      },
    uruguay: (req, res) => {
      res.render( "uruguay"); 
    },
    chile: (req, res) => {
      res.render( "chile"); 
    },
    paraguay: (req, res) => {
      res.render( "paraguay"); 
    },
           
}
module.exports = controllerAnfitriones