const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-3">
          <h2 className="text-lg font-black tracking-widest text-white uppercase">
            M2S_LABORATORIES
          </h2>
          <p className="text-xs text-[#6c7281] max-w-sm leading-relaxed">
            Forging advanced spatial interfaces, custom desktop peripherals, and heavy-metal structural compute chassis units.
          </p>
          <div className="flex gap-3 mt-4">
            {["X_COM", "G_HUB", "L_INK", "F_BASE"].map(network => (
              <div key={network} className="text-[10px] tracking-tighter text-[#4a505e] border border-[#1f2229] px-2 py-1 rounded hover:border-cyan-400 hover:text-white transition-all cursor-pointer">
                {network}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4"> CORE_SYS</h3>
          <ul className="space-y-2 text-xs text-[#6c7281]">
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Anodization</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Acoustic Foam</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">FR4 Mounting</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">API_Terminal</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4"> COMPANY</h3>
          <ul className="space-y-2 text-xs text-[#6c7281]">
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Lab Intel</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Schematics</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Hangar Logs</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer">Secure Line</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1f2229] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#4a505e] gap-4">
        <p>© 2026 M2S_LABS INC. OPERATIONAL CONFIGURATION SECURED.</p>
        <p className="text-cyan-500/40">STATUS: OPTIMAL_SYSTEM_ONLINE</p>
      </div>
    </div>
  );
};

export default Footer;