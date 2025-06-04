
import React from 'react';

const ArchitectureSlide = () => {
  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
          Information Architecture: Multi-step Flow
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="bg-red-50 border-l-4 border-[#E8092D] p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-[#E8092D] mb-4 flex items-center">
              <span className="mr-2">🧠</span> Current Problem
            </h2>
            <p className="text-gray-700 mb-4">
              Multiple simultaneous decisions overwhelm new users
            </p>
            <div className="bg-white p-4 rounded border">
              <div className="text-sm text-gray-600 mb-2">Typical current screen:</div>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Coverage type</li>
                <li>• Policy limits</li>
                <li>• Deductible</li>
                <li>• Personal information</li>
                <li>• Vehicle information</li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
              <span className="mr-2">✨</span> Progressive Disclosure Solution
            </h2>
            <p className="text-gray-700 mb-4">
              One question/decision per screen reduces cognitive load
            </p>
            <div className="bg-white p-4 rounded border">
              <div className="text-sm text-gray-600 mb-2">Optimized flow:</div>
              <ul className="text-xs text-green-600 space-y-1">
                <li>1. What car do you want to insure?</li>
                <li>2. How do you primarily use it?</li>
                <li>3. How much do you want to pay monthly?</li>
                <li>4. Your basic information</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Flow comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Flow Comparison: Current vs. Optimized
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current flow */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4 text-center">Current Flow (5-10 min)</h3>
              <div className="space-y-3">
                {[
                  "Complex screen with multiple fields",
                  "Personal + vehicle + coverage info",
                  "Multiple simultaneous decisions",
                  "High abandonment due to overload"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimized flow */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4 text-center">Optimized Flow (90 sec)</h3>
              <div className="space-y-3">
                {[
                  "One simple question per screen",
                  "Clear progress and estimated time",
                  "Sequential logical decisions",
                  "Higher completion and satisfaction"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lemonade example */}
        <div className="bg-[#E8EDF9] rounded-lg p-8">
          <h2 className="text-xl font-semibold text-[#1E3F90] mb-4 flex items-center">
            <span className="mr-2">🏆</span> Best Practice: Lemonade Model
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">90s</span>
              </div>
              <h3 className="font-semibold mb-2">Average Time</h3>
              <p className="text-sm text-gray-600">vs. 5-10 min Farmers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h3 className="font-semibold mb-2">AI-First Experience</h3>
              <p className="text-sm text-gray-600">Conversational and adaptive</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">1Q</span>
              </div>
              <h3 className="font-semibold mb-2">One Question</h3>
              <p className="text-sm text-gray-600">Per screen, total focus</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Sources:</strong> Designlab - Multi-Step Forms Design, Lemonade Customer Experience Case Study
      </div>
    </div>
  );
};

export default ArchitectureSlide;
