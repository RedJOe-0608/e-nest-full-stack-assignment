import { CiShare2 } from "react-icons/ci";

const ProductDetails: React.FC = () => {
    return (
      <div className="w-full md:w-2/3 p-4">
        <h1 className="text-purple-600 text-2xl font-bold mb-2">
          Lorem ipsum dolor sit amet,
        </h1>
        <p className="text-gray-600 mb-2">
          sed diam nonummy nibh euismod tinciduntsed diam nonummy nibh euismod tincidunt
        </p>
        <p className="text-gray-600 mb-4">
          Created By: <a href="#" className="text-blue-500 hover:underline">Chatur Ramlingam</a>
        </p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-lg">4.8</span>
          <div className="flex ml-2">
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 3L7.5 6.5H4.5l3 3-1.5 4 3.5-2 3.5 2-1.5-4 3-3h-3L10.951 3h-1.902z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-black text-3xl font-bold">₹499</span>
          <span className="text-gray-400 text-xl line-through">₹3,099</span>
          <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">50% discount</span>
        </div>
        <p className="text-red-500 text-sm mb-4">
          <span className="inline-block mr-2">⏳</span>Limited Time Deal!
        </p>
        <div className="flex space-x-4 mb-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
            Buy Now
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white">
            Add to cart
          </button>
          <button 
          style={{
            borderRadius: "50%", 
            width: "50px", 
            height: "50px", 
            display: "inline-flex", 
            alignItems: "center", 
            justifyContent: "center"
          }}  
          className="border-2 w-50 h-50 border-purple-600 text-purple-600 p-3 hover:bg-purple-600 hover:text-white">
          <CiShare2 />
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  