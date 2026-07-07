"use client";
import { useState, useEffect } from "react";

export default function InteractiveDashboard() {
  const [ledOn, setLedOn] = useState(false);
  const [temp, setTemp] = useState(24.5);
  const [humidity, setHumidity] = useState(45);
  const [logs, setLogs] = useState(["> System initialized", "> WiFi connected", "> MQTT broker ready"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(prev => +(prev + (Math.random() - 0.5) * 0.5).toFixed(1));
      setHumidity(prev => +(prev + (Math.random() - 0.5) * 1).toFixed(0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleLed = () => {
    const newState = !ledOn;
    setLedOn(newState);
    setLogs(prev => [...prev.slice(-4), `> CMD: LED_${newState ? 'ON' : 'OFF'} executed`]);
  };

  return (
    <section className="px-6 md:px-20 bg-transparent relative my-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm md:text-base font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            ⚡ Virtual Sandbox
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-zinc-100 tracking-tight uppercase drop-shadow-md">Interactive Dashboard</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Interact with this virtual ESP32. Toggle the relay switch and monitor real-time sensor streams.</p>
        </div>
        
        <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.05)] flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
          
          {/* Virtual ESP32 Node */}
          <div className="relative w-48 h-64 bg-[#161616] border-2 border-zinc-700/50 rounded-xl flex flex-col items-center justify-between py-6 shadow-2xl [transform:perspective(1000px)_rotateY(10deg)] group-hover:[transform:perspective(1000px)_rotateY(0deg)] transition-transform duration-700">
            <div className="text-[10px] text-zinc-500 font-mono absolute top-2 left-2 tracking-widest">ESP32-WROOM</div>
            
            {/* WiFi Antenna Trace */}
            <div className="absolute top-2 right-2 w-8 h-6 opacity-30">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-zinc-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>

            <div className="w-28 h-28 bg-[#111] border border-zinc-800 rounded-sm relative flex items-center justify-center mt-6 shadow-inner">
               <div className="w-16 h-16 bg-[#222] rounded flex items-center justify-center shadow-lg border border-zinc-700/50">
                 <span className="text-zinc-600 font-black text-[9px] -rotate-90 tracking-widest">ESPRESSIF</span>
               </div>
            </div>
            
            {/* LED Indicator */}
            <div className="flex items-center gap-2 mt-4 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${ledOn ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)] scale-110' : 'bg-zinc-800'}`}></div>
              <span className="text-[10px] font-mono text-zinc-400">GPIO_2</span>
            </div>
            
          </div>

          {/* Controls & Data */}
          <div className="flex-1 w-full space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-5 rounded-xl border border-zinc-800/80 shadow-inner">
                <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  Temp
                </div>
                <div className="text-3xl font-black text-white font-mono flex items-end gap-1">
                  {temp.toFixed(1)}<span className="text-amber-500 text-lg mb-1">°C</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-5 rounded-xl border border-zinc-800/80 shadow-inner">
                <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  Humidity
                </div>
                <div className="text-3xl font-black text-white font-mono flex items-end gap-1">
                  {humidity}<span className="text-blue-500 text-lg mb-1">%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111]/80 p-5 rounded-xl border border-zinc-800/80 flex items-center justify-between hover:border-amber-500/30 transition-colors">
              <div>
                <div className="text-zinc-200 font-bold mb-1 tracking-wide">Relay Switch</div>
                <div className="text-zinc-500 text-xs">Simulate triggering a hardware relay</div>
              </div>
              <button 
                onClick={toggleLed}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] ${ledOn ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-zinc-700'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${ledOn ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <div className="w-full bg-[#050505] rounded-xl border border-zinc-800/80 p-4 font-mono text-[11px] text-amber-500/80 h-28 overflow-y-auto flex flex-col justify-end shadow-inner relative">
               <div className="absolute top-2 right-3 text-zinc-600 text-[9px] uppercase tracking-widest">Serial Monitor</div>
               <div className="space-y-1 mt-4">
                 {logs.map((log, i) => (
                   <div key={i} className="animate-[fadeIn_0.3s_ease-out]">{log}</div>
                 ))}
                 <div className="animate-pulse">{`> Fetching sensor data...`}</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
