// models/instructorModel.js
const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  imageUrl: String,
  name: {
    type: String,
    required:true
  },
  bio: {
    type: String,
    required:true
  },
  rating: {
    type: Number,
    required:true
  },
  socialLinks: {
    type: [String],  // e.g., ["twitter.com", "linkedin.com"]
    required: true
  } ,
  about: {
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Instructors', InstructorSchema);
