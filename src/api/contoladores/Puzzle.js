const Puzzle = require("../modelos/Puzzle");

const getAllPuzzles = async (req, res, next) => {
  try {
    const puzzles = await Puzzle.find();
    return res.status(200).json(puzzles);
  } catch {
    return res.status(400).json("error " + error);
  }
};

const getPuzzle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const puzzle = await Puzzle.findById(id);
    return res.status(200).json(puzzle);
  } catch {
    return res.status(400).json("error " + error);
  }
};

const createPuzzle = async (req, res, next) => {
  try {
    const newPuzzle = new Puzzle(req.body);
    const puzzleSaved = await newPuzzle.save();
    return res.status(201).json(puzzleSaved);
  } catch {
    return res.status(400).json("error " + error);
  }
};

const updatePuzzle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPuzzle = new Puzzle(req.body);
    newPuzzle._id = id;
    const puzzleUpdated = await puzzle.findByIdAndUpdate(id, newPuzzle, {
      new: true,
    });
    return res.status(200).json(puzzleUpdated);
  } catch {
    return res.status(400).json("error " + error);
  }
};


const deletpPuzzles= async (req,res,next)=>{
    try{
       const {id}= req.params;
       const puzzleDeleted= await Puzzle.findByIdAndDelete(id);
       return res.status(200).json({
        message:"elemento Eliminado",
        elemento: puzzleDeleted
       });
    
    }catch(error){
        return res.status(400).json("error");

    }    
};


module.exports = { getAllPuzzles, getPuzzle, createPuzzle,updatePuzzle,deletpPuzzles };
