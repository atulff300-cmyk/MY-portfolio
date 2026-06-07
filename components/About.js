"use client";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-20 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-zinc-100 tracking-tight uppercase drop-shadow-md">About Me</h2>
          
          <div className="group relative p-8 rounded-xl bg-[#0a0a0a]/70 backdrop-blur-md border border-zinc-800/50 shadow-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:border-amber-500/30 hover:-translate-y-1 [transform-style:preserve-3d] [perspective:1000px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            
            <p className="text-base md:text-xl leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 relative z-10 [transform:translateZ(20px)]">
              I am an Embedded & IoT Engineer with a strong foundation in Embedded C, C, C++, Python, and hardware-software integration. 
              I am highly experienced in ESP32-based embedded systems and smart automation projects. 
              <br /><br />
              My core interest lies at the intersection of software development and embedded systems, 
              building hardware that communicates seamlessly with software. I am a quick learner with good communication 
              and teamwork abilities, constantly looking to build impactful tech.
            </p>
          </div>
        </div>
        
        {/* Right side image */}
        <div className="hidden md:flex flex-1 justify-center relative">
          <img src="/img1.png" alt="Robot Decor" className="w-full max-w-sm object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-[float_6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
