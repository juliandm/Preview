const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {AttributeValue} = require("./AttributeValue")
const {AttributePair} = require("./AttributePair")



const AttributeSchema = new Schema({
  name: String,
  values: [{type: Schema.Types.ObjectId, ref: 'AttributeValue'}],
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports.Attribute = mongoose.model('Attribute', AttributeSchema)
module.exports.AttributeValue = AttributeValue
module.exports.AttributePair = AttributePair

