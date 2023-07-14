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
  },
  
  borrar : (req, res) => {
		let idArte = req.params.idArte;

		let nuevoArregloarte = arte.filter(function(e){
			return e.id != idArte;
		});
				
		fs.writeFileSync(arteFilePath, JSON.stringify(nuevoArregloarte,null,' '));	
		res.redirect('/');
	}
};
module.exports = controller;
