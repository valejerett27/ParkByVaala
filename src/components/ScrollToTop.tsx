import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Funcionalidad original: Volver arriba al cambiar de página (Rutas)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tip: si prefieres que el cambio de página sea instantáneo en vez de animado, cámbialo a "auto"
    });
  }, [pathname]);

  // 2. Nueva funcionalidad: Mostrar/ocultar el botón flotante al hacer scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Si bajamos más de 300px, mostramos el botón
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 3. Acción del botón: Volver arriba suavemente al hacer clic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // En lugar de retornar null, ahora retornamos el botón flotante
  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-8 right-8 z-[99] p-3 rounded-full bg-[#00b4d8] text-white shadow-lg hover:bg-[#0096b4] hover:shadow-cyan-500/30 transition-all duration-300 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
};

export default ScrollToTop;