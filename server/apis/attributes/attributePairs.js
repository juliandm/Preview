var express = require('express');
var router = express.Router({mergeParams: true});
var {AttributePair} = require("./../../models/Attribute")
  
var mongoose = require("mongoose")
// AttributePair Api
module.exports = router

// New AttributePair
.post("/",async function(req, res) {
    const fields = req.body    
    const NewAttributePair = await AttributePair.create({...fields})
    res.send(NewAttributePair)
})  
// Get all AttributePairs
.get("/",async (req, res, next) => {
    const AllAttributePairs = await AttributePair.find({})
    res.send(AllAttributePairs)
})
// Get one AttributePair
.get("/:id",async (req, res, next) => {
    const OneAttributePair = await AttributePair.find({"_id": mongoose.Types.ObjectId(req.params.id)})
    res.send(OneAttributePair)
})
// Update one AttributePair
.put("/:id",async (req, res, next) => {
    const fieldsToUpdate = req.body
    const updatedAttributePair = await AttributePair.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, { $set: fieldsToUpdate}, {new: true});
    res.send(updatedAttributePair)
})
// Delete one AttributePair
.delete("/:id",async (req, res, next) => {
    const deletedAttributePair = await AttributePair.findOneAndRemove({"_id": mongoose.Types.ObjectId(req.params.id)});
    res.send(deletedAttributePair)
})

// Delete all AttributePairs
.delete("/",async (req, res, next) => {
    const deleted = await AttributePair.remove({});
    console.log(deleted)
    res.send(`Total wipeout of ${deleted.n} attributePairs`)
})
