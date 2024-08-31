"use client"
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import axios from "axios";
const {timeAgo} = require('../../../utils/timeAgo')

const FeaturedReviews: React.FC = () => {
  
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const loadReviews = async () => {
      const {data} = await axios.get('http://localhost:5000/api/reviews')
      console.log(data);
      
      setReviews(data);
    };

    loadReviews();
  }, []);
  
    return (
      <section className="py-8 flex flex-col justify-center items-center ">
        <h2 className="text-center text-purple-600 text-2xl font-bold mb-6">Featured Review</h2>
        <div className=" place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
            key={index}
            name={review.name}
            avatarUrl={review.imageUrl}  // Replace with actual path
            rating={review.rating}
            timeAgo={timeAgo(review.createdAt)}
            reviewText={review.text}
          />
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedReviews;
  