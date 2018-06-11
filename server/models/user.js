const mongoose = require('mongoose')
const Schema = mongoose.Schema
 

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
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
 

module.exports.User = mongoose.model('User', userSchema)