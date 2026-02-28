import express from 'express'
import 'dotenv/config'
import connectTOoDb from './DB/config.js'
import productroute from './routes/productroutes.js';
import bookroute from './routes/bookroutes.js';
import dns from 'dns';


dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const app=express()

connectTOoDb()

app.use(express.json())

app.use('/product',productroute)
app.use('/reference',bookroute)


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})