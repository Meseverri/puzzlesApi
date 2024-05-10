require("dotenv").config();
const { connectDB } = require("./src/config/DB");
const express = require("express");


connectDB();
const PORT=3000;
const server = express();


app.use(express.json()); 

app.use("*",(req,res,next)=>{
    return res.status(404).json("Route not found");
});

app.listen(3000, () => {
    console.log(`http://localhost:${PORT}`);
});
