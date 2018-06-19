const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {TopicTab} = require("./index.js")
 
module.exports.Link = TopicTab.discriminator('Link', new Schema({
  value: String,
  url: String,
  online: {type: Boolean, default: true},
  type: String, // offline: book, Group Meeting, 
  senses: [String], // Hearing, Listening, Seeing, Reading
  source: {type: Schema.Types.ObjectId, ref: 'Source'},
  rating: {type: Schema.Types.ObjectId, ref: 'Rating'}
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

