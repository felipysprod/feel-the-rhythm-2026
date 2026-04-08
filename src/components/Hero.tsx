"use client";

import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2000&auto=format&fit=crop")',
          filter: 'brightness(0.4)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0a] z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="w-32 h-32 rounded-full border-4 border-red-600 overflow-hidden mb-8 shadow-2xl shadow-red-600/20">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=fakezxc" 
            alt="Logo" 
            className="w-full h-full object-cover bg-white"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2 uppercase italic">
          FAKEZXC EDITOR
        </h1>
        <p className="text-gray-400 tracking-[0.3em] text-xs md:text-sm font-bold uppercase">
          Video Editor — Premiere Pro - After Effects
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-red-600" />
      </div>
    </section>
  );
};

export default Hero;