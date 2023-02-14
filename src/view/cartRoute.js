const express=require("express")
const app=express.Router()
const {cartProduct,patchProductCart,deleteProductCart,getProductCart} =require("../controller/cartController")
app.post("/post",cartProduct)
app.delete("/:id",deleteProductCart)
app.put("/:id",patchProductCart)
app.get("/get",getProductCart)


module.exports =app


