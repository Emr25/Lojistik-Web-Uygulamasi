const LogModel = require("../models/logModel")
const express = require("express")
const mongoose = require("mongoose")

module.exports.get_all=async (req,res)=>{
    try {
        const data=await LogModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
module.exports.get_single=async(req,res)=>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message:"Employee id is not found"})

        const data= await LogModel.findById(id)
        if(!data) return

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message:"Employee not found"})
    }

}

module.exports.post_data= async(req,res)=>{
    try {
        const newLogModel = new  LogModel({
            Name:req.body.Name,
            Adress:req.body.Adress,
            Phone:req.body.Phone,
            Mail:req.body.Mail
            })
        await newLogModel.save()
        res.json("Kayıt işlemi yapıldı")

    } catch (error) {
        res.status(404).json({message:"Kayıt yapılmadı"})
    }
}
module.exports.update_data=async(req,res)=>{
    try {
        const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message:"Employee not found"})
        
        const {Name,Adress,Phone,Mail} = req.body
        const updatedData= await LogModel.findByIdAndUpdate(
            id,{ Name,Adress,Phone,Mail,_id:id},
               {new:true}
         )
         res.status(200).json(updatedData)
        
    } catch (error) {
       console.log(error.message)
       res.json({message:"updated failed"})
        
    }
}

module.exports.delete_data=async(req,res)=>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message:"employee id not found"})
        await LogModel.findByIdAndDelete(id)
        res.status(200).json({message:"Employee deleted"})
    } catch (error) {
        console.log(error.message)
        res.json({message:"Employee delete failed"})
    }
}

