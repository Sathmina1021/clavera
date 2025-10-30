import React from 'react';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 my-16">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Don't let your dreams be dreams. Explore our curated travel packages and start your journey with Calvera Travels today!</p>
        <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition transform hover:scale-105 duration-300 ease-in-out shadow-lg">
          Explore Packages
        </button>
      </div>
    </div>
  );
};

export default CTA;
