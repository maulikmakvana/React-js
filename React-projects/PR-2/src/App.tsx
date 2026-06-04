import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0b0c0e] text-[#e4e5e7] min-h-screen font-sans antialiased selection:bg-[#e4e5e7] selection:text-[#0b0c0e] relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2229_1px,transparent_1px),linear-gradient(to_bottom,#1f2229_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_40%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0c0e]/70 border-b border-[#1f2229]">
        <Navbar />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="py-16 md:py-24">
          <Hero />
        </section>

        <section className="py-16 border-t border-[#1f2229]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#6c7281]">SYS_INDEX // M2S</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white font-mono">
                  HARDWARE ARCHIVE
                </h2>
                <p className="text-xs text-[#6c7281] leading-relaxed hidden lg:block">
                  High-performance modules, geometric layouts, and premium tactical mechanics.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 bg-[#111318] border border-[#1f2229] p-4 md:p-8 rounded-xl relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent" />
              <BlogList />
            </div>

          </div>
        </section>

      </main>

      <footer className="mt-40 border-t border-[#1f2229] bg-[#090a0c]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;