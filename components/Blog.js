"use client";

export default function Blog() {
  const posts = [
    {
      title: "Building SensorNest: A Real-time Monitoring Platform",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      tags: ["ESP32", "IoT", "Next.js"],
      excerpt: "Deep dive into the architecture of SensorNest, exploring how to stream multiple sensor data to a cloud dashboard with under 200ms latency."
    },
    {
      title: "Understanding ESP32 & FreeRTOS Basics",
      date: "Nov 12, 2026",
      readTime: "8 min read",
      tags: ["FreeRTOS", "Embedded C"],
      excerpt: "A beginner-friendly guide to task scheduling, semaphores, and queue management in FreeRTOS for ESP32 microcontrollers."
    },
    {
      title: "UART vs SPI vs I2C: Choosing the Right Protocol",
      date: "Dec 05, 2026",
      readTime: "6 min read",
      tags: ["Hardware", "Communication"],
      excerpt: "An architectural comparison of common hardware communication protocols and when to use them in your embedded designs."
    }
  ];

  return (
    <section id="blog" className="px-6 md:px-20 bg-transparent relative my-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md">Technical Writing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group flex flex-col justify-between bg-[#111]/70 backdrop-blur-md p-6 rounded-xl border border-zinc-800/50 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div>
                <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono mb-4 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-200 mb-3 group-hover:text-amber-500 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 text-[10px] font-bold bg-[#050505] border border-zinc-800 text-zinc-300 rounded uppercase tracking-wider">
                    {tag}
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
