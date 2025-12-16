import React from 'react';
import { motion } from 'framer-motion';

// Assets
import Celular from '../assets/img/Celular.png';
import Auto from '../assets/img/Auto.png';
import fondoCeleste from '../assets/img/Fondo_celeste.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 }
};

const HeroSection = () => {
  return (
    // CAMBIO 1: Quitamos 'justify-end' y usamos 'justify-center'. 
    // Esto evita que todo se pegue abajo en móviles.
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center">
      
      {/* Fondo de Ondas (Absolute Bottom) */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img 
          src={fondoCeleste} 
          alt="Fondo Ondas" 
          className="w-full h-auto max-h-[50vh] md:max-h-[100vh] object-cover object-top" 
        />
      </div>

      {/* CAMBIO 2: Aumentamos el padding-top (pt-24) en móvil.
         Como tu Header es 'fixed', necesitamos bajar el contenido para que no quede tapado arriba.
      */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12 md:pt-0 md:pb-0">
        
        {/* BLOQUE SUPERIOR (GRID 2 COLUMNAS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          
          {/* COLUMNA IZQUIERDA: CELULAR */}
          {/* Agregamos 'order-last lg:order-first' si quisieras que en móvil el texto vaya primero, 
              pero según tu diseño el celular va arriba, así que lo dejamos normal. */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[240px] md:max-w-[300px] lg:max-w-[350px]"
            >
              <img
                src={Celular}
                alt="App Móvil"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: TEXTO */}
          <div className="text-left flex flex-col items-center lg:items-start">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#006699] uppercase font-extrabold mb-4 leading-tight text-center lg:text-left mt-6 lg:mt-0">
                MIPARK LLEGA
                <span className="text-[#33CCFF] block">PRONTO</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 mb-8 text-center lg:text-left px-4 lg:px-0">
                Una solución gratuita, más rápida y con muchos beneficios para ti.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-[#006699] to-[#33CCFF] text-white uppercase px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform z-20 relative">
                  DESCARGA LA APP
                </button>
              </div>
            </motion.div>
          </div>

        </div>

        {/* BLOQUE INFERIOR (AUTO) */}
        <div className="w-full flex justify-center mt-4 md:mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-[280px] md:max-w-[600px] lg:max-w-[800px]"
          >
            <img 
              src={Auto} 
              alt="Auto en carretera" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;