const mongoose = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  teacherName: {
    type: String,
    trim: true,
  },
  workScope: {
    type: String,
    trim: true,
  },
  meaning: {
    type: String,
    trim: true,
  },
  contactsText: {
    type: String,
    trim: true,
  },
  friendsText: {
    type: String,
    trim: true,
  },
  graduation_year: {
    type: String,
    trim: true,
  },
  address: {
    location: {
       display_name: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
    },
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
  },
  hash: String,
  salt: String,
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
};

userSchema.methods.isValidPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt.sign({
    _id: this._id,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000, 10),
  }, process.env.JWT_SECRET);
};

module.exports = mongoose.model("User", userSchema);
