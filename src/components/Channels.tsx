"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const channels = [
  { name: "Smurfzin", subs: "2.13M subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=smurf" },
  { name: "Delayed MC", subs: "82.4K subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=delayed" },
  { name: "SONBLACKS", subs: "236 subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=son" },
  { name: "GamerPro", subs: "1.5M subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=gamer" },
  { name: "TechTips", subs: "500K subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech" },
];

const Channels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const next = () => setCurrentIndex((prev) => (prev + 1) % channels.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + channels.length) % channels.length);

  return (
    <section id="channels" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('channels.tag')}</span>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">{t('channels.title')}</h2>
          </div>
          
          <div className="hidden md:flex gap-4 mb-2">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {channels.map((channel, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 rounded-full border-2 border-white/5 p-1.5 mb-6 group-hover:border-red-600 transition-colors duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                  <img src={channel.image} alt={channel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <h3 className="text-white font-bold text-base mb-1">{channel.name}</h3>
              <p className="text-red-600 text-[10px] font-black uppercase tracking-wider">{channel.subs}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;