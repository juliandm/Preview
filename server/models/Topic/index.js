const mongoose = require('mongoose')
const Schema = mongoose.Schema
const findOrCreate = require('mongoose-find-or-create')
 
var TopicSchema = new Schema({
  name: String,
  label: String, // Industry Standard, Newcomer
  stats: {type: Schema.Types.ObjectId, ref: 'Stats'},
  links: String,
  attributePairs: [{type: Schema.Types.ObjectId, ref: 'AttributePair'}],
  elements: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  procons: [{type: Schema.Types.ObjectId, ref: 'Procon'}],
  description: {type: Schema.Types.ObjectId, ref: 'Description'},
  users: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

TopicSchema.statics.findOneOrCreate = async function (condition, doc) {
  const one = await this.findOne(condition);
  return one || this.create(doc);
};
module.exports.Topic = mongoose.model('Topic', TopicSchema)
