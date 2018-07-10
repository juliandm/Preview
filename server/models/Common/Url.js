const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Source =  mongoose.model('Source', new Schema({
  name: String,
  url: String,  
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

