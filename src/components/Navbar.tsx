"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 flex items-center gap-8">
        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#shorts" className="hover:text-white transition-colors">Shorts</a>
          <a href="#channels" className="hover:text-white transition-colors">Channels</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="destructive" size="sm" className="rounded-full bg-red-600 hover:bg-red-700 text-xs font-bold px-4">
            Get a Quote →
          </Button>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
            <span className="text-white">EN</span>
            <div className="w-8 h-4 bg-gray-700 rounded-full relative">
              <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span>PT</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;