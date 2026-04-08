"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Shorts from '@/components/Shorts';
import Channels from '@/components/Channels';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import NoiseOverlay from '@/components/NoiseOverlay';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Shorts />
        <Channels />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </div>
  );
};

export default Index;