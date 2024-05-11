const {
  getAllPuzzles,
  getPuzzle,
  createPuzzle,
  updatePuzzle,
  deletpPuzzles
} = require("../contoladores/Puzzle");

const puzzlesRouter = require("express").Router();
puzzlesRouter.get("/", getAllPuzzles);
puzzlesRouter.get("/:id", getPuzzle);

puzzlesRouter.post("/", createPuzzle);

puzzlesRouter.put("/:id", updatePuzzle);
puzzlesRouter.delete("/:id", updatePuzzle);

module.exports = { puzzlesRouter };
