const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributeValueSchema = new Schema({
  value: {type: Schema.Types.Mixed},
  submits: [{type: Schema.Types.ObjectId, ref: 'Submit'}],    
  scale: {type: Schema.Types.ObjectId, ref: 'Scale'},  
  value_type: {type: String, default: "nominal"}, //nominal, ratio, topic, boolean
  positive_is_up: {type: Boolean, default: true}, // if ratio
  positive_is_true: {type: Boolean, default: true}, // if boolean
  positivity_rank: {type: Number, default: 0}, // if nominal
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports.AttributeValue = mongoose.model('AttributeValue', AttributeValueSchema)

