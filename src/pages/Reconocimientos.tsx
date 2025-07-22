import React, { useEffect } from 'react';
import IconReconocimiento from '../assets/icons/RECONOCIMIENTOS-01.png';
import IconInnovacionAplicada from '../assets/icons/RECONOCIMIENTOS-INNOVACION.png';
import IconEficiencia from '../assets/icons/RECONOCIMIENTOS-IMPACTO.png';
import IconConfianza from '../assets/icons/RECONOCIMIENTOS-SATISFACCION.png';
import IconContech from '../assets/icons/RECONOCIMIENTO-TECNOLOGIAS.png';
import IconSostenibilidad from '../assets/icons/RECONOCIMIENTO-SOSTENIBILIDAD.png';
import IconExpansion from '../assets/icons/RECONOCIMIENTO-EXPANSION.png';
import ImgPremios from '../assets/bg/Premios.png';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const significados = [
  {
    icon: IconInnovacionAplicada,
    title: 'INNOVACIÓN APLICADA',
    description:
      'Validación a nuestra capacidad de aplicar tecnología de forma concreta en la optimización de procesos urbanos y de movilidad.',
  },
  {
    icon: IconEficiencia,
    title: 'EFICIENCIA EN MOVILIDAD',
    description:
      'Reconocimiento al impacto de Park en la mejora de la eficiencia operativa y el control de estacionamientos en tiempo real.',
  },
  {
    icon: IconConfianza,
    title: 'CONFIANZA DEL ECOSISTEMA',
    description:
      'Respaldo por parte del ecosistema empresarial y tecnológico, al ofrecer una plataforma segura, transparente y escalable.',
  },
];

const futuro = [
  {
    icon: IconContech,
    title: 'INTEGRACIÓN TERRITORIAL',
    description:
      'Llevando nuestra solución a más regiones del país y nuevos territorios de Latinoamérica.',
  },
  {
    icon: IconSostenibilidad,
    title: 'NUEVAS TECNOLOGÍAS',
    description:
      'Implementación de analítica avanzada y nuevas tecnologías para anticipar el flujo y optimizar decisiones.',
  },
  {
    icon: IconExpansion,
    title: 'MOVILIDAD SOSTENIBLE',
    description:
      'Compromiso con un modelo de ciudad inteligente, eficiente, responsable y en armonía con el entorno.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Función personalizada para el confeti
const fireConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    spread: 90,
    ticks: 100,
    zIndex: 10000,
  };

  // Reemplaza la función fireConfetti con esta versión
  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      spread: 90,
      ticks: 100,
      zIndex: 10000,
    };

    function fire(particleRatio: number, opts: {
      spread?: number;
      startVelocity?: number;
      decay?: number;
      scalar?: number;
      particleCount?: number;
      // Agrega otras opciones que necesites
    }) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };
};

const Reconocimientos = () => {
  // Disparar confeti cuando el componente se monta
  useEffect(() => {
    // Pequeño retraso para que coincida con la animación de entrada
    const timer = setTimeout(() => {
      fireConfetti();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Función para manejar el clic en el botón de confeti
  const handleConfettiClick = () => {
    fireConfetti();
  };

  return (
    <div className="overflow-hidden max-w-full">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="bg-gradient-to-br from-[#003249] via-[#014d72] to-[#006699] text-white py-20 relative overflow-hidden"
      >
        {/* Canvas para el confeti (se crea automáticamente) */}

        <motion.div
          variants={fadeInUp}
          className="w-32 h-32 flex items-center justify-center mx-auto my-6"
        >
          <img src={IconReconocimiento} alt="Logo Park" className="h-full w-auto" />
        </motion.div>

        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-48 h-48 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('/assets/img/bg/grid-light.svg')] bg-center bg-cover opacity-10"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl uppercase font-extrabold mb-6"
          >
            Seguimos <span className="text-primary-light text-gradient"> Avanzando</span>
          </motion.h1>
          <motion.p
            variants={fadeInRight}
            className="text-xl md:text-2xl mb-8 max-w-4xl font-medium mx-auto leading-none"
          >
            Hemos ganado el <span className="font-bold">PREMIO ASIVA 2025</span> en la categoría de <i>Innovación</i>
          </motion.p>

          {/* Botón para activar confeti manualmente */}
          {/* <motion.button
            onClick={handleConfettiClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            ¡Celebrar con confeti!
          </motion.button> */}
        </div>
      </motion.section>

      {/* Premio Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false }}
        variants={containerStagger}
        className="py-20 bg-gray-50"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              className="space-y-6 bg-white p-8 rounded-lg shadow-lg card-hover border border-sky-100 text-center"
            >
              <div className="inline-block bg-primary-light text-white px-4 py-2 rounded-full text-sm font-semibold">
                RECONOCIMIENTO A LA INNOVACIÓN
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                RECONOCIMIENTO A LA <br />
                <span className="text-gradient">INNOVACIÓN</span>
              </h2>
              <p className="text-lg text-[#3F3F3F] leading-relaxed">
                <i>
                  "Este reconocimiento no solo celebra una iniciativa en particular,
                  sino que también destaca el compromiso constante con la
                  <span className="font-semibold"> innovación y la excelencia</span> que caracteriza a nuestro equipo."
                </i>
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-primary-dark">Equipo Park by Vaala</p>
                <p className="text-[#3F3F3F]">Desarrolladores de soluciones tecnológicas</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <img
                src={ImgPremios}
                alt="Premio ASIVA 2025"
                className="rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
              />
              <p className="text-center text-sm text-[#3F3F3F] mt-2">
                Premio ASIVA 2025 - Categoría Innovación
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Significado del Premio */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerStagger}
        viewport={{ once: false }}
        className="py-20 bg-[#F3F4F6]"
      >
        <div className="section-container">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#022E46]">
              LO QUE <span className="text-gradient">SIGNIFICA</span> ESTE PREMIO
            </h2>
            <p className="text-xl text-[#022E46] pt-2 font-medium max-w-3xl mx-auto">
              Un <span className="font-bold">reconocimiento</span> que valida nuestro compromiso con la
              <b> innovación</b> y la <b>excelencia</b>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {significados.map((item, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4 bg-white p-8 rounded-3xl shadow-lg card-hover border border-sky-100"
              >
                <div className="flex justify-center">
                  <img src={item.icon} alt={item.title} className="h-16 w-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-[#3F3F3F] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Futuro */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={containerStagger}
        viewport={{ once: false }}
        className="text-white bg-[#004d7a] bg-grid-pattern py-20"
      >
        <div className="section-container">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¡VAMOS POR MÁS!</h2>
            <p className="text-xl max-w-4xl mx-auto">
              Estos reconocimientos son solo el comienzo de nuestro viaje hacia la excelencia.
              Continuamos <span className="font-semibold text-primary-light">innovando y desarrollando nuevas funcionalidades</span> para mantener
              nuestro liderazgo en el sector y ofrecer mejores soluciones tecnológicas del mercado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futuro.map((item, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ duration: 0.5 }}
                className="bg-white/10 border border-white/10 p-6 rounded-lg text-center space-y-4"
              >
                <div className="mx-auto mb-4 p-4 w-24 h-24 rounded-full flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="h-24 aspect-square object-contain" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <button
              onClick={handleConfettiClick}
              className="bg-white/10 border border-white/20 hover:bg-white hover:text-primary-dark text-white font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              Próximamente más innovaciones
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Reconocimientos;