const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: String
});

module.exports = mongoose.model('Dog', schema);
