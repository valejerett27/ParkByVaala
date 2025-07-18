import React, { useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    comuna: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CONTACTO
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            ¿LISTO PARA TRANSFORMAR LA GESTIÓN <br />
            DE TUS ESTACIONAMIENTOS?
          </h2>
          <p className="text-xl max-w-4xl mx-auto">
            Contáctanos y descubre cómo <span className="font-semibold">Park by Vaala</span> puede revolucionar tu 
            negocio con <span className="font-semibold">tecnología de vanguardia</span>.
          </p>
          <div className="w-20 h-1 bg-primary-light mx-auto mt-8"></div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                SOLICITA UNA DEMOSTRACIÓN PERSONALIZADA
              </h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo para agendar una 
                demostración adaptada a tus necesidades específicas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="comuna" className="block text-sm font-medium text-gray-700 mb-2">
                    Comuna/Ciudad *
                  </label>
                  <input
                    type="text"
                    id="comuna"
                    name="comuna"
                    value={formData.comuna}
                    onChange={handleChange}
                    placeholder="¿En qué comuna te encuentras?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@empresa.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Asunto del proyecto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje Adicional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary text-lg px-8 py-4">
                  ENVIAR SOLICITUD ✈
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Tiempo de Respuesta */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="h-16 w-16 text-primary-light mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">TIEMPO DE RESPUESTA GARANTIZADO</h3>
            <p className="text-lg">
              <span className="font-semibold">EN UN PLAZO MÁXIMO DE 24 HORAS HÁBILES</span> recibirás una respuesta personalizada de nuestro equipo 
              comercial y, si corresponde, un enlace para agendar una reunión de demostración adaptada a tus 
              necesidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto Directo */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              INFORMACIÓN DE CONTACTO DIRECTO
            </h2>
            <p className="text-lg text-gray-600">
              También puedes contactarnos directamente a través de estos canales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">EMAIL CORPORATIVO</h3>
              <p className="text-primary-dark font-medium">contacto@parkbyvaala.cl</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">OFICINAS</h3>
              <p className="text-gray-600">Viña del Mar, Chile</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">SOPORTE 24/7</h3>
              <p className="text-gray-600">
                Lun - Vie: 8:00 - 18:00<br />
                Emergencias: 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;