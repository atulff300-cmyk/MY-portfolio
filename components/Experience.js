"use client";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 bg-transparent relative">
      {/* Background Decor Left */}
      <div className="hidden lg:block absolute left-0 top-1/4 w-1/3 opacity-30 pointer-events-none transform -scale-x-100">
        <img src="/img1.png" alt="Robot Left" className="w-full object-contain filter drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md">Experience</h2>
        
        <div className="relative border-l-2 border-amber-500/30 pl-8 ml-4 md:ml-0 md:pl-12">
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-6 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
          
          <div className="group relative p-6 md:p-10 rounded-xl bg-[#0a0a0a]/70 backdrop-blur-md border border-zinc-800/50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.2)] hover:border-amber-500/30 [transform-style:preserve-3d]">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-100 [transform:translateZ(30px)] uppercase tracking-wide">Embedded Systems / IoT Intern</h3>
              <span className="inline-block mt-3 md:mt-0 px-4 py-1.5 bg-amber-500/10 text-amber-500 font-semibold text-xs md:text-sm rounded-full border border-amber-500/20 [transform:translateZ(20px)] tracking-widest">
                FEB 2026 – MAY 2026
              </span>
            </div>
            <h4 className="text-base md:text-lg text-zinc-400 mb-4 md:mb-6 font-medium tracking-wider [transform:translateZ(20px)] uppercase">Genz Educate Wing</h4>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg [transform:translateZ(10px)] font-light">
              Developed an Adaptive Smart Traffic Signal Controller using FSM-based logic on the ESP32 microcontroller. 
              Worked extensively on real-time embedded control, sensor integration, and system simulation via the Wokwi Simulator under expert mentorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
