import mongoose from "mongoose"

const connectTOoDb=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("db connected")
}

export default connectTOoDb