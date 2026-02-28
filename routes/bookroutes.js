import express, { application } from 'express'
import { addauthor } from '../controllers/authorcontroller.js';
import { addbooks,getbook } from '../controllers/bookcontroller.js';

const route =express.Router()

route.post('/addbook',addbooks)
route.post('/addauthor',addauthor)
route.get('/getbook',getbook)

export default route;