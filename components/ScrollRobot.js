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
          <linearGradient id="mecha-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="dark-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="neon-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        {/* Mecha Torso */}
        <g 
          className="transition-all duration-[1000ms] ease-out origin-center"
          style={{ transform: `translateY(${torsoY}px)`, opacity: torsoOpacity }}
        >
          {/* Waist/Abdomen (Dark metal mechanics) */}
          <path d="M170,350 L230,350 L220,450 L180,450 Z" fill="url(#dark-metal)" stroke="#0ea5e9" strokeWidth="1" />
          <path d="M175,370 L225,370 M178,390 L222,390 M180,410 L220,410 M182,430 L218,430" stroke="#0ea5e9" strokeWidth="2" opacity="0.5" />
          
          {/* Main Chest Armor */}
          <path d="M110,230 L290,230 L260,350 L200,380 L140,350 Z" fill="url(#mecha-blue)" stroke="#38bdf8" strokeWidth="2" />
          
          {/* Chest Center Core */}
          <path d="M180,250 L220,250 L230,330 L200,350 L170,330 Z" fill="url(#dark-metal)" stroke="#0ea5e9" strokeWidth="2" />
          <rect x="195" y="270" width="10" height="40" rx="2" fill="#0ea5e9" className="animate-pulse shadow-[0_0_15px_#0ea5e9]" />
          
          {/* Left/Right Chest Panels */}
          <path d="M120,250 L160,250 L150,320 L130,300 Z" fill="url(#mecha-blue)" stroke="#0ea5e9" strokeWidth="1" />
          <path d="M280,250 L240,250 L250,320 L270,300 Z" fill="url(#mecha-blue)" stroke="#0ea5e9" strokeWidth="1" />
          
          {/* Accents */}
          <rect x="125" y="270" width="25" height="6" fill="#0ea5e9" className="shadow-[0_0_10px_#0ea5e9]" />
          <rect x="250" y="270" width="25" height="6" fill="#0ea5e9" className="shadow-[0_0_10px_#0ea5e9]" />
        </g>

        {/* Left Arm (User's Right) */}
        <g 
          className="transition-all duration-700 ease-out"
          style={{ transform: `rotate(${leftArmRot}deg)`, transformOrigin: '290px 250px', opacity: torsoOpacity }}
        >
          {/* Massive Shoulder Pad */}
          <path d="M270,210 L330,210 L340,280 L260,280 Z" fill="url(#mecha-blue)" stroke="#38bdf8" strokeWidth="2" />
          <path d="M280,220 L320,220 L325,270 L275,270 Z" fill="url(#dark-metal)" />
          {/* Upper Arm */}
          <rect x="285" y="280" width="30" height="60" fill="url(#dark-metal)" stroke="#0ea5e9" strokeWidth="1" />
          {/* Forearm */}
          <path d="M275,340 L325,340 L315,440 L285,440 Z" fill="url(#mecha-blue)" stroke="#38bdf8" strokeWidth="2" />
          <rect x="295" y="360" width="10" height="30" fill="#0ea5e9" className="shadow-[0_0_10px_#0ea5e9]" />
          {/* Claw Hand */}
          <path d="M290,440 L280,480 M300,440 L300,485 M310,440 L320,480" stroke="url(#dark-metal)" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* Right Arm (User's Left) */}
        <g 
          className="transition-all duration-700 ease-out"
          style={{ transform: `rotate(${rightArmRot}deg)`, transformOrigin: '110px 250px', opacity: torsoOpacity }}
        >
          {/* Massive Shoulder Pad */}
          <path d="M70,210 L130,210 L140,280 L60,280 Z" fill="url(#mecha-blue)" stroke="#38bdf8" strokeWidth="2" />
          <path d="M80,220 L120,220 L125,270 L75,270 Z" fill="url(#dark-metal)" />
          {/* Upper Arm */}
          <rect x="85" y="280" width="30" height="60" fill="url(#dark-metal)" stroke="#0ea5e9" strokeWidth="1" />
          {/* Forearm */}
          <path d="M75,340 L125,340 L115,440 L85,440 Z" fill="url(#mecha-blue)" stroke="#38bdf8" strokeWidth="2" />
          <rect x="95" y="360" width="10" height="30" fill="#0ea5e9" className="shadow-[0_0_10px_#0ea5e9]" />
          {/* Claw Hand */}
          <path d="M80,440 L70,480 M100,440 L100,485 M110,440 L120,480" stroke="url(#dark-metal)" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* Mecha Head */}
        <g 
          className="transition-all duration-[1200ms] ease-out"
          style={{ transform: `translateY(${headY}px)`, opacity: headOpacity }}
        >
          {/* Neck */}
          <rect x="180" y="200" width="40" height="30" fill="url(#dark-metal)" stroke="#0ea5e9" strokeWidth="1" />
          {/* Helmet Base */}
          <path d="M165,160 L235,160 L245,210 L155,210 Z" fill="url(#mecha-blue)" stroke="#38bdf8" strokeWidth="2" />
          {/* Helmet Top/Dome */}
          <path d="M170,160 L230,160 L210,130 L190,130 Z" fill="url(#dark-metal)" stroke="#0ea5e9" strokeWidth="1" />
          {/* Antennas/Ears */}
          <rect x="145" y="150" width="6" height="50" fill="url(#dark-metal)" />
          <rect x="249" y="150" width="6" height="50" fill="url(#dark-metal)" />
          <line x1="148" y1="150" x2="148" y2="100" stroke="#0ea5e9" strokeWidth="3" />
          <line x1="252" y1="150" x2="252" y2="100" stroke="#0ea5e9" strokeWidth="3" />
          
          {/* Glowing Visor (Horizontal Slit) */}
          <rect x="170" y="180" width="60" height="10" fill="#0ea5e9" className="shadow-[0_0_20px_#0ea5e9] animate-pulse" />
          <polygon points="195,190 205,190 200,200" fill="#0ea5e9" />
        </g>

      </svg>
    </div>
  );
}
