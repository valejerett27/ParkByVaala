import React from 'react';
import HeroSection from '../components/HeroSection';
import QueSomos from '../components/QueSomos';
import MapaInteractivo from '../components/MapaInteractivo';
import { motion } from 'framer-motion';

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
      <MapaInteractivo />
    </div>
  );
};

export default Inicio;