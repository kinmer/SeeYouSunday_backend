const mongoose = require("mongoose");
const Schema = mongoose.Schema 

const ClubSchema = new Schema({
    name: String,
    location: String,
    time: String,
    image: String,
    description: String,
    group: [{
      type: Schema.Types.ObjectId,
      ref: 'Member'
  }]
  },
  {timestamps: true});
  
  module.exports = mongoose.model("Club", ClubSchema);
  



