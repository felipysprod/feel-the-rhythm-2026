"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-white/5 text-center">
      <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
        {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;