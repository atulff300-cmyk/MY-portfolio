"use client";
import { useState, useEffect } from "react";

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a] [perspective:1500px] pt-20">
      
      <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-4 sm:p-8 max-w-7xl mx-auto w-full">
        {/* Left Content Column */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left [transform-style:preserve-3d] [transform:translateZ(40px)] z-20">
          <p className="text-xl md:text-2xl text-amber-500 font-medium mb-2 tracking-wide">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 [transform:translateZ(30px)] uppercase">
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-500 to-orange-600 drop-shadow-[0_0_25px_rgba(245,158,11,0.6)] pl-4 pr-6">
              A
            </span>
            <span className="text-zinc-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              KUMAR
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-medium tracking-widest mb-6 uppercase [transform:translateZ(20px)] flex flex-wrap justify-center md:justify-start items-center">
            Embedded & IoT Engineer <span className="text-amber-500 mx-2 md:mx-3">|</span> Innovator <span className="text-amber-500 mx-2 md:mx-3">|</span> Future Engineer
          </h2>
          
          <p className="text-base md:text-lg text-zinc-400 font-light max-w-lg mb-10 [transform:translateZ(10px)] leading-relaxed">
            I'm an Embedded & IoT Engineer passionate about electronics, AI,communication systems, and smart innovations.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 [transform:translateZ(40px)] w-full">
            <a href="#projects" className="w-full sm:w-auto btn-3d px-6 md:px-8 py-4 bg-amber-500 text-[#0a0a0a] font-bold rounded-lg hover:bg-amber-400 flex items-center justify-center tracking-wider text-sm md:text-base">
              VIEW MY WORK <span className="ml-2 font-bold">→</span>
            </a>
            <a href="#about" className="w-full sm:w-auto btn-3d px-6 md:px-8 py-4 bg-transparent border-2 border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:border-amber-500 hover:text-amber-500 tracking-wider transition-colors flex justify-center text-sm md:text-base">
              ABOUT ME
            </a>
          </div>

          {/* Social Links under buttons */}
          <div className="flex gap-6 [transform:translateZ(20px)]">
            <a href="https://linkedin.com/in/atul" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all">
              in
            </a>
            <a href="https://github.com/atul" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all">
              gh
            </a>
            <a href="mailto:atulff300@gmail.com" className="w-12 h-12 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all">
              @
            </a>
          </div>
        </div>
        
        {/* Right Image Area */}
        <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0 w-full max-w-[280px] sm:max-w-sm mx-auto md:max-w-none">
          
          {/* Main User Image */}
          <div className="relative w-56 sm:w-72 md:w-80 h-72 sm:h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.2)] border-2 border-amber-500/20 z-10">
            <img 
              src="/ChatGPT%20Image%20Jun%2024,%202026,%2003_11_49%20AM.png" 
              alt="A Kumar" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
      
      {/* Bottom subtle grid/tech floor effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] via-[#111] to-transparent z-0 pointer-events-none [transform:rotateX(60deg)] opacity-40" style={{
        backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

    </section>
  );
}
