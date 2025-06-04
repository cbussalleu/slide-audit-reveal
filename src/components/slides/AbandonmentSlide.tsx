
import React from 'react';

const AbandonmentSlide = () => {
  const abandonmentPoints = [
    {
      point: "Información personal prematura",
      percentage: "45%",
      description: "Solicitar datos personales antes de mostrar valor"
    },
    {
      point: "Terminología confusa",
      percentage: "35%",
      description: "Términos técnicos sin explicación clara"
    },
    {
      point: "Proceso más largo que esperado",
      percentage: "25%",
      description: "Sin indicadores de tiempo o progreso"
    },
    {
      point: "Opciones complejas sin orientación",
      percentage: "20%",
      description: "Múltiples decisiones simultáneas"
    }
  ];

  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
          Patrones de Abandono para Novatos
        </h1>

        {/* Industry statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-red-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-[#E8092D] mb-2">1-3%</div>
            <p className="text-gray-600">Conversión típica industria</p>
          </div>
          
          <div className="text-center bg-orange-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">67%</div>
            <p className="text-gray-600">Abandono en formularios</p>
          </div>
          
          <div className="text-center bg-yellow-50 p-6 rounded-lg">
            <div className="text-4xl font-bold text-yellow-600 mb-2">80%</div>
            <p className="text-gray-600">Abandono móvil específico</p>
          </div>
        </div>

        {/* Funnel diagram */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Embudo de Conversión: Puntos Críticos de Abandono
          </h2>
          
          <div className="relative">
            {/* Funnel visualization */}
            <div className="space-y-4">
              <div className="bg-blue-500 h-16 flex items-center justify-center text-white font-semibold rounded">
                100% - Visitantes iniciales
              </div>
              <div className="bg-green-500 h-14 w-4/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                75% - Inician cotización
              </div>
              <div className="bg-yellow-500 h-12 w-3/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                45% - Completan información básica
              </div>
              <div className="bg-orange-500 h-10 w-2/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                25% - Llegan a cobertura
              </div>
              <div className="bg-red-500 h-8 w-1/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                3% - Conversión final
              </div>
            </div>
          </div>
        </div>

        {/* Critical drop-off points */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Puntos Críticos de Abandono
          </h2>
          
          <div className="space-y-4">
            {abandonmentPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#E8092D]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{point.point}</h3>
                  <div className="bg-[#E8092D] text-white px-3 py-1 rounded-full font-bold text-sm">
                    {point.percentage}
                  </div>
                </div>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions preview */}
        <div className="bg-[#E8EDF9] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Estrategias para Reducir Abandono
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-3 flex items-center">
                <span className="mr-2">🎯</span> Valor Primero
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Mostrar cotización rápida antes de solicitar información personal detallada.
              </p>
              <div className="text-xs text-green-600 bg-green-50 p-2 rounded">
                Ejemplo: "Tu seguro costaría ~$85/mes" → luego pedir datos
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-3 flex items-center">
                <span className="mr-2">📚</span> Progressive Disclosure
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Revelar información gradualmente para evitar sobrecarga cognitiva.
              </p>
              <div className="text-xs text-green-600 bg-green-50 p-2 rounded">
                Una decisión por pantalla con contexto claro
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuentes:</strong> FinancesOnline Form Abandonment Statistics, Feathery Insurance Form Best Practices
      </div>
    </div>
  );
};

export default AbandonmentSlide;
