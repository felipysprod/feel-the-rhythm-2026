"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";

const tags = ["Gameplay", "Motion Graphics", "Documentary", "Storytelling", "Talking Heads", "Tutorials", "Reels & Shorts", "Podcast", "Color Grading", "Vlog"];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <span className="text-red-600 text-xs font-bold tracking-widest uppercase">FAKEZXC EDITOR</span>
              <h2 className="text-5xl font-black text-white uppercase italic mt-2">About Me</h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
              <p>
                I'm 20 years old and I'm passionate about video editing. I've been working with Adobe Premiere for over 4 years and with After Effects for about 2 years, continuously developing my skills in the audiovisual field.
              </p>
              <div className="border-l-2 border-red-600 pl-6 italic">
                I enjoy testing new editing styles and finding ways to give each video its own unique identity. I always strive to evolve, learn different techniques, and apply creativity to every project I work on.
              </div>
              <p>
                My work is guided by dedication, effort, and attention to detail, always aiming to deliver polished and high-quality edits.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full border-white/10 bg-white/5 text-gray-400 text-[10px] px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Experience</span>
              <h3 className="text-white font-bold mt-1">Adobe Premiere Pro</h3>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl font-black text-red-600">4</span>
                <span className="text-gray-400 text-sm">years</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Experience</span>
              <h3 className="text-white font-bold mt-1">Adobe After Effects</h3>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl font-black text-red-600">2</span>
                <span className="text-gray-400 text-sm">years</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Views Generated</span>
              <div className="text-5xl font-black text-white mt-2">+500.0K</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;