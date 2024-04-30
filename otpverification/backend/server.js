
import dotenv from 'dotenv'
import cors from "cors"
import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import  User from './controlers/User.js'




const app=express();
// const url='mongodb://127.0.0.1:27017/abhishek';
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


try {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("DB connection successful")
} catch (error) {
  handleError(error);
}
  
 
app.post('/signup',User)

// app.get('/',(req,res)=>{
//    res.send("my name is");
// })

// app.get('/api',(req,res)=>{
//     res.send("welcome");
// })

let port=process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`server in running ${port}`)
})