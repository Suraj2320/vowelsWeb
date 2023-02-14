require("dotenv").config()
const PORT=process.env.PORT;

const express=require("express")
const connect=require("./config/db")
const cors=require("cors")
const app=express()

const productRoute=require("./src/view/productRoute")
const  orderRoute=require("./src/view/orderRoute")
// Hello
const  cartRoute=require("./src/view/cartRoute")
const userRoute=require("./src/view/userRoute")

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.use("/product",productRoute)
app.use("/cart",cartRoute)
app.use("/order",orderRoute)
app.use("/users",userRoute)
app.listen(PORT,async ()=>{
    await connect
    console.log("SERVER IS RUNNING")
})
