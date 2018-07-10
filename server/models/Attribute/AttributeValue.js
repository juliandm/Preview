const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributeValueSchema = new Schema({
  value: {type: Schema.Types.Mixed},
  submits: [{type: Schema.Types.ObjectId, ref: 'Submit'}],    
  scale: {type: Schema.Types.ObjectId, ref: 'Scale'},  
  value_type: {type: String, default: "nominal"}, //nominal, ordinal, ratio, topic, group, boolean
  is_array: {type: Boolean, default: false},
  positive_is_up: {type: Boolean, default: true},
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports.AttributeValue = mongoose.model('AttributeValue', AttributeValueSchema)

