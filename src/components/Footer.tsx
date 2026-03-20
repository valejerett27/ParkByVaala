import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin } from 'lucide-react';
import LogoPark from '../assets/img/logo-park.png';
import WhatsappIcon from '../assets/svg/whatsapp-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#032F41] text-white">
      <div className="section-container container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={LogoPark} alt="Logo Park" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Una solución gratuita, más rápida y con muchos beneficios para ti.
            </p>

            {/* Redes Sociales */}
            <div className="flex space-x-4 pt-2">
              <a href="https://wa.me/56988173285" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="WhatsApp">
                <img src={WhatsappIcon} alt="WhatsApp logo" className="w-6 h-6 md:w-8 md:h-8 invert opacity-80 hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.instagram.com/mipark.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#33CCFF] hover:scale-110 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              <a href="https://www.facebook.com/share/187NSYoTeK/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#33CCFF] hover:scale-110 transition-all duration-200">
                <Facebook className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4 md:pl-10">
            <h3 className="text-lg font-bold text-[#33CCFF] tracking-wide">CONTACTO</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="opacity-70">✉</span> contacto@parkbyvaala.cl
              </p>
              <p className="flex items-center gap-2">
                <span className="opacity-70">✉</span> soporte@parkbyvaala.cl
              </p>
              {/* <p className="flex items-center gap-2">
                <span className="opacity-70">📞</span> +56 9 8817 3285
              </p> */}
              <p className="flex items-center gap-2">
                <span className="opacity-70">📍</span> Viña del Mar, Chile
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#33CCFF] tracking-wide">SERVICIOS</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Gestión Inteligente</p>
              <p>Control de Flujo de Dinero</p>
              <p>Integración SII</p>
              <p>Análisis de Datos</p>
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p>© 2025 Park by Vaala.</p>

            {/* ENLACES A TUS PDFS LOCALES */}
            <div className="flex gap-4 text-xs md:text-sm">
              <a
                href="/legales/terminos.pdf"  // Ruta relativa desde la raíz (Vite mapea 'public' a '/')
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#33CCFF] transition-colors underline decoration-transparent hover:decoration-[#33CCFF]"
              >
                Términos y Condiciones
              </a>
              <span className="hidden md:inline text-gray-600">•</span>
              <a
                href="/legales/privacidad.pdf" // Ruta relativa desde la raíz
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#33CCFF] transition-colors underline decoration-transparent hover:decoration-[#33CCFF]"
              >
                Política de Privacidad
              </a>
            </div>
          </div>

          <p className="font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-full text-xs">
            Premio ASIVA 2025 ®
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;