import React from 'react';

const ZonaMiPark = () => {
    return (
        <section className="py-12 md:py-16 bg-white" id="zona-mipark">
            <div className="container mx-auto px-4">

                {/* 1. TÍTULO SUPERIOR */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-none tracking-tight">
                        <span className="block text-[#005580] mb-1">ZONA</span>
                        <span className="block text-[#009BDD]">MIPARK</span>
                    </h2>
                </div>

                {/* 2. MAPA INTERACTIVO (iframe) */}
                <div className="w-full max-w-5xl mx-auto mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe 
                        src="https://www.google.com/maps/d/embed?mid=1Ow1TNJJ5CCAncOK8VUqDXrLFQ6Eo89Y&ehbc=2E312F" 
                        title="Mapa Trazado Zona MiPark - Avenida Perú" 
                        className="w-full h-[400px] md:h-[500px]"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* 3. TEXTO INFERIOR */}
                {/* <div className="text-center">
                    <h3 className="text-xl md:text-2xl text-[#005580] uppercase tracking-wide leading-tight">
                        <span className="block font-medium">ESTACIONAMIENTOS</span>
                        <span className="block font-extrabold">AVENIDA PERÚ</span>
                    </h3>
                </div> */}

            </div>
        </section>
    );
};

export default ZonaMiPark;