var express = require('express');
var router = express.Router({mergeParams: true});
var {Topic} = require("./../models/Topic")
var {Attribute, AttributeValue, AttributePair} = require("./../models/Attribute")
var qs = require("query-string")
  
var mongoose = require("mongoose")


function categorizeAttributePairs(mutableAttributePairsByTopic) {
    var matches = [] // name, values, INdex is number of matches
    const saveAttributePairsByTopic = [...mutableAttributePairsByTopic.map(attr=>[...attr])]
    
    // AttributePairsByTopic = [
    //   [{"value":1, "attribute.name": 1}, {"value":1, "name": 2},{"value":1, "name": 3},{"value":1, "name": 4}],
    //   [{"value":2, "name": 2}, {"value":1, "name": 5},{"value":1, "name": 6},{"value":1, "name": 7}],
    //   [{"value":1, "name": 1}, {"value":1, "name": 2}]            
    // ]
    //Find same AttributePairs
    for (let activeTopic of saveAttributePairsByTopic) {
      // Has to be backwards because we are reducing array
      for (let i=activeTopic.length-1; i >=0; --i){
        let activeAttrPair = activeTopic[i]
        let thisRow = {"attribute": activeAttrPair.attribute, "values":[]}
        let matchCounter = 0
        
        for (let compareTopic of saveAttributePairsByTopic){
          let foundI = compareTopic.findIndex(compareAttrPair=>compareAttrPair.attribute.name === activeAttrPair.attribute.name)
          let foundEl = compareTopic[foundI]
          // Push to Row
          thisRow.values.push(foundEl ? foundEl.value : false)
          if (foundEl) {
            matchCounter = matchCounter + 1;
            // Remove of array, this also removes from the Topic in the parent loop
            compareTopic.splice(foundI,1)
          }
        }
        thisRow.matchCounter = matchCounter
        matches.push(thisRow)
      }
    }
    matches.sort((a,b)=>b.matchCounter-a.matchCounter)
    return matches
  }


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
            const foundOrNewAttrValue = await AttributeValue.create({"value":value}) 
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

    res.send(NewTopic)
})  
// Get all Topics
.get("/",async (req, res, next) => {
    const topicIds = req.query.t
    var attributesByTopic = []
    var matchedTopics = []
    if (topicIds && topicIds.length > 0) {   
        matchedTopics =  await Topic.find({"_id": {$in: topicIds}}).populate({
            path: 'attributePairs',
            populate: [{ path: 'value' },{ path: 'attribute' }]
        })
        const attributePairs = matchedTopics.map(topic=>topic.attributePairs)
        console.log(attributePairs)
        attributesByTopic = categorizeAttributePairs(attributePairs)
    }
    res.send({"topics": matchedTopics, "attributes": attributesByTopic})
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
