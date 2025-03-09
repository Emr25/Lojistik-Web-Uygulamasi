const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const logRouter = require("./router/logRouter")
const userRouter = require("./router/userRouter")

const app=express()
app.use(cors())

const dbUrl="mongodb+srv://emrecan:emre123@cluster0.edgingg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
   .connect(dbUrl)
   .then(()=>{
    app.listen(8000,()=>{
        console.log("server connected")
    })
   })
   .catch((error)=>{
    console.log(error)
   })

   app.use(bodyParser.json())
   app.use(bodyParser.urlencoded({extended:true}))
   app.use(cookieParser())

   app.use("/",logRouter)
   app.use("/auth",userRouter)