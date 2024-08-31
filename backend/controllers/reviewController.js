const Reviews = require('../models/ReviewModel.js')

const getReviews = async(req,res) => {
    try {
        const reviews = await Reviews.find().select('name imageUrl text rating createdAt'); // Select fields to return
        res.json(reviews);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews' });
      }
}

module.exports = {getReviews}