const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributePairSchema = new Schema({
  attribute: {type: Schema.Types.ObjectId, ref: 'Attribute'},
  value: {type: Schema.Types.ObjectId, ref: 'AttributeValue'}
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports.AttributePair = mongoose.model('AttributePair', AttributePairSchema)

