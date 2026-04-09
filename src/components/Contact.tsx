"use client";

import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{t('contact.tag')}</span>
          <h2 className="text-6xl font-black text-white uppercase mt-2">{t('contact.title')}</h2>
        </div>

        <p className="text-gray-400 text-sm mb-12">
          {t('contact.p')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 flex gap-2">
            <MessageCircle size={18} />
            WhatsApp
          </Button>
          <a href="http://x.com/felipysprod" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-black border border-white/10 hover:bg-white/5 text-white font-bold px-8 flex gap-2">
              <Twitter size={18} />
              Twitter / X
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;