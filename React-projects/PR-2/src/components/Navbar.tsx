const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <h2 className="font-mono font-black text-xl tracking-tighter text-white uppercase">
          M2S<span className="text-cyan-400 font-sans font-light">_LABS</span>
        </h2>
      </div>

      <ul className="hidden md:flex gap-10 text-xs font-mono tracking-widest uppercase text-[#6c7281]">
        <li className="cursor-pointer hover:text-white transition-colors relative group py-1">
          CORE_SYS
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
        </li>
        <li className="cursor-pointer hover:text-white transition-colors relative group py-1">
          MODULES
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
        </li>
        <li className="cursor-pointer hover:text-white transition-colors relative group py-1">
          SPEC_SHEETS
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
        </li>
      </ul>

      <button className="bg-transparent border border-[#303644] text-white hover:border-cyan-400 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
        INITIALIZE CONSOLE
      </button>

      <button className="md:hidden text-[#6c7281] hover:text-white">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;