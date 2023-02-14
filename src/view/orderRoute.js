const express=require("express")
const app=express.Router()
const {orderProduct,getProductorder} =require("../controller/orderController")
app.post("/post",orderProduct)
app.get("/get",getProductorder)


module.exports =app


