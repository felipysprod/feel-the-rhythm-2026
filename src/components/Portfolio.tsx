"use client";

import React from 'react';
import { Play, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1, image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop" },
  { id: 6, image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Selected Works</span>
          <h2 className="text-5xl font-black text-white uppercase italic mt-2">Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer">
              <img 
                src={project.image} 
                alt="Project" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Play className="text-white fill-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs font-bold uppercase px-8">
            View All Projects
          </Button>
          <Button variant="destructive" className="rounded-full bg-red-600 hover:bg-red-700 text-xs font-bold uppercase px-8 flex gap-2">
            <Youtube size={16} />
            YT Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;