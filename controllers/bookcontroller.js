import book from "../models/bookmodels.js"
import author from "../models/authormodels.js"

export const addbooks=async(req,res)=>{
    try{
        const data=new book(req.body)
        await data.save()

        res.status(200).json(data)

    }catch(e){
        res.status(400).json("somethhing went wrong")
    }
}

export const getbook=async(req,res)=>{
    try{
    const result=await book.findById("69a2a78627a9f04078629d85").populate('author')

    res.status(200).json(result)
    }catch(e){
        res.status(400).json('something went wrong')
    }
}



