import React, { useState } from 'react';

const MapaInteractivo = () => {
  const [regionSeleccionada, setRegionSeleccionada] = useState('');

  const regiones = [
    { id: 'valparaiso', nombre: 'REGIÓN VALPARAÍSO', activa: true },
    { id: 'metropolitana', nombre: 'REGIÓN METROPOLITANA', activa: true },
    { id: 'ohiggins', nombre: 'REGIÓN O\'HIGGINS', activa: true },
    { id: 'araucania', nombre: 'REGIÓN ARAUCANÍA', activa: true },
  ];

  const estadisticas = {
    regiones: 5,
    usuarios: '+500'
  };

  return (
    <section className="navy-gradient text-white py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-lg mb-4">
            Optimiza la gestión de estacionamientos, conectando personas, espacios y 
            tecnología a lo largo del país.
          </p>
          <div className="w-20 h-1 bg-primary-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mapa de Chile */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">MAPA INTERACTIVO<br />DE CHILE</h3>
            
            {/* SVG simplificado de Chile */}
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 200 600" className="w-full h-96">
                {/* Región de Valparaíso */}
                <path
                  d="M80 180 L120 180 L120 220 L80 220 Z"
                  fill={regionSeleccionada === 'valparaiso' ? '#33CCFF' : '#006699'}
                  className="cursor-pointer transition-all duration-300 hover:fill-primary-light"
                  onClick={() => setRegionSeleccionada('valparaiso')}
                />
                
                {/* Región Metropolitana */}
                <path
                  d="M80 220 L120 220 L120 260 L80 260 Z"
                  fill={regionSeleccionada === 'metropolitana' ? '#33CCFF' : '#006699'}
                  className="cursor-pointer transition-all duration-300 hover:fill-primary-light"
                  onClick={() => setRegionSeleccionada('metropolitana')}
                />
                
                {/* Región O'Higgins */}
                <path
                  d="M80 260 L120 260 L120 300 L80 300 Z"
                  fill={regionSeleccionada === 'ohiggins' ? '#33CCFF' : '#006699'}
                  className="cursor-pointer transition-all duration-300 hover:fill-primary-light"
                  onClick={() => setRegionSeleccionada('ohiggins')}
                />
                
                {/* Región Araucanía */}
                <path
                  d="M80 380 L120 380 L120 420 L80 420 Z"
                  fill={regionSeleccionada === 'araucania' ? '#33CCFF' : '#006699'}
                  className="cursor-pointer transition-all duration-300 hover:fill-primary-light"
                  onClick={() => setRegionSeleccionada('araucania')}
                />
                
                {/* Resto del país (inactivo) */}
                <path
                  d="M80 50 L120 50 L120 180 L80 180 Z"
                  fill="#2a3f5f"
                  className="opacity-50"
                />
                <path
                  d="M80 300 L120 300 L120 380 L80 380 Z"
                  fill="#2a3f5f"
                  className="opacity-50"
                />
                <path
                  d="M80 420 L120 420 L120 550 L80 550 Z"
                  fill="#2a3f5f"
                  className="opacity-50"
                />
              </svg>
            </div>
          </div>

          {/* Panel de información */}
          <div className="space-y-8">
            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-light mb-2">
                  {estadisticas.regiones}
                </div>
                <div className="text-sm text-gray-300">Regiones Activas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-light mb-2">
                  {estadisticas.usuarios}
                </div>
                <div className="text-sm text-gray-300">Usuarios Activos</div>
              </div>
            </div>

            {/* Lista de regiones */}
            <div className="space-y-4">
              {regiones.map((region) => (
                <div
                  key={region.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    regionSeleccionada === region.id
                      ? 'border-primary-light bg-primary-light bg-opacity-20'
                      : 'border-gray-600 hover:border-primary-light'
                  }`}
                  onClick={() => setRegionSeleccionada(region.id)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{region.nombre}</span>
                    <div className="w-3 h-3 bg-primary-light rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapaInteractivo;