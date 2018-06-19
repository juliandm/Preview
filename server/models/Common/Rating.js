const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Rating =  mongoose.model('Rating', new Schema({
  submits: [{type: Schema.Types.ObjectId, ref: 'Submit'}],
  value: String,
}))

