type Props = {
  title: string;
  desc: string;
  img: string;
  category?: string;
  date?: string;
  readTime?: string;
};

const BlogCard = ({ title, desc, img, category = "HARDWARE", date = "SYS_V1.0", readTime = "MATTE" }: Props) => {
  return (
    <div className="bg-[#14171f] border border-[#232834] rounded-lg overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 relative flex flex-col justify-between shadow-md">
      
      
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#3a4253] group-hover:border-cyan-400 transition-colors" />

      <div>
        <div className="relative overflow-hidden aspect-[16/10] bg-[#0b0c0e]">
          <img 
            src={img} 
            alt={title}
            className="h-full w-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" 
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 bg-[#0b0c0e]/90 border border-[#232834] group-hover:border-cyan-500/40 text-cyan-400 font-mono text-[9px] tracking-widest uppercase rounded">
              {category}
            </span>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#5b6271] mb-2">
            <span>{date}</span>
            <span>//</span>
            <span>{readTime}</span>
          </div>
          
          <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-[#828a9b] line-clamp-2 leading-relaxed">{desc}</p>
        </div>
      </div>

      <div className="p-4 md:p-5 pt-0 mt-auto">
        <div className="pt-3 border-t border-[#1f2229] flex items-center justify-between text-[#6c7281] group-hover:text-white text-[10px] font-mono tracking-wider uppercase transition-colors">
          <span>SPECIFICATION DATA</span> 
          <svg className="w-3 h-3 text-cyan-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;