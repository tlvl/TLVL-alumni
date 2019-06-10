const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  user: String,
  password: String
});

mongoose.model('Location', UserSchema);