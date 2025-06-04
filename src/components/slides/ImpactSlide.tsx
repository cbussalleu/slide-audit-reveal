
import React from 'react';

const ImpactSlide = () => {
  return (
    <div className="h-full bg-white p-12 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          Expected ROI from Improvements
        </h1>

        {/* Key metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-red-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-[#E8092D] mb-2">1-3%</div>
            <p className="text-gray-600 font-medium">Current Conversion</p>
            <p className="text-xs text-gray-500 mt-1">(Typical industry)</p>
          </div>
          
          <div className="text-center bg-green-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">5-8%</div>
            <p className="text-gray-600 font-medium">Projected Conversion</p>
            <p className="text-xs text-gray-500 mt-1">(With improvements)</p>
          </div>
          
          <div className="text-center bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">35-45%</div>
            <p className="text-gray-600 font-medium">Completion Increase</p>
            <p className="text-xs text-gray-500 mt-1">(Specific improvement)</p>
          </div>
          
          <div className="text-center bg-purple-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">18.2%</div>
            <p className="text-gray-600 font-medium">Benchmark Target</p>
            <p className="text-xs text-gray-500 mt-1">(Progressive rate)</p>
          </div>
        </div>

        {/* Before/After funnel */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-8 text-center">
            Funnel Comparison: Before vs. After
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4 text-center">Current State</h3>
              <div className="space-y-3">
                <div className="bg-blue-500 h-12 flex items-center justify-center text-white font-semibold rounded">
                  100% Visitors
                </div>
                <div className="bg-blue-400 h-10 w-4/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  60% Start
                </div>
                <div className="bg-yellow-500 h-8 w-3/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  25% Continue
                </div>
                <div className="bg-red-500 h-6 w-1/5 mx-auto flex items-center justify-center text-white font-semibold rounded text-sm">
                  3% Convert
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-red-600">$X Revenue</div>
                <p className="text-sm text-gray-600">Current baseline</p>
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4 text-center">With Improvements</h3>
              <div className="space-y-3">
                <div className="bg-blue-500 h-12 flex items-center justify-center text-white font-semibold rounded">
                  100% Visitors
                </div>
                <div className="bg-blue-400 h-10 w-5/6 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  80% Start
                </div>
                <div className="bg-green-500 h-8 w-4/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  60% Continue
                </div>
                <div className="bg-green-600 h-6 w-2/5 mx-auto flex items-center justify-center text-white font-semibold rounded text-sm">
                  7% Convert
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-green-600">$2.3X Revenue</div>
                <p className="text-sm text-gray-600">Optimistic projection</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI breakdown */}
        <div className="bg-[#E8EDF9] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Projected ROI Breakdown
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-semibold mb-2">Time Reduction</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">50-70%</p>
              <p className="text-sm text-gray-600">From 5-10 min to 90 seconds</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Mobile Improvement</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">60%</p>
              <p className="text-sm text-gray-600">Mobile abandonment reduction</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">😊</div>
              <h3 className="font-semibold mb-2">Satisfaction</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">+40%</p>
              <p className="text-sm text-gray-600">NPS and positive feedback</p>
            </div>
          </div>
        </div>

        {/* Implementation costs vs benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Estimated Investment</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Phase 1 (UX/Copy)</span>
                <span className="font-semibold">2-4 weeks dev</span>
              </li>
              <li className="flex justify-between">
                <span>Phase 2 (Mobile/Flow)</span>
                <span className="font-semibold">8-12 weeks dev</span>
              </li>
              <li className="flex justify-between">
                <span>A/B Testing</span>
                <span className="font-semibold">Ongoing</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-600 mb-4">Expected Return</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Conversion increase</span>
                <span className="font-semibold">133-167%</span>
              </li>
              <li className="flex justify-between">
                <span>Abandonment reduction</span>
                <span className="font-semibold">35-45%</span>
              </li>
              <li className="flex justify-between">
                <span>Expected ROI</span>
                <span className="font-semibold">300-500%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Sources:</strong> WPForms Online Form Statistics, Nielsen Norman Group UX Metrics & ROI
      </div>
    </div>
  );
};

export default ImpactSlide;
