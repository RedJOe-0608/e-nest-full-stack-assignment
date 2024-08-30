// routes/syllabusRoutes.js
const express = require('express');
const { getSyllabus, createSyllabus } = require('../controllers/syllabusController.js');

const router = express.Router();

router.get('/', getSyllabus);
router.post('/', createSyllabus);

module.exports = router;
