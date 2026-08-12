"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showResumes, setShowResumes] = useState(false);

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
            ECE Student <span className="text-amber-500 mx-2 md:mx-3">|</span> Embedded Systems & IoT Developer
          </h2>
          
          <p className="text-base md:text-lg text-zinc-400 font-light max-w-lg mb-10 [transform:translateZ(10px)] leading-relaxed">
            I design intelligent embedded systems and IoT solutions using ESP32, Embedded C and modern firmware development. Passionate about building reliable hardware that solves real-world problems.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 [transform:translateZ(40px)] w-full">
            <a href="#projects" className="w-full sm:w-auto btn-3d px-6 md:px-8 py-4 bg-amber-500 text-[#0a0a0a] font-bold rounded-lg hover:bg-amber-400 flex items-center justify-center tracking-wider text-sm md:text-base">
              VIEW MY WORK <span className="ml-2 font-bold">→</span>
            </a>
            <a href="#about" className="w-full sm:w-auto btn-3d px-6 md:px-8 py-4 bg-transparent border-2 border-zinc-600 text-zinc-300 font-semibold rounded-lg hover:border-amber-500 hover:text-amber-500 tracking-wider transition-colors flex justify-center text-sm md:text-base">
              ABOUT ME
            </a>
            
            <div className="relative w-full sm:w-auto">
              <button 
                onClick={() => setShowResumes(!showResumes)}
                className="w-full sm:w-auto btn-3d px-6 md:px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500/10 tracking-wider transition-colors flex justify-center items-center gap-2 text-sm md:text-base cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                DOWNLOAD RESUME
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${showResumes ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {showResumes && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setShowResumes(false)}></div>
                  <div className="absolute right-0 left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-60 bg-[#121212] border border-zinc-800 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden z-40">
                    <a 
                      href="/Atul_kumar_IOT_Resume.pdf" 
                      download="Atul_Kumar_IoT_Resume.pdf"
                      onClick={() => setShowResumes(false)}
                      className="flex items-center gap-3 px-5 py-4 text-zinc-300 hover:text-amber-500 hover:bg-zinc-900/80 transition-colors border-b border-zinc-900"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-sm tracking-wide">IoT / Embedded Resume</span>
                        <span className="text-[10px] text-zinc-500">Hardware, ESP32, Firmware</span>
                      </div>
                    </a>
                    <a 
                      href="/Atul_Kumar_software_resume.pdf" 
                      download="Atul_Kumar_Software_Resume.pdf"
                      onClick={() => setShowResumes(false)}
                      className="flex items-center gap-3 px-5 py-4 text-zinc-300 hover:text-amber-500 hover:bg-zinc-900/80 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-sm tracking-wide">Software Resume</span>
                        <span className="text-[10px] text-zinc-500">Fullstack, Next.js, API, ML</span>
                      </div>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Social Links under buttons */}
          <div className="flex gap-6 [transform:translateZ(20px)]">
            <a href="https://www.linkedin.com/in/a-kumar-555754422" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all">
              in
            </a>
            <a href="https://github.com/atulff300-cmyk" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all">
              gh
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
