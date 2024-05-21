const mongoose = require("mongoose");
const Schema = mongoose.Schema 


const EventSchema = new Schema({
  topic: String,
  date: Date,
  description: String,
},
{timestamps: true});



const ClubSchema = new Schema({
    name: String,
    location: String,
    time: String,
    image: String,
    description: String,
    events:[EventSchema],
    members: [{
      type: Schema.Types.ObjectId,
      ref: 'Member'
  }]
  },
  {timestamps: true});
  
  module.exports = mongoose.model("Club", ClubSchema);
  



