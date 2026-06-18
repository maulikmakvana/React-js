const AestheticNavbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Minimal Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.15em] text-stone-900 uppercase">Studio</span>
            <span className="text-[9px] text-stone-400 font-medium uppercase tracking-wider">Workspace Management</span>
          </div>
        </div>

        {/* Minimal Navigation */}
        <div className="flex items-center gap-6 text-xs text-stone-500 font-medium">
          <a href="#" className="text-stone-950 font-semibold border-b border-stone-950 pb-0.5">Directory</a>
          <a href="#" className="hover:text-stone-950 transition-colors">Analytics</a>
        </div>

      </div>
    </nav>
  );
};

export default AestheticNavbar;