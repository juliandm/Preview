const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Unit =  mongoose.model('Unit', new Schema({
  name: String,
  shortName: String,
  fracture: Number,
  scale: {type: Schema.Types.ObjectId, ref: 'Scale'}
}))

