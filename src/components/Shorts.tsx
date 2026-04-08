"use client";

import React from 'react';
import { Play } from 'lucide-react';

const shorts = [
  { id: 1, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop" },
];

const Shorts = () => {
  return (
    <section id="shorts" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Vertical Content</span>
          <h2 className="text-5xl font-black text-white uppercase italic mt-2">Short Videos</h2>
        </div>

        <div className="flex flex-wrap gap-6">
          {shorts.map((short) => (
            <div key={short.id} className="group relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={short.image} 
                alt="Short" 
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
      </div>
    </section>
  );
};

export default Shorts;