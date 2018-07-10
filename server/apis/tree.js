var express = require('express');
var router = express.Router({mergeParams: true});
var {Tree} = require("./../models/Tree")
var {Attribute, AttributeValue, AttributePair} = require("./../models/Attribute")
  
var mongoose = require("mongoose")
// Tree Api
module.exports = router

// Get all Trees
.get("/",async (req, res, next) => {
    const AllTrees = await Tree.find({})
    res.send(AllTrees)
})
// Get one Tree
.get("/:id",async (req, res, next) => {
    const OneTree = await Tree
    .findOne({"_id": mongoose.Types.ObjectId(req.params.id)})
    .populate({
        path: 'attributePairs',
        populate: [{ path: 'value' },{ path: 'attribute' }]
      })
    
    console.log("No",OneTree)
    res.send(OneTree)
})
// Get attributes of one Tree
.get("/:id/attributes",async (req, res, next) => {
    console.log("get attributes", req.params.id)
    const {attributes} = await Tree
    .findOne({"_id": mongoose.Types.ObjectId(req.params.id)}, {"attributes": 1})
    
    console.log("get attributes", attributes)
    
    const Attributes = await Attribute.find({"_id": {$in: attributes} })
    res.send(Attributes)
})

// Update one Tree
.put("/:id",async (req, res, next) => {
    const fieldsToUpdate = req.body
    const updatedTree = await Tree.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, { $set: fieldsToUpdate}, {new: true});
    res.send(updatedTree)
})
// Delete one Tree
.delete("/:id",async (req, res, next) => {
    const deletedTree = await Tree.findOneAndRemove({"_id": mongoose.Types.ObjectId(req.params.id)});
    res.send(deletedTree)
})

// Delete all Trees
.delete("/",async (req, res, next) => {
    const deleted = await Tree.remove({});
    console.log(deleted)
    res.send(`Total wipeout of ${deleted.n} Trees`)
})
