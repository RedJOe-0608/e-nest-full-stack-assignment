import ReviewCard from "./ReviewCard";

const FeaturedReviews: React.FC = () => {
    const reviews = [
      { name: "Raj", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 5 },
      { name: "Soham", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 4 },
      { name: "Tony", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 4 },
      // Add more reviews as needed
    ];
  
    return (
      <section className="py-8 flex flex-col justify-center items-center ">
        <h2 className="text-center text-purple-600 text-2xl font-bold mb-6">Featured Review</h2>
        <div className=" place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
            key={index}
            name={review.name}
            avatarUrl="/images/review-pic.png"  // Replace with actual path
            rating={review.rating}
            timeAgo="4 Months ago"
            reviewText={review.text}
          />
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedReviews;
  