import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center border-b border-[#1f2229] pb-4 mb-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#6c7281]">
          ACTIVE DEPLOYMENTS (06)
        </h3>
        <span className="text-[10px] font-mono text-cyan-500 bg-cyan-950/40 px-2 py-0.5 border border-cyan-500/20 rounded">
          LIVE FILTER: ON
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        <BlogCard
          title="LINEAR TACTICAL KEYPAD M2S"
          desc="Custom lubed gold-plated stabilizer setup for ultra-smooth typing acoustics."
          img="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=80"
          category="CHASSIS"
          date="SYS_V1.02"
          readTime="MIL-STD"
        />
        <BlogCard
          title="TITANIUM MATTE ENCLOSURE"
          desc="Laser etched monolithic structural cases configured for compact setups."
          img="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=500&q=80"
          category="MODULES"
          date="SYS_V2.11"
          readTime="RAW_STEEL"
        />
        <BlogCard
          title="ISOLATION GASKET MOUNT"
          desc="Poron dampening layers optimized dynamically to clear multi-frequency resonances."
          img="https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=500&q=80"
          category="ACOUSTICS"
          date="SYS_V0.88"
          readTime="CUSTOM"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          title="CNC ALUMINUM MACRO PAD"
          desc="Dedicated mechanical workstation keys crafted for layout workflow automations."
          img="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=500&q=80"
          category="CHASSIS"
          date="SYS_V1.40"
          readTime="ANODIZED"
        />
        <BlogCard
          title="COILED AVIATOR CONNECTORS"
          desc="Double-shielded type-C cables integrated with heavy-duty quick detach connectors."
          img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80"
          category="LINK_SYS"
          date="SYS_V3.00"
          readTime="HIGH-VOLT"
        />
        <BlogCard
          title="POLYCARBONATE FR4 PLATES"
          desc="Flex-cut structural switch plates delivering maximum custom ergonomic layout elasticity."
          img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
          category="CORE_SYS"
          date="SYS_V1.12"
          readTime="FLEX-CUT"
        />
      </div>
    </div>
  );
};

export default BlogList;