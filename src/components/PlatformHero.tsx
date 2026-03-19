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
import imgMaqueta2 from "../assets/bg/img_maqueta2.png";
import imgMaqueta3 from "../assets/bg/img_maqueta3.png";
import IconSoftware from '../assets/icons/Icon_Software.png';
import IconHardware from '../assets/icons/Icon_Hardware.png';
import camarareconocimiento from '../assets/bg/CamaraReconocimiento.png';
import sistemaIntegrado from '../assets/bg/SistemaIntegrado.png';
import sistemaintercomunicacion from '../assets/bg/SistemaInter.png';
import IconSoftware2 from '../assets/icons/Software-icon1.png';
import IconHardware2 from '../assets/icons/Hardware-icon1.png';
import IconApp from '../assets/icons/App-icon1.png';


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
      imagen: imgMaqueta2
    },
    {
      title: 'Barreras',
      descripcion: 'Controlan de forma segura y automática el flujo vehicular, optimizando la operación del estacionamiento.',
      imagen: imgMaqueta3
    }
  ];
  const sistemas = [
    {
      title: 'Cámara de reconocimiento de patentes',
      descripcion: 'Captura e identifica placas patente al ingreso y salida, agilizando el proceso y aumentando la seguridad.',
      imagen: camarareconocimiento
    },
    {
      title: 'Sistema integrado de tarjeta',
      descripcion: 'Permite accesos mediante tarjetas con tecnología RFID, mejorando la experiencia del usuario y el control de entradas.',
      imagen: sistemaIntegrado
    },
    {
      title: 'Sistema de intercomunicación',
      descripcion: 'Comunicación directa entre usuarios y operadores para resolver incidencias o solicitar asistencia en tiempo real.',
      imagen: sistemaintercomunicacion
    }
  ];
  const navigate = useNavigate();
  const unidadesNegocio = [
    {
      image: IconSoftware2,
      label: "SOFTWARE",
    },
    {
      image: IconHardware2,
      label: "HARDWARE",
    },
    {
      image: IconApp,
      label: "APP DE PAGO",
    },
  ];
  return (
    <div className="overflow-x-hidden bg-[#f9fafb]">
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="bg-gradient-to-br from-[#003249] via-[#014d72] to-[#006699] text-white pb-32 pt-36 relative overflow-hidden"
      >
        {/* Efectos de fondo */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-48 h-48 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('/assets/img/bg/grid-light.svg')] bg-center bg-cover opacity-10"></div>
        </div>

        {/* Contenido de texto */}
        <div className="relative z-10 section-container text-center mt-6 px-4">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl uppercase mx-auto max-w-3xl font-extrabold mb-6 leading-tight"
          >
            NUESTRAS <span className="text-[#4FC3F7]">UNIDADES</span><br />
            DE <span className="text-[#4FC3F7]">NEGOCIO</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white max-w-3xl font-medium mx-auto leading-relaxed"
          >
            Ofrecemos un <span className="font-bold">sistema de gestión de estacionamientos flexible y modular.</span> Puedes elegir <span className="font-bold">uno, dos o todos nuestros servicios,</span> según lo que mejor se adapte a tu operación.
          </motion.p>
        </div>
      </motion.section>
      <div className="relative z-20 -mt-20 sm:-mt-24 mb-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 md:gap-24"
        >
          {unidadesNegocio.map((unidad, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Contenedor del ícono circular */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center transition-all duration-300">
                <img
                  src={unidad.image}
                  alt={unidad.label}
                  className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                />
              </div>

              {/* Texto debajo del ícono */}
              <span className="text-[#006699] font-extrabold tracking-wide uppercase text-sm sm:text-base">
                {unidad.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerStagger}
        viewport={{ once: false }}
        className=" bg-[#f9fafb]"
      >
        <div className="">
          <motion.div
            variants={fadeInUp}
            className=" text-center font-extrabold max-w-4xl mx-auto py-6 px-4"
          >
            <h2 className="text-3xl md:text-4xl uppercase font-extrabold text-[#006699] my-6">
              Nuestra Propuesta combina <span className="text-gradient">Tecnología, Diseño </span>y <span className="text-gradient">Experiencia de Usuario</span>
            </h2>

            <span className="block py-3 pb-12 font-medium text-lg text-[#006699]">
              Para transformar la forma en que se gestionan los <span className="font-semibold">espacios de estacionamiento.</span>
            </span>


          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-[#edeeef] text-center font-extrabold  py-6  px-4"
          >
            <div className="flex justify-center my-10">
              <img src={IconSoftware2} alt="APP de Pago" className="w-16 h-16 mx-auto max-w-full object-contain" />
            </div>

            <h2 className="text-3xl md:text-4xl uppercase mt-2 font-extrabold text-[#006699] mb-4">
              Software
            </h2>

            <span className="block font-semibold text-[#33CCFF] text-lg my-8 max-w-md mx-auto">
              Desarrollo de software personalizado para gestión de estacionamientos
            </span>

            <span className="block py-3 mt-4 font-medium text-lg text-gray-700">
              Creamos <span className="font-semibold">soluciones tecnológicas </span>propias para responder a los desafíos de movilidad urbana.
            </span>

            <span className="block max-w-4xl mx-auto py-3 font-medium text-lg text-gray-700">
              Nuestro sistema se adapta a cada tipo de operación, integrando <span className="font-semibold">plataformas web, backend </span>escalable y una <span className="font-semibold">aplicación móvil</span> pensada para el usuario.
            </span>

            <span className="block py-3 font-medium text-lg text-gray-700">
              Toda la interfaz está diseñada bajo criterios de <span className="font-semibold">experiencia de usuario (UX) </span>y <span className="font-semibold">eficiencia operativa.</span>
            </span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-[#edeeef] text-center font-extrabold  py-6  px-4"
          >
            <h2 className="text-3xl md:text-4xl uppercase mt-8 font-extrabold text-[#006699] mb-8">
              Su funcionamiento se basa en
            </h2>

            <span className="font-bold text-2xl lg:text-4xl py-3 px-6 my-3 text-white tracking-wide bg-gradient-to-r from-[#33CCFF] to-[#209ACE] font-extrabold rounded-2xl inline-block">
              TRES PROCESOS CLAVE
            </span>

          </motion.div>


          {/* SECCIÓN FONDO COMPLETO */}
          <section className="w-full bg-[#edeeef] py-12">

            {/* CONTENEDOR CENTRAL DE LAS CARDS */}
            <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
              {funcionalidades.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-sky-100 text-center"
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

          </section>




        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerStagger}
        viewport={{ once: false }}
        className="pb-10 bg-[#edeeef] text-white"
      >
        <div className="section-container">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#006699] py-12">
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

          <motion.div variants={fadeInUp} className="text-center py-12">
            <button
              onClick={() => navigate("/contacto")}
              className="text-white font-semibold uppercase py-6  px-8 rounded-full border border-white/20 shadow-inner bg-[linear-gradient(135deg,_#23739c_0%,_#3f8fb6_50%,_#1a5f88_100%)] hover:bg-[linear-gradient(135deg,_#1d5a7e_0%,_#347699_50%,_#144d6c_100%)] transition-colors duration-600"
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
        className="pb-10 bg-[#004D7A] text-white"
      >
        <div className="section-container">

          <motion.div
            variants={fadeInUp}
            className="text-center font-extrabold max-w-2xl mx-auto pt-4 px-4"
          >
            <div className="flex justify-center my-10">
              <img src={IconHardware2} alt="APP de Pago" className="w-16 h-16 mx-auto max-w-full object-contain" />
            </div>


            <div className="max-w-2xl mx-auto text-center mt-12 px-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase my-4">
                Control de Acceso Vehicular
              </h2>
              <span className=" font-semibold text-[#33CCFF] text-lg max-w-sm mx-auto  rounded-full">
                Tecnología robusta con identidad de marca
              </span>
              <p className="text-lg  font-medium text-white my-8">
                Disponemos de{" "}
                <span className="font-semibold">máquinas físicas</span>{" "}
                que permiten el control automático de accesos.</p>
              <p className="text-lg  font-medium text-white my-8">
                Todo el hardware es{" "}
                <span className="font-semibold">instalado por nunestro equipo técnico y brandeado por la imagen de Park By Vaala</span>{" "}
                generando coherencia visual y profesionalismo en terreno.</p>
            </div>

          </motion.div>

          <motion.section
            className="bg-white/10 border border-white/10 rounded-lg shadow-lg mt-12 px-6 py-12 w-full overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* 1. Título y Subtítulo: Ahora con max-w-3xl para que no sea infinito, pero permitiendo que el grid de abajo crezca */}
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-4 leading-tight">
                Sistema de Control de Acceso Vehicular
              </h2>
              <p className="text-lg md:text-xl font-medium text-white/90">
                Una solución integral que combina{" "}
                <span className="font-semibold text-[#4FC3F7]">ticketeras de entrada y salida junto con barreras automáticas,</span>{" "}
                diseñada para gestionar de manera eficiente el flujo de vehículos.
              </p>
            </div>

            {/* 2. Grid de tarjetas: Al no estar dentro de un flex horizontal, ahora tiene el 100% del ancho del contenedor */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {controlesAccesos.map((controlAcceso, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-xl font-extrabold text-white uppercase mb-3">
                      {controlAcceso.title}
                    </h3>
                    <p className="text-sm md:text-md text-white/80 mb-6">
                      {controlAcceso.descripcion}
                    </p>
                  </div>
                  <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-lg">
                    <img
                      src={controlAcceso.imagen}
                      alt={controlAcceso.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>


          <motion.div className="grid grid-cols-1  mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6  w-full overflow-hidden">

            {sistemas.map((sistema, index) => (
              <motion.div
                key={index}
                className=" p-8 bg-white/10 border border-white/10 card-hover rounded-lg shadow-lg text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >

                <h3 className="text-lg font-bold uppercase text-white mb-5">{sistema.title}</h3>
                <p className="text-md font-small text-white mb-2">{sistema.descripcion}</p>
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
