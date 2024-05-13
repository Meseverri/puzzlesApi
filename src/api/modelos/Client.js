const mongoose=require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true, trim: true},
        cart:[{ type: mongoose.Types.ObjectId, ref: "Puzzle" }]
    }
);

const Client = mongoose.model("Client",userSchema);

module.exports = Client;