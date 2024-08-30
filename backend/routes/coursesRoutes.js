// routes/peopleAlsoBoughtRoutes.js
const express = require('express');
const { getCourses, createCourses } = require('../controllers/coursesController.js');

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourses);

module.exports = router;
