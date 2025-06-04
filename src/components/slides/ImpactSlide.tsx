
import React from 'react';

const ImpactSlide = () => {
  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-12 text-center">
          ROI Esperado de las Mejoras
        </h1>

        {/* Key metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-red-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-[#E8092D] mb-2">1-3%</div>
            <p className="text-gray-600 font-medium">Conversión Actual</p>
            <p className="text-xs text-gray-500 mt-1">(Industria típica)</p>
          </div>
          
          <div className="text-center bg-green-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">5-8%</div>
            <p className="text-gray-600 font-medium">Conversión Proyectada</p>
            <p className="text-xs text-gray-500 mt-1">(Con mejoras)</p>
          </div>
          
          <div className="text-center bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">35-45%</div>
            <p className="text-gray-600 font-medium">Incremento Completación</p>
            <p className="text-xs text-gray-500 mt-1">(Mejora específica)</p>
          </div>
          
          <div className="text-center bg-purple-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">18.2%</div>
            <p className="text-gray-600 font-medium">Benchmark Objetivo</p>
            <p className="text-xs text-gray-500 mt-1">(Progressive rate)</p>
          </div>
        </div>

        {/* Before/After funnel */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-8 text-center">
            Comparación de Embudos: Antes vs. Después
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4 text-center">Estado Actual</h3>
              <div className="space-y-3">
                <div className="bg-blue-500 h-12 flex items-center justify-center text-white font-semibold rounded">
                  100% Visitantes
                </div>
                <div className="bg-blue-400 h-10 w-4/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  60% Inician
                </div>
                <div className="bg-yellow-500 h-8 w-3/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  25% Continúan
                </div>
                <div className="bg-red-500 h-6 w-1/5 mx-auto flex items-center justify-center text-white font-semibold rounded text-sm">
                  3% Convierten
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-red-600">$X Revenue</div>
                <p className="text-sm text-gray-600">Baseline actual</p>
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4 text-center">Con Mejoras</h3>
              <div className="space-y-3">
                <div className="bg-blue-500 h-12 flex items-center justify-center text-white font-semibold rounded">
                  100% Visitantes
                </div>
                <div className="bg-blue-400 h-10 w-5/6 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  80% Inician
                </div>
                <div className="bg-green-500 h-8 w-4/5 mx-auto flex items-center justify-center text-white font-semibold rounded">
                  60% Continúan
                </div>
                <div className="bg-green-600 h-6 w-2/5 mx-auto flex items-center justify-center text-white font-semibold rounded text-sm">
                  7% Convierten
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-green-600">$2.3X Revenue</div>
                <p className="text-sm text-gray-600">Proyección optimista</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI breakdown */}
        <div className="bg-[#E8EDF9] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Desglose del ROI Proyectado
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-semibold mb-2">Reducción de Tiempo</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">50-70%</p>
              <p className="text-sm text-gray-600">De 5-10 min a 90 segundos</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Mejora Móvil</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">60%</p>
              <p className="text-sm text-gray-600">Reducción abandono móvil</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">😊</div>
              <h3 className="font-semibold mb-2">Satisfacción</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">+40%</p>
              <p className="text-sm text-gray-600">NPS y feedback positivo</p>
            </div>
          </div>
        </div>

        {/* Implementation costs vs benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Inversión Estimada</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Fase 1 (UX/Copy)</span>
                <span className="font-semibold">2-4 semanas dev</span>
              </li>
              <li className="flex justify-between">
                <span>Fase 2 (Móvil/Flujo)</span>
                <span className="font-semibold">8-12 semanas dev</span>
              </li>
              <li className="flex justify-between">
                <span>Testing A/B</span>
                <span className="font-semibold">Ongoing</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-600 mb-4">Retorno Esperado</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Incremento conversiones</span>
                <span className="font-semibold">133-167%</span>
              </li>
              <li className="flex justify-between">
                <span>Reducción abandono</span>
                <span className="font-semibold">35-45%</span>
              </li>
              <li className="flex justify-between">
                <span>ROI esperado</span>
                <span className="font-semibold">300-500%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuentes:</strong> WPForms Online Form Statistics, Nielsen Norman Group UX Metrics & ROI
      </div>
    </div>
  );
};

export default ImpactSlide;
