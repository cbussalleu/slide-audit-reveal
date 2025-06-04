
import React from 'react';

const FindingsSlide = () => {
  const findings = [
    {
      title: "Complex terminology",
      impact: "HIGH",
      color: "bg-[#E8092D]",
      icon: "⚠️"
    },
    {
      title: "Lack of progress indicators",
      impact: "HIGH", 
      color: "bg-[#E8092D]",
      icon: "📊"
    },
    {
      title: "Poor mobile experience",
      impact: "HIGH",
      color: "bg-[#E8092D]",
      icon: "📱"
    },
    {
      title: "Confusing error validation",
      impact: "HIGH",
      color: "bg-[#E8092D]",
      icon: "❌"
    },
    {
      title: "Cognitive overload",
      impact: "MEDIUM",
      color: "bg-yellow-500",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          Critical Issues Identified
        </h1>

        <div className="space-y-6 mb-12">
          {findings.map((finding, index) => (
            <div key={index} className="flex items-center space-x-6 p-6 bg-gray-50 rounded-lg border-l-4 border-[#1E3F90] hover:shadow-md transition-shadow">
              <div className="text-4xl">{finding.icon}</div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {finding.title}
                </h3>
              </div>

              <div className={`${finding.color} text-white px-4 py-2 rounded-full font-bold text-sm`}>
                {finding.impact}
              </div>
            </div>
          ))}
        </div>

        {/* Impact explanation */}
        <div className="bg-[#E8EDF9] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Impact Criteria
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8092D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">HIGH</h3>
              <p className="text-sm text-gray-600">Critical abandonment factor for new users</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">MEDIUM</h3>
              <p className="text-sm text-gray-600">Affects experience but doesn't block</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">LOW</h3>
              <p className="text-sm text-gray-600">Incremental usability improvement</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Source:</strong> Analysis based on current Farmers Insurance flow screenshots
      </div>
    </div>
  );
};

export default FindingsSlide;
