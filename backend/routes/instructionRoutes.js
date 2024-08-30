// routes/instructorRoutes.js
const express = require('express');
const { getInstructor } = require('../controllers/instructionController.js');

const router = express.Router();

router.get('/', getInstructor);

module.exports = router;
