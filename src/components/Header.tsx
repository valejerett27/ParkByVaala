import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoPark from '../assets/img/logo-park.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'INICIO', href: '/' },
    { name: 'NOSOTROS', href: '/nosotros' },
    { name: 'RECONOCIMIENTOS', href: '/reconocimientos' },
    // { name: 'CONTACTO', href: '/contacto' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white backdrop-blur-lg shadow-lg border-b border-cyan-100"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 pl-3">
            <Link to="/">
              <img
                src={LogoPark}
                alt="Logo Park"
                className="h-8 lg:h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 pr-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={` ${isScrolled
                    ? "text-[#006699]"
                    : "text-white"
                  } uppercase px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${isActive(item.href) ? "text-cyan-400" : "hover:text-cyan-400"
                  }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            <Link
              to="/contacto"
              className="bg-gradient-to-r from-[#006699] to-[#33CCFF] text-white uppercase px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden pr-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg h-screen border-t border-[#33CCFF]">
            <div className="px-4 pt-4 pb-6 space-y-2 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full px-4 py-2 text-base font-medium rounded-md transition-colors duration-200 ${isActive(item.href)
                      ? "text-[#006699] bg-[#E5F6FD]"
                      : "text-[#006699] hover:bg-[#006699] hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="block mt-4 bg-gradient-to-r from-[#33CCFF] to-[#006699] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
