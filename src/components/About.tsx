"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const tags = [
  "Sound Design", 
  "Motion Graphics", 
  "Scriptwriting", 
  "Content Management", 
  "3D Intros", 
  "Gaming Montages", 
  "Brand Storytelling", 
  "Soundtrack Selection", 
  "Viewer Retention", 
  "Adobe Premiere", 
  "After Effects"
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('about.tag')}</span>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase mt-2">{t('about.title')}</h2>
            </div>
            
            <div className="space-y-8 text-gray-400 text-base leading-relaxed">
              <p>{t('about.p1')}</p>
              <div className="border-l-4 border-red-600 pl-8 text-white text-lg font-medium bg-white/5 py-6 pr-6 rounded-r-xl">
                "{t('about.quote')}"
              </div>
              <p>{t('about.p2')}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-12">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full border-white/10 bg-white/5 text-gray-300 text-[11px] font-bold px-4 py-2 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 cursor-default">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10 hover:border-red-600/50 transition-colors duration-500"
            >
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Experience</span>
              <h3 className="text-white font-bold text-lg mt-2">{t('about.exp1')}</h3>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-6xl font-black text-red-600">10+</span>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">{t('about.years')}</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10 hover:border-red-600/50 transition-colors duration-500"
            >
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Experience</span>
              <h3 className="text-white font-bold text-lg mt-2">{t('about.exp2')}</h3>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-6xl font-black text-red-600">5+</span>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">{t('about.years')}</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="sm:col-span-2 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-12 text-center shadow-2xl shadow-red-600/20"
            >
              <span className="text-black/60 text-[10px] font-black uppercase tracking-[0.3em]">{t('about.impact')}</span>
              <div className="text-7xl font-black text-black mt-2 tracking-tighter">+3.76M</div>
              <p className="text-black/80 font-bold uppercase tracking-widest text-xs mt-2">{t('about.views')}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;