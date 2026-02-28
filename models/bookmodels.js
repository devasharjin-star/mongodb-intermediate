import mongoose, { model } from "mongoose";
import author from "./authormodels.js";

const bookschema=new mongoose.Schema({
    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:author
    }
})

const book=mongoose.model('book',bookschema)

export default book;