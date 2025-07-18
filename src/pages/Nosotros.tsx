import React from 'react';
import { Search, Eye, TrendingUp } from 'lucide-react';

const Nosotros = () => {
  const funcionalidades = [
    {
      icon: <Search className="h-12 w-12 text-primary-light" />,
      title: 'GESTIÓN',
      description: 'Plataforma digital para la gestión eficiente de estacionamientos. Simplifica la operación y mejora la experiencia.',
      number: '1'
    },
    {
      icon: <Eye className="h-12 w-12 text-primary-light" />,
      title: 'SUPERVISIÓN',
      description: 'Permite controlar en tiempo real el funcionamiento de cada local. Identifica problemas y optimiza la operación.',
      number: '2'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary-light" />,
      title: 'SEGUIMIENTO',
      description: 'Analiza datos, genera reportes y mejora el desempeño general gracias a herramientas automatizadas.',
      number: '3'
    }
  ];

  const beneficios = [
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white font-bold">24/7</span>
      </div>,
      title: 'MONITOREO EN TIEMPO REAL',
      description: 'Control continuo de operaciones'
    },
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white font-bold">✓</span>
      </div>,
      title: 'VALIDACIÓN POR DIRECCIÓN DEL TRABAJO',
      description: 'Cumplimiento normativo garantizado'
    },
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white font-bold">👥</span>
      </div>,
      title: 'ESPACIO PARA TUS CLIENTES',
      description: 'Optimización de la experiencia del usuario'
    },
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white font-bold">📊</span>
      </div>,
      title: 'VENTA ENLAZADA AL SERVICIO DE IMPUESTOS INTERNOS',
      description: 'Integración fiscal automática'
    },
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white font-bold">📈</span>
      </div>,
      title: 'NUEVAS VERTICALES DE NEGOCIO',
      description: 'Expansión de oportunidades comerciales'
    },
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white font-bold">💬</span>
      </div>,
      title: 'COMUNICACIÓN DIRECTA CON TUS CLIENTES',
      description: 'Canal directo de atención y soporte'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ¿CÓMO FUNCIONA <br />
            <span className="text-primary-light">PARK BY VAALA</span>?
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Opera a través de una <span className="font-semibold">plataforma digital</span>, diseñada para facilitar la <span className="font-semibold">gestión de estacionamientos</span> de manera eficiente, segura y ordenada.
          </p>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              FUNCIONALIDADES INTELIGENTES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Que permiten <span className="font-semibold text-primary-dark">controlar y optimizar los estacionamientos</span> de manera efectiva.
            </p>
            <div className="w-20 h-1 bg-primary-light mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funcionalidades.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg card-hover text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-light text-white rounded-full flex items-center justify-center font-bold">
                    {item.number}
                  </div>
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¿QUÉ <span className="text-gradient">OBTENDRÁS CON NOSOTROS</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Accede a un ecosistema completo que transforma la gestión de estacionamientos con 
              <span className="font-semibold"> soluciones inteligentes y conectadas</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg card-hover text-center">
                <div className="flex justify-center mb-4">
                  {beneficio.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{beneficio.title}</h3>
                <p className="text-gray-600 text-sm">{beneficio.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              SÚMATE AL SOFTWARE MÁS COMPLETO →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;