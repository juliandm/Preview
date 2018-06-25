var express = require('express');
var router = express.Router({mergeParams: true});

// Topic Api
module.exports = router
// .route("/:topicId")
    
.post(async function(req, res) {
    const {email, password} = req.body
    let response = {}
    
    res.send(response)
})  

.get(async (req, res, next) => {
    const {email, password} = req.body

    res.send(returnedUser)
})

.put(async (req, res, next) => {
    const {email, password} = req.body

    res.send(returnedUser)
})

.delete(async (req, res, next) => {
    const {email, password} = req.body

    res.send(returnedUser)
})
