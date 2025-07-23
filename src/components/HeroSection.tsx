import React from 'react';
import { MapPin } from 'lucide-react';
import IconPark from '../assets/img/isotipo_park_negativo.png';
import AnimatedBackground from "../components/ui/AnimatedBackground";
import IlustracionHero from '../assets/img/IlustracionHero.png';



const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 text-white">
  <AnimatedBackground />

  {/* Ilustración como decorativo a la derecha */}
  <img
    src={IlustracionHero}
    alt="Ilustración"
    className="hidden md:block absolute right-0 bottom-0 max-w-[400px] w-auto h-auto object-contain z-0 opacity-100"
  />

  {/* Contenedor de texto centrado */}
  <div className="relative z-10 pt-12 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
    {/* Logo */}
    <div className="h-32 flex items-center justify-center mb-6">
      <img src={IconPark} alt="Logo Park" className="h-full w-auto" />
    </div>

    {/* Título */}
    <h1 className="text-4xl md:text-6xl font-bold text-primary-light mb-6 animate-fade-in">
      CONECTIVIDAD,<br />
      CONTROL Y COBRO<br />
      <span className="text-white">EN UNA SOLA SOLUCIÓN</span>
    </h1>

    {/* Subtítulo */}
    <p className="text-xl md:text-2xl mb-12 animate-slide-up">
      En Park, nos mueve la <span className="font-semibold">innovación</span>, la <span className="font-semibold">eficiencia</span> y el <span className="font-semibold">diseño de herramientas</span> que hacen más simple, seguro y ordenado el uso de los espacios.
    </p>
  </div>
</section>

  );
};

export default HeroSection;