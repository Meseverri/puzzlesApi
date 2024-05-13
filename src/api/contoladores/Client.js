const Client = require("../modelos/Client");


const getUser= async (req,res,next)=>{
    try {
        const {id}=req.params;
        const user = await Client.findById(id).populate("cart");
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json("error-> "+error);
    } 
}

const createUser= async (req,res)=>{
    try {
        const newClient=new Client(req.body)
        const clientSaved= await newClient.save()
        return res.status(201).json(clientSaved);
    } catch (error) {
        return res.status(400).json("error-> "+error);
        
    }
}

const modifyUser=async (req,res)=>{
    try {
    const { id } = req.params;
    const newClient= new Client(req.body);
    newClient._id=id;
    const updatedClient= await Client.findByIdAndUpdate(id,newClient,{new:true});
    return res.status(200).json(updatedClient)
    } catch (error) {
        return res.status(400).json("error "+error);
    }
}

module.exports={
    getUser,
    createUser,
    modifyUser
}