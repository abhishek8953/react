
import dotenv from 'dotenv'
import cors from "cors"
import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/test',function (err,success) {
//         if(err){
//             console.log("error");
//         }
//         else{
//             console.log("DATABASE connected successfuly");
//         }
//     });
// Prints "Failed 0", "Failed 1", "Failed 2" and then throws an
// error. Exits after approximately 15 seconds.
const serverSelectionTimeoutMS = 5000;
for (let i = 0; i < 3; ++i) {
    try {
      await mongoose.connect('mongodb://doesnt.exist:27017/test', {
       
        serverSelectionTimeoutMS
        
      });
      break;
    } catch (err) {
      console.log('Failed', i);
      if (i >= 2) {
        throw err;
      }
    }
  }

  
 
const app=express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/',(req,res)=>{
   res.send("my name is");
})

app.get('/api',(req,res)=>{
    res.send("welcome");
})

let port=process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`server in running ${port}`)
})