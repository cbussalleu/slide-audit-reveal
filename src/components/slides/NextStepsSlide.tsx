
import React from 'react';

const NextStepsSlide = () => {
  const immediateActions = [
    {
      action: "Complete audit of current microcopy",
      owner: "UX Writing Team",
      timeline: "1-2 weeks",
      priority: "High"
    },
    {
      action: "Prototype simplified flow",
      owner: "UX Design Team", 
      timeline: "2-3 weeks",
      priority: "High"
    },
    {
      action: "A/B test progress indicators",
      owner: "Product Team",
      timeline: "3-4 weeks", 
      priority: "Medium"
    }
  ];

  const successMetrics = [
    {
      metric: "Time per step",
      current: "2-3 min average",
      target: "< 30 seconds",
      method: "Analytics + User Testing"
    },
    {
      metric: "Abandonment rate",
      current: "67% industry",
      target: "< 35%",
      method: "Funnel Analysis"
    },
    {
      metric: "User satisfaction",
      current: "Not measured",
      target: "NPS > 70",
      method: "Post-completion Survey"
    },
    {
      metric: "Mobile conversion",
      current: "~20% of desktop",
      target: "80% of desktop",
      method: "Device Analytics"
    }
  ];

  return (
    <div className="h-full bg-white p-12 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          Implementation Plan
        </h1>

        {/* Immediate actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6">
            Immediate Actions
          </h2>
          
          <div className="space-y-4">
            {immediateActions.map((action, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">{action.action}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    action.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {action.priority}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Owner:</span> {action.owner}
                  </div>
                  <div>
                    <span className="font-medium">Timeline:</span> {action.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6">
            Success Metrics
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-[#1E3F90] text-white font-semibold text-sm">
              <div className="p-4">Metric</div>
              <div className="p-4">Current State</div>
              <div className="p-4">Target</div>
              <div className="p-4">Measurement Method</div>
            </div>
            
            {successMetrics.map((metric, index) => (
              <div key={index} className={`grid grid-cols-4 text-sm ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}>
                <div className="p-4 font-medium">{metric.metric}</div>
                <div className="p-4 text-red-600">{metric.current}</div>
                <div className="p-4 text-green-600 font-semibold">{metric.target}</div>
                <div className="p-4 text-gray-600">{metric.method}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6">
            Implementation Timeline
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-3">Q1 2025</h3>
              <h4 className="font-medium mb-2">Phase 1 - Quick Wins</h4>
              <ul className="text-sm space-y-1">
                <li>• Microcopy optimization</li>
                <li>• Progress indicators</li>
                <li>• Quick quote flow</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Q2-Q3 2025</h3>
              <h4 className="font-medium mb-2">Phase 2 - Major Improvements</h4>
              <ul className="text-sm space-y-1">
                <li>• Mobile native experience</li>
                <li>• Progressive disclosure</li>
                <li>• A/B testing framework</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">Q4 2025</h3>
              <h4 className="font-medium mb-2">Phase 3 - Innovation</h4>
              <ul className="text-sm space-y-1">
                <li>• AI personalization</li>
                <li>• Predictive analytics</li>
                <li>• Advanced optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="bg-[#E8EDF9] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-4">
            Next Steps and Contact
          </h2>
          
          <p className="text-gray-700 mb-6">
            To discuss implementation of these recommendations and define specific priorities:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-[#1E3F90] mb-2">UX Research Team</h3>
              <p className="text-sm text-gray-600">ux-research@company.com</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-[#1E3F90] mb-2">Product Management</h3>
              <p className="text-sm text-gray-600">product@company.com</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-500">
              Presentation prepared by UX Research Team • January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsSlide;
