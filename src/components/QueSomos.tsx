import React from 'react';
import PersonaImage from '../assets/img/persona.png';

import { motion } from 'framer-motion';
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 }
};
const QueSomos = () => {
  return (
    <section className="py-12 md:py-20 bg-white" id="mipark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Columna izquierda - Ilustración de persona */}
          <div className="lg:w-5/12 xl:w-2/5 order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] mx-auto">
              <img
                src={PersonaImage}
                alt="Persona usando MiPark"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="lg:w-7/12 xl:w-3/5 order-1 lg:order-2">
            {/* Ícono de pregunta y título */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#006699] to-[#33CCFF] rounded-full shadow-lg">
                  <span className="text-3xl md:text-6xl text-white font-bold text-blue-700">?</span>
                </div>
              </div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl text-[#006699] uppercase  max-w-2xl font-extrabold mb-6">
                ¿Qué es
                <span className="text-primary-light text-gradient px-1">MiPark?</span>
              </motion.h1>
            </div>

            {/* Descripción */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-bold">MIPark</span> —también conocida como la “app de pago” de Park by Vaala— es una aplicación que permite a los usuarios pagar su estacionamiento en las zonas habilitadas sin depender de operadores.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                La app ofrece un sistema de pago rápido y seguro desde el celular. En ella puedes identificar la zona y la tarifa correspondiente, registrar múltiples patentes y administrar cada estacionamiento, revisando tiempos, estudios e historial de pagos.
              </p>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default QueSomos;