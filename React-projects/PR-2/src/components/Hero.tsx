const Hero = () => {
  return (
    <div className="relative mx-2 rounded-xl overflow-hidden group border border-[#1f2229] bg-[#111318] shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80"
        alt="Premium Cybernetic Mechanical Chassis Layout"
        className="w-full h-[450px] md:h-[550px] object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-700"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e]/80 via-transparent to-transparent hidden md:block" />

      <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 text-white z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] tracking-widest uppercase rounded mb-4">
          <span className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
          BATCH // ED_09
        </div>
        
        <h1 className="text-3xl md:text-5xl font-mono uppercase font-bold max-w-3xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e4e5e7] to-[#6c7281]">
          MECHANICAL ANODIZED COMM_CHASSIS
        </h1>
        
        <p className="text-xs md:text-sm mt-3 text-[#9aa2b4] font-sans max-w-xl leading-relaxed">
          Engineered solid-state framework milled out of premium grade 6063 aerospace aluminum. Matte texture workspace architecture.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button className="px-6 py-3 bg-white text-[#0b0c0e] hover:bg-cyan-400 hover:text-[#0b0c0e] font-mono text-xs uppercase tracking-wider font-bold rounded transition-all duration-300">
            EXPLORE SPEC SHEET
          </button>
          <span className="text-[10px] font-mono text-[#4a505e] hidden sm:block">CODENAME: SILENT_ROW</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;