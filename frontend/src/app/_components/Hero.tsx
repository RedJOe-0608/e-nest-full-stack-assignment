import CouponCard from "./CouponCard"
import ProductDetails from "./ProductDetails"

const Hero: React.FC = () => {
    return (
      <section className=" min-h-screen flex justify-center items-center">

        <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <ProductDetails />
        <CouponCard />
            </div>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Welcome to Our Website
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover our awesome services.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600">Get Started</a>
            <a href="#" className="bg-gray-700 text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800">Learn More</a>
          </div>
        </div> */}
      </section>
    )
  }
  
  export default Hero
  