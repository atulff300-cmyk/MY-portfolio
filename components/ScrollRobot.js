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
      
      {/* Replaced Robot SVG with Image */}
      <div 
        className="transition-all duration-[1000ms] ease-out drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] mt-24 md:mt-16 w-[300px] md:w-[450px]"
        style={{ transform: `translateY(${torsoY}px)`, opacity: torsoOpacity }}
      >
        <img 
          src="/Screenshot%202026-06-24%20033010.png" 
          alt="Background Robot"
          className="w-full h-auto object-contain rounded-xl opacity-90 mix-blend-screen"
        />
      </div>
    </div>
  );
}
