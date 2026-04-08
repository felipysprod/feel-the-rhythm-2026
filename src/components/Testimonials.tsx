"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Smurfzin",
    role: "Content Creator",
    text: "Felipys is one of the most creative editors I've worked with. His attention to detail and storytelling ability is unmatched.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=smurf"
  },
  {
    name: "Delayed MC",
    role: "YouTuber",
    text: "The retention on my videos skyrocketed after Felipys started editing. He knows exactly how to keep the audience engaged.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=delayed"
  },
  {
    name: "GamerPro",
    role: "Streamer",
    text: "Fast delivery and incredible quality. The motion graphics he adds really make the content pop.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gamer"
  }
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('testimonials.tag')}</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">{t('testimonials.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-red-600/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 text-red-600/20" size={48} />
              
              <p className="text-gray-300 italic mb-8 relative z-10">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 border border-white/10">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;