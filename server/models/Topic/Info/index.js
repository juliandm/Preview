const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.TopicTab = mongoose.model('TopicTab', new Schema({
  edits: [{type: Schema.Types.ObjectId, ref: 'Edit'}], // If Procon can be described as attribute 
  contributors: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: {
    discriminatorKey: 'topictab_kind',    
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

