const mongoose = require('mongoose');

const user = mongoose.model('user', {
  name: { type: String, required: true },

  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
});

module.exports = { user };
