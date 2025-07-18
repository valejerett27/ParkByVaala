import React from 'react';
import { Play } from 'lucide-react';

const QueSomos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            ¿QUÉ ES <span className="text-gradient">PARK BY VAALA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Una <span className="font-semibold text-primary-dark">solución tecnológica integral para la gestión y control eficiente</span> de 
            estacionamientos, orientada al <span className="font-semibold text-primary-dark">cobro oportuno</span>, la <span className="font-semibold text-primary-dark">prevención de fraudes</span> y la 
            <span className="font-semibold text-primary-dark"> valorización del uso del espacio</span>.
          </p>
          <div className="w-20 h-1 bg-primary-light mx-auto mt-8"></div>
        </div>

        {/* Video/Imagen principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Demostración de Park by Vaala" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="bg-primary-light hover:bg-primary-dark text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 right-4 bg-primary-light text-white px-3 py-1 rounded-full text-sm font-medium">
              Activar Sonido
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueSomos;