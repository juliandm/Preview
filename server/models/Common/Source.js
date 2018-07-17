const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Source =  mongoose.model('Source', new Schema({
  name: String,
  landing: {type: Schema.Types.ObjectId, ref: 'Url'},  
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

