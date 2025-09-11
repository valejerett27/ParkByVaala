import React from 'react';
import { motion } from 'framer-motion';
import IconGestion from '../assets/icons/PC-GESTION_NEGATIVO.png';
import IconSupervision from '../assets/icons/PC-SUPERVISION_NEGATIVO.png';
import IconSeguimiento from '../assets/icons/PC-SEGUIMIENTO_NEGATIVO.png';
import IconMonitoreo from '../assets/icons/ICON_01.png';
import IconValidacion from '../assets/icons/ICON_02.png';
import IconEspacio from '../assets/icons/ICON_03.png';
import IconVentas from '../assets/icons/ICON_04.png';
import IconVerticales from '../assets/icons/ICON_05.png';
import IconCmunicacion from '../assets/icons/ICON_06.png';
import { useNavigate } from "react-router-dom";
import imgMaqueta from "../assets/bg/img_maqueta.png";


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

const PlatformHero = () => {
  const funcionalidades = [
    {
      icon: IconGestion,
      title: 'GESTIÓN',
      description: 'Plataforma digital para la gestión eficiente de estacionamientos. Simplifica la operación y mejora la experiencia.',
      number: '1'
    },
    {
      icon: IconSupervision,
      title: 'SUPERVISIÓN',
      description: 'Permite controlar en tiempo real el funcionamiento de cada local. Identifica problemas y optimiza la operación.',
      number: '2'
    },
    {
      icon: IconSeguimiento,
      title: 'SEGUIMIENTO',
      description: 'Analiza datos, genera reportes y mejora el desempeño general gracias a herramientas automatizadas.',
      number: '3'
    }
  ];

  const beneficios = [
    { icon: IconMonitoreo, title: 'SOPORTE, CAPACITACIÓN Y ACOMPAÑAMIENTO' },
    { icon: IconValidacion, title: 'VALIDACIÓN POR DIRECCIÓN DEL TRABAJO' },
    { icon: IconEspacio, title: 'ESPACIO PARA TUS CLIENTES' },
    { icon: IconVentas, title: 'VENTA ENLAZADA AL SERVICIO DE IMPUESTOS INTERNOS' },
    { icon: IconVerticales, title: 'NUEVAS VERTICALES DE NEGOCIO' },
    { icon: IconCmunicacion, title: 'COMUNICACIÓN DIRECTA CON TUS CLIENTES' }
  ];
  const controlesAccesos = [
    {
      title: 'Ticketera Entrada',
      descripcion: 'Dispositivo de acceso que emite tickets al ingreso del estacionamiento. Compatible con sistemas de validación y lectura digital.',
      imagen: imgMaqueta
    },
    {
      title: 'Ticketera Salida',
      descripcion: 'Permite la salida del vehículo mediante validación del ticket. Integración total con nuestra plataforma de gestión.',
      imagen: imgMaqueta
    },
    {
      title: 'Barreras',
      descripcion: 'Controlan de forma segura y automática el flujo vehicular, optimizando la operación del estacionamiento.',
      imagen: imgMaqueta
    }
  ];
  const sistemas = [
    {
      title: 'Cámara de reconocimiento de patentes',
      descripcion: 'Captura e identifica placas patente al ingreso y salida, agilizando el proceso y aumentando la seguridad.',
      imagen: imgMaqueta
    },
    {
      title: 'Sistema integrado de tarjeta',
      descripcion: 'Permite accesos mediante tarjetas RFID o códigos, mejorando la experiencia del usuario y el control de entradas.',
      imagen: imgMaqueta
    },
    {
      title: 'Sistema de intercomunicación',
      descripcion: 'Comunicación directa entre usuarios y operadores para resolver incidencias o solicitar asistencia en tiempo real.',
      imagen: imgMaqueta
    }
  ];
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        // className="bg-gradient-to-br from-[#003249] via-[#014d72] to-[#006699] text-white mt-[2rem] pt-20 pb-6"
        className="bg-gradient-to-br from-[#003249] via-[#014d72] to-[#006699] text-white pb-20 pt-36 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-48 h-48 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('/assets/img/bg/grid-light.svg')] bg-center bg-cover opacity-10"></div>
        </div>
        <div className="section-container  text-center mt-6">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl uppercase mx-auto max-w-2xl font-extrabold mb-6">
            Nuestras
            <span className="text-primary-light text-gradient px-1">Unidades</span> de Negocio
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-white max-w-2xl font-medium mx-auto leading-none">
            Ofrecemos un <span className="font-bold">sistema de gestión de estacionamientos flexible y modular.</span> Puedes elegir  <span className="font-bold">uno, dos o todos nuestros serivicios,</span> según lo que mejor se adapte a tu operación.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerStagger}
        viewport={{ once: false }}
        className="py-10 bg-gray-50"
      >
        <div className="section-container">
          <motion.div
            variants={fadeInUp}
            className="text-center font-extrabold max-w-4xl mx-auto px-4"
          >
            <h2 className="text-3xl md:text-4xl uppercase font-extrabold text-[#006699] my-6">
              Nuestra Propuesta combina <span className="text-gradient">Tecnología, Diseño </span>y <span className="text-gradient">Experiencia de Usuario</span>
            </h2>

            <span className="block py-3 font-medium text-lg text-[#006699]">
              Para transformar la forma en que se gestionan los <span className="font-semibold">espacios de estacionamiento.</span>
            </span>

            <div className="w-20 h-1 bg-[#0EA5E9] mx-auto mt-6"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-[#006699] to-[#33CCFF] rounded-full mx-auto mt-6"></div>

            <h2 className="text-3xl md:text-4xl uppercase mt-2 font-extrabold text-[#006699] mb-4">
              Software
            </h2>

            <span className="block font-medium text-[#33CCFF] my-8 max-w-md mx-auto">
              Desarrollo de software personalizado para gestión de estacionamientos
            </span>

            <span className="block py-3 mt-4 font-medium text-lg text-gray-700">
              Creamos <span className="font-semibold">soluciones tecnológicas </span>propias para responder a los desafíos de movilidad urbana.
            </span>

            <span className="block py-3 font-medium text-lg text-gray-700">
              Nuestro sistema se adapta a cada tipo de operación, integrando <span className="font-semibold">plataformas web, backend </span>escalable y una <span className="font-semibold">aplicación móvil</span> pensada para el usuario.
            </span>

            <span className="block py-3 font-medium text-lg text-gray-700">
              Toda la interfaz está diseñada bajo criterios de <span className="font-semibold">experiencia de usuario (UX) </span>y <span className="font-semibold">eficiencia operativa.</span>
            </span>

            <h2 className="text-3xl md:text-4xl uppercase mt-8 font-extrabold text-[#006699] mb-8">
              Su funcionamiento se basa en
            </h2>

            <span className="font-bold text-2xl lg:text-4xl py-3 px-6 my-3 text-white tracking-wide bg-gradient-to-r from-[#33CCFF] to-[#209ACE] font-extrabold rounded-2xl inline-block">
              TRES PROCESOS CLAVE
            </span>

            <div className="w-20 h-1 bg-[#0EA5E9] mx-auto mt-6"></div>
          </motion.div>


          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-6 pb-12 px-6 overflow-hidden">
            {funcionalidades.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg card-hover border border-sky-100 text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#006699] text-white rounded-full flex items-center justify-center font-bold">
                    {item.number}
                  </div>
                  <div className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] mx-auto mb-4 p-4 w-16 h-16 rounded-full">
                    <img src={item.icon} alt={item.title} className="w-12 mx-auto" />
                  </div>
                </div>
                <h3 className="text-xl uppercase font-bold text-[#006699] mb-4">{item.title}</h3>
                <p className="text-[#006699] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#006699] py-6">
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
                <h3 className="text-lg font-bold uppercase text-[#006699] mb-2">{beneficio.title}</h3>
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
          <motion.div
            variants={fadeInUp}
            className="text-center font-extrabold max-w-4xl mx-auto px-4"
          >
            <div className="w-20 h-1 bg-[#0EA5E9] mx-auto mt-6"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-[#006699] to-[#33CCFF] rounded-full mx-auto mt-6"></div>

            <h2 className="text-3xl md:text-4xl uppercase my-8 font-extrabold text-[#006699]">
              Sistema de Control de acceso vehicular
            </h2>
            <span className="block py-3 mt-8 font-medium text-lg text-[#006699] mb-8">
              Una solución integral que combina <span className="font-semibold">ticketeras de entrada y salida junto
                con barreras automáticas, </span>diseñada para gestionar de manera eficiente el flujo de vehículos dentro y fuera de los estacionamientos.
            </span>
            <span className=" font-medium text-[#33CCFF] max-w-sm mx-auto border border-[#006699] p-2 rounded-full">
              Este sistema permite:
            </span>

            <ul className="text-left my-8 space-y-3 text-[#006699] text-lg font-semibold list-disc list-inside">
              <li>Emisión y validación de tickets con código QR para mayor seguridad.</li>
              <li>Control automatizado de acceso y salida, reduciendo errores humanos.</li>
              <li>Operación confiable y continua, adaptada a diferentes tipos de estacionamientos.</li>
            </ul>

          </motion.div>

          <motion.div className="grid grid-cols-1 bg-white rounded-lg shadow-lg border mt-4 border-sky-100 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6 w-full overflow-hidden">
            {controlesAccesos.map((controlAcceso, index) => (
              <motion.div
                key={index}
                className=" p-8  card-hover  text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >

                <h3 className="text-lg font-bold text-[#006699] uppercase mb-5">{controlAcceso.title}</h3>
                <p className="text-md font-small text-[#006699] mb-4">{controlAcceso.descripcion}</p>
                <img src={controlAcceso.imagen} alt="imagen" className='rounded-lg' />
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-1 bg-white mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6 rounded-lg shadow-lg w-full overflow-hidden">
            {sistemas.map((sistema, index) => (
              <motion.div
                key={index}
                className=" p-8  card-hover  text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >

                <h3 className="text-lg font-bold uppercase text-[#006699] mb-5">{sistema.title}</h3>
                <p className="text-md font-small text-[#006699] mb-2">{sistema.descripcion}</p>
                <img src={sistema.imagen} alt="imagen" className='rounded-lg' />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PlatformHero;
