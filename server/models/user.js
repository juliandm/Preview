const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
 
let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

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
 
module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  } catch(error) {
    throw new Error('Hashing failed', error)
  }
}

module.exports.User = mongoose.model('User', userSchema)