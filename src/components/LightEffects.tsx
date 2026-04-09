"use client";

import React from 'react';

const LightEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {/* Light Leaks */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-400/40 rounded-full blur-4xl animate-float-1"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-300/40 rounded-full blur-4xl animate-float-2"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-yellow-500/40 rounded-full blur-4xl animate-float-3"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-yellow-200/40 rounded-full blur-4xl animate-float-4"></div>
      <div className="absolute top-2/3 left-1/2 w-56 h-56 bg-yellow-400/40 rounded-full blur-4xl animate-float-5"></div>
      <div className="absolute bottom-1/2 right-1/5 w-48 h-48 bg-yellow-300/40 rounded-full blur-4xl animate-float-6"></div>
      <div className="absolute top-1/4 left-2/3 w-40 h-40 bg-yellow-500/40 rounded-full blur-4xl animate-float-7"></div>
      <div className="absolute bottom-2/3 left-1/5 w-52 h-52 bg-yellow-200/40 rounded-full blur-4xl animate-float-8"></div>
      <div className="absolute top-1/5 right-1/2 w-44 h-44 bg-yellow-400/40 rounded-full blur-4xl animate-float-9"></div>
      <div className="absolute bottom-3/4 left-3/4 w-60 h-60 bg-yellow-300/40 rounded-full blur-4xl animate-float-10"></div>
      <div className="absolute top-3/4 right-3/4 w-38 h-38 bg-yellow-500/40 rounded-full blur-4xl animate-float-11"></div>
      <div className="absolute top-1/6 left-1/6 w-68 h-68 bg-yellow-200/40 rounded-full blur-4xl animate-float-12"></div>
      <div className="absolute bottom-1/6 right-1/6 w-42 h-42 bg-yellow-400/40 rounded-full blur-4xl animate-float-13"></div>
      <div className="absolute top-2/5 left-4/5 w-50 h-50 bg-yellow-300/40 rounded-full blur-4xl animate-float-14"></div>
      <div className="absolute bottom-2/5 right-4/5 w-46 h-46 bg-yellow-500/40 rounded-full blur-4xl animate-float-15"></div>
      <div className="absolute top-4/5 left-1/2 w-54 h-54 bg-yellow-400/40 rounded-full blur-4xl animate-float-16"></div>
      <div className="absolute bottom-1/5 right-2/3 w-36 h-36 bg-yellow-300/40 rounded-full blur-4xl animate-float-17"></div>
      <div className="absolute top-3/5 left-1/4 w-58 h-58 bg-yellow-500/40 rounded-full blur-4xl animate-float-18"></div>
      <div className="absolute bottom-4/5 right-1/4 w-48 h-48 bg-yellow-200/40 rounded-full blur-4xl animate-float-19"></div>
    </div>
  );
};

export default LightEffects;