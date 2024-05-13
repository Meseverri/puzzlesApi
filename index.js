require("dotenv").config();
const { connectDB } = require("./src/config/DB");
const express = require("express");
const {puzzlesRouter}=require("./src/api/rutas/Puzzle")
const {clientRouter}=require("./src/api/rutas/Client")

connectDB();
const PORT=3000;
const app = express();


app.use(express.json()); 

app.use("/api/v1/puzzles",puzzlesRouter);
app.use("/api/v1/clients",clientRouter);

app.use("*",(req,res,next)=>{
    return res.status(404).json("Route not found");
});

app.listen(3000, () => {
    console.log(`http://localhost:${PORT}`);
});
