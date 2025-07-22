import React, { useState } from 'react';
import MapaChile from './MapaChile';
import AnimatedBackground from "../components/ui/AnimatedBackground";


const MapaInteractivo = () => {
  const [regionSeleccionada, setRegionSeleccionada] = useState('');

  const regiones = [
    { id: 'valparaiso', nombre: 'REGIÓN VALPARAÍSO' },
    { id: 'metropolitana', nombre: 'REGIÓN METROPOLITANA' },
    { id: 'ohiggins', nombre: "REGIÓN O'HIGGINS" },
    { id: 'araucania', nombre: 'REGIÓN ARAUCANÍA' },
  ];

  const estadisticas = {
    regiones: 5,
    usuarios: '+500',
  };

  return (
    <section className=" text-white py-20 relative overflow-hidden">
      <AnimatedBackground
        background="#0F172A"
        gradientColors={["#111827", "#0F172A", "#0B1120"]}
      />


      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl uppercase font-extrabold text-white mb-6">
            Nuestra <span className="text-gradient px-1">Red Nacional</span>
          </h2>
          <p className="text-xl mb-4 font-medium leading-none max-w-3xl mx-auto text-center">
            Con presencia consolidada en las principales regiones de Chile, Park by Vaala optimiza la gestión de estacionamientos, conectando personas, espacios y tecnología a lo largo del país.
          </p>

          <div className="w-20 h-1 bg-primary-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mapa real de Chile */}
          <div className="text-center bg-[#122239] p-3 rounded-xl hidden lg:block">
            <h3 className="bg-white/10 border border-white/20 text-white font-extrabold px-8 py-4 mt-3 rounded-full mx-auto inline-block">
              MAPA INTERACTIVO
              <span className="block text-gradient text-center">DE CHILE</span>
            </h3>

            <div className="w-full flex justify-center items-center">
              <div className="max-w-[300px] w-full">
                <MapaChile
                  selectedRegion={regionSeleccionada}
                  onSelectRegion={setRegionSeleccionada}
                />
              </div>
            </div>
          </div>

          {/* Panel de información */}
          <div className="space-y-8 bg-[#122239] p-3 rounded-xl">
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
                  onClick={() => setRegionSeleccionada(region.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${regionSeleccionada === region.id
                    ? 'border-primary-light bg-primary-light bg-opacity-20'
                    : 'border-gray-600 hover:border-primary-light'
                    }`}
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
