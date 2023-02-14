const { Schema, model } = require("mongoose")

const CartSchema = new Schema({
    title: {
        type: String,
        required: true,
    },  
    price: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },   
    count: {
        type: Number
    }

},{ timestamps: true });

const CartModel = model("cart", CartSchema)
module.exports = CartModel