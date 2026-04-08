"use client";

import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

const shorts = [
  { 
    id: 1, 
    url: "https://www.instagram.com/p/DQKhQoBD7WD/", 
    image: "https://www.instagram.com/p/DQKhQoBD7WD/media/?size=l" 
  },
  { 
    id: 2, 
    url: "https://www.instagram.com/p/DNOBlZduoLE/", 
    image: "https://www.instagram.com/p/DNOBlZduoLE/media/?size=l" 
  },
  { 
    id: 3, 
    url: "https://www.instagram.com/p/DJHhIEPxZKO/", 
    image: "https://www.instagram.com/p/DJHhIEPxZKO/media/?size=l" 
  },
  { 
    id: 4, 
    url: "https://www.instagram.com/p/DKLORqeN97X/", 
    image: "https://www.instagram.com/p/DKLORqeN97X/media/?size=l" 
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
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 block"
            >
              <img 
                src={short.image} 
                alt="Short Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if Instagram media endpoint is restricted
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format&fit=crop`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl shadow-red-600/40">
                  <Instagram className="text-white" size={24} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shorts;