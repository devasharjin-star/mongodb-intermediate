import product from "../models/productmodels.js"

export const productanalysis=async(req,res)=>{
    try{
        const result=await product.aggregate([{
            $match:{
               category:"Electronics" 
            }
          
        },{
            $group:{
                _id:null,
                avgprice:{
                    $avg:"$price"
                },
                totalcount:{
                    $sum:1
                },
                min:{
                    $min:"$price"
                },
                max:{
                    $max:"$price"
                },

            }
        },{
            $project:{
                avgprice:1,
                totalcount:1,
                min:1,
                max:1
            }
        }])

        res.status(200).json({
            success:"true",
            data:result

        })
    }catch(e){
        console.log(e)
        res.status(400).json("something went wrong")
    }
}

export const getproduct = async (req, res) => {
    try {
        const result = await product.aggregate([

            {
                $match: {
                    category: "Electronics",
                    price: {
                        $gte: 300
                    }
                }
            }, {
                $group: {
                    _id: "$category",
                    avg: { $avg: "$price" },
                    count:{$sum:1}
                }
            }
        ])

        res.status(201).json({
            data: result
        })

    } catch (e) {
        console.log(e)

        res.status(400).json("something went wrong")
    }
}


export const createproduct = async (req, res) => {
    try {

        const sampleProducts = [
            {
                name: "Laptop",
                category: "Electronics",
                price: 999,
                inStock: true,
                tags: ["computer", "tech"],
            },
            {
                name: "Smartphone",
                category: "Electronics",
                price: 699,
                inStock: true,
                tags: ["mobile", "tech"],
            },
            {
                name: "Headphones",
                category: "Electronics",
                price: 199,
                inStock: false,
                tags: ["audio", "tech"],
            },
            {
                name: "Running Shoes",
                category: "Sports",
                price: 89,
                inStock: true,
                tags: ["footwear", "running"],
            },
            {
                name: "Novel",
                category: "Books",
                price: 15,
                inStock: true,
                tags: ["fiction", "bestseller"],
            },
        ];


        const addprod = await product.insertMany(sampleProducts)

        res.status(200).json({
            success: true,
            products: addprod
        })
    } catch (e) {
        console.log(e)
        res.status(400).json("something went wrong")
    }
}