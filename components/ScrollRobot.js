"use client";
import { useEffect, useState } from "react";

export default function ScrollRobot() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page we are (0 to 1)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Safety check for short pages
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      
      setScrollProgress(Math.min(1, Math.max(0, currentScroll / totalScroll)));
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transform states based on scrollProgress
  
  // Head
  const headY = scrollProgress < 0.05 ? -100 : 0;
  const headOpacity = scrollProgress < 0.02 ? 0 : 1;
  
  // Torso
  const torsoY = scrollProgress < 0.1 ? 100 : 0;
  const torsoOpacity = scrollProgress < 0.05 ? 0 : 1;

  // Right Arm (User's Left side of screen)
  let rightArmRot = 0;
  if (scrollProgress >= 0.1 && scrollProgress < 0.3) {
    rightArmRot = -60; // Pointing to About
  } else if (scrollProgress >= 0.4 && scrollProgress < 0.6) {
    rightArmRot = -90; // Pointing Outwards (Projects)
  } else if (scrollProgress >= 0.8) {
    // Waving at Contact section
    rightArmRot = -130 + Math.sin(scrollProgress * 300) * 30; 
  }

  // Left Arm (User's Right side of screen)
  let leftArmRot = 0;
  if (scrollProgress >= 0.25 && scrollProgress < 0.4) {
    leftArmRot = 60; // Pointing to Experience
  } else if (scrollProgress >= 0.4 && scrollProgress < 0.6) {
    leftArmRot = 90; // Pointing Outwards (Projects)
  } else if (scrollProgress >= 0.6 && scrollProgress < 0.8) {
    leftArmRot = 140; // Arms Crossed (Skills)
    rightArmRot = -140; 
  }

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 opacity-30 md:opacity-50 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full"></div>
      
      {/* SVG Canvas */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 600" 
        preserveAspectRatio="xMidYMid meet"
        className="drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 ease-out mt-24 md:mt-16 w-[300px] md:w-[450px]"
      >
        <defs>
          <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id="neon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Torso */}
        <g 
          className="transition-all duration-[1000ms] ease-out origin-center"
          style={{ transform: `translateY(${torsoY}px)`, opacity: torsoOpacity }}
        >
          <path d="M140,250 L260,250 L280,450 L120,450 Z" fill="url(#metal)" stroke="#f59e0b" strokeWidth="2" />
          {/* Core Reactor */}
          <circle cx="200" cy="320" r="30" fill="#09090b" stroke="url(#neon)" strokeWidth="4" />
          {/* White Accents */}
          <circle cx="200" cy="320" r="15" fill="#ffffff" className="animate-pulse shadow-[0_0_20px_#fff]" />
          <path d="M160,390 L240,390" stroke="#ffffff" strokeWidth="2" />
          <path d="M170,410 L230,410" stroke="#ffffff" strokeWidth="2" />
          <path d="M180,430 L220,430" stroke="#ffffff" strokeWidth="2" />
        </g>

        {/* Left Arm (User's Right) */}
        <g 
          className="transition-all duration-700 ease-out"
          style={{ transform: `rotate(${leftArmRot}deg)`, transformOrigin: '270px 270px', opacity: torsoOpacity }}
        >
          {/* Shoulder */}
          <circle cx="270" cy="270" r="20" fill="url(#metal)" stroke="#f59e0b" strokeWidth="2" />
          {/* Arm */}
          <rect x="260" y="270" width="20" height="110" rx="10" fill="url(#metal)" stroke="#ffffff" strokeWidth="1" />
          {/* Hand/Pointer */}
          <circle cx="270" cy="380" r="15" fill="#ffffff" />
          <polygon points="270,395 260,420 280,420" fill="#f59e0b" className="drop-shadow-[0_0_10px_#f59e0b]" />
        </g>

        {/* Right Arm (User's Left) */}
        <g 
          className="transition-all duration-700 ease-out"
          style={{ transform: `rotate(${rightArmRot}deg)`, transformOrigin: '130px 270px', opacity: torsoOpacity }}
        >
          {/* Shoulder */}
          <circle cx="130" cy="270" r="20" fill="url(#metal)" stroke="#f59e0b" strokeWidth="2" />
          {/* Arm */}
          <rect x="120" y="270" width="20" height="110" rx="10" fill="url(#metal)" stroke="#ffffff" strokeWidth="1" />
          {/* Hand/Pointer */}
          <circle cx="130" cy="380" r="15" fill="#ffffff" />
          <polygon points="130,395 120,420 140,420" fill="#f59e0b" className="drop-shadow-[0_0_10px_#f59e0b]" />
        </g>

        {/* Head */}
        <g 
          className="transition-all duration-[1200ms] ease-out"
          style={{ transform: `translateY(${headY}px)`, opacity: headOpacity }}
        >
          {/* Neck */}
          <rect x="185" y="210" width="30" height="40" fill="#27272a" />
          {/* Main Head */}
          <rect x="150" y="130" width="100" height="90" rx="20" fill="url(#metal)" stroke="#ffffff" strokeWidth="2" />
          {/* Visor */}
          <rect x="160" y="160" width="80" height="30" rx="10" fill="#09090b" />
          {/* Glowing Eyes */}
          <circle cx="180" cy="175" r="6" fill="#f59e0b" className="animate-pulse" />
          <circle cx="220" cy="175" r="6" fill="#f59e0b" className="animate-pulse" />
          {/* Antenna */}
          <rect x="198" y="90" width="4" height="40" fill="#f59e0b" />
          <circle cx="200" cy="85" r="8" fill="#ffffff" className="animate-bounce drop-shadow-[0_0_15px_#fff]" />
        </g>

      </svg>
    </div>
  );
}
