const {products}=require("../Data/data");
const Puzzle=require("../../api/modelos/Puzzle");
const mongoose=require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
		// Buscamos todas las películas de nuestra colección
    const allPuzzle = await Puzzle.find();


    if (allPuzzle.length) {
      await Puzzle.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la colección de las películas, usaremos el array Puzzle de nuestra carpeta data
		// para llenar nuestra base de datos con todas las películas.
		await Puzzle.insertMany(products);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());