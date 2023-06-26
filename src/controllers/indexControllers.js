const path = require("path");
const controller = {
  index: (req, res) => {
    res.render(path.join(__dirname + "../../views/index.ejs")); 
  },
  fanaticos: (req, res) => {
    res.render(path.join(__dirname + "../../views/fanaticos.ejs")); 
  },
  tickets: (req, res) => {
    res.render(path.join(__dirname + "../../views/tickets.ejs")); 
  }
};
module.exports = controller;
