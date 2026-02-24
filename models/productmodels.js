import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    inStock: Boolean,
    tags: [String],
})

const productmodel=mongoose.model('Product',productschema)

export default productmodel