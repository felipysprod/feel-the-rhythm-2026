"use client";

import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const shorts = [
  { 
    id: 1, 
    url: "https://www.instagram.com/p/DQKhQoBD7WD/", 
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    url: "https://www.instagram.com/p/DNOBlZduoLE/", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    url: "https://www.instagram.com/p/DJHhIEPxZKO/", 
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    url: "https://www.instagram.com/p/DKLORqeN97X/", 
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop" 
  },
];

const Shorts = () => {
  const { t } = useLanguage();

  return (
    <section id="shorts" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('shorts.tag')}</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">{t('shorts.title')}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shorts.map((short, i) => (
            <motion.a 
              key={short.id}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 block border border-white/5 hover:border-red-600/50 transition-colors duration-500"
            >
              <img 
                src={short.image} 
                alt="Short Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/40 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Instagram className="text-white" size={28} />
                </div>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shorts;