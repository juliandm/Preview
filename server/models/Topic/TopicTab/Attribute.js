const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {TopicTab} = require("./index.js")

module.exports.Attribute = TopicTab.discriminator('Attribute', new Schema({
  name: String,
}, {
  timestamps: {
    discriminatorKey: 'attribute_kind',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

module.exports.CountAttribute = Attribute.discriminator('CountAttribute', new Schema({
    value: Number, 
    positive_is_up: {type: boolean, default: true}, // specify direction in which positive grade is    
  }
))
  
module.exports.StringAttribute = Attribute.discriminator('StringAttribute', new Schema({
    value: String, 
  }
))
  