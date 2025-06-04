
import React from 'react';

const MethodologySlide = () => {
  const researchMethods = [
    {
      title: "Análisis de pantallas",
      description: "Flujo de cotización actual",
      icon: "📱"
    },
    {
      title: "Mejores prácticas",
      description: "Investigación de industria",
      icon: "📊"
    },
    {
      title: "Benchmarking",
      description: "Progressive, GEICO, State Farm, Lemonade",
      icon: "🔍"
    },
    {
      title: "Estudios de abandono",
      description: "Análisis de formularios",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
          Metodología de Investigación
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#E8EDF9] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#1E3F90] mb-4">
              Framework Principal
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Nielsen Norman Group</strong>
            </p>
            <p className="text-gray-600">10 Heurísticas de Usabilidad</p>
          </div>

          <div className="bg-[#E8EDF9] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#1E3F90] mb-4">
              Enfoque
            </h2>
            <p className="text-lg text-gray-700">
              Evaluación holística para <strong>usuarios novatos</strong>
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6">
          Fuentes de Datos
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {researchMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl">{method.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F8F9FA] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#1E3F90] mb-4">
            Criterios de Evaluación
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#E8092D] rounded-full"></div>
              <span className="font-medium">Impacto Alto</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="font-medium">Impacto Medio</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="font-medium">Impacto Bajo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuentes:</strong> Nielsen Norman Group, Progressive Insurance, GEICO, State Farm, Lemonade
      </div>
    </div>
  );
};

export default MethodologySlide;
