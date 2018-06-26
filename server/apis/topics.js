var express = require('express');
var router = express.Router({mergeParams: true});
var {Topic} = require("./../models/Topic")
var {Attribute, AttributeValue, AttributePair} = require("./../models/Attribute")
  
var mongoose = require("mongoose")
// Topic Api
module.exports = router
// New Topic
.post("/",async function(req, res) {
    const {attributes, ...topicFields} = req.body
    // Check if Name already exists
    var AttributePairs = []
    //Attributes
    for (let attr of attributes) {
        let {id, value, ...rest} = attr
        if (!id) {
            // Create new Attr, in case of a frontend lapse also update functionality
            const foundOrNewAttrValue = await AttributeValue.findOneAndUpdate({"value":value},{"value":value}, {upsert: true, new:true}) 
            const foundOrNewAttr = await Attribute.findOneAndUpdate(
                {"name":attr.name}, 
                {$addToSet: {"values":foundOrNewAttrValue}, $set:{"name": attr.name}}, 
                {upsert: true, new:true})
            const foundOrNewAttrPair = await AttributePair.findOneAndUpdate(
                {"attribute":foundOrNewAttr,"value":foundOrNewAttrValue},
                {"attribute":foundOrNewAttr,"value":foundOrNewAttrValue}, 
                {upsert: true, new:true}) 
                
            console.log(foundOrNewAttrValue, foundOrNewAttr, foundOrNewAttrPair)
            AttributePairs.push(foundOrNewAttrPair)
        } else {
            // Attr and AttrValue is equal 
            const oldAttrPair = await AttributePair.findOne({"_id": id})            
            AttributePairs.push(oldAttrPair)
        }
    }
    var NewTopic = await Topic.findOneAndUpdate({name: topicFields.name}, 
        {$addToSet: {"attributePairs": {$each: AttributePairs} }, $set:{topicFields}}, 
        {upsert: true, new:true}) 
    

    // Assign to new Topic   
    NewTopic.attributePairs = AttributePairs

    NewTopic.save()
    res.send(NewTopic)
})  
// Get all Topics
.get("/",async (req, res, next) => {
    const AllTopics = await Topic.find({})
    res.send(AllTopics)
})
// Get one topic
.get("/:id",async (req, res, next) => {
    const OneTopic = await Topic
    .findOne({"_id": mongoose.Types.ObjectId(req.params.id)})
    .populate({
        path: 'attributePairs',
        populate: [{ path: 'value' },{ path: 'attribute' }]
      })
    
    console.log(OneTopic)
    res.send(OneTopic)
})
// Get attributes of one topic
.get("/:id/attributes",async (req, res, next) => {
    console.log("get attributes", req.params.id)
    const {attributes} = await Topic
    .findOne({"_id": mongoose.Types.ObjectId(req.params.id)}, {"attributes": 1})
    
    console.log("get attributes", attributes)
    
    const Attributes = await Attribute.find({"_id": {$in: attributes} })
    res.send(Attributes)
})

// Update one topic
.put("/:id",async (req, res, next) => {
    const fieldsToUpdate = req.body
    const updatedTopic = await Topic.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, { $set: fieldsToUpdate}, {new: true});
    res.send(updatedTopic)
})
// Delete one topic
.delete("/:id",async (req, res, next) => {
    const deletedTopic = await Topic.findOneAndRemove({"_id": mongoose.Types.ObjectId(req.params.id)});
    res.send(deletedTopic)
})

// Delete all Topics
.delete("/",async (req, res, next) => {
    const deleted = await Topic.remove({});
    console.log(deleted)
    res.send(`Total wipeout of ${deleted.n} topics`)
})
