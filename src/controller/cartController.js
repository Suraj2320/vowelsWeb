const cartModel = require("../model/cartModel")

const cartProduct = async (req, res) => {
  const { title, image, price, count } = req.body
  try {
    const product = new cartModel({ title, image, price, count })
    console.log(product)
    const newProduct = await product.save()


    return res.status(200).send("Added to cart sucessfully")

  } catch (e) {
    console.log(e.massage)
    return res.send(e.message)
  }
}

const deleteProductCart = async (req, res) => {
  //Delete

  const { id } = req.params;
  const user = await cartModel.findByIdAndDelete({ _id: id });
  //   console.log(user, "User By Deleteing Id");
  return res.status(201).send(user);

}

//Patch
const patchProductCart = async (req, res) => {

  const updateProduct = await cartModel.findByIdAndUpdate(req.params.id,
    {
      $set: req.body,
    }, { new: true })
  return res.status(200).send(updateProduct)
    //   console.log(updatedData, "updated Data in patch");
    ;
};

const getProductCart = async (req, res) => {
  const product = await cartModel.find()

  return res.send(product)
}
module.exports = { cartProduct, getProductCart, patchProductCart, deleteProductCart }




