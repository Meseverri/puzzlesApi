const {products}=require("../Data/data");
const Puzzle=require("../../api/modelos/Puzzle");
const mongoose=require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
		// Buscamos todas las puzzles de nuestra colección
    const allPuzzle = await Puzzle.find();

    await Puzzle.collection.drop(); //La función drop borra la colección
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la colección de las puzzles, usaremos el array Puzzle de nuestra carpeta data
		// para llenar nuestra base de datos con todas las puzzles.
		await Puzzle.insertMany(products);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());