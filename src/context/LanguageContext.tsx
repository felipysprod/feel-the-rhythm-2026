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
    "nav.services": "Services",
    "nav.quote": "Contact",
    "hero.title": "FELIPYS EDITOR",
    "hero.subtitle": "CONTENT EDITOR — MOTION DESIGNER",
    "hero.scroll": "Scroll",
    "portfolio.tag": "Selected Works",
    "portfolio.title": "Portfolio",
    "portfolio.viewAll": "View All Projects",
    "portfolio.ytJobs": "YT Jobs Profile",
    "shorts.tag": "Vertical Content",
    "shorts.title": "Short Videos",
    "channels.tag": "Clients",
    "channels.title": "Channels I've Edited",
    "services.tag": "What I Do",
    "services.title": "My Services",
    "services.s1.title": "YouTube Editing",
    "services.s1.desc": "High-retention editing for long-form content, from vlogs to complex documentaries.",
    "services.s2.title": "Short-Form Content",
    "services.s2.desc": "Dynamic Reels, TikToks, and Shorts designed to go viral and capture attention quickly.",
    "services.s3.title": "Motion Graphics",
    "services.s3.desc": "Custom animations, transitions, and visual effects to elevate your brand's identity.",
    "services.s4.title": "Color Grading",
    "services.s4.desc": "Professional color correction and grading to give your videos a cinematic look.",
    "process.tag": "Workflow",
    "process.title": "My Process",
    "process.step1.title": "VISION & RHYTHM",
    "process.step1.desc": "We align on your goals and references. I then organize the footage and set the initial rhythm, ensuring the pace matches your unique style right from the start.",
    "process.step2.title": "VISUAL CRAFTING",
    "process.step2.desc": "I refine the cuts and bring the video to life with dynamic zooms, custom typography, b-rolls, and high-impact visual effects to keep your audience engaged.",
    "process.step3.title": "SOUND DESIGN",
    "process.step3.desc": "I select the perfect soundtrack to match the edit and layer in immersive sound effects (SFX) to make sure every transition and key moment hits harder.",
    "process.step4.title": "FINAL POLISH & DELIVERY",
    "process.step4.desc": "I add engaging captions (essential for Reels & VSLs). You review the draft, we make any necessary tweaks, and I deliver the final high-quality video ready to post.",
    "testimonials.tag": "Feedback",
    "testimonials.title": "Client Reviews",
    "about.tag": "FELIPYS EDITOR",
    "about.title": "About Me",
    "about.p1": "I’ve spent over a decade deeply embedded in internet culture, witnessing the evolution of YouTube content firsthand. As a native-level English speaker (US/BR), I don't just \"edit\"—I act as a creative partner who understands scriptwriting, sound design, and content management just as deeply as the software.",
    "about.quote": "Editing isn't just about moving clips; it's about building rhythm. I believe the ear is just as important as the eye when it comes to viewer retention. My goal is to ensure every single frame feels intentional.",
    "about.p2": "My background ranges from complex 3D intros and high-energy gaming montages to clean, high-converting motion design for modern brands. Whether it’s a fast-paced vlog or a polished brand story, I focus on \"Flow\" to turn casual viewers into dedicated fans.",
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
    "nav.services": "Serviços",
    "nav.quote": "Contato",
    "hero.title": "FELIPYS EDITOR",
    "hero.subtitle": "EDITOR DE CONTEÚDO — MOTION DESIGNER",
    "hero.scroll": "Rolar",
    "portfolio.tag": "Trabalhos Selecionados",
    "portfolio.title": "Portfólio",
    "portfolio.viewAll": "Ver Todos os Projetos",
    "portfolio.ytJobs": "Perfil YT Jobs",
    "shorts.tag": "Conteúdo Vertical",
    "shorts.title": "Verticais",
    "channels.tag": "Clientes",
    "channels.title": "Canais que Editei",
    "services.tag": "O Que Eu Faço",
    "services.title": "Meus Serviços",
    "services.s1.title": "Edição para YouTube",
    "services.s1.desc": "Edição de alta retenção para conteúdo longo, de vlogs a documentários complexos.",
    "services.s2.title": "Conteúdo Curto",
    "services.s2.desc": "Reels, TikToks e Shorts dinâmicos projetados para viralizar e prender a atenção.",
    "services.s3.title": "Motion Graphics",
    "services.s3.desc": "Animações personalizadas, transições e efeitos visuais para elevar a identidade da sua marca.",
    "services.s4.title": "Color Grading",
    "services.s4.desc": "Correção e gradação de cor profissional para dar aos seus vídeos um visual cinematográfico.",
    "process.tag": "Fluxo de Trabalho",
    "process.title": "Meu Processo",
    "process.step1.title": "VISÃO & RITMO",
    "process.step1.desc": "Alinhamos seus objetivos e referências. Em seguida, organizo o material e defino o ritmo inicial, garantindo que o passo combine com seu estilo único desde o começo.",
    "process.step2.title": "CRIAÇÃO VISUAL",
    "process.step2.desc": "Refino os cortes e dou vida ao vídeo com zooms dinâmicos, tipografia personalizada, b-rolls e efeitos visuais de alto impacto para manter seu público engajado.",
    "process.step3.title": "DESIGN DE SOM",
    "process.step3.desc": "Seleciono a trilha sonora perfeita para a edição e adiciono efeitos sonoros (SFX) imersivos para garantir que cada transição e momento chave tenha mais impacto.",
    "process.step4.title": "POLIMENTO FINAL & ENTREGA",
    "process.step4.desc": "Adiciono legendas envolventes (essenciais para Reels e VSLs). Você revisa o rascunho, fazemos os ajustes necessários e entrego o vídeo final em alta qualidade pronto para postar.",
    "testimonials.tag": "Feedback",
    "testimonials.title": "Avaliações",
    "about.tag": "FELIPYS EDITOR",
    "about.title": "Sobre Mim",
    "about.p1": "Passei mais de uma década profundamente imerso na cultura da internet, testemunhando a evolução do conteúdo do YouTube em primeira mão. Como falante nativo de inglês (EUA/BR), eu não apenas \"edito\" — atuo como um parceiro criativo que entende de roteiro, design de som e gerenciamento de conteúdo tão profundamente quanto o software.",
    "about.quote": "Editar não é apenas mover clipes; é construir ritmo. Acredito que o ouvido é tão importante quanto o olho quando se trata de retenção de público. Meu objetivo é garantir que cada frame pareça intencional.",
    "about.p2": "Minha experiência varia de intros 3D complexas e montagens de jogos de alta energia a motion design limpo e de alta conversão para marcas modernas. Seja um vlog acelerado ou uma história de marca polida, foco no \"Flow\" para transformar espectadores casuais em fãs dedicados.",
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