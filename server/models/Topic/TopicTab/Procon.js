const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {TopicTab} = require("./index.js")

module.exports.Procon = TopicTab.discriminator('Procon', new Schema({
  sentiment: Number, // -1, 0 , 1
  result: String,
  attribute: {type: Schema.Types.ObjectId, ref: 'Attribute'} // If Procon can be described as attribute 
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

