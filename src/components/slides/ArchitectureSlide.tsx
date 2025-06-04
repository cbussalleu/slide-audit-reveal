
import React from 'react';

const ArchitectureSlide = () => {
  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
          Arquitectura de Información: Flujo Multi-paso
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="bg-red-50 border-l-4 border-[#E8092D] p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-[#E8092D] mb-4 flex items-center">
              <span className="mr-2">🧠</span> Problema Actual
            </h2>
            <p className="text-gray-700 mb-4">
              Múltiples decisiones simultáneas abruman a usuarios novatos
            </p>
            <div className="bg-white p-4 rounded border">
              <div className="text-sm text-gray-600 mb-2">Pantalla típica actual:</div>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Tipo de cobertura</li>
                <li>• Límites de póliza</li>
                <li>• Deducible</li>
                <li>• Información personal</li>
                <li>• Información del vehículo</li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
              <span className="mr-2">✨</span> Solución Progressive Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              Una pregunta/decisión por pantalla reduce carga cognitiva
            </p>
            <div className="bg-white p-4 rounded border">
              <div className="text-sm text-gray-600 mb-2">Flujo optimizado:</div>
              <ul className="text-xs text-green-600 space-y-1">
                <li>1. ¿Qué auto quieres asegurar?</li>
                <li>2. ¿Cómo lo usas principalmente?</li>
                <li>3. ¿Cuánto quieres pagar al mes?</li>
                <li>4. Tu información básica</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Flow comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Comparación de Flujos: Actual vs. Optimizado
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current flow */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4 text-center">Flujo Actual (5-10 min)</h3>
              <div className="space-y-3">
                {[
                  "Pantalla compleja con múltiples campos",
                  "Información personal + vehículo + cobertura",
                  "Múltiples decisiones simultáneas",
                  "Alto abandono por sobrecarga"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimized flow */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4 text-center">Flujo Optimizado (90 seg)</h3>
              <div className="space-y-3">
                {[
                  "Una pregunta simple por pantalla",
                  "Progreso claro y tiempo estimado",
                  "Decisiones secuenciales lógicas",
                  "Mayor completación y satisfacción"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lemonade example */}
        <div className="bg-[#E8EDF9] rounded-lg p-8">
          <h2 className="text-xl font-semibold text-[#1E3F90] mb-4 flex items-center">
            <span className="mr-2">🏆</span> Mejor Práctica: Modelo Lemonade
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">90s</span>
              </div>
              <h3 className="font-semibold mb-2">Tiempo Promedio</h3>
              <p className="text-sm text-gray-600">vs. 5-10 min Farmers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h3 className="font-semibold mb-2">Experiencia AI-First</h3>
              <p className="text-sm text-gray-600">Conversacional y adaptativa</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">1Q</span>
              </div>
              <h3 className="font-semibold mb-2">Una Pregunta</h3>
              <p className="text-sm text-gray-600">Por pantalla, foco total</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuentes:</strong> Designlab - Multi-Step Forms Design, Lemonade Customer Experience Case Study
      </div>
    </div>
  );
};

export default ArchitectureSlide;
