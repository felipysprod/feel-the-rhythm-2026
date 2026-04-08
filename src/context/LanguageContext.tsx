"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'PT';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  EN: {
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.shorts": "Shorts",
    "nav.channels": "Channels",
    "nav.about": "About",
    "nav.quote": "Get a Quote",
    "hero.title": "FELIPYS EDITOR",
    "hero.subtitle": "Video Editor — Premiere Pro - After Effects",
    "hero.scroll": "Scroll",
    "portfolio.tag": "Selected Works",
    "portfolio.title": "Portfolio",
    "portfolio.viewAll": "View All Projects",
    "portfolio.ytJobs": "YT Jobs Profile",
    "shorts.tag": "Vertical Content",
    "shorts.title": "Short Videos",
    "channels.tag": "Clients",
    "channels.title": "Channels I've Edited",
    "about.tag": "FELIPYS EDITOR",
    "about.title": "About Me",
    "about.p1": "I'm 20 years old and I'm passionate about video editing. I've been working with Adobe Premiere for over 4 years and with After Effects for about 2 years, continuously developing my skills in the audiovisual field.",
    "about.quote": "I enjoy testing new editing styles and finding ways to give each video its own unique identity. I always strive to evolve, learn different techniques, and apply creativity to every project I work on.",
    "about.p2": "My work is guided by dedication, effort, and attention to detail, always aiming to deliver polished and high-quality edits that stand out in the digital landscape.",
    "about.exp1": "Adobe Premiere Pro",
    "about.exp2": "Adobe After Effects",
    "about.years": "years",
    "about.impact": "Total Impact",
    "about.views": "Views Generated for Clients",
    "contact.tag": "Let's Work Together",
    "contact.title": "Get a Quote",
    "contact.p": "Liked what you saw? Reach out via one of the platforms below.",
    "footer.rights": "© 2026 FELIPYS EDITOR — All rights reserved"
  },
  PT: {
    "nav.home": "Início",
    "nav.portfolio": "Portfólio",
    "nav.shorts": "Shorts",
    "nav.channels": "Canais",
    "nav.about": "Sobre",
    "nav.quote": "Orçamento",
    "hero.title": "FELIPYS EDITOR",
    "hero.subtitle": "Editor de Vídeo — Premiere Pro - After Effects",
    "hero.scroll": "Rolar",
    "portfolio.tag": "Trabalhos Selecionados",
    "portfolio.title": "Portfólio",
    "portfolio.viewAll": "Ver Todos os Projetos",
    "portfolio.ytJobs": "Perfil YT Jobs",
    "shorts.tag": "Conteúdo Vertical",
    "shorts.title": "Vídeos Curtos",
    "channels.tag": "Clientes",
    "channels.title": "Canais que Editei",
    "about.tag": "FELIPYS EDITOR",
    "about.title": "Sobre Mim",
    "about.p1": "Tenho 20 anos e sou apaixonado por edição de vídeo. Trabalho com Adobe Premiere há mais de 4 anos e com After Effects há cerca de 2 anos, desenvolvendo continuamente minhas habilidades no campo audiovisual.",
    "about.quote": "Gosto de testar novos estilos de edição e encontrar formas de dar a cada vídeo sua própria identidade única. Sempre busco evoluir, aprender diferentes técnicas e aplicar criatividade em cada projeto em que trabalho.",
    "about.p2": "Meu trabalho é guiado por dedicação, esforço e atenção aos detalhes, sempre visando entregar edições polidas e de alta qualidade que se destacam no cenário digital.",
    "about.exp1": "Adobe Premiere Pro",
    "about.exp2": "Adobe After Effects",
    "about.years": "anos",
    "about.impact": "Impacto Total",
    "about.views": "Visualizações Geradas para Clientes",
    "contact.tag": "Vamos Trabalhar Juntos",
    "contact.title": "Peça um Orçamento",
    "contact.p": "Gostou do que viu? Entre em contato através de uma das plataformas abaixo.",
    "footer.rights": "© 2026 FELIPYS EDITOR — Todos os direitos reservados"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('EN');

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['EN']] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};