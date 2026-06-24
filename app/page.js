import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollRobot from "@/components/ScrollRobot";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      
      {/* Hero Section gets a solid background so it hides the fixed robot underneath it */}
      <div className="relative z-20 bg-[#0a0a0a]">
        <Hero />
      </div>

      <div className="relative">
        {/* Global Fixed Robot Background */}
        <ScrollRobot />

        {/* Scrolling Content with Transparent Backgrounds */}
        <div className="relative z-10 flex flex-col gap-32 py-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </div>
      </div>
      
      <footer className="relative z-20 py-12 text-center text-zinc-600 border-t border-zinc-900 bg-[#0a0a0a]">
        <p className="font-medium tracking-widest text-sm uppercase">© {new Date().getFullYear()} <span className="font-serif italic text-amber-500 font-bold text-lg">A</span>. All rights reserved.</p>
      </footer>
    </main>
  );
}
