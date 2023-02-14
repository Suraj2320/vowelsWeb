const productModel = require("../model/productModel")

const postProduct = async (req, res) => {
  const { title, image, price } = req.body
  try {
    const product = new productModel({ title, image, price })
    console.log(product)
    const newProduct = await product.save()
    return res.status(200).send("order placed sucessfully")
  } catch (e) {
    console.log(e.massage)
    return res.send(e.message)
  }
}

const deleteProduct = async (req, res) => {
  //Delete

  const { id } = req.params;
  const user = await productModel.findByIdAndDelete({ _id: id });
  //   console.log(user, "User By Deleteing Id");
  return res.status(201).send(user);

}

//Patch
const patchProduct = async (req, res) => {
  const { id } = req.params;
  //   console.log(id, "patch id");
  const { price, image, title } = req.body;

  const updatedData = await productModel.findByIdAndUpdate(id, {
    price,
    image,
    title
  });
  //   console.log(updatedData, "updated Data in patch");
  return res.status(201).send(updatedData);
};

const getProduct = async (req, res) => {
  const product = await productModel.find()

  return res.send(product)
}





module.exports = { postProduct, getProduct, patchProduct, deleteProduct }




