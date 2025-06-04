
import React from 'react';

const FindingsSlide = () => {
  const findings = [
    {
      title: "Terminología compleja",
      impact: "ALTO",
      color: "bg-[#E8092D]",
      icon: "⚠️"
    },
    {
      title: "Falta de indicadores de progreso",
      impact: "ALTO", 
      color: "bg-[#E8092D]",
      icon: "📊"
    },
    {
      title: "Experiencia móvil deficiente",
      impact: "ALTO",
      color: "bg-[#E8092D]",
      icon: "📱"
    },
    {
      title: "Validación de errores confusa",
      impact: "ALTO",
      color: "bg-[#E8092D]",
      icon: "❌"
    },
    {
      title: "Sobrecarga cognitiva",
      impact: "MEDIO",
      color: "bg-yellow-500",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          Problemas Críticos Identificados
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
            Criterios de Impacto
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8092D] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">ALTO</h3>
              <p className="text-sm text-gray-600">Factor crítico de abandono para usuarios novatos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">MEDIO</h3>
              <p className="text-sm text-gray-600">Afecta la experiencia pero no bloquea</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">BAJO</h3>
              <p className="text-sm text-gray-600">Mejora incremental de usabilidad</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuente:</strong> Análisis basado en capturas del flujo actual de Farmers Insurance
      </div>
    </div>
  );
};

export default FindingsSlide;
