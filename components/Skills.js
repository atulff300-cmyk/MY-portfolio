"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Embedded C", "C", "C++", "Python"]
    },
    {
      title: "Embedded & IoT",
      skills: ["ESP32", "Arduino IDE", "Wokwi", "Sensors (PIR, LDR)"]
    },
    {
      title: "Tools & Core Skills",
      skills: ["Git", "Problem Solving", "Teamwork", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="px-6 md:px-20 bg-transparent relative overflow-hidden">
      {/* 3D Background Decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md">Skills Matrix</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-xl bg-[#0a0a0a]/70 backdrop-blur-md shadow-sm border border-zinc-800/50 hover:shadow-[0_15px_30px_rgba(245,158,11,0.1)] hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-2 [transform-style:preserve-3d]"
            >
              <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-3 [transform:translateZ(20px)] tracking-wide uppercase">
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 [transform:translateZ(10px)]">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 text-sm font-medium bg-[#111]/80 text-zinc-300 rounded-sm border border-zinc-700/50 group-hover:border-amber-500/30 group-hover:text-amber-500 transition-colors uppercase tracking-widest"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
