
import React from 'react';

const RecommendationsSlide = () => {
  const phases = [
    {
      phase: "Phase 1",
      timeline: "0-3 months",
      effort: "Low Effort",
      impact: "High Impact",
      color: "bg-green-500",
      items: [
        "Quick quote first (no personal data)",
        "Rewrite microcopy to conversational language", 
        "Clear progress indicators (Step X of Y)",
        "Estimated time remaining"
      ]
    },
    {
      phase: "Phase 2", 
      timeline: "3-6 months",
      effort: "Medium Effort",
      impact: "High Impact",
      color: "bg-blue-500",
      items: [
        "Progressive disclosure (one question per screen)",
        "Optimized native mobile experience",
        "Eliminate web redirects",
        "Auto-save progress"
      ]
    },
    {
      phase: "Phase 3",
      timeline: "6-12 months", 
      effort: "High Effort",
      impact: "Medium Impact",
      color: "bg-purple-500",
      items: [
        "Adaptive personalization by profile",
        "Conversational AI integration",
        "Real-time abandonment prediction",
        "Automatic flow optimization"
      ]
    }
  ];

  return (
    <div className="h-full bg-white p-12 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          Improvement Roadmap by Phases
        </h1>

        {/* Timeline visualization */}
        <div className="relative mb-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${phase.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                {/* Content card */}
                <div className={`${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'} w-5/12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg`}>
                  <div className={`inline-block ${phase.color} text-white px-4 py-2 rounded-full font-bold text-sm mb-4`}>
                    {phase.phase}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{phase.timeline}</h3>
                  
                  <div className="flex space-x-4 mb-4">
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{phase.effort}</span>
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">{phase.impact}</span>
                  </div>

                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Priority matrix */}
        <div className="bg-[#E8EDF9] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Prioritization Matrix: Impact vs. Effort
          </h2>
          
          <div className="relative bg-white rounded-lg p-6 h-80">
            {/* Axes */}
            <div className="absolute bottom-6 left-6 right-6 h-px bg-gray-300"></div>
            <div className="absolute bottom-6 left-6 top-6 w-px bg-gray-300"></div>
            
            {/* Labels */}
            <div className="absolute bottom-2 right-2 text-xs text-gray-500">High Effort</div>
            <div className="absolute bottom-2 left-2 text-xs text-gray-500">Low Effort</div>
            <div className="absolute top-2 left-8 text-xs text-gray-500 transform -rotate-90 origin-center">High Impact</div>
            <div className="absolute bottom-12 left-8 text-xs text-gray-500 transform -rotate-90 origin-center">Low Impact</div>
            
            {/* Quick wins (High Impact, Low Effort) */}
            <div className="absolute top-8 left-8 bg-green-500 text-white p-2 rounded text-xs font-semibold">
              Phase 1<br/>Quick Wins
            </div>
            
            {/* Major projects (High Impact, High Effort) */}
            <div className="absolute top-8 right-8 bg-blue-500 text-white p-2 rounded text-xs font-semibold">
              Phase 2<br/>Major Projects
            </div>
            
            {/* Fill-ins (Low Impact, Low Effort) */}
            <div className="absolute bottom-16 left-8 bg-yellow-500 text-white p-2 rounded text-xs font-semibold">
              Incremental<br/>Improvements
            </div>
            
            {/* Thankless tasks (Low Impact, High Effort) */}
            <div className="absolute bottom-16 right-8 bg-purple-500 text-white p-2 rounded text-xs font-semibold">
              Phase 3<br/>Innovation
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Source:</strong> Nielsen Norman Group - Website Forms Usability
      </div>
    </div>
  );
};

export default RecommendationsSlide;
