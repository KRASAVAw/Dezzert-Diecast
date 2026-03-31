import { motion } from "motion/react";
import carModel from '../../assets/86ef975996f6b11ba5f0a3feca00c8f0a9e9c9ef.png';
import supraImage from '../../assets/3e3d62569df481d345de8a125ca57edf3510f50f.png';

export const BuySellTrade = () => {
  return (
    <section 
      className="relative w-full bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-8 z-10 overflow-hidden" 
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      <div className="max-w-[1280px] mx-auto">
        
        {/* Title */}
        <div className="mb-10 lg:mb-14 text-left">
          <h2 className="text-white text-[2.75rem] md:text-5xl lg:text-[4rem] font-bold tracking-tight">
            How it works?
          </h2>
        </div>

        {/* 3-Card Layout matching the screenshot style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[680px]">
          
          {/* Left Column (Buy / Sell) - Stacked Vertically */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 h-[600px] lg:h-full">
            
            {/* BUY CARD (Card 1) */}
            <div className="flex-1 bg-[#121212] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/10 transition-colors duration-500 min-h-[250px] flex flex-col justify-center">
              <div className="relative z-10 w-[60%]">
                <p className="text-[#888888] text-sm md:text-base font-medium mb-3 flex items-center gap-2 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EE7325]" />
                  Step number one
                </p>
                <h3 className="text-white text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight">
                  Buy rare <br/> models
                </h3>
              </div>
              
              {/* Visual Element - Right aligned, partially cut off */}
              <div className="absolute right-[-20%] md:right-[-10%] top-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 pointer-events-none">
                <div className="w-full h-full relative group-hover:scale-110 group-hover:-translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center">
                  
                  {/* 3D Car Model Image without background */}
                  <img 
                    src={carModel} 
                    alt="Rare Diecast Model" 
                    className="relative z-10 w-[120%] h-[120%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transform -rotate-[5deg]" 
                    style={{ 
                      mixBlendMode: "multiply", 
                    }}
                  />
                  
                  {/* Ambient glow behind it */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#EE7325] rounded-full blur-[60px] opacity-30 mix-blend-screen" />
                </div>
              </div>
            </div>

            {/* SELL CARD (Card 2) */}
            <div className="flex-1 bg-[#121212] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/10 transition-colors duration-500 min-h-[250px] flex flex-col justify-center">
              <div className="relative z-10 w-[60%]">
                <p className="text-[#888888] text-sm md:text-base font-medium mb-3 flex items-center gap-2 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EE7325]" />
                  Step number second
                </p>
                <h3 className="text-white text-3xl md:text-[2.5rem] font-bold leading-[1.1] tracking-tight">
                  Sell your <br/> collection
                </h3>
              </div>
              
              {/* Visual Element - Right aligned */}
              <div className="absolute right-[-10%] md:right-[0%] top-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
                <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center">
                  {/* 3D-ish pixel window + cursor */}
                  <div className="w-40 h-[104px] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-[14px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform rotate-[15deg] rotate-x-[10deg] absolute z-10 flex flex-col overflow-hidden border border-white/10">
                    <div className="w-full h-5 bg-white/5 flex items-center px-2.5 gap-1.5 border-b border-white/5">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 p-2 grid grid-cols-4 grid-rows-3 gap-[3px] relative bg-[#0a0a0a]">
                       {Array.from({length: 12}).map((_, i) => (
                         <div key={i} className={`rounded-[2px] ${i === 6 ? 'bg-[#EE7325] shadow-[0_0_8px_#EE7325]' : 'bg-white/5'}`} />
                       ))}
                       {/* Floating 3D Cursor */}
                       <div className="absolute -bottom-1 -right-2 text-white drop-shadow-[0_6px_10px_rgba(0,0,0,0.8)] transform -rotate-[10deg] scale-[1.35]">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M7 2L21 11L14 13L18 20L15 22L11 15L5 19V2Z" />
                         </svg>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Exchange) - Massive Side Card */}
          <div className="lg:col-span-7 h-[500px] lg:h-full">
            <div className="w-full h-full rounded-[2rem] p-8 md:p-14 relative overflow-hidden group bg-[#EE7325] flex flex-col justify-between items-center text-center shadow-2xl">
              
              <div className="relative z-10 flex flex-col items-center mt-2 md:mt-6">
                <p className="text-white/90 text-sm md:text-[15px] font-medium mb-3 tracking-wide">
                  Last step
                </p>
                <h3 className="text-white text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight">
                  Trade for <br/> your grails
                </h3>
              </div>
              
              {/* Massive Center Visual Element */}
              <div className="flex-1 flex items-center justify-center relative w-full h-full my-8">
                <div className="relative w-full max-w-[500px] lg:max-w-[650px] flex items-center justify-center">
                  
                  {/* Glowing backdrop to preserve image color if it has a white bg, or just to highlight it */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[600px] md:h-[600px] bg-white rounded-full blur-[90px] md:blur-[120px] opacity-70 pointer-events-none" />
                  
                  {/* Supra Diecast Image */}
                  <img 
                    src={supraImage} 
                    alt="Fast & Furious Toyota Supra" 
                    className="relative z-10 w-[160%] md:w-[180%] lg:w-[200%] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform -rotate-[2deg]"
                    style={{ 
                      mixBlendMode: "multiply", 
                    }}
                  />

                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
