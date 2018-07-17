const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Url =  mongoose.model('Url', new Schema({
  value: String,
  active: {type: Boolean, default: true}
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

