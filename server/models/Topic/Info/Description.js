const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {TopicTab} = require("./index.js")
 

module.exports.Description = TopicTab.discriminator('Description', new Schema({
  value: String,
  source: {type: Schema.Types.ObjectId, ref: 'Source'} // If Procon can be described as attribute 
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

