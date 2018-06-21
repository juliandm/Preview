const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {TopicTab} = require("./index.js")
 

module.exports.Stats = TopicTab.discriminator('Stats', new Schema({
  value: String,
  importance_submits: [{type: Schema.Types.ObjectId, ref: 'Submit'}], // If Procon can be described as attribute 
  workload: [{type: Schema.Types.ObjectId, ref: 'Submit'}] // If Procon can be described as attribute 
  
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}))

