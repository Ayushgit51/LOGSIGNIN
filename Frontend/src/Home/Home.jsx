import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 via-emerald-400 to-lime-300 p-6">
        
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
        Sustainable City & Community
      </h1>
      <p className="text-lg md:text-xl text-white text-center mb-10 max-w-3xl font-light tracking-wide opacity-90">
        Empowering communities with sustainable solutions. Report waste, discover eco-friendly transport, and tackle community challenges effortlessly.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <button className="bg-white text-teal-700 font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-teal-50 hover:scale-105 transition-all duration-300 ease-in-out">
          Report Waste
        </button>
        <button className="bg-white text-emerald-700 font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-emerald-50 hover:scale-105 transition-all duration-300 ease-in-out">
          Find Eco Transport
        </button>
        <button className="bg-white text-lime-700 font-semibold py-4 px-6 rounded-xl shadow-md hover:bg-lime-50 hover:scale-105 transition-all duration-300 ease-in-out">
          Community Issues
        </button>
      </div>
    </div>
  );
};

export default Home;