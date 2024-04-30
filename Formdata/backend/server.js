import express from "express";
import dotenv from "dotenv";
dotenv.config();






const app=express()
app.get("/",(req,res)=>{
    res.send("HEllo")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
})