const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name: String,
    age: Number,
    occupation: String,
    profile: String,
  },
  {
    timestamps: true
});

module.exports = mongoose.model('Member', MemberSchema);




