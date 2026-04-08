"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const channels = [
  { name: "Smurfzin", subs: "2.13M subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=smurf" },
  { name: "Delayed MC", subs: "82.4K subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=delayed" },
  { name: "SONBLACKS", subs: "236 subs", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=son" },
];

const Channels = () => {
  return (
    <section id="channels" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Clients</span>
          <h2 className="text-5xl font-black text-white uppercase italic mt-2">Channels I've Edited</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            {channels.map((channel, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-2 border-white/10 p-1 mb-4">
                  <img src={channel.image} alt={channel.name} className="w-full h-full rounded-full bg-gray-800" />
                </div>
                <h3 className="text-white font-bold text-sm">{channel.name}</h3>
                <p className="text-red-600 text-[10px] font-bold uppercase mt-1">{channel.subs}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Channels;