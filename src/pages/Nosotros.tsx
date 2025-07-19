import React from 'react';
import { Search, Eye, TrendingUp } from 'lucide-react';
import IconGestion from '../assets/icons/PC-GESTION_NEGATIVO.png';
import IconSupervision from '../assets/icons/PC-SUPERVISION_NEGATIVO.png';
import IconSeguimiento from '../assets/icons/PC-SEGUIMIENTO_NEGATIVO.png';
import IconMonitoreo from '../assets/icons/ICON_01.png';
import IconValidacion from '../assets/icons/ICON_02.png';
import IconEspacio from '../assets/icons/ICON_03.png';
import IconVentas from '../assets/icons/ICON_04.png';
import IconVerticales from '../assets/icons/ICON_05.png';
import IconCmunicacion from '../assets/icons/ICON_06.png';

const Nosotros = () => {
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
    {
      icon: IconMonitoreo,
      title: 'MONITOREO EN TIEMPO REAL',
      // description: 'Control continuo de operaciones'
    },
    {
      icon: IconValidacion,
      title: 'VALIDACIÓN POR DIRECCIÓN DEL TRABAJO',
      // description: 'Cumplimiento normativo garantizado'
    },
    {
      icon: IconEspacio,
      title: 'ESPACIO PARA TUS CLIENTES',
      // description: 'Optimización de la experiencia del usuario'
    },
    {
      icon: IconVentas,
      title: 'VENTA ENLAZADA AL SERVICIO DE IMPUESTOS INTERNOS',
      // description: 'Integración fiscal automática'
    },
    {
      icon: IconVerticales,
      title: 'NUEVAS VERTICALES DE NEGOCIO',
      // description: 'Expansión de oportunidades comerciales'
    },
    {
      icon: IconCmunicacion,
      title: 'COMUNICACIÓN DIRECTA CON TUS CLIENTES',
      // description: 'Canal directo de atención y soporte'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003249] via-[#014d72] to-[#006699] text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full opacity-10 blur-3xl animate-pulse">
          </div>
          <div
            className="absolute top-20 right-10 w-48 h-48 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse">
          </div>
          <div className="absolute inset-0 bg-[url('/assets/img/bg/grid-light.svg')] bg-center bg-cover opacity-10"></div>
        </div>
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            ¿CÓMO FUNCIONA <br />
            <span className="text-primary-light">PARK BY VAALA</span>?
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl font-medium mx-auto leading-none">
            Opera a través de una <span className="font-bold">plataforma digital</span>, diseñada para facilitar la <span className="font-bold">gestión de estacionamientos</span> de manera eficiente, segura y ordenada.
          </p>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16 font-extrabold">
            <h2 className="block titulo text-4xl text-[#006699] font-extrabold py-3" data-aos="fade-up" data-aos-duration="800">SU FUNCIONAMIENTO SE
              BASA EN</h2>
            <span
              className="font-bold text-4xl py-3 px-6 my-3 text-[#FFFFFF] tracking-wide bg-gradient-to-r from-[#33CCFF] to-[#209ACE] font-extrabold px-2 py-1 rounded-2xl transition duration-300 hover:bg-sky-200 inline-block"
              data-aos="fade-up" data-aos-duration="800">
              TRES PROCESOS CLAVE
            </span>
            <span className="block py-1 font-medium text-lg text-[#006699]" data-aos="fade-up"
              data-aos-duration="800">
              Que permiten <span className="font-semibold">controlar y optimizar los estacionamientos</span> de
              manera efectiva.
            </span>
            <div className="w-20 h-1 bg-[#0EA5E9] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funcionalidades.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover border border-sky-100 text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0EA5E9] text-white rounded-full flex items-center justify-center font-bold">
                    {item.number}
                  </div>
                  <div className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] mx-auto mb-4 p-4 w-16 h-16 rounded-full">
                    {typeof item.icon === "string" ? (
                      <img src={item.icon} alt={item.title} className=" w-12" />
                    ) : (
                      item.icon
                    )}
                  </div>

                </div>
                <h3 className="text-xl font-bold text-[#006699] mb-4">{item.title}</h3>
                <p className="text-[#006699] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#022E46] mb-4">
              ¿QUÉ <span className="text-gradient">OBTENDRÁS CON NOSOTROS</span>?
            </h2>
            <p className="text-xl text-[#022E46] max-w-4xl mx-auto">
              Accede a un ecosistema completo que transforma la gestión de estacionamientos con
              <span className="font-semibold"> soluciones inteligentes y conectadas</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg card-hover text-center">
                <div className="flex justify-center mb-4">
                  <img src={beneficio.icon} alt={beneficio.title} className="w-16 h-16 mx-auto" />
                </div>

                <h3 className="text-lg font-bold text-[#006699] mb-2">{beneficio.title}</h3>
                {/* <p className="text-[#022E46] text-sm">{beneficio.description}</p> */}
              </div>
            ))}
          </div>

          <div className="text-center  mt-12">
            <button className="btn-secondary py-6 px-8 rounded-full">
              SÚMATE AL SOFTWARE MÁS COMPLETO →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;