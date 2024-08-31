// app.js
const express = require('express');
const connectDB = require('../db/connection.js');
const cors = require('cors');
const coursesRoutes = require('../routes/coursesRoutes.js');
const syllabusRoutes = require('../routes/syllabusRoutes.js');
const instructorRoutes = require('../routes/instructionRoutes.js');
const reviewRoutes = require('../routes/reviewRoutes.js');

const app = express();

app.use(cors(
  {
    origin: ["https://e-nest-frontend.vercel.app","http://localhost:3000"],
    methods: ["POST","GET"],
    credentials: true
  }
));
app.use(express.json());

// Database connection
connectDB();

app.get('/',(req,res) => {
  res.json("hello")
})

// Routes
app.use('/api/courses', coursesRoutes);
app.use('/api/syllabus', syllabusRoutes);
app.use('/api/instructor', instructorRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
