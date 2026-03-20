import React, { useEffect } from 'react';

const InstagramSection = () => {
    useEffect(() => {
        // 1. Crear el elemento script
        const script = document.createElement('script');
        // Agregamos un timestamp o versión al final
        // script.src = `https://static.elfsight.com/platform/platform.js?v=${new Date().getTime()}`;
        script.src = `https://static.elfsight.com/platform/platform.js?v=${Math.random()}`;
        script.async = true;
        script.setAttribute('data-use-service-core', '');

        // 2. Agregarlo al body
        document.body.appendChild(script);

        // 3. Limpieza: eliminar el script si el componente se desmonta (opcional pero recomendado)
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="bg-[#EAF8FC] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm md:text-base font-bold text-gray-800 tracking-wider uppercase mb-3">
                        Nuestro Contenido
                    </h2>
                    <p className="text-4xl md:text-5xl font-extrabold uppercase text-[#0078A1]">
                        Síguenos en Instagram
                    </p>
                </div>

                <div className="relative overflow-hidden min-h-[400px]">
                    {/* El widget con tu ID específico */}
                    <div
                        className="elfsight-app-e9e8d5df-61f9-46ba-82e6-26b9771c8bee"
                        data-elfsight-app-lazy
                    ></div>
                </div>

                <div className="text-center mt-10">
                    <p className="text-lg text-gray-700">
                        Descubre las últimas novedades, zonas de estacionamiento y tutoriales en nuestra cuenta oficial.
                    </p>
                    <a
                        href="https://www.instagram.com/mipark.cl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 text-[#0078A1] font-bold hover:underline"
                    >
                        Ver más publicaciones
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;