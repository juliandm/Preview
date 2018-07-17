const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Scale =  mongoose.model('Scale', new Schema({
  name: String,
  shortName: String,
}))

