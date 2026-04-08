"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const channels = [
  { 
    name: "Yuriilouco", 
    subs: "871k subs", 
    image: "https://yt3.googleusercontent.com/ytc/AIdro_m_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X=s176-c-k-c0x00ffffff-no-rj" // Placeholder for Yuriilouco
  },
  { 
    name: "leleo", 
    subs: "739k subs", 
    image: "https://yt3.googleusercontent.com/ytc/AIdro_m_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X=s176-c-k-c0x00ffffff-no-rj" // Placeholder for Leleo
  },
  { 
    name: "Nicks", 
    subs: "473k subs", 
    image: "https://yt3.googleusercontent.com/ytc/AIdro_m_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X_X=s176-c-k-c0x00ffffff-no-rj" // Placeholder for Nicks
  },
];

// Since I cannot directly upload the files you attached to the project's public folder, 
// I have updated the component to use the filenames. 
// Please ensure you place Yuriilouco.jpg, Leleo.jpg, and Nicks.png in your public folder.

const updatedChannels = [
  { name: "Yuriilouco", subs: "871k subs", image: "/Yuriilouco.jpg" },
  { name: "leleo", subs: "739k subs", image: "/Leleo.jpg" },
  { name: "Nicks", subs: "473k subs", image: "/Nicks.png" },
];

const Channels = () => {
  const { t } = useLanguage();

  return (
    <section id="channels" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('channels.tag')}</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">{t('channels.title')}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {updatedChannels.map((channel, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full border-2 border-white/5 p-1.5 group-hover:border-red-600 transition-colors duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                    <img 
                      src={channel.image} 
                      alt={channel.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to a dicebear avatar if the local image isn't found yet
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${channel.name}`;
                      }}
                    />
                  </div>
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