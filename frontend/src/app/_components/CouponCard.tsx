"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ClipboardCopy } from 'lucide-react';

interface CouponCardProps {
  couponCode: string;
  imageUrl: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ couponCode, imageUrl }) => {
  const [inputCode, setInputCode] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
  };

  const handleApply = () => {
    // Implement your apply coupon logic here
    console.log('Applying coupon:', inputCode);
  };

  return (
    <div className="max-w-md mx-auto bg-white text-black rounded-xl overflow-hidden shadow-md">
      <div className="w-full h-48 relative">
        <Image
          src={imageUrl}
          alt="Coupon image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-center text-sm mb-2">Use coupon to get extra discounts</p>
        <div className="border border-dashed border-purple-300 rounded-lg p-2 mb-4 flex items-center justify-between">
          <span className="font-bold text-purple-700">{couponCode}</span>
          <button
            onClick={handleCopy}
            className="text-blue-500 hover:text-blue-700 focus:outline-none flex items-center"
          >
            <ClipboardCopy size={18} className="mr-1" />
            Copy
          </button>
        </div>
        <button
          onClick={handleApply}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mb-4"
        >
          Apply Coupon
        </button>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-grow p-2 focus:outline-none"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
          <button
            onClick={handleApply}
            className="bg-purple-700 text-white px-4 py-2 hover:bg-purple-800 transition-colors duration-300"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;