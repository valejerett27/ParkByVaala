import React from 'react';
import { MapPin } from 'lucide-react';
import IconPark from '../assets/img/isotipo_park_negativo.png';
import AnimatedBackground from "../components/ui/AnimatedBackground";



const HeroSection = () => {
  return (
    <section className=" text-white py-20 relative overflow-hidden">
      <AnimatedBackground />
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container text-center relative z-10">
        {/* Logo principal */}
        <div className="mb-8 mt-6">
          <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <img src={IconPark} alt="Logo Park" className="h-full w-auto" />
          </div>
        </div>


        {/* Título principal */}
        <h1 className="text-4xl text-primary-light md:text-6xl font-bold mb-6 animate-fade-in">
          CONECTIVIDAD,<br />
          CONTROL Y COBRO<br />
          <span className="text-white">EN UNA SOLA SOLUCIÓN</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto animate-slide-up">
          En Park, nos mueve la <span className="font-semibold">innovación</span>, la <span className="font-semibold">eficiencia</span> y el <span className="font-semibold">diseño de herramientas</span> que
          hacen más simple, seguro y ordenado el uso de los espacios.
        </p>

        {/* Indicador de scroll */}
        
        <div className="absolute mt-3 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;