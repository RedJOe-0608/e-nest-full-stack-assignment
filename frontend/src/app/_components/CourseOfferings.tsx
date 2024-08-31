import Image from 'next/image';

const CourseOfferings: React.FC = () => {
    return (
      <section className="flex flex-col items-center justify-center py-8 bg-purple-50">
        <h2 className="text-center text-purple-600 text-2xl font-bold mb-6">Course Offerings</h2>
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(null).map((_, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
             <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/images/course-offerings-1.jpg"
                  alt="course offerings"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
            </div>
            
              <h3 className="text-gray-600">Lorem ipsum dolor</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CourseOfferings;
  