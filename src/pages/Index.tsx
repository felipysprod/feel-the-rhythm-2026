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

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white">
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
    </div>
  );
};

export default Index;