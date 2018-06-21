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
    positive_is_up: {type: boolean, default: true},
    unit: String, // km/h, kg, Mbits
    no_comparison: {type: boolean, default: false}, // In Case of version numbers for example
  }
))
  
module.exports.StringAttribute = Attribute.discriminator('StringAttribute', new Schema({
    value: String, envc
  }
))
  