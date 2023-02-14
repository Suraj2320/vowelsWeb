const orderModel = require("../model/orderModel")
const cartModel = require("../model/cartModel")

const orderProduct = async (req, res) => {
  // const {title,image,price,count}=req.body

  try {
    const productcart = await cartModel.find()
    const product = await orderModel.insertMany(productcart)
    console.log(product)
    product.save()
    return res.status(200).send("order sucessfully")
  } catch (e) {
    console.log(e.massage)
    return res.send(e.message)
  }
}

const getProductorder = async (req, res) => {
  const product = await orderModel.find()

  return res.send(product)
}
module.exports = { orderProduct, getProductorder }




