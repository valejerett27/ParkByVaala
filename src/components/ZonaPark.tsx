import React from 'react';
// Asegúrate de que la ruta sea correcta según tu estructura de carpetas
import Mapa from '../assets/img/Mapa_MiPark.png'; 

const ZonaMiPark = () => {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">

                {/* 1. TÍTULO SUPERIOR */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-none tracking-tight">
                        <span className="block text-[#005580] mb-1">ZONA</span>
                        <span className="block text-[#009BDD]">MIPARK</span>
                    </h2>
                </div>

                {/* 2. IMAGEN DEL MAPA */}
                {/* Ajustamos el ancho máximo para que no se deforme y centramos */}
                <div className="w-full max-w-5xl mx-auto mb-6">
                    <img 
                        src={Mapa} 
                        alt="Mapa Zona MiPark - Avenida Perú" 
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* 3. TEXTO INFERIOR */}
                <div className="text-center">
                    <h3 className="text-xl md:text-2xl text-[#005580] uppercase tracking-wide leading-tight">
                        <span className="block font-medium">ESTACIONAMIENTOS</span>
                        <span className="block font-extrabold">AVENIDA PERÚ</span>
                    </h3>
                </div>

            </div>
        </section>
    );
};

export default ZonaMiPark;