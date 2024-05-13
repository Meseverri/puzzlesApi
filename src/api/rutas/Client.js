const {
    getUser,
    createUser,
    modifyUser
}=require("../contoladores/Client");

const clientRouter=require("express").Router();
clientRouter.get("/:id",getUser);
clientRouter.put("/:id",modifyUser);
clientRouter.post("/",createUser);

module.exports={clientRouter};