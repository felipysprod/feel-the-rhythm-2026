"use client";

import React from 'react';
import { MessageCircle, Disc as Discord, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">Let's Work Together</span>
          <h2 className="text-6xl font-black text-white uppercase italic mt-2">Get a Quote</h2>
        </div>

        <p className="text-gray-400 text-sm mb-12">
          Liked what you saw? Reach out via one of the platforms below.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 flex gap-2">
            <MessageCircle size={18} />
            WhatsApp
          </Button>
          <Button className="rounded-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white font-bold px-8 flex gap-2">
            <Discord size={18} />
            Discord
          </Button>
          <Button className="rounded-full bg-black border border-white/10 hover:bg-white/5 text-white font-bold px-8 flex gap-2">
            <Twitter size={18} />
            Twitter / X
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;