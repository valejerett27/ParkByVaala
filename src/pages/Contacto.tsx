import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import IconMail from '../assets/icons/CONTACTO-CORREO.png';
import IconOffice from '../assets/icons/CONTACTO-OFICINA.png';
import IconSupport from '../assets/icons/CONTACTO-SOPORTE.png';
import IconTiempo from '../assets/icons/CONTACTO-TIEMPO.png';

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

  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error';
    visible: boolean;
  }>({ message: '', type: 'success', visible: false });

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
        'service_vale27',
        'template_contacto_park',
        formRef.current,
        'qnIdDdOHvhylIGKIG'
      );
      setFormStatus({
        message: '¡Formulario enviado con éxito!',
        type: 'success',
        visible: true,
      });
      setFormData({
        nombre: '',
        comuna: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error: any) {
      const errorMessage =
        error?.text || error?.message || 'Error desconocido al enviar el formulario.';
      console.error('Error al enviar el formulario:', error);
      setFormStatus({
        message: `Hubo un problema al enviar el formulario: ${errorMessage}`,
        type: 'error',
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, visible: false }));
      }, 5000);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };
  const containerStagger = {
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="bg-gray-50">
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-gradient-to-br from-[#003249] via-[#014d72] to-[#006699] text-white pb-20 pt-36 relative overflow-hidden"      >
        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-900 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-48 h-48 bg-sky-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold mb-6">CONTACTO</motion.h1>
          <motion.h2 variants={fadeInRight} className="text-md md:text-3xl font-extrabold text-[#33CCFF] mb-6">
            ¿LISTO PARA TRANSFORMAR LA GESTIÓN <br /> DE TUS ESTACIONAMIENTOS?
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="text-sm md:text-2xl mb-8 max-w-2xl font-medium mx-auto leading-tight"
          >
            Contáctanos y descubre cómo <span className="font-bold">Park by Vaala</span> puede revolucionar tu
            negocio con <span className="font-bold">tecnología de vanguardia</span>.
          </motion.p>
        </div>
      </motion.section>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              SOLICITA UNA DEMOSTRACIÓN PERSONALIZADA
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo.
            </p>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={fadeInLeft}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                <input name="nombre" value={formData.nombre} onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </motion.div>

              <motion.div variants={fadeInRight}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comuna/Ciudad *</label>
                <input name="comuna" value={formData.comuna} onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.comuna ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.comuna && <p className="text-red-500 text-sm mt-1">{errors.comuna}</p>}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={fadeInLeft}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </motion.div>

              <motion.div variants={fadeInRight}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.telefono ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
              <input name="asunto" value={formData.asunto} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg ${errors.asunto ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.asunto && <p className="text-red-500 text-sm mt-1">{errors.asunto}</p>}
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje Adicional</label>
              <textarea name="mensaje" rows={4} value={formData.mensaje} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none" />
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center relative">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white font-semibold py-6 px-8 rounded-full border border-white/20 shadow-inner bg-[linear-gradient(135deg,_#23739c_0%,_#3f8fb6_50%,_#1a5f88_100%)] hover:bg-[linear-gradient(135deg,_#1d5a7e_0%,_#347699_50%,_#144d6c_100%)] transition-colors duration-600"
              >
                {isSubmitting ? 'Enviando...' : 'ENVIAR SOLICITUD ✈'}
              </button>

              {formStatus.visible && (
                <div
                  className={`mt-6 px-4 py-3 rounded-lg text-sm font-medium max-w-lg mx-auto flex justify-between items-center ${formStatus.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                    }`}
                >
                  <span>{formStatus.message}</span>
                  <button
                    onClick={() => setFormStatus((prev) => ({ ...prev, visible: false }))}
                    className="ml-4 text-lg leading-none font-bold"
                  >
                    ✕
                  </button>
                </div>

              )}
            </motion.div>

          </motion.form>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="mt-10 bg-[#23658C] text-white rounded-xl px-8 py-6 text-center">
            <div className="flex justify-center mb-4">
              <div className=" flex items-center justify-center">
                <img src={IconTiempo} alt="Correo" className="mx-auto  w-16 h-16 mb-2" />
              </div>
            </div>
            <h4 className="text-lg font-bold mb-3">TIEMPO DE RESPUESTA GARANTIZADO</h4>
            <p className="text-sm">
              <strong>EN UN PLAZO MÁXIMO DE 24 HORAS HÁBILES</strong> recibirás una respuesta personalizada de nuestro equipo comercial y, si corresponde, un enlace para agendar una reunión de demostración adaptada a tus necesidades específicas.
            </p>
          </motion.div>

        </div>

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }} className="mt-10 bg-gray-100 text-center text-[#022E46] rounded-xl px-8 py-10">
        <h4 className="text-xl text-[#006699] font-bold mb-2">INFORMACIÓN DE CONTACTO DIRECTO</h4>
        <p className="text-[#006699] mb-8">También puedes contactarnos directamente a través de estos canales</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={IconMail} alt="Correo" className="mx-auto  w-16 h-16 mb-2" />
            <h5 className="font-bold text-[#006699]">EMAIL CORPORATIVO</h5>
            <p className="text-sm text-[#006699]">contacto@parkbyvaala.cl</p>
          </div>
          <div>
            <img src={IconOffice} alt="Oficina" className="mx-auto w-16 h-16 mb-2" />
            <h5 className="font-bold text-[#006699]">OFICINAS</h5>
            <p className="text-sm text-[#006699]">Viña del Mar, Chile</p>
          </div>
          <div>
            <img src={IconSupport} alt="Soporte" className="mx-auto w-16 h-16 mb-2" />
            <h5 className="font-bold text-[#006699]">SOPORTE</h5>
            <p className="text-sm text-[#006699]">Lun - Vie: 9:00 - 18:00<br />Urgencias hasta las 19:00</p>
          </div>
        </div>
      </motion.div>



    </section >

  );
};

export default Contacto;
