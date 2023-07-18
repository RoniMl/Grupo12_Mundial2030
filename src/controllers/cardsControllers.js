const path = require("path");
const fs = require("fs");
const arteFilePath = path.join(__dirname, "../data/arte.json");
const arte = JSON.parse(fs.readFileSync(arteFilePath, "utf-8"));

const cardsControllers = {
  //Subir
  subirArt: (req, res) => {
    res.render("compartir");
  },

  compartir: (req, res) => {
    let idNuevoProducto = arte[arte.length - 1].id + 1;
    let nombreImagen = req.file.filename;
    let nuevoArte = {
      id: idNuevoProducto,
      autor: req.body.autor,
      obra: req.body.obra,
      descripcion: req.body.descripcion,
      origen: req.body.origen,
      categoria: req.body.categoria,
      imagen: nombreImagen,
    };
    arte.push(nuevoArte);

    fs.writeFileSync(arteFilePath, JSON.stringify(arte, null, " "));
    res.redirect("/cards/arte");
  },

  // Vista Feed
  arte: (req, res) => {
    res.render("arte", { arte: arte });
  },

  //Editar o borrar vista
  editarVista: (req, res) => {
    let idArte = req.params.idArte;
    let arteBuscado;

    for (let obj of arte) {
      if (obj.id == idArte) {
        arteBuscado = obj;
        break;
      }
    }

    res.render("editar", { arteEnEdicion: arteBuscado });
  },
  editarArte: (req, res) => {
    let idArte = req.params.idArte;

    for (let obj of arte) {
      if (obj.id == idArte) {
        obj.autor= req.body.autor;
        obj.obra = req.body.obra;
        obj.descripcion = req.body.descripcion;
        obj.categoria = req.body.categoria;
        obj.origen = req.body.origen;
        break;
      }
    }
    fs.writeFileSync(arteFilePath, JSON.stringify(arte, null, " "));
    res.redirect("/cards/arte");
  },

  //Borrar

  destroy : (req, res) => {
		let idArte = req.params.idArte;

		let nuevoArregloarte = arte.filter(function(e){
			return e.id != idArte;
		});
				
		fs.writeFileSync(arteFilePath, JSON.stringify(nuevoArregloarte,null,''));	
		res.redirect('/cards/arte');
	},

  // Detalles

  detalles: (req, res) => {
		let idArte = req.params.idArte;
		let arteBuscado;

		for (let obj of arte){
			if (obj.id==idArte){
				arteBuscado=obj;
				break;
			}
		}

		res.render('detalles', {arte: arteBuscado});
	},


};

module.exports = cardsControllers;
