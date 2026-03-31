import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import exampleImage from "../../assets/10926a93dfda6c755378bfd820896e5eb2780fc1.png";

export function CollectorStories() {
  return (
    <section className="relative w-full bg-[#1c0a05] overflow-hidden py-24 lg:py-40 font-sans border-t border-white/5">
      
      {/* Top Right Label */}
      <div className="absolute top-12 right-6 md:right-12 text-right text-[#63453C] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase leading-relaxed z-20">
        Collector<br />Stories
      </div>

      {/* Navigation Arrows (Absolute to screen edges) */}
      <button className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-[44px] h-[44px] rounded-full bg-[#3D251D] hidden md:flex items-center justify-center text-[#E8D4CC] hover:bg-[#523328] transition-all shadow-none">
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>

      <button className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-[44px] h-[44px] rounded-full bg-[#3D251D] hidden md:flex items-center justify-center text-[#E8D4CC] hover:bg-[#523328] transition-all shadow-none">
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>

      {/* Content Grid */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Image Block */}
        <div className="w-full lg:w-[45%] relative">
          <div className="w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden relative shadow-2xl">
            <img 
              src={exampleImage} 
              alt="Collector Story" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text Block */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative lg:pt-8 min-h-[300px]">
          
          {/* Quote Mark SVG to perfectly match screenshot */}
          <div className="absolute top-[-40px] left-0 lg:top-[-20px] lg:left-[-10px] text-[#63453C]">
            <svg width="45" height="38" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 24C19.5 35 15 48 0 48L3 36C9 36 10.5 28.5 10.5 24H0V0H19.5V24ZM58.5 24C58.5 35 54 48 39 48L42 36C48 36 49.5 28.5 49.5 24H39V0H58.5V24Z" fill="currentColor"/>
            </svg>
          </div>

          {/* Quote Text */}
          <h3 className="text-[2rem] md:text-[2.5rem] lg:text-[3.2rem] leading-[1.05] tracking-tight font-medium mb-16 w-full text-right ml-auto">
            <span className="text-[#FDF4ED]">Using Dezzert Diecast </span>
            <span className="text-[#A68F87]">was a game-changer </span>
            <span className="text-[#FDF4ED]">for my collection. </span>
            <span className="text-[#A68F87]">They didn't just give us a marketplace — </span>
            <span className="text-[#FDF4ED]">they helped us find our community.</span>
          </h3>

          {/* Author info */}
          <div className="flex flex-col gap-1 w-full text-left mt-auto border-t border-[#63453C]/30 pt-6 lg:border-none lg:pt-0">
            <p className="text-[#FDF4ED] text-[15px] font-medium tracking-wide">
              — Sarah Williams
            </p>
            <p className="text-[#8C7066] text-[13px] font-medium tracking-wide">
              Collector since '98 / Member
            </p>
          </div>

        </div>

      </div>

      {/* Smooth transition gradient to CTA section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none z-20" />
    </section>
  );
}