import React from 'react';
import Image from 'next/image';
import { GiGraduateCap } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-md">
      {/* Header */}
      <div className="container mx-auto px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center relative">
            {/* Replace the src with your logo path */}
            <Image src="/images/e-logo.jpg" alt="E-Nest Logo" layout="fill" objectFit="contain" />
          </div>
          <span className="text-xl font-bold text-purple-800">E-NEST</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <div className='flex justify-center items-center space-x-2' >
          <GiGraduateCap style={{color: 'black',width: 20, height: 20}}/> 
          <a href="#" className="text-gray-700 text-sm hover:text-purple-600">Program</a>
          </div>
          <div className='flex justify-center items-center space-x-2' >
          <FaClipboardList style={{color: 'black',width: 15, height: 15}}/> 
          <a href="#" className="text-gray-700 text-sm hover:text-purple-600">Test Series</a>
          </div>
          <div className='flex justify-center items-center space-x-2' >
          <GiGraduateCap style={{color: 'black',width: 20, height: 20}}/> 
          <a href="#" className="text-gray-700 text-sm hover:text-purple-600">Skill Connect</a>
          </div>
          <div className='flex justify-center items-center space-x-2' >
          <IoPersonAddSharp style={{color: 'black',width: 15, height: 15}}/> 
          <a href="#" className="text-gray-700 text-sm hover:text-purple-600">Expert Connect</a>
          </div>
          <div className='flex justify-center items-center space-x-2' >
          <a href="#" className="text-gray-700 text-sm hover:text-purple-600">More</a>
          <IoIosArrowDown style={{color: 'black',width: 10, height: 10}} />
          </div>
        </div>

        {/* Profile avatar */}
        <Image 
        src='/images/review-pic.png'
        alt='profile pic'
        width={50}
        height={30}
        className='rounded-full'
        />
      </div>

      {/* Search and Cart Area */}
      <div className="bg-purple-800 py-4 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-white">

        {/* Explore Section */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-sm hover:text-purple-600">Explore</a>
          <IoIosArrowDown className="text-white w-4 h-4" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Type skill here..."
            className="w-full md:w-[30rem] lg:w-[40rem] px-4 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-2">
          <FaCartPlus className="w-5 h-5" />
          <p>Cart</p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Navbar;
