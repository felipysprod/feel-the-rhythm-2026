"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const tags = ["Gameplay", "Motion Graphics", "Documentary", "Storytelling", "Talking Heads", "Tutorials", "Reels & Shorts", "Podcast", "Color Grading", "Vlog"];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <span className="text-red-600 text-xs font-bold tracking-widest uppercase">FAKEZXC EDITOR</span>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mt-2">About Me</h2>
            </div>
            
            <div className="space-y-8 text-gray-400 text-base leading-relaxed">
              <p>
                I'm 20 years old and I'm passionate about video editing. I've been working with Adobe Premiere for over 4 years and with After Effects for about 2 years, continuously developing my skills in the audiovisual field.
              </p>
              <div className="border-l-4 border-red-600 pl-8 italic text-white text-lg font-medium bg-white/5 py-6 pr-6 rounded-r-xl">
                "I enjoy testing new editing styles and finding ways to give each video its own unique identity. I always strive to evolve, learn different techniques, and apply creativity to every project I work on."
              </div>
              <p>
                My work is guided by dedication, effort, and attention to detail, always aiming to deliver polished and high-quality edits that stand out in the digital landscape.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-12">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full border-white/10 bg-white/5 text-gray-300 text-[11px] font-bold px-4 py-2 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 cursor-default">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10 hover:border-red-600/50 transition-colors duration-500"
            >
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Experience</span>
              <h3 className="text-white font-bold text-lg mt-2">Adobe Premiere Pro</h3>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-6xl font-black text-red-600 italic">4</span>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">years</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10 hover:border-red-600/50 transition-colors duration-500"
            >
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Experience</span>
              <h3 className="text-white font-bold text-lg mt-2">Adobe After Effects</h3>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-6xl font-black text-red-600 italic">2</span>
                <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">years</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="sm:col-span-2 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-12 text-center shadow-2xl shadow-red-600/20"
            >
              <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">Total Impact</span>
              <div className="text-7xl font-black text-white mt-2 italic tracking-tighter">+500.0K</div>
              <p className="text-white/80 font-bold uppercase tracking-widest text-xs mt-2">Views Generated for Clients</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;