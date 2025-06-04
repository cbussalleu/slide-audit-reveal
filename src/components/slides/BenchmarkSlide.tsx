
import React from 'react';

const BenchmarkSlide = () => {
  const competitors = [
    {
      name: "Lemonade",
      time: "90 seconds",
      feature: "AI-first experience",
      satisfaction: "Highly automated",
      color: "bg-green-500"
    },
    {
      name: "GEICO",
      time: "3-5 minutes", 
      feature: "No mobile redirects",
      satisfaction: "97% satisfaction",
      color: "bg-blue-500"
    },
    {
      name: "Progressive",
      time: "2-4 minutes",
      feature: "Name Your Price tool",
      satisfaction: "Advanced personalization",
      color: "bg-purple-500"
    },
    {
      name: "Farmers",
      time: "5-10 minutes",
      feature: "Hybrid agent/digital model",
      satisfaction: "Fragmented experience",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          Competitive Benchmark
        </h1>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {competitors.map((competitor, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${competitor.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-lg">
                  {competitor.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-4">{competitor.name}</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-600">Time:</span>
                  <p className="text-gray-800">{competitor.time}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-600">Differentiator:</span>
                  <p className="text-gray-800">{competitor.feature}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-600">Advantage:</span>
                  <p className="text-gray-800">{competitor.satisfaction}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key insights */}
        <div className="bg-[#E8EDF9] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Key Benchmark Insights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Speed</h3>
              <p className="text-sm text-gray-600">
                Leaders complete quotes in 90 seconds - 3 minutes vs. Farmers' 5-10 minutes
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Mobile Native</h3>
              <p className="text-sm text-gray-600">
                GEICO and Progressive eliminated web redirects, keeping users in-app
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Personalization</h3>
              <p className="text-sm text-gray-600">
                Progressive and Lemonade adapt experience based on user profile
              </p>
            </div>
          </div>
        </div>

        {/* Performance comparison */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#1E3F90] mb-4 text-center">
            Performance Metrics
          </h3>
          
          <div className="space-y-4">
            {[
              { metric: "Quote time", farmers: "5-10 min", industry: "90s - 3 min", status: "❌" },
              { metric: "Mobile experience", farmers: "Web redirects", industry: "Native optimized", status: "❌" },
              { metric: "Average conversion", farmers: "1-3%", industry: "5-8% (leaders)", status: "❌" },
              { metric: "User satisfaction", farmers: "Fragmented", industry: "97% (GEICO)", status: "❌" }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded">
                <div className="font-medium text-gray-800">{row.metric}</div>
                <div className="text-red-600">{row.farmers}</div>
                <div className="text-green-600">{row.industry}</div>
                <div className="text-center text-xl">{row.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Sources:</strong> ValuePenguin Insurance Comparison, AutoInsurance.com Reviews
      </div>
    </div>
  );
};

export default BenchmarkSlide;
