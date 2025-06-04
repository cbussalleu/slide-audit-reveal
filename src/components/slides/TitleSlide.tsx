
import React from 'react';

const TitleSlide = () => {
  return (
    <div className="h-full bg-[#E8EDF9] p-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Abstract geometric shapes */}
        <div className="relative mb-8">
          <div className="absolute top-0 left-1/4 w-16 h-16 bg-[#1E3F90] rounded-full opacity-20"></div>
          <div className="absolute top-8 right-1/4 w-12 h-12 bg-[#E8092D] rotate-45 opacity-30"></div>
          <div className="absolute -top-4 right-1/3 w-8 h-8 bg-[#1E3F90] opacity-10"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[#1E3F90] mb-6 leading-tight">
          Experience Audit:<br />
          <span className="text-[#E8092D]">Farmers Insurance</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-12 font-light">
          Quote Flow Analysis for New Users
        </h2>

        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-lg font-semibold text-[#1E3F90] mb-2">Presented by:</h3>
              <p className="text-gray-700">UX Research Team</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1E3F90] mb-2">Date:</h3>
              <p className="text-gray-700">January 2025</p>
            </div>
          </div>
        </div>

        {/* Insurance icon representation */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-24 bg-[#1E3F90] rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
