const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'please enter a valid email'],
  },

  password: {
    type: String,
    required: true
  }
});

//userSchema.plugin(require('mongoose-bcrypt'), { rounds: 10 });

const user = mongoose.model('user', userSchema);

module.exports = user;
