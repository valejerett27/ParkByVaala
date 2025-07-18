import React from 'react';
import { MessageCircle, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="navy-gradient text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="ml-3">
                <div className="text-primary-light font-bold text-xl">PARK</div>
                <div className="text-gray-300 text-sm">by VAALA</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solución tecnológica integral para la gestión y control 
              eficiente de estacionamientos, orientada al cobro 
              oportuno, la prevención de fraudes y la valorización del 
              uso del espacio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CONTACTO</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>contacto@parkbyvaala.cl</p>
              <p>Viña del Mar, Chile</p>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SERVICIOS</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Gestión Inteligente</p>
              <p>Control de Flujo de Dinero</p>
              <p>Integración SII</p>
              <p>Análisis de Datos</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Park by Vaala. Todos los derechos reservados.</p>
          <p>Premio ASIVA 2025 ®</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;