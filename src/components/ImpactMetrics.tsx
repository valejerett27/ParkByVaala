import React from 'react';
import { motion } from 'framer-motion';
import IconMonitoreo from '../assets/icons/Icon_Instalacion.png';
import IconValidacion from '../assets/icons/Icon_Mantencion.png';
import IconEspacio from '../assets/icons/Icon_Uso.png';
import CelularImg from '../assets/icons/Celular1.png';

import IconApp from '../assets/icons/Icon_AppPago.png';
import { useNavigate } from "react-router-dom";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 }
};

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ImpactMetrics = () => {


  const beneficios = [
    { icon: IconMonitoreo, title: 'INSTALACIÓN INTEGRAL' },
    { icon: IconValidacion, title: 'MANTENCIÓN Y SOPORTE' },
    { icon: IconEspacio, title: 'FÁCIL USO PARA LOS USUARIOS' }
  ];
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">

      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerStagger}
        viewport={{ once: false }}
        className="pb-10 bg-[#004D7A] text-white"
      >
        <div className="section-container">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white py-8">
              ¿QUÉ <span className="text-gradient">OBTENDRÁS</span>?
            </h2>
            {/* <p className="text-xl text-[#022E46] max-w-4xl mx-auto">
              Accede a un ecosistema completo que transforma la gestión de estacionamientos con
              <span className="font-semibold"> soluciones inteligentes y conectadas</span>.
            </p> */}
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6 w-full overflow-hidden">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                className="bg-white/10 border border-white/10 p-6 rounded-lg text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  <img src={beneficio.icon} alt={beneficio.title} className="w-16 h-16 mx-auto max-w-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{beneficio.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center pb-24">
            <button
              onClick={() => navigate("/contacto")}
              className="text-white font-semibold uppercase py-6 px-8 rounded-full border border-white/20 shadow-inner bg-[linear-gradient(135deg,_#23739c_0%,_#3f8fb6_50%,_#1a5f88_100%)] hover:bg-[linear-gradient(135deg,_#1d5a7e_0%,_#347699_50%,_#144d6c_100%)] transition-colors duration-600"
            >
              Me interesa este servicio
            </button>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerStagger}
        viewport={{ once: false }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-8">

          <motion.div variants={fadeInUp} className="text-center mb-16" id="seccion-app">
            <div className="flex justify-center mb-6">
              <img
                src={IconApp}
                alt="Ícono APP de Pago"
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-md"
              />
            </div>
            <h2 className="text-3xl md:text-4xl uppercase font-extrabold text-[#006699] tracking-wider">
              APP de Pago
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}

            className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch max-w-7xl mx-auto"
          >

            <div
              className="w-full lg:w-1/2 bg-[#BBEEFF] flex items-center justify-center p-8 lg:p-12 relative"
            >
              <img
                src={CelularImg}
                alt="MiPark App en Celular"
                className="w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-xl transform lg:-rotate-6"
              />
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start">

              <h3 className="text-3xl md:text-4xl font-extrabold text-[#006699] uppercase mb-2 leading-tight">
                MIPARK BY VAALA
              </h3>

              <span className="block font-semibold text-2xl text-[#33CCFF] mb-8">
                ¡Ya Disponible!
              </span>

              <div className="space-y-5 text-gray-700 text-base md:text-lg font-medium leading-relaxed mb-12">
                <p>
                  <span className="font-semibold text-[#006699]">MiPark</span> —también conocida como la "app de pago" de Park by Vaala— es una aplicación que permite a los usuarios pagar su estacionamiento en las zonas habilitadas sin depender de operadores.
                </p>
                <p>
                  La app ofrece un sistema de pago rápido y seguro desde el celular. En ella puedes identificar la zona y la tarifa correspondiente, registrar múltiples patentes y administrar cada estacionamiento, revisando tiempos e historial de pagos.
                </p>
              </div>

              <a
                href="https://mipark.parkbyvaala.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#0099CC] to-[#33CCFF] text-white font-bold uppercase py-3.5 px-10 rounded-full text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-center"
              >
                VER MÁS
              </a>
            </div>

          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default ImpactMetrics;
