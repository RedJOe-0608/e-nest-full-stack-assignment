const CouponCard: React.FC = () => {
    return (
      <div className="w-full md:w-1/3 bg-white shadow-lg p-4 rounded-lg border">
        <div className="bg-gray-300 h-32 w-full rounded mb-4"></div>
        <p className="text-gray-700 mb-4">Use coupon to get extra discounts</p>
        <div className="flex items-center justify-between bg-purple-100 p-2 rounded mb-4">
          <span className="text-purple-600 font-bold">ENESTCOUPON28</span>
          <button className="text-blue-500 hover:underline">Copy</button>
        </div>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full w-full hover:bg-purple-700 mb-4">
          Apply Coupon
        </button>
        <input
          type="text"
          placeholder="Enter coupon code"
          className="border-2 border-gray-300 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4 w-full hover:bg-purple-700">
          Apply
        </button>
      </div>
    );
  };
  
  export default CouponCard;
  