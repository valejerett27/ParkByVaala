import React from 'react';
import { Award, Lightbulb, Zap, Shield } from 'lucide-react';
import IconReconocimiento from '../assets/icons/RECONOCIMIENTOS-01.png';
import IconInnovacionAplicada from '../assets/icons/RECONOCIMIENTOS-INNOVACION.png';
import IconEficiencia from '../assets/icons/RECONOCIMIENTOS-IMPACTO.png';
import IconConfianza from '../assets/icons/RECONOCIMIENTOS-SATISFACCION.png';
import IconContech from '../assets/icons/RECONOCIMIENTO-TECNOLOGIAS.png';
import IconSostenibilidad from '../assets/icons/RECONOCIMIENTO-SOSTENIBILIDAD.png';
import IconExpansion from '../assets/icons/RECONOCIMIENTO-EXPANSION.png';
import ImgPremios from '../assets/bg/Premios.png';



const Reconocimientos = () => {
  const significados = [
    {
      icon: IconInnovacionAplicada,
      title: 'INNOVACIÓN APLICADA',
      description: 'Validación a nuestra capacidad de aplicar tecnología de forma concreta en la optimización de procesos urbanos y de movilidad.'
    },
    {
      icon: IconEficiencia,
      title: 'EFICIENCIA EN MOVILIDAD',
      description: 'Reconocimiento al impacto de Park en la mejora de la eficiencia operativa y el control de estacionamientos en tiempo real.'
    },
    {
      icon: IconConfianza,
      title: 'CONFIANZA DEL ECOSISTEMA',
      description: 'Respaldo por parte del ecosistema empresarial y tecnológico, al ofrecer una plataforma segura, transparente y escalable.'
    }
  ];

  const futuro = [
    {
      icon: IconContech,
      title: 'INTEGRACIÓN TERRITORIAL',
      description: 'Llevando nuestra solución a más regiones del país y nuevos territorios de Latinoamérica.'
    },
    {
      icon: IconSostenibilidad,
      title: 'NUEVAS TECNOLOGÍAS',
      description: 'Implementación de analítica avanzada y nuevas tecnologías para anticipar el flujo y optimizar decisiones.'
    },
    {
      icon: IconExpansion,
      title: 'MOVILIDAD SOSTENIBLE',
      description: 'Compromiso con un modelo de ciudad inteligente, eficiente, responsable y en armonía con el entorno.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003249] via-[#014d72] to-[#006699] text-white py-20">
        <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6">
          <img src={IconReconocimiento} alt="Logo Park" className="h-full w-auto" />
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full opacity-10 blur-3xl animate-pulse">
          </div>
          <div
            className="absolute top-20 right-10 w-48 h-48 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse">
          </div>
          <div className="absolute inset-0 bg-[url('/assets/img/bg/grid-light.svg')] bg-center bg-cover opacity-10"></div>
        </div>
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl uppercase font-extrabold mb-6">
            Seguimos
            <span className="text-primary-light text-gradient"> Avanzando</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl font-medium mx-auto leading-none">
            Hemos ganado el <span className="font-bold">PREMIO ASIVA 2025</span> en la categoría de <i>Innovación</i>
          </p>
        </div>
      </section>

      {/* Premio Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg card-hover border border-sky-100 text-center">
              <div className="inline-block bg-primary-light text-white px-4 py-2 rounded-full text-sm font-semibold">
                RECONOCIMIENTO A LA INNOVACIÓN
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                RECONOCIMIENTO A LA <br />
                <span className="text-gradient">INNOVACIÓN</span>
              </h2>
              <p className="text-lg text-[3F3F3F] leading-relaxed">
                <i>"Este reconocimiento no solo celebra una iniciativa en particular,
                  sino que también destaca el compromiso constante con la
                  <span className="font-semibold"> innovación y la excelencia</span> que caracteriza a nuestro equipo."</i>
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-primary-dark">Equipo Park by Vaala</p>
                <p className="text-[3F3F3F]">Desarrolladores de soluciones tecnológicas</p>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-300" data-aos="fade-left" data-aos-duration="800">
              <img src={ImgPremios} alt="Premio ASIVA 2025"
                className="rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105" />
              <p className="text-center text-sm text-[#3F3F3F] mt-2">Premio ASIVA 2025 - Categoría Innovación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Significado del Premio */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#022E46]">
              LO QUE <span className="text-gradient">SIGNIFICA</span> ESTE PREMIO
            </h2>
            <p className="text-xl text-[#022E46] pt-2 font-medium max-w-3xl mx-auto">
              Un <span className="font-bold">reconocimiento</span> que valida nuestro compromiso con la
              <b> innovación</b> y la <b>excelencia</b>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {significados.map((item, index) => (
              <div key={index} className="text-center space-y-4 bg-white p-8 rounded-3xl shadow-lg card-hover border border-sky-100 text-center">
                <div className="flex justify-center">

                  <img src={item.icon} alt="Logo Park" className="h-16 w-auto" />

                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-[3F3F3F] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuro */}
      <section className="text-white bg-[#004d7a] bg-grid-pattern py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¡VAMOS POR MÁS!
            </h2>
            <p className="text-xl max-w-4xl mx-auto">
              Estos reconocimientos son solo el comienzo de nuestro viaje hacia la excelencia.
              Continuamos <span className="font-semibold text-primary-light">innovando y desarrollando nuevas funcionalidades</span> para mantener
              nuestro liderazgo en el sector y ofrecer mejores soluciones tecnológicas del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futuro.map((item, index) => (
              <div key={index} className="bg-white/10  border border-white/10 p-6 rounded-lg text-center space-y-4">
                <div className="mx-auto mb-4 p-4 w-24 h-24 rounded-full flex items-center justify-center ">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-24 aspect-square object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>



          <div className="text-center mt-12">
            <button className="bg-white/10 border border-white/20 hover:bg-white hover:text-primary-dark text-white font-medium px-8 py-4 rounded-full transition-all duration-300">
              Próximamente más innovaciones
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reconocimientos;