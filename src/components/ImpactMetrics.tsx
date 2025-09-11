import React from 'react';
import { motion } from 'framer-motion';
import IconMonitoreo from '../assets/icons/ICON_01.png';
import IconValidacion from '../assets/icons/ICON_02.png';
import IconEspacio from '../assets/icons/ICON_03.png';
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
        className="pb-10 bg-gray-50"
      >
        <div className="section-container">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#006699] py-8">
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
                className="bg-white p-8 rounded-lg shadow-lg card-hover border border-sky-100 text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  <img src={beneficio.icon} alt={beneficio.title} className="w-16 h-16 mx-auto max-w-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-[#006699] mb-2">{beneficio.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <button
              onClick={() => navigate("/contacto")}
              className="text-white font-semibold uppercase py-6 px-8 rounded-full border border-white/20 shadow-inner bg-[linear-gradient(135deg,_#23739c_0%,_#3f8fb6_50%,_#1a5f88_100%)] hover:bg-[linear-gradient(135deg,_#1d5a7e_0%,_#347699_50%,_#144d6c_100%)] transition-colors duration-600"
            >
              Me interesa este servicio
            </button>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center font-extrabold">
            <div className="w-20 h-1 bg-[#0EA5E9] mx-auto mt-6"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-[#006699] to-[#33CCFF] rounded-full mx-auto mt-6"></div>
            <h2 className="text-3xl md:text-4xl uppercase mt-2 font-extrabold text-[#006699] mb-4">
              APP de Pago
            </h2>
            <span className="block  font-medium max-w-sm mx-auto  text-[#33CCFF]">
              ¡Proximamente!
            </span>

            <span className="block py-3 my-6 font-medium text-lg text-gray">
              Pronto dispondremos de nuestra <span className="font-semibold">app de pago </span>para que los usuarios
              puedan gestionar su experiencia de estacionamiento directamente desde
              el celular: <span className="font-semibold">pagar, revisar historial y mucho más.
              </span>
            </span>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default ImpactMetrics;
