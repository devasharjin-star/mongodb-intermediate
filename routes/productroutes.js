import express from 'express'
import { createproduct,getproduct,productanalysis } from '../controllers/productcontroller.js'



const route =express.Router()

route.post('/add',createproduct)
route.get('/get',getproduct)
route.get('/analysis',productanalysis)

export default route