var express = require('express');
var router = express.Router();
var {Topic} = require("./../models/Topic")
// Topic Api
module.exports = router
.get("/",async function (req, res){    
    // const searchResult = await Topic.find({ name: {$regex: req.params.search, $options: 'i'} })
    console.log(req)
    res.send(searchResult)
})
// Search All
.get("/all/:search",async function(req, res) {
    const searchResult = await Topic
    .find({ name: {$regex: req.params.search, $options: 'i'} },{_id: 1, name: 1})
    res.send(searchResult)
})
// Search Topics
.get("/topics/:search",async function (req, res) {
    console.log("search topics", req.params.search)
    const searchResult = await Topic
    .find({ name: {$regex: ".*" + req.params.search + ".*", $options: 'i'} },{_id: 1, name: 1})
    console.log(searchResult)
    res.send(searchResult)
})
// Search Attributes
.get("/attributes/:search",async function (req, res) {
    const searchResult = await Attribute
    .find({ name: {$regex: req.params.search, $options: 'i'} },{_id: 1, name: 1})
    res.send(searchResult)
})