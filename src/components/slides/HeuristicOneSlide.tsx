
import React from 'react';

const HeuristicOneSlide = () => {
  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="p-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
            Heuristic #1: System Status Visibility
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem */}
            <div className="bg-red-50 border-l-4 border-[#E8092D] p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-[#E8092D] mb-4 flex items-center">
                <span className="mr-2">⚠️</span> Problem
              </h2>
              <p className="text-gray-700 mb-4">
                Lack of clear time and progress indicators during the quote flow
              </p>
              <div className="bg-[#E8092D] text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                IMPACT: HIGH
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                <span className="mr-2">✅</span> Recommendation
              </h2>
              <p className="text-gray-700 mb-4">
                Implement clear indicators: "Step 2 of 5" with estimated time remaining
              </p>
              <p className="text-sm text-gray-600">
                Critical abandonment factor for novices
              </p>
            </div>
          </div>

          {/* Visual comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
              Visual Comparison: Current vs. Recommended
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current state */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-red-600 mb-4">Current State</h3>
                <div className="bg-gray-100 p-6 rounded-lg border-2 border-red-200">
                  <div className="bg-white p-4 rounded">
                    <div className="text-gray-400 text-sm mb-2">No indicators</div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">User doesn't know where they are or how much is left</p>
              </div>

              {/* Recommended state */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-600 mb-4">Recommended</h3>
                <div className="bg-gray-100 p-6 rounded-lg border-2 border-green-200">
                  <div className="bg-white p-4 rounded">
                    <div className="text-[#1E3F90] text-sm mb-2 font-semibold">Step 2 of 5 • ~3 min remaining</div>
                    <div className="h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="h-full bg-[#1E3F90] w-2/5"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">User understands progress and time</p>
              </div>
            </div>
          </div>

          {/* Best practice example */}
          <div className="bg-[#E8EDF9] rounded-lg p-8">
            <h2 className="text-xl font-semibold text-[#1E3F90] mb-4 flex items-center">
              <span className="mr-2">🏆</span> Best Practice: Lemonade
            </h2>
            <p className="text-gray-700 mb-4">
              Lemonade implements real-time progress with micro-interactive celebrations that keep users engaged throughout the process.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Getting your quote...</span>
                <span className="text-sm text-gray-500">90% complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[90%] transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
          <strong>Source:</strong> UXReactor - How Lemonade Found A Sweet Spot With AI
        </div>
      </div>
    </div>
  );
};

export default HeuristicOneSlide;
