// controllers/instructorController.js
const Instructor = require('../models/InstructorModel');

const getInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findOne();
    res.json(instructor);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getInstructor,
};
