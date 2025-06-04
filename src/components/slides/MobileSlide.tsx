
import React from 'react';

const MobileSlide = () => {
  return (
    <div className="min-h-[600px] bg-white p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1E3F90] mb-8 text-center">
          Experiencia Móvil Crítica
        </h1>

        {/* Key statistic */}
        <div className="text-center mb-12">
          <div className="bg-[#E8092D] text-white rounded-lg p-8 mb-6">
            <h2 className="text-5xl font-bold mb-2">80.79%</h2>
            <p className="text-xl">de abandono móvil en formularios</p>
          </div>
          <p className="text-gray-600 text-lg">Estadística clave de la industria</p>
        </div>

        {/* Mobile issues */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-semibold text-[#E8092D] mb-2">Códigos de Verificación</h3>
            <p className="text-sm text-gray-600">Interrupciones frecuentes que rompen el flujo</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="font-semibold text-[#E8092D] mb-2">Redirecciones Web</h3>
            <p className="text-sm text-gray-600">De app nativa a navegador confunde usuarios</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">👆</div>
            <h3 className="font-semibold text-[#E8092D] mb-2">Formularios Touch</h3>
            <p className="text-sm text-gray-600">No optimizados para interacción táctil</p>
          </div>
        </div>

        {/* Mobile problems visual */}
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Problemas Identificados en Móvil
          </h2>
          
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-lg p-4 w-72">
              {/* Phone mockup */}
              <div className="bg-white rounded-lg p-4 h-96 overflow-hidden">
                <div className="border-b pb-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="text-xs text-gray-400">farmers.com</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 bg-red-100 rounded border border-red-300">
                    <div className="p-2 text-xs text-red-600">Error: Código requerido</div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="text-xs text-gray-400 text-center mt-8">
                    Redirección a navegador...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="bg-[#E8EDF9] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#1E3F90] mb-6 text-center">
            Soluciones Recomendadas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-3 flex items-center">
                <span className="mr-2">✅</span> Experiencia Nativa
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Eliminar redirecciones web desde app</li>
                <li>• Integrar verificación biométrica</li>
                <li>• Formularios optimizados para touch</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-3 flex items-center">
                <span className="mr-2">📱</span> UX Móvil-First
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Campos de entrada más grandes</li>
                <li>• Navegación por swipe</li>
                <li>• Auto-save progreso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-[#F8F9FA] p-2 rounded text-xs text-gray-500">
        <strong>Fuentes:</strong> Google Play Store reviews, Nielsen Norman Group - Mobile Input Checklist
      </div>
    </div>
  );
};

export default MobileSlide;
