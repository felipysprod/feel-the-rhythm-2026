"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 flex items-center gap-8">
        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition-colors">{t('nav.home')}</a>
          <a href="#portfolio" className="hover:text-white transition-colors">{t('nav.portfolio')}</a>
          <a href="#shorts" className="hover:text-white transition-colors">{t('nav.shorts')}</a>
          <a href="#channels" className="hover:text-white transition-colors">{t('nav.channels')}</a>
          <a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="destructive" size="sm" className="rounded-full bg-red-600 hover:bg-red-700 text-xs font-bold px-4 shadow-lg shadow-red-600/20">
            {t('nav.quote')} →
          </Button>
          
          <div 
            className="flex items-center gap-2 text-[10px] font-bold cursor-pointer select-none"
            onClick={() => setLang(lang === 'EN' ? 'PT' : 'EN')}
          >
            <span className={cn("transition-colors", lang === 'EN' ? "text-white" : "text-gray-500")}>EN</span>
            <div className="w-8 h-4 bg-zinc-800 rounded-full relative border border-white/5">
              <div className={cn(
                "absolute top-0.5 w-2.5 h-2.5 bg-white rounded-full transition-all duration-300",
                lang === 'EN' ? "left-1" : "left-4"
              )} />
            </div>
            <span className={cn("transition-colors", lang === 'PT' ? "text-white" : "text-gray-500")}>PT</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;