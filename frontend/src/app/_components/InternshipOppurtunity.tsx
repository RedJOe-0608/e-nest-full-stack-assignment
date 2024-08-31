import Image from "next/image";

const InternshipOpportunity: React.FC = () => {
    return (
      <section className="py-8 w-3/4 mx-auto my-8 rounded-md  bg-white">
        <h2 className="text-center text-purple-600 text-2xl font-bold mb-4">Internship Opportunity</h2>
        <p className="text-center text-gray-600 mb-6">
          Get internship opportunity at these Top Corporates after finishing this course:
        </p>
        <div className="flex justify-center items-center space-x-4">
          {Array(6).fill(null).map((_, index) => (
              <Image key={index} 
              src='/images/itc-logo.png'
              width={100}
              height={100}
              alt="companies"
              />
           

          ))}
        </div>
      </section>
    );
  };
  
  export default InternshipOpportunity;
  