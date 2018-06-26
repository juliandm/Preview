const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributeValueSchema = new Schema({
  value: {type: Schema.Types.Mixed},
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports.AttributeValue = mongoose.model('AttributeValue', AttributeValueSchema)

