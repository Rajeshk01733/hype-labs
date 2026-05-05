import React from 'react';
import { useState } from 'react';
import Hero from '../components/home/Hero';
import Ticker from '../components/home/Ticker';
import ValueProposition from '../components/ValueProposition';
import Services from '../components/home/Services';

import Dossier from '../components/home/Dossier';
import BeyondVisuals from '../components/home/BeyondVisuals';
import LogoCarousel from '../components/home/LogoCarousel';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import { motion } from "framer-motion";
import ContactSection from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Ticker />
      <Services />
      
      <Dossier />
      <BeyondVisuals />
      <LogoCarousel />
      <Stats />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Home;