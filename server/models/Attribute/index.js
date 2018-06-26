const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {AttributeValue} = require("./AttributeValue")
const {AttributePair} = require("./AttributePair")



const AttributeSchema = new Schema({
  name: String,
  values: [{type: Schema.Types.ObjectId, ref: 'AttributeValue'}],
  positive_is_up: {type: Boolean, default: true},
  is_counteable: {type: Boolean, default: false},
  unit: String, // km/h, kg, Mbits
  no_comparison: {type: Boolean, default: false}, // In Case of version numbers for example

}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})
AttributeSchema.statics.findOneOrCreate = async function (condition, doc) {
  const one = await this.findOne(condition);
  return one || this.create(doc);
};
module.exports.Attribute = mongoose.model('Attribute', AttributeSchema)
module.exports.AttributeValue = AttributeValue
module.exports.AttributePair = AttributePair

