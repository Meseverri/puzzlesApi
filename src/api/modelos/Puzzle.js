const mongoose = require("mongoose");

const puzzleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    img: { type: String },
  },
  {
    timestamps: true,
  }
);

const Puzzle = mongoose.model("Puzzle", puzzleSchema, "puzzles");

module.exports = Puzzle;
