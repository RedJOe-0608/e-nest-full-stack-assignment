// app.js
const express = require('express');
const connectDB = require('./db/connection.js');
const cors = require('cors');
const coursesRoutes = require('./routes/coursesRoutes.js');
const syllabusRoutes = require('./routes/syllabusRoutes.js');
const instructorRoutes = require('./routes/instructionRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/courses', coursesRoutes);
app.use('/api/syllabus', syllabusRoutes);
app.use('/api/instructor', instructorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
