// components/CourseContent.tsx
"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Lecture {
  title: string;
  duration: string;
}

interface Section {
  name: string;
  lectures: Lecture[];
}

const CourseContent: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/syllabus");
        console.log("Syllabus data: " , data);
        
        setSections(data);
      } catch (error) {
        console.error("Error fetching syllabus:", error);
      }
    };

    fetchSyllabus();
  }, []);
  const handleSectionClick = (index: number) => {
    setActiveSectionIndex(index);
  };

  return (
    <section className="py-8">
      <h2 className="text-center text-purple-600 text-2xl font-bold mb-6">Syllabus</h2>
      <div className="flex  text-gray-800 w-3/4 bg-white mx-auto my-8 rounded-lg shadow-lg overflow-hidden">
            {/* Section List */}
        <div className="w-1/2 border-r border-gray-200">
          <div className="bg-purple-600 text-gray-800 p-4 text-xl font-semibold">
            Sections
          </div>
          <div className="h-96 overflow-y-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                onClick={() => handleSectionClick(index)}
                className={`p-4 cursor-pointer border-b border-gray-200 ${
                  activeSectionIndex === index
                    ? "bg-blue-100 text-blue-800"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{section.name}</span>
                  <span className="text-sm text-gray-500">
                    {section.lectures.length} Lectures
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lecture List */}
        <div className="w-1/2">
          <div className="bg-purple-600 text-gray-800 p-4 text-xl font-semibold">
            Lectures
          </div>
          <div className="h-96 overflow-y-auto">
            {sections[activeSectionIndex]?.lectures.map((lecture, index) => (
              <div
                key={index}
                className="p-4 border-b border-gray-200 hover:bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <span>{lecture.title}</span>
                  <span className="text-sm text-gray-500">
                    {lecture.duration}
                  </span>
                </div>
              </div>
            ))}
            {sections[activeSectionIndex]?.lectures.length === 0 && (
              <div className="p-4 text-gray-500">No lectures available.</div>
            )}
          </div>
        </div>
        </div>
      
      </section>
  );
};

export default CourseContent;
