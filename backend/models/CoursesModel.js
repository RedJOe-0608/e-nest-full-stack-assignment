// models/peopleAlsoBoughtModel.js
const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
  imageUrl: String,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  isBestseller: {
    type: Boolean,
    required: true
  },
},{
  timestamps: true
});

module.exports = mongoose.model('Courses', CoursesSchema);
