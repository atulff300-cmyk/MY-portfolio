"use client";
import { useState, useRef } from "react";

const ProjectCard = ({ title, stack, description }) => {
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

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group [perspective:1000px] h-full"
    >
      <div 
        className="h-full p-6 md:p-8 rounded-xl bg-[#0a0a0a]/70 backdrop-blur-md border border-zinc-800/50 shadow-sm transition-all duration-300 ease-out hover:shadow-[0_15px_30px_rgba(245,158,11,0.1)] hover:border-amber-500/40 [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        <h3 className="text-2xl font-bold text-zinc-100 mb-3 [transform:translateZ(40px)] uppercase tracking-wide">{title}</h3>
        <p className="text-amber-500 font-medium text-xs tracking-widest mb-6 bg-amber-500/10 inline-block px-3 py-1 rounded-sm border border-amber-500/20 [transform:translateZ(30px)] uppercase">{stack}</p>
        <ul className="space-y-3 text-zinc-300 [transform:translateZ(20px)] font-light">
          {description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-amber-500 mr-3 mt-1 text-sm">▹</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Adaptive Smart Traffic Signal Controller",
      stack: "ESP32 • Arduino IDE • Wokwi",
      description: [
        "FSM-based intelligent traffic control with adaptive signal timing based on real-time traffic density.",
        "Emergency vehicle priority handling and pedestrian crossing with countdown display.",
        "Event logging and OLED-based traffic status monitoring."
      ]
    },
    {
      title: "Smart Home Automation System",
      stack: "ESP32 • IoT • Relays",
      description: [
        "IoT-based system to auto-control home appliances using sensors.",
        "Automatic lighting, motion-based security, and temperature monitoring.",
        "Energy-efficient automation accessible via WiFi."
      ]
    },
    {
      title: "Green Energy Portable Charging Hub",
      stack: "Solar Energy • Power Electronics",
      description: [
        "Solar-powered portable charging system focused on sustainability and energy efficiency."
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
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
