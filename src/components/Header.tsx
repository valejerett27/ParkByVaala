import { useState, useEffect, useMemo } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoPark from "../assets/img/logo-park.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Cambiar estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- TUS ITEMS DE NAVEGACIÓN ---
  const navItems = useMemo(
    () => [
      { name: "INICIO", href: "/" },
      { name: "¿Qué es MiPark?", href: "#mipark" },
      { name: "Tutorial", href: "#tutorial" },
    ],
    []
  );

  // Función para manejar el scroll suave
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Si es Inicio ("/"), subimos arriba del todo
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    // Si es un ancla (#), buscamos el ID
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const linkBaseColor = isScrolled ? "text-[#006699]" : "text-[#006699]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg border-b border-cyan-100"
          : "bg-white/50 lg:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 pl-4 md:pl-6">
            <a 
              href="/" 
              onClick={(e) => handleScrollTo(e, "/")}
              className="cursor-pointer"
            >
              <img
                src={LogoPark}
                alt="Park by Vaala"
                className="h-10 lg:h-16 w-auto select-none object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 pr-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`${linkBaseColor} uppercase px-3 py-2 text-sm font-bold transition-all duration-200 relative group hover:text-[#33CCFF] tracking-wide cursor-pointer`}
              >
                {item.name}
                <span className="absolute uppercase bottom-0 left-0 h-0.5 bg-[#33CCFF] transition-all duration-300 w-0 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}

            <a
              href="#descarga" // O donde quieras que lleve el botón de descarga
              onClick={(e) => handleScrollTo(e, "#descarga")}
              className="bg-gradient-to-r from-[#006699] to-[#33CCFF] text-white uppercase px-7 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm tracking-wider cursor-pointer"
            >
              Descarga
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden pr-4">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 rounded-md text-[#006699] hover:bg-cyan-50 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
            className={`lg:hidden fixed left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-screen opacity-100 top-16" : "max-h-0 opacity-0 top-16"
            }`}
        >
          <div className="px-4 py-6 space-y-4 flex flex-col items-center border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="block w-full text-center uppercase px-4 py-3 text-lg font-bold text-[#006699] hover:bg-blue-50 rounded-xl transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;