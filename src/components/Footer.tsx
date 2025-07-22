import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Instagram, Linkedin } from 'lucide-react';
import LogoPark from '../assets/img/logo-park.png';
import WhatsappIcon from '../assets/svg/whatsapp-logo.svg';


const Footer = () => {
  return (
    <footer className="bg-[#032F41] text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={LogoPark} alt="Logo Park" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solución tecnológica integral para la gestión y control
              eficiente de estacionamientos, orientada al cobro
              oportuno, la prevención de fraudes y la valorización del
              uso del espacio.
            </p>
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <a href="#" className="hover:scale-105 hover:text-primary-light transition" aria-label="WhatsApp">
                <img src={WhatsappIcon} alt="WhatsApp logo" className="w-6 h-6 md:w-8 md:h-8 invert" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tuempresa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-105 hover:text-primary-light transition-colors"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 hover:scale-105 hover:text-primary-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:scale-105 hover:text-primary-light transition-colors">
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
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