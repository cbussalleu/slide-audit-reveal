
import React from 'react';

const HeuristicTwoSlide = () => {
  const examples = [
    {
      complex: "Deducible",
      simple: "Lo que pagas antes de que ayudemos",
      impact: "❌"
    },
    {
      complex: "Prima mensual",
      simple: "¿Cuánto quieres pagar por mes?",
      impact: "✅"
    },
    {
      complex: "Cobertura de responsabilidad civil",
      simple: "Protección si lastimas a alguien",
      impact: "✅"
    },
    {
      complex: "Límites de póliza",
      simple: "Máximo que cubrimos",
      impact: "✅"
    }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
          Heurística #2: Coincidencia con el Mundo Real
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="bg-red-50 border-l-4 border-[#E8092D] p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-[#E8092D] mb-4 flex items-center">
              <span className="mr-2">⚠️</span> Problema
            </h2>
            <p className="text-gray-700 mb-4">
              Terminología técnica sin explicación que confunde a usuarios novatos
            </p>
            <div className="bg-[#E8092D] text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
              IMPACTO: ALTO
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Causa principal de abandono en primerizos
            </p>
          </div>

          {/* Solution */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
              <span className="mr-2">💡</span> Solución
            </h2>
            <p className="text-gray-700 mb-4">
              Usar lenguaje conversacional y explicaciones en términos familiares
            </p>
            <div className="bg-blue-100 p-3 rounded">
              <p className="text-sm text-[#1E3F90] font-medium">
                "¿Cuánto quieres pagar por mes?" vs "Prima mensual"
              </p>
            </div>
          </div>
        </div>

        {/* Examples table */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Ejemplos de Transformación de Lenguaje
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1E3F90] text-white font-semibold">
              <div className="p-4 border-r border-blue-400">Terminología Actual</div>
              <div className="p-4 border-r border-blue-400">Lenguaje Conversacional</div>
              <div className="p-4 text-center">Estado</div>
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
            <span className="mr-2">🏆</span> Mejor Práctica: Progressive
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Enfoque Conversacional</h3>
              <p className="text-gray-700 text-sm mb-4">
                Progressive utiliza preguntas directas y lenguaje cotidiano para guiar a los usuarios.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <p className="text-green-600 font-medium">"¿Cuánto quieres pagar por mes?"</p>
                <p className="text-xs text-gray-500 mt-1">En lugar de "Seleccione prima mensual"</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Micro-explicaciones</h3>
              <p className="text-gray-700 text-sm mb-4">
                Tooltips y texto de ayuda contextual para términos técnicos necesarios.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-blue-600 font-medium">Deducible <span className="text-xs">ℹ️</span></p>
                <p className="text-xs text-gray-600 mt-1">Lo que pagas antes de que tu seguro ayude</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuentes:</strong> FasterCapital - Microtext Strategies, Farmers Insurance FAQ
      </div>
    </div>
  );
};

export default HeuristicTwoSlide;
