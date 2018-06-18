const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

const topicSchema = new Schema({
  name: String,
  parents: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  links: String,
  firstName: String, 
  lastName: String,
  isExpert: Boolean,
  isMentor: Boolean,

}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})
 

module.exports.Topic = mongoose.model('Topic', topicSchema)