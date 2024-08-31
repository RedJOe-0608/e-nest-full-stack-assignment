"use client"

import Image from "next/image";
import axios from "axios";
import { useState , useEffect} from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const AboutInstructor: React.FC = () => {

  const [instructorDetails, setInstructorDetails] = useState<any>([]);

  axios.defaults.withCredentials = true

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/instructor`);
        console.log(data);
        
        setInstructorDetails(data); // Assuming there's only one instructor for now
      } catch (error) {
        console.error("Error fetching instructor:", error);
      }
    };

    fetchInstructor();
  }, []);

    return (
      <section className="py-8  bg-purple-50">
        <h2 className="text-center text-purple-600 text-2xl font-bold mb-6">About The Instructor</h2>
        <div className="w-3/4 mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          <Image
            className="rounded-full mx-auto mb-4"
            width={150}
            height={100}
            src={instructorDetails.imageUrl} // Replace with actual image path
            alt="Instructor"
          />
          <h3 className="text-gray-800 text-xl font-bold mb-2">{instructorDetails?.name}</h3>
          <p className="text-purple-600">{instructorDetails?.bio}</p>
          <div className="flex justify-center items-center mt-4">
            <span className="text-yellow-500 text-lg">{instructorDetails?.rating}</span>
            <div className="flex ml-2">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 3L7.5 6.5H4.5l3 3-1.5 4 3.5-2 3.5 2-1.5-4 3-3h-3L10.951 3h-1.902z" />
                </svg>
              ))}
            </div>

          </div>
              <div className="flex items-center justify-center py-4 space-x-3">

            {/* <a href={instructorDetails?.socialLinks[0]} className="text-purple-600 hover:text-blue-500"><IoLogoInstagram style={{width: '1.5rem', height: '1.5rem',}} /></a>
            <a href={instructorDetails?.socialLinks[0]} className="text-purple-600 hover:text-blue-500"><FaLinkedin style={{width: '1.5rem', height: '1.5rem'}} /></a>
            <a href={instructorDetails?.socialLinks[0]} className="text-purple-600 hover:text-blue-500"><FaYoutube style={{width: '1.5rem', height: '1.5rem'}} /></a> */}

            <a href="#" className="text-purple-600 hover:text-blue-500"><IoLogoInstagram style={{width: '1.5rem', height: '1.5rem',}} /></a>
            <a href="#" className="text-purple-600 hover:text-blue-500"><FaLinkedin style={{width: '1.5rem', height: '1.5rem'}} /></a>
            <a href="#" className="text-purple-600 hover:text-blue-500"><FaYoutube style={{width: '1.5rem', height: '1.5rem'}} /></a>

            </div>
          <p className="text-gray-600 mb-4">
           {instructorDetails?.about}
          </p>
        </div>
      </section>
    );
  };
  
  export default AboutInstructor;
  