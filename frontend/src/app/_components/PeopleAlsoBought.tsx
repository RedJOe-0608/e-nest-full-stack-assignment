"use client"
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import axios from 'axios';

const PeopleAlsoBought: React.FC = () => {

  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
        console.log(data);
        
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-center text-purple-700 text-2xl font-bold mb-8">People Also Bought</h2>
      
      {/* Responsive Grid Container */}
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
              author={course.author}
              price={course.price}
              rating={course.rating}
              isBestseller={course.isBestseller}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleAlsoBought;
