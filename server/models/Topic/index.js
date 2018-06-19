const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Topic = mongoose.model('Topic', new Schema({
  name: String,
  parents: [{type: Schema.Types.ObjectId, ref: 'Topic'}],

  links: String,
  description: String,
  attributes: [{type: Schema.Types.ObjectId, ref: 'Attribute'}],
  procons: [{type: Schema.Types.ObjectId, ref: 'Procon'}],

  users: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})
 
)
