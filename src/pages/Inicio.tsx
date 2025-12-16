import React from 'react';
import HeroSection from '../components/HeroSection';
import QueSomos from '../components/QueSomos';
import MapaInteractivo from '../components/DescargaApp';
import ZonaMiPark from '../components/ZonaPark';
import { motion } from 'framer-motion';
import DescargaApp from '../components/DescargaApp';

const Inicio = () => {
  const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

const containerStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

  return (
    <div>
      <HeroSection />
      <QueSomos />
      <DescargaApp />
      <ZonaMiPark />
    </div>
  );
};

export default Inicio;