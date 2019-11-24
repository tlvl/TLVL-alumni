const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    country: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    }
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  approved: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model("User", userSchema);
