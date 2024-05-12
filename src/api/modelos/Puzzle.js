const mongoose=require("mongoose");


const puzzleSchema= new mongoose.Schema(
    {
        brand:{type:String ,required:true},
        price:{type:Number,required:true},
        subcategory:{type:String,required:true},
        name:{type: String,required:true},
        stock:{type:String,required:true}
    }
);

const Puzzle= mongoose.model('Puzzle', puzzleSchema,"puzzles");

module.exports = Puzzle;
