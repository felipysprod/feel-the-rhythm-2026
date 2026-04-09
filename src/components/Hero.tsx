"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover blur-[2px]"
          src="/loop-video.webm"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0a] z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src="/logo-ftr.png" 
            alt="Felipys Editor Logo"
            className="h-auto max-h-[200px] md:max-h-[350px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-glow"
          />
        </motion.div>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-400 tracking-[0.1em] text-[10px] md:text-sm font-normal uppercase"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{t('hero.scroll')}</span>
        <div className="w-[1px] h-12 bg-red-600" />
      </motion.div>
    </section>
  );
};

export default Hero;