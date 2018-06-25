var express = require('express');
var router = express.Router();
const {User} = require("./../models/User")
const bcrypt = require('bcrypt');
const nanoid = require("nanoid");

const generateToken = function(user) {
    return {
      id: user._id,
      token: nanoid(48),
      ttl:1800000
    };
  }



    // User Api
module.exports = router
    
.post('/authenticate',async function(req, res) {
    const {email, password} = req.body
    let response = {}
    
    console.log(email, password)
    // Fake Search query
    user = await User.findOne({email: email})
    console.log(user, user.password, password)

    if (user) {
        const PW_MATCH = await new Promise((resolve, reject) => {
            bcrypt.compare(password,user.password, function(err, res) {
                if (res && !err) resolve(res)
                else reject(err)
            });
        }).catch((e)=>{console.log(e)})
        console.log(PW_MATCH)
        if (PW_MATCH) {
            response = generateToken(user)
        }
    }
    res.send(response)
})  


.post("/register",async (req, res, next) => {
    const {email, password} = req.body
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, function(err, hash) {
            if (err) reject(err)
            resolve(hash)
        });
    })

    const newUser = new User({password: hashedPassword, email: email})
    const returnedUser = await newUser.save()
    console.log(returnedUser)
    res.send(returnedUser)
})
