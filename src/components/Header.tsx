import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoPark from '../assets/img/logo-park.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'INICIO', href: '/' },
    { name: 'NOSOTROS', href: '/nosotros' },
    { name: 'RECONOCIMIENTOS', href: '/reconocimientos' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed inset-x-0 max-w-screen-xl mx-auto shadow-sm top-0 z-50">
      {/* Fondo blanco con ancho limitado */}
      <div className="bg-white shadow-sm lg:rounded-b-xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={LogoPark} alt="Logo Park" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-light'
                    : 'text-gray-700 hover:text-primary-light'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botón móvil */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t h-screen py-4 px-4">
          <nav className="flex flex-col space-y-4 text-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-light'
                    : 'text-gray-700 hover:text-primary-light'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
