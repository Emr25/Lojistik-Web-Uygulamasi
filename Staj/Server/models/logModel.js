const mongoose = require("mongoose")

const logSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Adress:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Mail:{
        type:String,
        required:true
    }

})
const logModel = mongoose.model("logData",logSchema)
module.exports=logModel