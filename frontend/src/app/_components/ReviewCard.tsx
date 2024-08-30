import React from 'react';

interface ReviewCardProps {
  name: string;
  avatarUrl: string;
  rating: number;
  timeAgo: string;
  reviewText: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, avatarUrl, rating, timeAgo, reviewText }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm">
      <div className="flex items-center mb-4">
        <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold text-purple-700">{name}</h4>
          <div className="flex items-center">
            <span className="text-sm text-gray-500">{rating}</span>
            <div className="flex ml-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < rating ? 'text-purple-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .288l2.833 8.718H23.5l-7.167 5.208L18.167 23 12 17.792 5.833 23l2.833-8.786L1.5 9.006h8.667z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({timeAgo})</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
