import React from 'react';
import { Award, Lightbulb, Zap, Shield } from 'lucide-react';

const Reconocimientos = () => {
  const significados = [
    {
      icon: <Lightbulb className="h-12 w-12 text-primary-light" />,
      title: 'INNOVACIÓN APLICADA',
      description: 'Validación a nuestra capacidad de aplicar tecnología de forma concreta en la optimización de procesos urbanos y de movilidad.'
    },
    {
      icon: <Zap className="h-12 w-12 text-primary-light" />,
      title: 'EFICIENCIA EN MOVILIDAD',
      description: 'Reconocimiento al impacto de Park en la mejora de la eficiencia operativa y el control de estacionamientos en tiempo real.'
    },
    {
      icon: <Shield className="h-12 w-12 text-primary-light" />,
      title: 'CONFIANZA DEL ECOSISTEMA',
      description: 'Respaldo por parte del ecosistema empresarial y tecnológico, al ofrecer una plataforma segura, transparente y escalable.'
    }
  ];

  const futuro = [
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white text-2xl">🌍</span>
      </div>,
      title: 'INTEGRACIÓN TERRITORIAL',
      description: 'Llevando nuestra solución a más regiones del país y nuevos territorios de Latinoamérica.'
    },
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white text-2xl">⚡</span>
      </div>,
      title: 'NUEVAS TECNOLOGÍAS',
      description: 'Implementación de analítica avanzada y nuevas tecnologías para anticipar el flujo y optimizar decisiones.'
    },
    {
      icon: <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <span className="text-white text-2xl">🚗</span>
      </div>,
      title: 'MOVILIDAD SOSTENIBLE',
      description: 'Compromiso con un modelo de ciudad inteligente, eficiente, responsable y en armonía con el entorno.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="section-container text-center">
          <div className="mb-8">
            <Award className="h-20 w-20 text-primary-light mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEGUIMOS <span className="text-primary-light">AVANZANDO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Hemos ganado el <span className="font-semibold">PREMIO ASIVA 2025</span> en la categoría de <span className="font-semibold italic">Innovación</span>
          </p>
          <div className="w-20 h-1 bg-primary-light mx-auto"></div>
        </div>
      </section>

      {/* Premio Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary-light text-white px-4 py-2 rounded-full text-sm font-semibold">
                RECONOCIMIENTO A LA INNOVACIÓN
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                RECONOCIMIENTO A LA <br />
                <span className="text-gradient">INNOVACIÓN</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                "Este reconocimiento no solo celebra una iniciativa en particular, 
                sino que también destaca el compromiso constante con la 
                <span className="font-semibold"> innovación y la excelencia</span> que caracteriza a nuestro equipo."
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-primary-dark">Equipo Park by Vaala</p>
                <p className="text-gray-600">Desarrolladores de soluciones tecnológicas</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Equipo Park by Vaala en Premios ASIVA 2025" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-4 text-center">
                Premio ASIVA 2025 - Categoría Innovación
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Significado del Premio */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              LO QUE <span className="text-gradient">SIGNIFICA</span> ESTE PREMIO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un <span className="font-semibold">reconocimiento</span> que valida nuestro compromiso con la 
              <span className="font-semibold"> innovación y la excelencia</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {significados.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuro */}
      <section className="navy-gradient text-white py-20">
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
              <div key={index} className="bg-navy-800 p-6 rounded-lg text-center space-y-4">
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-light hover:bg-white hover:text-primary-dark text-white font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Próximamente más innovaciones
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reconocimientos;