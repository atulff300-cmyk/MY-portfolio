"use client";

export default function GithubStats() {
  const username = "atul"; // Using the placeholder from contact section

  return (
    <section className="px-6 md:px-20 bg-transparent relative my-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md">GitHub Analytics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111]/70 backdrop-blur-md p-6 rounded-xl border border-zinc-800/50 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:border-amber-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-200 mb-6 uppercase tracking-wide flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub Stats
            </h3>
            <div className="w-full h-auto overflow-hidden rounded-lg flex items-center justify-center bg-[#050505]">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&bg_color=050505&text_color=e4e4e7&title_color=f59e0b&border_color=27272a&hide_border=true`} 
                alt="GitHub Stats" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="bg-[#111]/70 backdrop-blur-md p-6 rounded-xl border border-zinc-800/50 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:border-amber-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-200 mb-6 uppercase tracking-wide flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              Top Languages
            </h3>
            <div className="w-full h-auto overflow-hidden rounded-lg flex items-center justify-center bg-[#050505]">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&bg_color=050505&text_color=e4e4e7&title_color=f59e0b&border_color=27272a&hide_border=true`} 
                alt="Top Languages" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-[#111]/70 backdrop-blur-md p-6 rounded-xl border border-zinc-800/50 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:border-amber-500/20 transition-all duration-300 overflow-x-auto">
          <h3 className="text-xl font-bold text-zinc-200 mb-6 uppercase tracking-wide flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Contribution Graph
          </h3>
          <div className="w-full min-w-[700px] flex items-center justify-center bg-[#050505] p-2 rounded-lg">
             <img 
               src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&background=050505&border=27272a&ring=f59e0b&fire=f59e0b&currStreakNum=e4e4e7&sideNums=e4e4e7&currStreakLabel=a1a1aa&sideLabels=a1a1aa&dates=a1a1aa&hide_border=true`} 
               alt="GitHub Streak" 
               className="w-full max-w-2xl h-auto object-contain"
             />
          </div>
        </div>

      </div>
    </section>
  );
}
