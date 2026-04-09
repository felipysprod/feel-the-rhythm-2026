"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';
import { ClipboardList, Scissors, Eye, CheckCircle2 } from 'lucide-react';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <ClipboardList className="text-red-600" size={32} />,
      title: t('process.step1.title'),
      desc: t('process.step1.desc'),
    },
    {
      icon: <Scissors className="text-red-600" size={32} />,
      title: t('process.step2.title'),
      desc: t('process.step2.desc'),
    },
    {
      icon: <Eye className="text-red-600" size={32} />,
      title: t('process.step3.title'),
      desc: t('process.step3.desc'),
    },
    {
      icon: <CheckCircle2 className="text-red-600" size={32} />,
      title: t('process.step4.title'),
      desc: t('process.step4.desc'),
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('process.tag')}</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase mt-2">{t('process.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-red-600/50 to-transparent z-0" />
              )}
              
              <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 relative z-10 group-hover:border-red-600 transition-colors duration-500">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-black text-white">
                  0{i + 1}
                </div>
                {step.icon}
              </div>
              
              <h3 className="text-white font-bold text-xl mb-4 uppercase">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none select-none whitespace-nowrap">
        Workflow
      </div>
    </section>
  );
};

export default Process;