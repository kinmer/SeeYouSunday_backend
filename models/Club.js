const mongoose = require("mongoose");
const Schema = mongoose.Schema 

const ClubSchema = new Schema({
    name: String,
    location: String,
    time: String,
    image: String,
    description: String,
  },
  {timestamps: true});
  
  module.exports = mongoose.model("Club", ClubSchema);
  



