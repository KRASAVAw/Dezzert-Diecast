import { Check } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden pt-32 lg:pt-48 pb-16 md:pb-24 font-sans">
      
      {/* Ambient Orange Glow */}
      <div 
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full blur-[150px] pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, #EE7325 0%, transparent 70%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <p className="text-[#EE7325] text-sm md:text-base font-medium tracking-wide mb-4 uppercase">
            Building a collection
          </p>
          <h2 className="text-[#FDF4ED] text-[2.25rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-light tracking-tight max-w-[800px]">
            Why collectors choose us <br className="hidden md:block"/>
            <span className="text-white/50">every single day</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative w-full mt-10">
          
          {/* DESKTOP TIMELINE TRACK (Absolute Overlay) */}
          <div className="hidden md:block absolute top-[56px] left-0 right-0 h-6 z-10 pointer-events-none">
            {/* The Connecting Lines */}
            <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-[1px] bg-[#333333] -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-transparent via-[#EE7325]/40 to-[#EE7325] -translate-y-1/2 z-0" />

            {/* The Dots aligned perfectly within the same container context */}
            <div className="grid grid-cols-3 gap-6 h-full w-full relative z-10">
              <div className="flex justify-center items-center h-full">
                <div className="w-[18px] h-[18px] rounded-full bg-[#0a0a0a] border-[2px] border-[#555555] pointer-events-auto" />
              </div>
              <div className="flex justify-center items-center h-full">
                <div className="w-[18px] h-[18px] rounded-full bg-[#0a0a0a] border-[2px] border-[#555555] pointer-events-auto" />
              </div>
              <div className="flex justify-center items-center h-full">
                <div className="w-[18px] h-[18px] rounded-full bg-[#EE7325] border-[4px] border-[#0a0a0a] pointer-events-auto" />
              </div>
            </div>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            
            {/* Step 1: Discover */}
            <div className="flex flex-col items-center md:items-start w-full">
              {/* Pill Container (h-10) */}
              <div className="h-10 flex items-center mb-4 w-full justify-center">
                <div className="bg-[#1a1a1a] text-[#FDF4ED] px-6 py-2 rounded-full text-[13px] md:text-sm font-semibold border border-white/5 whitespace-nowrap">
                  Discover
                </div>
              </div>
              
              {/* Dot Spacer (Desktop) & Dot (Mobile) */}
              <div className="flex h-6 w-full justify-center items-center mb-8">
                <div className="md:hidden w-[18px] h-[18px] rounded-full bg-[#0a0a0a] border-[2px] border-[#555555]" />
              </div>

              {/* Card */}
              <div className="bg-[#121212] w-full rounded-2xl p-8 border border-white/5 flex flex-col h-full text-left">
                <h3 className="text-[#FDF4ED] text-lg font-medium mb-6">Explore the catalog</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#a1a1aa] text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#a1a1aa] shrink-0 mt-[2px]" />
                    <span>Navigate effortlessly through our <strong className="text-white/90 font-medium">user-friendly catalog</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-[#a1a1aa] text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#a1a1aa] shrink-0 mt-[2px]" />
                    <span>Examine every detail with <strong className="text-white/90 font-medium">high-quality photos</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-[#a1a1aa] text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#a1a1aa] shrink-0 mt-[2px]" />
                    <span>Find precisely the diecast models you need</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Trust */}
            <div className="flex flex-col items-center md:items-start w-full">
              {/* Pill Container (h-10) */}
              <div className="h-10 flex items-center mb-4 w-full justify-center">
                <div className="bg-[#1a1a1a] text-[#FDF4ED] px-6 py-2 rounded-full text-[13px] md:text-sm font-semibold border border-white/5 whitespace-nowrap">
                  Verify & Connect
                </div>
              </div>
              
              {/* Dot Spacer (Desktop) & Dot (Mobile) */}
              <div className="flex h-6 w-full justify-center items-center mb-8">
                <div className="md:hidden w-[18px] h-[18px] rounded-full bg-[#0a0a0a] border-[2px] border-[#555555]" />
              </div>

              {/* Card */}
              <div className="bg-[#121212] w-full rounded-2xl p-8 border border-white/5 flex flex-col h-full text-left">
                <h3 className="text-[#FDF4ED] text-lg font-medium mb-6">Buy with confidence</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#a1a1aa] text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#a1a1aa] shrink-0 mt-[2px]" />
                    <span>Browse thousands of strictly <strong className="text-white/90 font-medium">verified listings</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-[#a1a1aa] text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#a1a1aa] shrink-0 mt-[2px]" />
                    <span>Join an active, passionate <strong className="text-white/90 font-medium">community</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-[#a1a1aa] text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#a1a1aa] shrink-0 mt-[2px]" />
                    <span>Share, discuss, and trade securely</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Complete (Active State) */}
            <div className="flex flex-col items-center md:items-start w-full">
              {/* Pill Container (h-10) */}
              <div className="h-10 flex items-center mb-4 w-full justify-center">
                <div className="bg-[#FDF4ED] text-black px-6 py-2 rounded-full text-[13px] md:text-sm font-semibold whitespace-nowrap">
                  Transact
                </div>
              </div>
              
              {/* Dot Spacer (Desktop) & Dot (Mobile) */}
              <div className="flex h-6 w-full justify-center items-center mb-8">
                <div className="md:hidden w-[18px] h-[18px] rounded-full bg-[#EE7325] border-[4px] border-[#0a0a0a]" />
              </div>

              {/* Active Card */}
              <div className="bg-[#1a1a1a] w-full rounded-2xl p-8 border border-white/10 flex flex-col h-full text-left relative overflow-hidden group">
                {/* Subtle active glow inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE7325] opacity-[0.05] blur-[40px] rounded-full pointer-events-none" />
                
                <h3 className="text-[#FDF4ED] text-lg font-medium mb-6 relative z-10">Complete your journey</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3 text-[#FDF4ED]/90 text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#EE7325] shrink-0 mt-[2px]" />
                    <span>Experience a 100% <strong className="text-white font-medium">secure process</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-[#FDF4ED]/90 text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#EE7325] shrink-0 mt-[2px]" />
                    <span>Gain real-time visibility into every transaction</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#FDF4ED]/90 text-[15px] leading-relaxed">
                    <Check className="w-5 h-5 text-[#EE7325] shrink-0 mt-[2px]" />
                    <span>Utilize our unified, automated intelligent workflow</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
