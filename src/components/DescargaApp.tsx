import React, { useState } from 'react';
import GooglePlayIcon from '../assets/img/GooglePlay.png';
import AppleStoreIcon from '../assets/img/AppleStore.png';
import { QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const DescargaApp = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email enviado:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    // 1. FONDO GENERAL CELESTE (Como en image_483cf6.png)
    <section className="py-16 md:py-24 bg-[#EAF8FC] min-h-screen flex flex-col items-center justify-center">
      
      <div className="container mx-auto px-4">
        
        {/* TÍTULO EXTERNO (Fuera de la tarjeta blanca) */}
        <motion.div 
          variants={fadeInUp} 
          initial="hidden"
          whileInView="visible"
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl text-[#006699] font-extrabold uppercase leading-tight tracking-tight">
            Obtendrás muchos<br/>
            <span className="text-[#33CCFF]">Beneficios próximamente</span>
          </h2>
        </motion.div>

        {/* 2. TARJETA BLANCA FLOTANTE (Contenedor Principal) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,102,153,0.15)] max-w-[800px] mx-auto p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          
          <div className="flex flex-col items-center text-center">
            
            {/* Texto Descriptivo Principal */}
            <h3 className="text-xl md:text-2xl lg:text-3xl text-[#006699] font-bold leading-snug mb-10 max-w-2xl">
              Descarga la app y paga tu<br className="hidden md:block" />
              estacionamiento de forma <span className="font-extrabold">segura,</span><br className="hidden md:block" />
              <span className="font-extrabold">transparente y rápida.</span>
            </h3>

            {/* --- MOCKUP QR --- */}
            <div className="mb-4">
              <div className="relative bg-white w-48 h-48 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center p-4 mx-auto mb-3">
                 {/* Icono QR borroso */}
                 <QrCode className="w-full h-full text-gray-200 blur-[2px] opacity-80" strokeWidth={2} />
                 
                 {/* Pill "No disponible" */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-gray-500 font-medium text-lg bg-white/95 px-4 py-1.5 rounded-lg shadow-sm border border-gray-50">
                     No disponible
                   </span>
                 </div>

                 {/* Detalles de esquinas (Scanner UI) */}
                 <div className="absolute top-4 left-4 w-4 h-4 border-l-[3px] border-t-[3px] border-gray-200 rounded-tl-lg"></div>
                 <div className="absolute top-4 right-4 w-4 h-4 border-r-[3px] border-t-[3px] border-gray-200 rounded-tr-lg"></div>
                 <div className="absolute bottom-4 left-4 w-4 h-4 border-l-[3px] border-b-[3px] border-gray-200 rounded-bl-lg"></div>
                 <div className="absolute bottom-4 right-4 w-4 h-4 border-r-[3px] border-b-[3px] border-gray-200 rounded-br-lg"></div>
              </div>

              {/* Texto debajo del QR */}
              <div className="text-center leading-tight">
                <p className="text-gray-500 font-medium text-sm">Lanzamiento oficial</p>
                <p className="text-gray-600 font-bold text-lg">próximamente</p>
              </div>
            </div>

            {/* --- BOTONES STORES (Estilo Píldora con Sombra) --- */}
            <div className="w-full mt-8 mb-16">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                
                {/* Google Play */}
                <button className="group relative bg-white hover:bg-gray-50 rounded-full px-8 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-50 w-64 md:w-auto flex items-center justify-center">
                  <img src={GooglePlayIcon} alt="Google Play" className="h-10 w-auto object-contain" />
                  {/* <span className="ml-3 text-gray-400 font-medium text-lg group-hover:text-gray-600">Google Play</span> */}
                </button>

                {/* Apple Store */}
                <button className="group relative bg-white hover:bg-gray-50 rounded-full px-8 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-50 w-64 md:w-auto flex items-center justify-center">
                   <img src={AppleStoreIcon} alt="Apple Store" className="h-10 w-auto object-contain mb-1" />
                   {/* <span className="ml-3 text-gray-400 font-medium text-lg group-hover:text-gray-600">Apple Store</span> */}
                </button>

              </div>
            </div>

            {/* --- FORMULARIO INFERIOR --- */}
            <div className="w-full max-w-lg mx-auto mt-4">
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#006699] mb-3">
                ¡No te quedes fuera!
              </h3>
              
              <p className="text-gray-500 text-sm md:text-[15px] font-medium mb-8 leading-relaxed max-w-sm mx-auto md:max-w-none">
                Ingresa tu correo para ser notificado del lanzamiento y obtener acceso a sorpresas especiales.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                
                {/* INPUT: Cápsula, borde gris suave, texto centrado */}
                <div className="w-full mb-8">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full shadow-inner focus:outline-none focus:border-[#33CCFF] focus:ring-4 focus:ring-blue-50 text-gray-600 text-center placeholder-gray-400 font-medium text-base transition-all"
                    placeholder="dmorales@vaalagroup.cl" 
                  />
                </div>

                {/* BOTÓN: Azul Sólido/Gradiente, sombra azulada, mayúsculas */}
                {isSubmitted ? (
                   <div className="text-green-600 font-bold bg-green-50 px-8 py-3 rounded-full animate-pulse border border-green-100">
                     ¡Correo registrado con éxito!
                   </div>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#008CCF] to-[#29BDEF] text-white font-extrabold text-sm tracking-widest uppercase px-16 py-3.5 rounded-full shadow-[0_10px_20px_rgba(0,140,207,0.3)] hover:shadow-[0_12px_25px_rgba(0,140,207,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    ENVIAR
                  </button>
                )}

              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DescargaApp;