const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Submit =  mongoose.model('Submit', new Schema({
  value: {type: Schema.Types.Mixed}, // Allow Numbers, Strings, Objects etc..
  user: {type: Schema.Types.ObjectId, ref: 'User'},
}))

module.exports.Edit = Submit.discriminator('Edit', new Schema({
    action: String, // create, update, change, delete
}))
  

