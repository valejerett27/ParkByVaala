import React, { useRef, useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import IconMail from '../assets/icons/CONTACTO-CORREO.png';
import IconOffice from '../assets/icons/CONTACTO-OFICINA.png';
import IconSupport from '../assets/icons/CONTACTO-SOPORTE.png';


const Contacto = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    comuna: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.comuna.trim()) newErrors.comuna = 'La comuna es requerida';

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\+?\d{7,15}$/.test(formData.telefono)) {
      newErrors.telefono = 'Teléfono inválido';
    }

    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es requerido';

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_form',
        'template_u16syha',
        formRef.current,
        'zdZhn5eEuIST8AHd4'
      );
      alert('¡Formulario enviado con éxito!');
      setFormData({
        nombre: '',
        comuna: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      alert('Hubo un error al enviar el formulario. Intenta más tarde.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-20 bg-gray-50">


      <section className="bg-gradient-to-br from-[#003249] mb-6 via-[#014d72] to-[#006699] text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full opacity-10 blur-3xl animate-pulse">
          </div>
          <div
            className="absolute top-20 right-10 w-48 h-48 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse">
          </div>
          <div className="absolute inset-0 bg-[url('/assets/img/bg/grid-light.svg')] bg-center bg-cover opacity-10"></div>
        </div>
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            CONTACTO
          </h1>
          <h2 className="text-lg md:text-3xl font-extrabold text-[#33CCFF] mb-6">
            ¿LISTO PARA TRANSFORMAR LA GESTIÓN <br />
            DE TUS ESTACIONAMIENTOS?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl font-medium mx-auto leading-none">
            Contáctanos y descubre cómo <span className="font-bold">Park by Vaala</span> puede revolucionar tu
            negocio con <span className="font-bold">tecnología de vanguardia</span>.          </p>
        </div>
      </section>





      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              SOLICITA UNA DEMOSTRACIÓN PERSONALIZADA
            </h2>
            <p className="text-lg text-gray-600">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
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
                  className={`w-full px-4 py-3 border rounded-lg ${errors.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
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
                  className={`w-full px-4 py-3 border rounded-lg ${errors.comuna ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.comuna && <p className="text-red-500 text-sm mt-1">{errors.comuna}</p>}
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
                  className={`w-full px-4 py-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                  className={`w-full px-4 py-3 border rounded-lg ${errors.telefono ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
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
                className={`w-full px-4 py-3 border rounded-lg ${errors.asunto ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.asunto && <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>}
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
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn-primary text-lg px-8 py-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'ENVIAR SOLICITUD ✈'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-[#236E95] text-white rounded-2xl max-w-5xl mx-auto mt-16"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-[#33CCFF] rounded-full flex items-center justify-center shadow-md">

          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase">
            Tiempo de respuesta garantizado
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-medium max-w-2xl text-white/90 leading-relaxed">
            <span className="font-bold">En un plazo máximo de 24 horas hábiles</span> recibirás una respuesta personalizada de nuestro equipo comercial y, si corresponde, un enlace para agendar una reunión de demostración adaptada a tus necesidades específicas.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-gray-100 py-20 mt-16 rounded-2xl"
      >
        <div className="text-center mb-12 px-4">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0073A8]">
            INFORMACIÓN DE CONTACTO DIRECTO
          </h3>
          <p className="text-gray-600 mt-2">
            También puedes contactarnos directamente a través de estos canales
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-b from-[#33CCFF] to-[#0073A8] rounded-full flex items-center justify-center">
              <img src={IconMail} alt="Correo" className="w-full h-full object-contain" />

            </div>
            <h4 className="font-bold text-[#0073A8]" >EMAIL CORPORATIVO</h4>
            <p className="text-gray-700">contacto@parkbyvaala.cl</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-b from-[#33CCFF] to-[#0073A8] rounded-full flex items-center justify-center">
              <img src={IconOffice} alt="Correo" className="w-full h-full object-contain" />

            </div>
            <h4 className="font-bold text-[#0073A8]">OFICINAS</h4>
            <p className="text-gray-700">Viña del Mar, Chile</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-b from-[#33CCFF] to-[#0073A8] rounded-full flex items-center justify-center">
              <img src={IconSupport} alt="Correo" className="w-full h-full object-contain" />

            </div>
            <h4 className="font-bold text-[#0073A8]">SOPORTE 24/7</h4>
            <p className="text-gray-700 leading-tight">
              Lun - Vie: 8:00 - 18:00<br />Emergencias: 24/7
            </p>
          </div>
        </div>
      </motion.section>
    </section >

  );
};

export default Contacto;
