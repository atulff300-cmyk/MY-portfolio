"use client";
import { useState } from "react";

const ProjectCard = ({ title, stack, description, link, imageFallback = "bg-gradient-to-br from-blue-500 to-purple-600" }) => {
  const tags = stack.split('•').map(t => t.trim());
  const descText = Array.isArray(description) ? description.join(' ') : description;

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200 h-full group hover:-translate-y-2 transition-transform duration-500">
      {/* Image Area Placeholder - in real app you'd use an <img> or Next/Image */}
      <div className={`h-64 w-full ${imageFallback} relative overflow-hidden flex items-center justify-center p-8`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        {/* Placeholder for actual image content */}
        <div className="relative z-10 text-white/50 font-black italic text-4xl uppercase tracking-tighter opacity-50 group-hover:scale-110 transition-transform duration-700">
          {title.split(' ')[0]}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        {/* Mission tag placeholder (optional, inspired by screenshot) */}
        <div className="mb-6 flex">
          <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">The Mission</span>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-zinc-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-black italic text-zinc-900 uppercase tracking-tight mb-5 leading-none">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-600 text-sm leading-relaxed mb-10 flex-grow font-medium">
          {descText}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {link && (
            <button 
              onClick={handleClick}
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-colors shadow-md"
            >
              VIEW PROJECT
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </button>
          )}
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
    imageFallback: "bg-gradient-to-r from-blue-600 to-cyan-500",
    description: [
      "Real-time temperature & motion monitoring with 99% uptime and <200ms response time.",
      "Live dashboard handling data streams from 3+ sensors simultaneously over WiFi.",
      "Custom circuit design integrating OLED displays and intelligent alerts."
    ]
  };

  const projects = [
    {
      title: "Plant Disease Monitoring System",
      stack: "Next.js • Python • ML • API",
      link: "https://plant-disease-monitoring-system.vercel.app",
      imageFallback: "bg-gradient-to-r from-emerald-500 to-teal-700",
      description: [
        "Special full-stack application for automated plant disease detection and monitoring.",
        "Integrated Python backend with machine learning for precise image processing and model evaluation.",
        "Provides real-time, actionable recommendations via a responsive and dynamic web interface."
      ]
    },
    {
      title: "Adaptive Smart Traffic Signal Controller",
      stack: "ESP32 • Arduino IDE • Wokwi",
      link: "https://smart-traffic-signal-controller.vercel.app",
      imageFallback: "bg-gradient-to-r from-amber-500 to-orange-600",
      description: [
        "FSM-based traffic control handling variable real-time traffic density efficiently.",
        "Reduced wait times using adaptive signal timing and emergency vehicle prioritization.",
        "Integrated OLED-based status monitoring and robust event logging."
      ]
    },
    {
      title: "Smart Home Automation System",
      stack: "ESP32 • IoT • Relays",
      imageFallback: "bg-gradient-to-r from-purple-500 to-pink-600",
      description: [
        "IoT system controlling 4+ appliances with motion-based security integration.",
        "Automatic lighting & temperature management leading to high energy efficiency.",
        "Robust WiFi communication for remote access and control."
      ]
    },
    {
      title: "Green Energy Portable Charging Hub",
      stack: "Solar Energy • Electronics",
      imageFallback: "bg-gradient-to-r from-green-500 to-lime-600",
      description: [
        "Solar-powered portable charging system focused on sustainability and energy efficiency.",
        "Optimized power conversion for reliable outdoor device charging."
      ]
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-20 py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md italic">
          Featured Projects
        </h2>

        {/* Flagship IoT Project Section */}
        <div className="mb-16">
          <ProjectCard {...featuredProject} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
