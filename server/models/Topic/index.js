const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

module.exports.Topic = mongoose.model('Topic', new Schema({
  name: String,
  label: String, // Industry Standard, Newcomer
  stats: {type: Schema.Types.ObjectId, ref: 'Stats'},
  links: String,
  description: {type: Schema.Types.ObjectId, ref: 'Description'},
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
