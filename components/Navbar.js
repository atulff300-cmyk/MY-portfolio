"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-amber-500/5" : "bg-transparent py-4 md:py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          <a href="#home" className="text-xs md:text-sm tracking-widest font-semibold text-amber-500 hover:text-amber-400 transition-colors">HOME</a>
          <a href="#about" className="text-xs md:text-sm tracking-widest font-semibold text-zinc-400 hover:text-amber-500 transition-colors">ABOUT</a>
          <a href="#projects" className="text-xs md:text-sm tracking-widest font-semibold text-zinc-400 hover:text-amber-500 transition-colors">PROJECTS</a>
          <a href="#skills" className="text-xs md:text-sm tracking-widest font-semibold text-zinc-400 hover:text-amber-500 transition-colors">SKILLS</a>
          <a href="#contact" className="text-xs md:text-sm tracking-widest font-semibold text-zinc-400 hover:text-amber-500 transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
