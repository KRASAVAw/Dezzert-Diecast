import { useState } from "react";
import { ChevronDown, Heart, Search, SlidersHorizontal } from "lucide-react";

import img1 from "../../assets/a3aff9deaa4a08e5b0ed914bc5ea729634ca74b2.png";
import img2 from "../../assets/1f18343a2edcef01eb61e517a31207135d15ccda.png";
import img3 from "../../assets/797e128a78785ca039f18bbcc9bbc9e74706fc2a.png";
import img4 from "../../assets/0770547de0dfce71ede45d1754fbc6ddf52dda86.png";
import img5 from "../../assets/985cb916ac6f36797164a49fde6c4b564a85b380.png";

const CATEGORIES = [
  "NASCAR",
  "Indy Car",
  "F1",
  "Vintage",
  "Combo Sets",
  "Customs",
  "Loose, broken or close out"
];

const ITEMS = [
  {
    id: 1,
    title: "JOEY LOGANO #22 PENNZOIL",
    collection: "LIMITED EDITION",
    image: img1,
  },
  {
    id: 2,
    title: "MICHAEL MCDOWELL #71 GAINBRIDGE",
    collection: "1:24 SCALE",
    image: img2,
  },
  {
    id: 3,
    title: "MICHAEL MCDOWELL #71 TIDE",
    collection: "NASCAR",
    image: img3,
  },
  {
    id: 4,
    title: "MICHAEL MCDOWELL #71 DELAWARE LIFE",
    collection: "NEW ARRIVALS",
    image: img4,
  },
  {
    id: 5,
    title: "LUKE FENHAUS #5 JOBBER",
    collection: "1:64 SCALE",
    image: img5,
  }
];

export function ShopByCategory() {
  const [activeCategory, setActiveCategory] = useState("NASCAR");

  return (
    <section className="relative flex flex-col py-24 px-8 z-10 font-sans min-h-screen">
      {/* Top Filter Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 md:gap-3 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full sm:w-auto whitespace-nowrap rounded-full px-2 sm:px-6 py-2.5 text-[11px] sm:text-[13px] font-medium tracking-wide transition-all duration-300 border flex items-center justify-center ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-[#e2e2e2] border-white/10 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        
        {/* Right Action Icons */}
        <div className="flex items-center gap-3 ml-auto">
          <button className="flex items-center justify-center w-11 h-11 rounded-full bg-[#151515] border border-white/5 text-white hover:bg-white/10 transition-colors">
            <Search size={18} strokeWidth={2} />
          </button>
          <button className="flex items-center justify-center w-11 h-11 rounded-full bg-[#151515] border border-white/5 text-white hover:bg-white/10 transition-colors">
            <SlidersHorizontal size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1400px] w-full mx-auto">
        
        {/* Sidebar Accordions */}
        <aside className="w-full lg:w-[280px] shrink-0 bg-[#121212] rounded-3xl p-2 border border-white/5 h-fit">
          <div className="flex flex-col">
            {[
              "SALE TYPE",
              "PRICE RANGE (USD)",
              "COLLECTIONS (6)",
              "SCALE",
              "BRAND",
            ].map((filterName, i) => (
              <div 
                key={filterName}
                className={`py-5 px-6 flex justify-between items-center cursor-pointer hover:bg-white/[0.03] transition-colors rounded-2xl ${
                  i !== 0 ? "border-t border-white/[0.04]" : ""
                }`}
              >
                <span className="text-white text-[13px] font-medium tracking-wide">
                  {filterName}
                </span>
                <ChevronDown size={16} className="text-white/40" />
              </div>
            ))}
          </div>
        </aside>

        {/* Grid Area */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col rounded-[1.5rem] overflow-hidden bg-[#151515] border border-white/5 group hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container - White Background for Diecast */}
              <div className="bg-[#f5f5f5] w-full h-[260px] flex items-center justify-center p-6 relative overflow-hidden">
                {/* Gradient overlay to smoothly fade out any cut-off shadows at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f5f5f5] to-[#f5f5f5]/0 pointer-events-none z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-[95%] h-[95%] object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-[1.15] translate-y-3 relative z-0"
                />
              </div>
              
              {/* Footer details */}
              <div className="bg-[#181818] p-5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#888] text-[10px] font-bold tracking-widest mb-1.5 uppercase">
                    {item.collection}
                  </span>
                  <span className="text-white font-medium text-[15px] tracking-wide">
                    {item.title}
                  </span>
                </div>
                <button className="text-white/30 hover:text-[#EE7325] transition-colors p-2">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
