import React, { useState, useRef } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube'; // Importamos YouTube
import { QrCode, Volume2, VolumeX } from 'lucide-react'; // Importamos iconos de volumen
import { motion } from 'framer-motion';

// Assets
import GooglePlayIcon from '../assets/img/GooglePlay.png';
import AppleStoreIcon from '../assets/img/AppleStore.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const DescargaApp = () => {
  // --- ESTADOS DEL FORMULARIO ---
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- LÓGICA DEL VIDEO (Traída de tu snippet anterior) ---
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    playerRef.current.mute(); // empieza en silencio
    playerRef.current.playVideo();
  };

  const toggleSound = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.seekTo(0); // Reiniciar al activar sonido para mejor experiencia
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email enviado:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-[#EAF8FC] min-h-screen flex flex-col items-center justify-center" id="descarga">
      
      <div className="container mx-auto px-4">

        {/* ============================================================
            NUEVA SECCIÓN: VIDEO "¿CÓMO USAR MIPARK?"
            ============================================================ */}
        <div className="mb-16 md:mb-20">
          
          {/* Título del Video */}
          <div className="text-center mb-8">
             <h2 className="text-2xl md:text-4xl text-[#006699] font-extrabold uppercase leading-tight tracking-tight">
                ¿CÓMO USAR<br/>
                <span className="text-[#33CCFF]">MIPARK?</span>
             </h2>
          </div>

          {/* Reproductor de Video */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,102,153,0.2)] bg-gray-200">
              {/* Wrapper para mantener proporción 16:9 */}
              <div className="relative pb-[56.25%] h-0">
                <YouTube
                  videoId="KC-DS8HZMXs" // Usando el mismo ID por ahora
                  onReady={onReady}
                  className="absolute top-0 left-0 w-full h-full"
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 0,      // Sin controles nativos
                      modestbranding: 1,
                      rel: 0,           // Sin videos relacionados al final
                      loop: 1,
                      playlist: 'KC-DS8HZMXs', // Necesario para el loop
                      mute: 1,
                    },
                  }}
                />
              </div>

              {/* Botón de sonido personalizado */}
              <button
                onClick={toggleSound}
                className="absolute bottom-6 right-6 z-20 bg-white/90 hover:bg-white text-[#006699] px-5 py-2.5 rounded-full flex items-center text-sm font-bold shadow-lg transition-all hover:scale-105 backdrop-blur-sm"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-5 h-5 mr-2" />
                    ACTIVAR SONIDO
                  </>
                ) : (
                  <>
                    <Volume2 className="w-5 h-5 mr-2" />
                    SILENCIAR
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
        {/* ============================================================ */}

        
        {/* TÍTULO EXTERNO (Beneficios) */}
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

        {/* TARJETA BLANCA FLOTANTE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,102,153,0.15)] max-w-[800px] mx-auto p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          
          <div className="flex flex-col items-center text-center">
            
            {/* Texto Descriptivo */}
            <h3 className="text-xl md:text-2xl lg:text-3xl text-[#006699] font-bold leading-snug mb-10 max-w-2xl">
              Descarga la app y paga tu<br className="hidden md:block" />
              estacionamiento de forma <span className="font-extrabold">segura,</span><br className="hidden md:block" />
              <span className="font-extrabold">transparente y rápida.</span>
            </h3>

            {/* --- SECCIÓN DE DOBLE QR (OCULTO EN MÓVIL) --- */}
            <div className="hidden md:flex flex-row gap-12 mb-6">
              
              {/* 1. QR GOOGLE PLAY */}
              <div className="flex flex-col items-center">
                <div className="relative bg-white w-44 h-44 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center p-4 mb-3 transition-transform hover:scale-105 duration-300">
                   <QrCode className="w-full h-full text-gray-200 blur-[2px] opacity-80" strokeWidth={2} />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-gray-500 font-medium text-sm bg-white/95 px-3 py-1 rounded-lg shadow-sm border border-gray-50 whitespace-nowrap">
                       No disponible
                     </span>
                   </div>
                   {/* Decoración esquinas */}
                   <div className="absolute top-3 left-3 w-3 h-3 border-l-[3px] border-t-[3px] border-gray-200 rounded-tl-lg"></div>
                   <div className="absolute top-3 right-3 w-3 h-3 border-r-[3px] border-t-[3px] border-gray-200 rounded-tr-lg"></div>
                   <div className="absolute bottom-3 left-3 w-3 h-3 border-l-[3px] border-b-[3px] border-gray-200 rounded-bl-lg"></div>
                   <div className="absolute bottom-3 right-3 w-3 h-3 border-r-[3px] border-b-[3px] border-gray-200 rounded-br-lg"></div>
                </div>
                <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">Google Play</p>
              </div>

              {/* 2. QR APP STORE */}
              <div className="flex flex-col items-center">
                <div className="relative bg-white w-44 h-44 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center p-4 mb-3 transition-transform hover:scale-105 duration-300">
                   <QrCode className="w-full h-full text-gray-200 blur-[2px] opacity-80" strokeWidth={2} />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-gray-500 font-medium text-sm bg-white/95 px-3 py-1 rounded-lg shadow-sm border border-gray-50 whitespace-nowrap">
                       No disponible
                     </span>
                   </div>
                   {/* Decoración esquinas */}
                   <div className="absolute top-3 left-3 w-3 h-3 border-l-[3px] border-t-[3px] border-gray-200 rounded-tl-lg"></div>
                   <div className="absolute top-3 right-3 w-3 h-3 border-r-[3px] border-t-[3px] border-gray-200 rounded-tr-lg"></div>
                   <div className="absolute bottom-3 left-3 w-3 h-3 border-l-[3px] border-b-[3px] border-gray-200 rounded-bl-lg"></div>
                   <div className="absolute bottom-3 right-3 w-3 h-3 border-r-[3px] border-b-[3px] border-gray-200 rounded-br-lg"></div>
                </div>
                <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">App Store</p>
              </div>
            </div>

            {/* Texto debajo de los QRs */}
            <div className="text-center leading-tight mb-2">
              <p className="text-gray-500 font-medium text-sm">Lanzamiento oficial</p>
              <p className="text-gray-600 font-bold text-lg">próximamente</p>
            </div>

            {/* --- BOTONES STORES --- */}
            <div className="w-full mt-8 mb-16">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                
                {/* Google Play */}
                <button className="group relative bg-white hover:bg-gray-50 rounded-full w-64 h-16 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex items-center justify-center gap-3">
                  <img src={GooglePlayIcon} alt="Google Play" className="h-20 w-20 object-contain" />
                </button>

                {/* Apple Store */}
                <button className="group relative bg-white hover:bg-gray-50 rounded-full w-64 h-16 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 flex items-center justify-center gap-3">
                   <img src={AppleStoreIcon} alt="Apple Store" className="h-20 w-20 object-contain mb-1" />
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
                <div className="w-full mb-8">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full shadow-inner focus:outline-none focus:border-[#33CCFF] focus:ring-4 focus:ring-blue-50 text-gray-600 text-center placeholder-gray-400 font-medium text-base transition-all"
                    placeholder="dmorales@vaalagroup.cl" 
                  />
                </div>
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