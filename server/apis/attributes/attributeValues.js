var express = require('express');
var router = express.Router({mergeParams: true});
var {AttributeValue} = require("./../../models/Attribute")
  
var mongoose = require("mongoose")
// AttributeValue Api
module.exports = router

// New AttributeValue
.post("/",async function(req, res) {
    const fields = req.body    
    const NewAttributeValue = await AttributeValue.create({...fields})
    res.send(NewAttributeValue)
})  
// Get all AttributeValues
.get("/",async (req, res, next) => {
    const AllAttributeValues = await AttributeValue.find({})
    res.send(AllAttributeValues)
})
// Get one AttributeValue
.get("/:id",async (req, res, next) => {
    const OneAttributeValue = await AttributeValue.find({"_id": mongoose.Types.ObjectId(req.params.id)})
    res.send(OneAttributeValue)
})
// Update one AttributeValue
.put("/:id",async (req, res, next) => {
    const fieldsToUpdate = req.body
    const updatedAttributeValue = await AttributeValue.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, { $set: fieldsToUpdate}, {new: true});
    res.send(updatedAttributeValue)
})
// Delete one AttributeValue
.delete("/:id",async (req, res, next) => {
    const deletedAttributeValue = await AttributeValue.findOneAndRemove({"_id": mongoose.Types.ObjectId(req.params.id)});
    res.send(deletedAttributeValue)
})

// Delete all AttributeValues
.delete("/",async (req, res, next) => {
    const deleted = await AttributeValue.remove({});
    console.log(deleted)
    res.send(`Total wipeout of ${deleted.n} attributeValues`)
})
