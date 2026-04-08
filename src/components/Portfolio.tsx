"use client";

import React, { useState } from 'react';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VideoModal from './VideoModal';
import { useLanguage } from '@/context/LanguageContext';

const projects = [
  { id: 1, title: "Minecraft Survival", category: "Gameplay", videoId: "mf5WGJJVnAI", image: "https://img.youtube.com/vi/mf5WGJJVnAI/maxresdefault.jpg" },
  { id: 3, title: "Tech Review", category: "Talking Head", videoId: "y0gchfhewF8", image: "https://img.youtube.com/vi/y0gchfhewF8/maxresdefault.jpg" },
  { id: 4, title: "Vlog Edit", category: "Vlog", videoId: "KbbKy1AUg_w", image: "https://img.youtube.com/vi/KbbKy1AUg_w/maxresdefault.jpg" },
  { id: 5, title: "Gaming Highlights", category: "Gameplay", videoId: "e4eXLfE3Ixs", image: "https://img.youtube.com/vi/e4eXLfE3Ixs/maxresdefault.jpg" },
  { id: 6, title: "Documentary Style", category: "Storytelling", videoId: "GuVbtAMxJUM", image: "https://img.youtube.com/vi/GuVbtAMxJUM/maxresdefault.jpg" },
  { id: 7, title: "Creative Edit", category: "Motion Graphics", videoId: "2UwBO-WSCik", image: "https://img.youtube.com/vi/2UwBO-WSCik/maxresdefault.jpg" },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('portfolio.tag')}</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">{t('portfolio.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
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

        <div className="flex justify-center">
          <a href="https://ytjobs.co/talent/profile/507799" target="_blank" rel="noopener noreferrer">
            <Button variant="destructive" className="rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase px-10 py-6 h-auto tracking-widest flex gap-3 shadow-xl shadow-red-600/20">
              <Youtube size={20} />
              {t('portfolio.ytJobs')}
            </Button>
          </a>
        </div>
      </div>

      <VideoModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title}
        videoId={selectedProject?.videoId}
      />
    </section>
  );
};

export default Portfolio;