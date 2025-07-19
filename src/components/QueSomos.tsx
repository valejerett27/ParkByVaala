import React, { useRef, useState } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { Volume2, VolumeX } from 'lucide-react';

const QueSomos = () => {
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
        playerRef.current.seekTo(0);
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#022E46] mb-6">
            ¿QUÉ ES <span className="text-gradient px-1">PARK BY VAALA</span>?
          </h2>
          <p className="text-xl text-[#006699] max-w-3xl font-medium mx-auto leading-none">
            Una <span className="font-bold text-primary-dark">solución tecnológica integral para la gestión y control eficiente</span> de 
            estacionamientos, orientada al <span className="font-bold text-primary-dark">cobro oportuno</span>, la <span className="font-bold text-primary-dark">prevención de fraudes</span> y la 
            <span className="font-bold text-primary-dark"> valorización del uso del espacio</span>.
          </p>
          <div className="w-20 h-1 bg-primary-light mx-auto mt-8"></div>
        </div>

        {/* Video con control de sonido */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-black">
            {/* Wrapper para mantener proporción 16:9 */}
            <div className="relative pb-[56.25%] h-0">
              <YouTube
                videoId="KC-DS8HZMXs"
                onReady={onReady}
                className="absolute top-0 left-0 w-full h-full"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    loop: 1,
                    playlist: 'KC-DS8HZMXs',
                    mute: 1,
                  },
                }}
              />
            </div>

            {/* Botón de sonido */}
            <button
              onClick={toggleSound}
              className="absolute bottom-4 right-4 z-20 bg-primary-light hover:bg-primary-dark text-white px-4 py-2 rounded-full flex items-center text-sm font-medium transition-all"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-5 h-5 mr-2" />
                  Activar sonido
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5 mr-2" />
                  Silenciar
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueSomos;
