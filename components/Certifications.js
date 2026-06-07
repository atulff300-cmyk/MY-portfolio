"use client";

export default function Certifications() {
  const items = [
    {
      title: "Blockchain and Applications",
      issuer: "Great Learning",
      type: "cert"
    },
    {
      title: "Prompt Engineering",
      issuer: "Great Learning",
      type: "cert"
    },
    {
      title: "Python Programming",
      issuer: "Great Learning",
      type: "cert"
    },
    {
      title: "Cloud Fundamentals",
      issuer: "Skill Camp",
      type: "cert"
    },
    {
      title: "PMSSS Scholarship for Academic Excellence",
      issuer: "2021",
      type: "award"
    },
    {
      title: "Head Boy",
      issuer: "GHSS Garh Dhamma (2020–2021)",
      type: "award"
    }
  ];

  return (
    <section className="px-6 md:px-20 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-zinc-100 tracking-tight text-center uppercase drop-shadow-md">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-xl bg-[#111]/70 backdrop-blur-md border border-zinc-800/50 flex flex-col justify-center hover:bg-[#1a1a1a]/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.05)] hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-zinc-200 tracking-wide">{item.title}</h3>
              <p className="text-zinc-500 font-medium mt-2 flex items-center gap-2 text-sm tracking-wider uppercase">
                {item.type === 'cert' ? (
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-500"></span>
                ) : (
                  <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></span>
                )}
                {item.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
