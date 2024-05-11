const mongoose=require("mongoose");


const puzzleSchema= new mongoose.Schema(
    {
        brand:{type:String},
        price:{type:Number},
        subcategory:{type:String},
        name:{type: String},
        stock:{type:String}
    }
);

const Puzzle= mongoose.model('Puzzle', puzzleSchema,"puzzles");

module.exports = Puzzle;
