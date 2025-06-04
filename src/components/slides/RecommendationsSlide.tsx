
import React from 'react';

const RecommendationsSlide = () => {
  const phases = [
    {
      phase: "Fase 1",
      timeline: "0-3 meses",
      effort: "Bajo Esfuerzo",
      impact: "Alto Impacto",
      color: "bg-green-500",
      items: [
        "Cotización rápida primero (sin datos personales)",
        "Reescritura de microcopy a lenguaje conversacional", 
        "Indicadores de progreso claros (Paso X de Y)",
        "Tiempo estimado restante"
      ]
    },
    {
      phase: "Fase 2", 
      timeline: "3-6 meses",
      effort: "Esfuerzo Medio",
      impact: "Alto Impacto",
      color: "bg-blue-500",
      items: [
        "Progressive disclosure (una pregunta por pantalla)",
        "Experiencia móvil nativa optimizada",
        "Eliminación de redirecciones web",
        "Auto-save de progreso"
      ]
    },
    {
      phase: "Fase 3",
      timeline: "6-12 meses", 
      effort: "Alto Esfuerzo",
      impact: "Medio Impacto",
      color: "bg-purple-500",
      items: [
        "Personalización adaptativa según perfil",
        "Integración de IA conversacional",
        "Predicción de abandono en tiempo real",
        "Optimización automática de flujos"
      ]
    }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          Roadmap de Mejoras por Fases
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
            Matriz de Priorización: Impacto vs. Esfuerzo
          </h2>
          
          <div className="relative bg-white rounded-lg p-6 h-80">
            {/* Axes */}
            <div className="absolute bottom-6 left-6 right-6 h-px bg-gray-300"></div>
            <div className="absolute bottom-6 left-6 top-6 w-px bg-gray-300"></div>
            
            {/* Labels */}
            <div className="absolute bottom-2 right-2 text-xs text-gray-500">Alto Esfuerzo</div>
            <div className="absolute bottom-2 left-2 text-xs text-gray-500">Bajo Esfuerzo</div>
            <div className="absolute top-2 left-8 text-xs text-gray-500 transform -rotate-90 origin-center">Alto Impacto</div>
            <div className="absolute bottom-12 left-8 text-xs text-gray-500 transform -rotate-90 origin-center">Bajo Impacto</div>
            
            {/* Quick wins (High Impact, Low Effort) */}
            <div className="absolute top-8 left-8 bg-green-500 text-white p-2 rounded text-xs font-semibold">
              Fase 1<br/>Quick Wins
            </div>
            
            {/* Major projects (High Impact, High Effort) */}
            <div className="absolute top-8 right-8 bg-blue-500 text-white p-2 rounded text-xs font-semibold">
              Fase 2<br/>Proyectos Mayores
            </div>
            
            {/* Fill-ins (Low Impact, Low Effort) */}
            <div className="absolute bottom-16 left-8 bg-yellow-500 text-white p-2 rounded text-xs font-semibold">
              Mejoras<br/>Incrementales
            </div>
            
            {/* Thankless tasks (Low Impact, High Effort) */}
            <div className="absolute bottom-16 right-8 bg-purple-500 text-white p-2 rounded text-xs font-semibold">
              Fase 3<br/>Innovación
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuente:</strong> Nielsen Norman Group - Website Forms Usability
      </div>
    </div>
  );
};

export default RecommendationsSlide;
