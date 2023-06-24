const path = require("path");
const controller = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname + "../../views/index.ejs")); // Permite enviar texto o codigo HTML
    // res.render('index')
  },
};
module.exports = controller;
