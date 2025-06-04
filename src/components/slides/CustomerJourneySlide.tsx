
import React from 'react';

const CustomerJourneySlide = () => {
  const phases = [
    {
      title: "Awareness",
      activity: "Recognizing insurance need",
      touchpoint: "Google search, ads, referrals",
      job: "I need to understand my insurance options",
      pain: "Too many options, confusing terminology",
      emotion: "😟",
      emotionLabel: "Overwhelmed",
      painLevel: "high"
    },
    {
      title: "Research", 
      activity: "Comparing providers",
      touchpoint: "Farmers website, reviews",
      job: "I want to find trustworthy providers",
      pain: "Hard to compare apples-to-apples",
      emotion: "🤔",
      emotionLabel: "Cautious",
      painLevel: "medium"
    },
    {
      title: "Quote Process",
      activity: "Starting quote flow",
      touchpoint: "Quote form, mobile app", 
      job: "I need to get accurate pricing quickly",
      pain: "Long forms, technical language",
      emotion: "😤",
      emotionLabel: "Frustrated",
      painLevel: "high"
    },
    {
      title: "Evaluation",
      activity: "Reviewing options",
      touchpoint: "Quote results, agent call",
      job: "I want to understand what coverage I need", 
      pain: "Complex coverage options",
      emotion: "😕",
      emotionLabel: "Confused",
      painLevel: "high"
    },
    {
      title: "Decision",
      activity: "Finalizing choice",
      touchpoint: "Purchase flow, confirmation",
      job: "I need to complete purchase confidently",
      pain: "Pressure to decide quickly",
      emotion: "😰", 
      emotionLabel: "Anxious",
      painLevel: "medium"
    }
  ];

  const seeMoreItems = [
    { icon: "👥", title: "User Archetypes" },
    { icon: "🔍", title: "Complete UX Audit" },
    { icon: "💭", title: "Motivations Deep Dive" },
    { icon: "❤️", title: "Emotional Experience" },
    { icon: "⚙️", title: "Operational Side" },
    { icon: "💻", title: "Technology Stack" }
  ];

  const getPainColor = (level: string) => {
    switch(level) {
      case 'high': return 'bg-[#E8092D]';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="h-full bg-white p-8 overflow-y-auto">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-bold text-[#1E3F90] mb-6 text-center">
          Customer Journey: Online Quote-Getting Experience
        </h1>

        <div className="flex gap-6">
          {/* Main Journey Map */}
          <div className="flex-1">
            {/* Phases Header */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              {phases.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#1E3F90] text-white px-3 py-2 rounded-lg font-semibold text-sm">
                    {index + 1}. {phase.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Journey Swim Lanes */}
            <div className="space-y-4">
              {/* Activities */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <h3 className="font-semibold text-[#1E3F90] mb-2 text-sm">ACTIVITIES</h3>
                <div className="grid grid-cols-5 gap-2">
                  {phases.map((phase, index) => (
                    <div key={index} className="text-xs p-2 bg-white rounded border">
                      {phase.activity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Touchpoints */}
              <div className="bg-green-50 p-3 rounded-lg">
                <h3 className="font-semibold text-[#1E3F90] mb-2 text-sm">TOUCHPOINTS</h3>
                <div className="grid grid-cols-5 gap-2">
                  {phases.map((phase, index) => (
                    <div key={index} className="text-xs p-2 bg-white rounded border">
                      {phase.touchpoint}
                    </div>
                  ))}
                </div>
              </div>

              {/* Jobs to be Done */}
              <div className="bg-purple-50 p-3 rounded-lg">
                <h3 className="font-semibold text-[#1E3F90] mb-2 text-sm">JOBS TO BE DONE</h3>
                <div className="grid grid-cols-5 gap-2">
                  {phases.map((phase, index) => (
                    <div key={index} className="text-xs p-2 bg-white rounded border italic">
                      "{phase.job}"
                    </div>
                  ))}
                </div>
              </div>

              {/* Pain Points */}
              <div className="bg-red-50 p-3 rounded-lg">
                <h3 className="font-semibold text-[#1E3F90] mb-2 text-sm">PAIN POINTS</h3>
                <div className="grid grid-cols-5 gap-2">
                  {phases.map((phase, index) => (
                    <div key={index} className="text-xs p-2 bg-white rounded border relative">
                      <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${getPainColor(phase.painLevel)}`}></div>
                      {phase.pain}
                    </div>
                  ))}
                </div>
              </div>

              {/* Emotional Experience */}
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h3 className="font-semibold text-[#1E3F90] mb-2 text-sm">EMOTIONAL EXPERIENCE</h3>
                <div className="grid grid-cols-5 gap-2">
                  {phases.map((phase, index) => (
                    <div key={index} className="text-xs p-2 bg-white rounded border text-center">
                      <div className="text-lg mb-1">{phase.emotion}</div>
                      <div className="font-medium">{phase.emotionLabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* See More Sidebar */}
          <div className="w-48 bg-[#E8EDF9] p-4 rounded-lg">
            <h3 className="font-semibold text-[#1E3F90] mb-4 text-sm">"SEE MORE" SECTION</h3>
            <div className="space-y-3">
              {seeMoreItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 p-2 bg-white rounded border hover:shadow-md transition-shadow cursor-pointer hover:bg-blue-50"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs font-medium">{item.title}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
              *Note: Links are demonstrative only
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Sources:</strong> Farmers Insurance flow analysis, McKinsey Customer Experience Research
      </div>
    </div>
  );
};

export default CustomerJourneySlide;
