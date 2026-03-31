import { Heart, ThumbsUp } from "lucide-react";
import imgGordon from "../../assets/3e9712455315bca5e4985716cfebfe05dfa718f2.png";
import imgShelf from "../../assets/1511e093b733e165a6cbc440a2c5eaba76b24d1b.png";
import exampleImage from "../../assets/fbd500e65d2a6c8220abe0390b1864d22a536995.png";

export function CommunityHub() {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden pt-16 lg:pt-24 pb-32 lg:pb-48 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <p className="text-[#EE7325] text-sm md:text-base font-medium tracking-wide mb-4 uppercase">
            Community
          </p>
          <h2 className="text-[#FDF4ED] text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.2] font-light tracking-tight max-w-[900px] mb-10">
            Join thousands of passionate collectors sharing their <span className="text-[#EE7325] font-normal">rare finds</span> every day
          </h2>
          <button
            className="text-white rounded-full px-10 py-3.5 transition-colors font-medium"
            style={{
              backgroundColor: "#EE7325",
              fontSize: "0.97rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F08F49")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EE7325")}
          >
            Join the Community
          </button>
        </div>

        {/* Main Interactive Visual Area */}
        <div className="relative w-full flex justify-center items-center min-h-[500px]">
          
          {/* Left Floating Bubbles (Absolute on desktop, hidden/flow on mobile if needed, but let's keep it styled for desktop) */}
          <div className="hidden lg:flex absolute left-[5%] xl:left-[9%] flex-col gap-12 z-20 bottom-[10%]">

            {/* Bubble 2 */}
            <div className="relative bg-[#FDF4ED] text-[#0a0a0a] px-6 py-4 rounded-[20px] rounded-bl-sm shadow-2xl max-w-[240px] font-medium text-[15px] transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
              Does anyone have tips for displaying 1:24 scales without dust?
            </div>

          </div>

          {/* Center Content Blocks */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 z-10 w-full lg:max-w-[840px]">
            
            {/* Left Block (Chat UI Bubble) */}
            <div className="w-full md:w-[440px] flex flex-col gap-2 relative justify-center">
              
              {/* Top Message Group (Left Aligned) */}
              <div className="flex flex-col w-full mb-2">
                <span className="text-[#888888] text-[13px] font-medium text-center w-full mb-6">
                  Yesterday, 8:42 PM
                </span>
                
                <div className="relative pl-12 flex flex-col gap-2 items-start w-full">
                  {/* Avatar */}
                  <div className="absolute left-0 bottom-4 w-9 h-9 rounded-full overflow-hidden bg-[#FDF4ED] flex items-center justify-center border border-[#1e1e1e]">
                    <span className="text-[10px] font-bold text-[#EE7325]">DCR</span>
                  </div>

                  {/* Text Bubble */}
                  <div className="bg-[#FDF4ED] text-[#0a0a0a] px-5 py-3.5 rounded-2xl font-medium text-[15px] max-w-[90%] shadow-lg leading-snug">
                    Found a rare '98 Gordon diecast in mint condition!
                  </div>

                  {/* Image Bubble */}
                  <div className="bg-[#FDF4ED] p-[6px] rounded-2xl rounded-bl-sm max-w-[95%] relative shadow-lg">
                    <img 
                      src={imgGordon} 
                      alt="Gordon Diecast" 
                      className="rounded-[12px] w-full h-auto object-cover"
                    />
                    
                    {/* Reactions Pill */}
                    <div className="absolute -bottom-4 left-6 bg-[#222222] rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-black/50 shadow-xl z-10">
                      <Heart className="w-4 h-4 fill-[#ff4b4b] text-[#ff4b4b]" />
                      <ThumbsUp className="w-4 h-4 fill-[#EE7325] text-[#EE7325]" />
                      <span className="text-[#a1a1aa] text-[13px] font-medium ml-1">1076</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Message Group (Right Aligned) */}
              <div className="flex flex-col w-full mt-6">
                <span className="text-[#888888] text-[13px] font-medium text-center w-full mb-6">
                  Yesterday, 8:42 PM
                </span>
                
                <div className="relative flex flex-col items-end w-full pr-2">
                  {/* Image Bubble */}
                  <div className="bg-[#FDF4ED] p-[6px] rounded-2xl rounded-br-sm max-w-[95%] relative shadow-lg">
                    <img 
                      src={imgShelf} 
                      alt="Shelf Collection" 
                      className="rounded-[12px] w-full h-auto object-cover"
                    />

                    {/* Reactions Pill */}
                    <div className="absolute -bottom-4 left-6 bg-[#222222] rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-black/50 shadow-xl z-10">
                      <Heart className="w-4 h-4 fill-[#ff4b4b] text-[#ff4b4b]" />
                      <ThumbsUp className="w-4 h-4 fill-[#EE7325] text-[#EE7325]" />
                      <span className="text-[#a1a1aa] text-[13px] font-medium ml-1">13</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Block (Image with Overlaid Bubbles) */}
            <div className="w-full md:w-[320px] relative flex items-center justify-center h-[360px] md:h-[380px] mt-6 md:mt-16 lg:mt-[80px]">
              
              {/* Image Container */}
              <div className="w-full h-full relative flex flex-col items-center justify-center rounded-2xl shadow-2xl bg-[#050505] z-10">
                <img 
                  src={exampleImage} 
                  alt="Collector Center" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                
                {/* Stacked Bubbles partially overlapping image to the right */}
                <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-0 md:translate-x-[35%] z-20 flex flex-col gap-4 w-[250px] md:w-[280px]">
                  <div className="bg-[#FDF4ED] text-[#0a0a0a] px-5 py-4 rounded-[20px] rounded-tl-[4px] shadow-[0_15px_30px_rgba(0,0,0,0.5)] w-full font-medium text-[14px] leading-snug transform md:rotate-1 hover:rotate-0 transition-transform cursor-default">
                    Just shared my new arrivals! The verified listings here are top tier.
                  </div>
                  <div className="bg-[#FDF4ED] text-[#0a0a0a] px-5 py-4 rounded-[20px] rounded-br-[4px] shadow-[0_15px_30px_rgba(0,0,0,0.5)] w-[95%] font-medium text-[14px] leading-snug transform md:-rotate-1 hover:rotate-0 transition-transform cursor-default self-end md:mr-2">
                    What does the new "Verified Box" tag mean?
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Mobile-only Bubbles (Visible only on small screens below the main blocks) */}
        <div className="flex flex-col gap-4 mt-12 lg:hidden w-full max-w-[400px] mx-auto">
          <div className="bg-[#1a1a1a] text-[#FDF4ED] border border-white/10 px-6 py-4 rounded-[20px] rounded-bl-[4px] font-medium text-[15px]">
            Does anyone have tips for displaying 1:24 scales without dust?
          </div>
        </div>

      </div>
    </section>
  );
}