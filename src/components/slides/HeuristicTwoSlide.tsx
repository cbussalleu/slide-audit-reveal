
import React from 'react';

const HeuristicTwoSlide = () => {
  const examples = [
    {
      complex: "Deductible",
      simple: "What you pay before we help",
      impact: "❌"
    },
    {
      complex: "Monthly premium",
      simple: "How much do you want to pay per month?",
      impact: "✅"
    },
    {
      complex: "Liability coverage",
      simple: "Protection if you hurt someone",
      impact: "✅"
    },
    {
      complex: "Policy limits",
      simple: "Maximum we'll cover",
      impact: "✅"
    }
  ];

  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="p-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
            Heuristic #2: Match Between System and Real World
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem */}
            <div className="bg-red-50 border-l-4 border-[#E8092D] p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-[#E8092D] mb-4 flex items-center">
                <span className="mr-2">⚠️</span> Problem
              </h2>
              <p className="text-gray-700 mb-4">
                Technical terminology without explanation that confuses new users
              </p>
              <div className="bg-[#E8092D] text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                IMPACT: HIGH
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Main cause of abandonment in first-time users
              </p>
            </div>

            {/* Solution */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                <span className="mr-2">💡</span> Solution
              </h2>
              <p className="text-gray-700 mb-4">
                Use conversational language and explanations in familiar terms
              </p>
              <div className="bg-blue-100 p-3 rounded">
                <p className="text-sm text-[#1E3F90] font-medium">
                  "How much do you want to pay per month?" vs "Monthly premium"
                </p>
              </div>
            </div>
          </div>

          {/* Examples table */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
              Language Transformation Examples
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1E3F90] text-white font-semibold">
                <div className="p-4 border-r border-blue-400">Current Terminology</div>
                <div className="p-4 border-r border-blue-400">Conversational Language</div>
                <div className="p-4 text-center">Status</div>
              </div>
              
              {examples.map((example, index) => (
                <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="p-4 border-r border-gray-200 font-medium text-red-600">
                    {example.complex}
                  </div>
                  <div className="p-4 border-r border-gray-200 text-green-600">
                    {example.simple}
                  </div>
                  <div className="p-4 text-center text-2xl">
                    {example.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best practice */}
          <div className="bg-[#E8EDF9] rounded-lg p-8">
            <h2 className="text-xl font-semibold text-[#1E3F90] mb-4 flex items-center">
              <span className="mr-2">🏆</span> Best Practice: Progressive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Conversational Approach</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Progressive uses direct questions and everyday language to guide users.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="text-green-600 font-medium">"How much do you want to pay per month?"</p>
                  <p className="text-xs text-gray-500 mt-1">Instead of "Select monthly premium"</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Micro-explanations</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Tooltips and contextual help text for necessary technical terms.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <p className="text-blue-600 font-medium">Deductible <span className="text-xs">ℹ️</span></p>
                  <p className="text-xs text-gray-600 mt-1">What you pay before your insurance helps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
          <strong>Sources:</strong> FasterCapital - Microtext Strategies, Farmers Insurance FAQ
        </div>
      </div>
    </div>
  );
};

export default HeuristicTwoSlide;
