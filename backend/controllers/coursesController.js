// controllers/peopleAlsoBoughtController.js
const CoursesModel = require('../models/CoursesModel.js');

const getCourses = async (req, res) => {
  try {
    const products = await CoursesModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createCourses = async (req, res) => {
  try {
    const product = new CoursesModel(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getCourses,
  createCourses,
};
