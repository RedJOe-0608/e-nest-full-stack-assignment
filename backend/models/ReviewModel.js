// models/review.js
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: String,
    text: {
        type: String,
        required: true,
      }, 
    rating: {
        type: Number,
        required: true,
      },
  },
  { timestamps: true } // This automatically adds `createdAt` and `updatedAt` fields
);

module.exports = mongoose.model('Reviews', ReviewSchema);
