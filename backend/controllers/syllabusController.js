// controllers/syllabusController.js
const Syllabus = require('../models/syllabusModel.js');

const getSyllabus = async (req, res) => {
  try {
    const syllabus = await Syllabus.find();
    res.json(syllabus);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createSyllabus = async (req, res) => {
  try {
    const syllabus = new Syllabus(req.body);
    await syllabus.save();
    res.status(201).json(syllabus);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getSyllabus,
  createSyllabus,
};
