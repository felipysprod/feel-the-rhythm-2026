"use client";

import React from 'react';
import { Play } from 'lucide-react';
import { motion } from "framer-motion";

const shorts = [
  { id: 1, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop" },
];

const Shorts = () => {
  return (
    <section id="shorts" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Vertical Content</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">Short Videos</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shorts.map((short, i) => (
            <motion.div 
              key={short.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900"
            >
              <img 
                src={short.image} 
                alt="Short" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl shadow-red-600/40">
                  <Play className="text-white fill-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shorts;