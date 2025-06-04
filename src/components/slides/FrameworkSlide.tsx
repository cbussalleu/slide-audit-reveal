
import React from 'react';

const FrameworkSlide = () => {
  const heuristics = [
    { id: 1, title: "Visibilidad del Estado", icon: "👁️" },
    { id: 2, title: "Coincidencia Mundo Real", icon: "🌍" },
    { id: 3, title: "Control y Libertad", icon: "🎮" },
    { id: 4, title: "Consistencia y Estándares", icon: "📐" },
    { id: 5, title: "Prevención de Errores", icon: "🛡️" },
    { id: 6, title: "Reconocimiento vs Memoria", icon: "🧠" },
    { id: 7, title: "Flexibilidad y Eficiencia", icon: "⚡" },
    { id: 8, title: "Diseño Estético Minimalista", icon: "✨" },
    { id: 9, title: "Ayuda con Errores", icon: "🔧" },
    { id: 10, title: "Ayuda y Documentación", icon: "📚" }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          10 Heurísticas de Nielsen Norman Group
        </h1>

        {/* Circular arrangement */}
        <div className="relative w-96 h-96 mx-auto mb-12">
          <div className="absolute inset-0 rounded-full border-4 border-[#E8EDF9]"></div>
          <div className="absolute inset-8 rounded-full border-2 border-[#E8EDF9] opacity-50"></div>
          
          {/* Center logo */}
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1E3F90] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">UX</span>
          </div>

          {/* Heuristics positioned around the circle */}
          {heuristics.map((heuristic, index) => {
            const angle = (index * 36) - 90; // 360/10 = 36 degrees per item
            const radius = 160; // Distance from center
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <div
                key={heuristic.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg border-2 border-[#E8EDF9] flex flex-col items-center justify-center hover:shadow-xl transition-shadow cursor-pointer"
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                }}
                title={heuristic.title}
              >
                <div className="text-2xl mb-1">{heuristic.icon}</div>
                <div className="text-xs font-semibold text-[#1E3F90] text-center leading-tight">
                  {heuristic.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {heuristics.map((heuristic) => (
            <div key={heuristic.id} className="flex items-center space-x-3 p-2">
              <div className="w-8 h-8 bg-[#E8EDF9] rounded-full flex items-center justify-center text-xs font-bold text-[#1E3F90]">
                {heuristic.id}
              </div>
              <span className="text-gray-700">{heuristic.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuente:</strong> Nielsen Norman Group - 10 Usability Heuristics for User Interface Design
      </div>
    </div>
  );
};

export default FrameworkSlide;
