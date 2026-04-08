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
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2000&auto=format&fit=crop")',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#0a0a0a] z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-32 h-32 rounded-full border-4 border-red-600 overflow-hidden mb-8 shadow-2xl shadow-red-600/40"
        >
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=felipys" 
            alt="Logo" 
            className="w-full h-full object-cover bg-white"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-2 uppercase italic leading-none"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gray-400 tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase"
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