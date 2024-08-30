import Image from 'next/image';
import React from 'react';

interface CourseCardProps {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  price: string;
  rating: number;
  isBestseller: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageUrl,
  title,
  description,
  author,
  price,
  rating,
  isBestseller,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md max-w-xs">
      <Image src={imageUrl} alt={title}
      width={700}
      height={48}
      className="w-full h-48 rounded-xl object-cover" />
      <div className="p-4">
        <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-gray-500 text-sm mb-4">{author}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-800 font-semibold">{price}</span>
          {isBestseller && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
              Bestseller
            </span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-700 text-sm">{rating}</span>
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
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
