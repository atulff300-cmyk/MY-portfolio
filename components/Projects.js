"use client";
import { useState, useRef } from "react";

const ProjectCard = ({ title, stack, description, link }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`group [perspective:1000px] h-full ${link ? 'cursor-pointer' : ''}`}
    >
      <div 
        className={`h-full relative p-6 md:p-8 rounded-xl backdrop-blur-md shadow-sm transition-all duration-300 ease-out hover:shadow-[0_15px_30px_rgba(245,158,11,0.2)] hover:border-amber-500/60 [transform-style:preserve-3d] ${link ? 'bg-gradient-to-br from-[#0a0a0a]/90 to-amber-900/20 border border-amber-500/30 ring-1 ring-amber-500/10 shadow-[0_0_25px_rgba(245,158,11,0.15)]' : 'bg-[#0a0a0a]/70 border border-zinc-800/50'}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {link && (
          <div className="mb-5 inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse [transform:translateZ(50px)] border border-amber-300/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            View Live Project
          </div>
        )}
        <h3 className="text-2xl font-bold text-zinc-100 mb-3 [transform:translateZ(40px)] uppercase tracking-wide">
          {link ? (
            <span className="group-hover:text-amber-400 transition-colors flex items-center gap-2">
              {title}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </span>
          ) : (
            title
          )}
        </h3>
        <p className="text-amber-500 font-medium text-xs tracking-widest mb-6 bg-amber-500/10 inline-block px-3 py-1 rounded-sm border border-amber-500/20 [transform:translateZ(30px)] uppercase">{stack}</p>
        <ul className="space-y-3 text-zinc-300 [transform:translateZ(20px)] font-light">
          {description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-amber-500 mr-3 mt-1 text-sm">▹</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        {/* Project Links / Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 [transform:translateZ(30px)]">
          <button className="px-3 py-1.5 text-xs font-bold bg-[#111] border border-zinc-700/50 text-zinc-300 rounded hover:text-amber-500 hover:border-amber-500/50 transition-colors uppercase flex items-center gap-1.5" onClick={(e) => { e.stopPropagation(); alert('Github Repo link'); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </button>
          <button className="px-3 py-1.5 text-xs font-bold bg-[#111] border border-zinc-700/50 text-zinc-300 rounded hover:text-amber-500 hover:border-amber-500/50 transition-colors uppercase flex items-center gap-1.5" onClick={(e) => { e.stopPropagation(); alert('Architecture & Circuit Diagram Modal coming soon!'); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            Architecture
          </button>
          <button className="px-3 py-1.5 text-xs font-bold bg-[#111] border border-zinc-700/50 text-zinc-300 rounded hover:text-amber-500 hover:border-amber-500/50 transition-colors uppercase flex items-center gap-1.5" onClick={(e) => { e.stopPropagation(); alert('Documentation link'); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const featuredProject = {
    title: "SensorNest Smart Monitoring",
    stack: "ESP32 • Next.js • DHT22 • MPU6050",
    link: "https://sensor-nest-smart-device-monitoring.vercel.app/",
    description: [
      "Real-time temperature & motion monitoring with 99% uptime and <200ms response time.",
      "Live dashboard handling data streams from 3+ sensors simultaneously over WiFi.",
      "Custom circuit design integrating OLED displays and intelligent alerts."
    ]
  };

  const projects = [
    {
      title: "Adaptive Smart Traffic Signal Controller",
      stack: "ESP32 • Arduino IDE • Wokwi",
      description: [
        "FSM-based traffic control handling variable real-time traffic density efficiently.",
        "Reduced wait times using adaptive signal timing and emergency vehicle prioritization.",
        "Integrated OLED-based status monitoring and robust event logging."
      ]
    },
    {
      title: "Smart Home Automation System",
      stack: "ESP32 • IoT • Relays",
      description: [
        "IoT system controlling 4+ appliances with motion-based security integration.",
        "Automatic lighting & temperature management leading to high energy efficiency.",
        "Robust WiFi communication for remote access and control."
      ]
    },
    {
      title: "Green Energy Portable Charging Hub",
      stack: "Solar Energy • Power Electronics",
      description: [
        "Solar-powered portable charging system focused on sustainability and energy efficiency.",
        "Optimized power conversion for reliable outdoor device charging."
      ]
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-20 bg-transparent relative">
      {/* Background Decor Right */}
      <div className="hidden lg:block absolute right-0 top-1/3 w-1/3 opacity-30 pointer-events-none">
        <img src="/img1.png" alt="Robot Right" className="w-full object-contain filter drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Flagship IoT Project Section */}
        <div className="mb-32">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm md:text-base font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              👑 Premier IoT Based Project
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto transform scale-105 md:scale-110 hover:scale-[1.15] hover:-translate-y-2 transition-all duration-500 my-8">
            <ProjectCard {...featuredProject} />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-black mb-16 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md">Industrial & Upcoming Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
