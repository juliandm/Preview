var express = require('express');
var router = express.Router({mergeParams: true});
var {Attribute} = require("./../../models/Attribute")
  
var mongoose = require("mongoose")
// Attribute Api
module.exports = router

// New Attribute
.post("/",async function(req, res) {
    const fields = req.body    
    const NewAttribute = await Attribute.create({...fields})
    res.send(NewAttribute)
})  
// Get all Attributes
.get("/",async (req, res, next) => {
    const AllAttributes = await Attribute.find({})
    res.send(AllAttributes)
})
// Get one Attribute
.get("/:id",async (req, res, next) => {
    const OneAttribute = await Attribute.find({"_id": mongoose.Types.ObjectId(req.params.id)})
    res.send(OneAttribute)
})
// Get Attribute Values 
.get("/:id/values",async (req, res, next) => {
    const OneAttributeValues = await Attribute.find(
        {"_id": mongoose.Types.ObjectId(req.params.id)},
        {"values": 1}
    ).populate("values")
    res.send(OneAttributeValues)
})
// Update one Attribute
.put("/:id",async (req, res, next) => {
    const fieldsToUpdate = req.body
    const updatedAttribute = await Attribute.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, { $set: fieldsToUpdate}, {new: true});
    res.send(updatedAttribute)
})
// Delete one Attribute
.delete("/:id",async (req, res, next) => {
    const deletedAttribute = await Attribute.findOneAndRemove({"_id": mongoose.Types.ObjectId(req.params.id)});
    res.send(deletedAttribute)
})

// Delete all Attributes
.delete("/",async (req, res, next) => {
    const deleted = await Attribute.remove({});
    console.log(deleted)
    res.send(`Total wipeout of ${deleted.n} attributes`)
})
