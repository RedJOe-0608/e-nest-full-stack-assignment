// models/syllabusModel.js
const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  title: String,
  duration: String,
});

const SectionSchema = new mongoose.Schema({
  name: String,
  lectures: [LectureSchema],
});

module.exports = mongoose.model('Syllabus', SectionSchema);
