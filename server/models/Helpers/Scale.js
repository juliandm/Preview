const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Unit =  mongoose.model('Unit', new Schema({
  description: String,
  shortName: String,
  fracture: Number
}))

