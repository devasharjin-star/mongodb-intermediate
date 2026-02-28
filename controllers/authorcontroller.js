import author from "../models/authormodels.js"

export const addauthor=async(req,res)=>{
    try{

        const result=new author(req.body)
        await result.save()
        
        res.status(200).json({
            success:true,
            data:result
        }
        )
    }catch(e){
        res.status(404).json("something went wrong")
    }
}