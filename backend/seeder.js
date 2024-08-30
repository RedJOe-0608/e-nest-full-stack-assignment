const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db/connection.js");
const CoursesModel = require("./models/CoursesModel.js");
const SyllabusModel = require("./models/SyllabusModel.js");
const InstructorModel = require("./models/InstructorModel.js");
const courses  = require("./data/courses.js");
const  sections  = require("./data/sections.js");
const  instructors  = require("./data/instructors.js");

dotenv.config()
connectDB();

const importData = async () => {
    try {
        await CoursesModel.deleteMany();
        await SyllabusModel.deleteMany();
        await InstructorModel.deleteMany();

        await CoursesModel.insertMany(courses) 

        await InstructorModel.insertMany(instructors)

        await SyllabusModel.insertMany(sections)

        console.log('Data Imported!');
        process.exit();

    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await InstructorModel.deleteMany();
        await CoursesModel.deleteMany();
        await SyllabusModel.deleteMany();

        console.log('Data Deleted!');
        process.exit();
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}
else{
    importData();
}