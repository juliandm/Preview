const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributePairSchema = new Schema({
  name: String,
  // If this pair only exists under another Pair then the parent has to be set
  parent: {type: Schema.Types.ObjectId, ref: 'AttributePair'},
  key: {type: Schema.Types.ObjectId, ref: 'Attribute'},
  value: {type: Schema.Types.ObjectId, ref: 'AttributeValue'},
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports.AttributePair = mongoose.model('AttributePair', AttributePairSchema)

