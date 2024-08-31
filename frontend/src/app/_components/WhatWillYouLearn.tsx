const WhatYouWillLearn: React.FC = () => {
    const points = [
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
    ];
  
    return (
      <section className="py-8 bg-purple-50">
        <h2 className="text-center text-purple-600 text-2xl font-bold mb-6">What You Will Learn</h2>
        <div className=" place-items-center bg-white p-8 w-3/4 mx-auto rounded-md grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p className="text-gray-600">{point}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhatYouWillLearn;
  