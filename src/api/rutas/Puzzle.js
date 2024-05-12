const {
  getAllPuzzles,
  getPuzzle,
  createPuzzle,
  updatePuzzle,
  deletePuzzles
} = require("../contoladores/Puzzle");

const puzzlesRouter = require("express").Router();
puzzlesRouter.get("/", getAllPuzzles);
puzzlesRouter.get("/:id", getPuzzle);

puzzlesRouter.post("/", createPuzzle);

puzzlesRouter.put("/:id", updatePuzzle);
puzzlesRouter.delete("/:id", deletePuzzles);

module.exports = { puzzlesRouter };
