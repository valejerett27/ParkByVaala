import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoPark from "../assets/img/logo-park.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Cambiar estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { name: "INICIO", href: "/" },
      // { name: "NOSOTROS", href: "/nosotros" },
      { name: "¿Qué es MPark?", href: "/#mipark" },
      { name: "Beneficios", href: "/#beneficios" },
    ],
    []
  );

  // Activo si el path coincide (tolera trailing slash)
  const isActive = (href: string) => {
    const a = location.pathname.replace(/\/+$/, "");
    const b = href.replace(/\/+$/, "");
    return a === b;
  };

  const linkBaseColor = isScrolled ? "text-[#006699]" : "#006699";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-cyan-100"
          : "bg-transparent"
      }`}
      aria-label="Principal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 pl-3">
            <Link to="/" aria-label="Ir a inicio">
              <img
                src={LogoPark}
                alt="Park by Vaala"
                className="h-8 lg:h-14 select-none"
                draggable={false}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 pr-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${linkBaseColor} uppercase px-3 py-2 text-sm font-bold transition-colors duration-200 relative group ${
                  isActive(item.href) ? "text-cyan-400" : "hover:text-cyan-400"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33CCFF] focus-visible:rounded`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 font-bold bg-cyan-400 transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            <Link
              to="/descarga"
              className="bg-gradient-to-r from-[#006699] to-[#33CCFF] text-white uppercase px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#33CCFF]"
            >
              Descarga
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden pr-3">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 rounded-md text-cyan-400 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33CCFF]"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden bg-white/95 backdrop-blur-lg min-h-[calc(100vh-4rem)] border-t border-[#33CCFF]"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block w-full px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-[#006699] bg-[#E5F6FD]"
                      : "text-[#006699] hover:bg-[#006699] hover:text-white"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33CCFF]`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/descarga"
                className="block mt-4 bg-gradient-to-r from-[#33CCFF] to-[#006699] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#33CCFF]"
              >
                Descarga
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
