"use client";

import React from 'react';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Minecraft Survival", category: "Gameplay", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop" },
  { id: 2, title: "Cinematic Montage", category: "Motion Graphics", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop" },
  { id: 3, title: "Tech Review", category: "Talking Head", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop" },
  { id: 4, title: "Vlog Edit", category: "Vlog", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop" },
  { id: 5, title: "Gaming Highlights", category: "Gameplay", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop" },
  { id: 6, title: "Documentary Style", category: "Storytelling", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Selected Works</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-red-600 text-[10px] font-black uppercase tracking-widest mb-1">{project.category}</span>
                <h3 className="text-white font-bold text-xl mb-4">{project.title}</h3>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs font-bold uppercase px-10 py-6 h-auto tracking-widest">
            View All Projects
          </Button>
          <Button variant="destructive" className="rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase px-10 py-6 h-auto tracking-widest flex gap-3 shadow-xl shadow-red-600/20">
            <Youtube size={20} />
            YT Jobs Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;