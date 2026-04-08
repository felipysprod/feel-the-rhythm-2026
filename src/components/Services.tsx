"use client";

import React from 'react';
import { Youtube, Zap, Layers, Palette } from 'lucide-react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Youtube className="text-red-600" size={32} />,
      title: t('services.s1.title'),
      desc: t('services.s1.desc'),
    },
    {
      icon: <Zap className="text-red-600" size={32} />,
      title: t('services.s2.title'),
      desc: t('services.s2.desc'),
    },
    {
      icon: <Layers className="text-red-600" size={32} />,
      title: t('services.s3.title'),
      desc: t('services.s3.desc'),
    },
    {
      icon: <Palette className="text-red-600" size={32} />,
      title: t('services.s4.title'),
      desc: t('services.s4.desc'),
    },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('services.tag')}</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">{t('services.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-red-600/50 transition-all duration-500 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-4 uppercase italic">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;