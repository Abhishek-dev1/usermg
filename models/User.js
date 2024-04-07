const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  //using email to uniquely identify a user
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
