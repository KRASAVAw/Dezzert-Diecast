import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  ChevronRight,
  Heart, 
  Search, 
  ShoppingCart,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Check,
  ShieldCheck,
  Instagram
} from "lucide-react";
import { useNavigate } from "react-router";

import { Navbar } from "./components/Navbar";
import { CTAAndFooter } from "./components/CTAAndFooter";

// Real model images from our existing components
import carImg1 from "../assets/059cb1a979abd2d2306cc604a51c290b1e0319f3.png";
import carImg2 from "../assets/2464f675890430fcee29648b90e04f62ca90a47c.png";
import carImg3 from "../assets/6f139aa249c3231a3056d85a155cfdafad7ffaee.png";
import carImg4 from "../assets/d1cbee48378b9cd41c5123cd6993aa969d871966.png";
import carImg5 from "../assets/149777985f68f0500345018e0e1b5bcec2207839.png";
import img1 from "../assets/a3aff9deaa4a08e5b0ed914bc5ea729634ca74b2.png";
import img2 from "../assets/1f18343a2edcef01eb61e517a31207135d15ccda.png";
import img3 from "../assets/797e128a78785ca039f18bbcc9bbc9e74706fc2a.png";
import img4 from "../assets/0770547de0dfce71ede45d1754fbc6ddf52dda86.png";
import img5 from "../assets/985cb916ac6f36797164a49fde6c4b564a85b380.png";

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FEATURED_ITEMS = [
  {
    id: 'f1',
    title: "2024 TOYOTA CAMRY NO. 20 DEWALT",
    scale: "1:24 Scale",
    driver: "Christopher Bell",
    price: "$119.99",
    badge: "Rare Find",
    image: carImg1,
  },
  {
    id: 'f2',
    title: "JOEY LOGANO #22 PENNZOIL",
    scale: "1:24 Scale",
    driver: "Joey Logano",
    price: "$89.99",
    badge: "Limited Edition",
    image: img1,
  },
  {
    id: 'f3',
    title: "MICHAEL MCDOWELL #71 GAINBRIDGE",
    scale: "1:64 Scale",
    driver: "Michael McDowell",
    price: "$19.99",
    badge: "New Arrival",
    image: img2,
  },
];

const GRID_ITEMS = [
  {
    id: 1,
    title: "LUKE FENHAUS #5 JOBBER",
    scale: "1:64 Scale",
    driver: "Luke Fenhaus",
    condition: "Mint",
    price: "$14.99",
    badge: "New Arrival",
    image: img5,
  },
  {
    id: 2,
    title: "MICHAEL MCDOWELL #71 TIDE",
    scale: "1:24 Scale",
    driver: "Michael McDowell",
    condition: "Used - Like New",
    price: "$64.99",
    badge: "",
    image: img3,
  },
  {
    id: 3,
    title: "RYAN BLANEY #12 MENARDS",
    scale: "1:24 Scale",
    driver: "Ryan Blaney",
    condition: "Mint",
    price: "$104.99",
    badge: "Rare Find",
    image: carImg2,
  },
  {
    id: 4,
    title: "MICHAEL MCDOWELL #71 DELAWARE",
    scale: "1:24 Scale",
    driver: "Michael McDowell",
    condition: "Mint",
    price: "$94.99",
    badge: "Collector Pick",
    image: img4,
  },
  {
    id: 5,
    title: "CHASE ELLIOTT #9 NAPA",
    scale: "1:24 Scale",
    driver: "Chase Elliott",
    condition: "Used",
    price: "$45.00",
    badge: "",
    image: carImg3,
  },
  {
    id: 6,
    title: "KYLE LARSON #5 HENDRICKCARS",
    scale: "1:24 Scale",
    driver: "Kyle Larson",
    condition: "Mint",
    price: "$129.99",
    badge: "Signed",
    image: carImg4,
  },
  {
    id: 7,
    title: "BUBBA WALLACE #23 COLUMBIA",
    scale: "1:64 Scale",
    driver: "Bubba Wallace",
    condition: "Mint",
    price: "$18.99",
    badge: "",
    image: carImg5,
  },
  {
    id: 8,
    title: "JOEY LOGANO #22 PENNZOIL",
    scale: "1:64 Scale",
    driver: "Joey Logano",
    condition: "Mint",
    price: "$15.99",
    badge: "Sale",
    image: img1,
  },
];

const ACCORDION_FILTERS = [
  {
    title: "Scale",
    options: ["1:24 (156)", "1:64 (242)", "1:18 (12)"]
  },
  {
    title: "Brand",
    options: ["Action Racing", "Lionel", "RCCA"]
  },
  {
    title: "Driver",
    options: ["Christopher Bell", "Joey Logano", "Michael McDowell", "Chase Elliott", "Kyle Larson"]
  },
  {
    title: "Series",
    options: ["Cup Series", "Xfinity", "Truck Series"]
  },
  {
    title: "Condition",
    options: ["Mint", "Used", "Box Included"]
  },
  {
    title: "Availability",
    options: ["In Stock", "Pre-Order", "Sold Out"]
  },
  {
    title: "Special Tags",
    options: ["Limited Edition", "Signed", "Rare Find"]
  }
];

const HERO_CARS = [
  {
    image: carImg4,
    name: "KYLE LARSON #5 2024",
    price: "$129.99"
  },
  {
    image: carImg3,
    name: "CHASE ELLIOTT #9 NAPA",
    price: "$45.00"
  },
  {
    image: carImg2,
    name: "RYAN BLANEY #12 MENARDS",
    price: "$104.99"
  },
  {
    image: carImg1,
    name: "2024 TOYOTA CAMRY #20",
    price: "$119.99"
  }
];

const carVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100vw" : "-100vw",
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100vw" : "-100vw",
    opacity: 0,
    scale: 0.8,
  })
};

export function Shop() {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState<string[]>(["1:24 (156)", "Lionel"]);
  const [openAccordions, setOpenAccordions] = useState<string[]>(["Scale", "Brand", "Driver"]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % HERO_CARS.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(timer);
  }, [currentHeroIndex]);

  const toggleAccordion = (title: string) => {
    setOpenAccordions(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const toggleFilter = (option: string) => {
    setActiveFilters(prev => 
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans text-white">
      <Navbar isHidden={false} />

      {/* 1. Top Hero */}
      <section className="relative h-[100dvh] md:h-[100vh] min-h-[600px] w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center border-b border-white/5">
        
        {/* Subtle spotlights */}
        <div className="absolute top-0 left-[20%] w-[30%] h-full bg-[#EE7325]/10 blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[50%] bg-white/5 blur-[120px] pointer-events-none z-0" />

        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 h-full relative z-10 flex flex-col pt-24 pb-10 md:py-24">
          
          {/* HUGE BACKGROUND TEXT (Staggered) */}
          <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0 mt-8 md:mt-16">
            <h1 className="text-[14vw] md:text-[8vw] lg:text-[110px] xl:text-[130px] leading-[1.05] font-medium text-white/90 md:ml-[5%]">
              Premium
            </h1>
            <h1 className="text-[14vw] md:text-[8vw] lg:text-[110px] xl:text-[130px] leading-[1.05] font-medium text-white/60 text-right md:text-left md:ml-[35%]">
              NASCAR
            </h1>
            <h1 className="text-[14vw] md:text-[8vw] lg:text-[110px] xl:text-[130px] leading-[1.05] font-medium text-white/40 text-center md:text-left md:ml-[60%]">
              Diecast
            </h1>
          </div>

          {/* THE CAR IMAGE IN FRONT */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none mt-10 md:mt-20">
            {/* Ground reflection shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 md:translate-y-32 w-[80%] md:w-[60%] h-[30px] md:h-[40px] bg-black blur-2xl rounded-[100%] z-0" />
            <AnimatePresence initial={false} custom={direction}>
              <motion.img 
                key={currentHeroIndex}
                src={HERO_CARS[currentHeroIndex].image}
                alt={HERO_CARS[currentHeroIndex].name}
                custom={direction}
                variants={carVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-[110%] sm:w-[90%] md:w-[75%] lg:w-[65%] object-contain drop-shadow-2xl translate-y-6 md:translate-y-24 z-10"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))' }}
              />
            </AnimatePresence>
          </div>

          {/* FRONT CONTENT OVERLAY */}
          <div className="relative z-20 h-full flex flex-col justify-between pointer-events-none">
            
            <div className="flex-1" />

            {/* Middle Content Row */}
            <div className="flex justify-between items-start w-full mt-24 pointer-events-auto">
              
              {/* Left Paragraph */}
              <div className="max-w-[280px] text-[#888] text-sm md:text-base leading-relaxed hidden md:block mt-32">
                Explore rare finds, collector favorites, and premium diecast models. We curate the best, mile after mile.
              </div>

              {/* Right Quality Guarantee Link */}
              <div className="hidden lg:flex flex-col items-end mr-8 mt-16">
                <div className="flex items-center gap-2 text-[#888] text-sm hover:text-white transition-colors cursor-pointer">
                  <div className="w-1.5 h-1.5 bg-[#EE7325] rounded-full" />
                  Quality Guarantee
                </div>
              </div>

            </div>

            {/* Bottom Content Row */}
            <div className="flex items-end justify-between w-full mt-auto pointer-events-auto">
              
              {/* Bottom Left: Pricing / Info */}
              <div className="flex flex-col gap-1 md:gap-1.5 min-h-[80px] md:min-h-[100px] justify-end">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`info-${currentHeroIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-1 md:gap-1.5"
                  >
                    <span className="text-[#888] text-xs md:text-base leading-tight">
                      {HERO_CARS[currentHeroIndex].name}
                    </span>
                    <span className="text-white text-3xl md:text-4xl lg:text-[40px] font-medium leading-none">
                      {HERO_CARS[currentHeroIndex].price}
                    </span>
                  </motion.div>
                </AnimatePresence>
                
                {/* Pagination Dots */}
                <div className="flex items-center gap-2 mt-3 md:mt-4">
                  {HERO_CARS.map((_, i) => (
                    <div 
                      key={i}
                      onClick={() => {
                        if (i === currentHeroIndex) return;
                        setDirection(i > currentHeroIndex ? 1 : -1);
                        setCurrentHeroIndex(i);
                      }}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                        i === currentHeroIndex ? "bg-[#EE7325]" : "bg-white/20 hover:bg-white/40"
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Right: Icons */}
              <div className="flex flex-col items-center gap-3 md:gap-5 pb-1 md:pb-0">
                <button className="text-white/60 hover:text-white transition-colors p-2 bg-white/5 rounded-full backdrop-blur-md hover:bg-white/10 border border-white/5">
                  <Instagram size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
                <button className="text-white/60 hover:text-white transition-colors p-2 bg-white/5 rounded-full backdrop-blur-md hover:bg-white/10 border border-white/5">
                  <XIcon size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured / Rare Finds */}
      <section className="py-12 px-6 md:px-12 bg-[#121212]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium">Featured Rare Finds</h2>
            <div className="hidden md:flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <ChevronRight className="rotate-180" size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_ITEMS.map(item => (
              <div key={item.id} className="group relative bg-[#181818] rounded-3xl border border-white/5 overflow-hidden flex flex-col md:flex-row h-auto md:h-[220px]">
                {/* Image side */}
                <div className="w-full md:w-2/5 h-[180px] md:h-full bg-[#f5f5f5] relative flex items-center justify-center p-4">
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f5f5f5] to-transparent z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-[90%] md:w-[120%] h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 relative z-0"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4 z-20 bg-[#EE7325] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {item.badge}
                    </div>
                  )}
                </div>
                {/* Content side */}
                <div className="w-full md:w-3/5 p-5 md:p-6 flex flex-col justify-between min-h-[160px] md:min-h-0">
                  <div>
                    <h3 className="text-base md:text-lg font-medium leading-tight mb-2 group-hover:text-[#EE7325] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#888]">{item.scale} • {item.driver}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 md:mt-0">
                    <span className="text-lg md:text-xl font-semibold">{item.price}</span>
                    <button className="text-xs md:text-sm border border-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:bg-white hover:text-black transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog Layout */}
      <section className="py-12 px-6 md:px-12 flex-1 relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* 3. Shop Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
            <p className="text-[#888] font-medium text-sm md:text-base">Showing <span className="text-white">410</span> models</p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" size={16} />
                <input 
                  type="text" 
                  placeholder="Search catalog..." 
                  className="bg-[#121212] border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#EE7325] transition-colors w-full sm:w-[200px]"
                />
              </div>
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-[#888] text-sm hidden sm:inline-block whitespace-nowrap">Sort by:</span>
                <select className="bg-[#121212] border border-white/10 rounded-full px-4 py-2 text-sm appearance-none focus:outline-none focus:border-[#EE7325] cursor-pointer w-full flex-1 sm:w-auto">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                  <option>Rare Finds</option>
                </select>
              </div>

              <div className="hidden sm:flex items-center border border-white/10 rounded-full p-1 bg-[#121212]">
                <button className="p-1.5 bg-white/10 rounded-full text-white"><LayoutGrid size={16} /></button>
                <button className="p-1.5 text-[#888] hover:text-white transition-colors"><List size={16} /></button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* 4. Left Sidebar Filters */}
            <aside className="w-full lg:w-[260px] shrink-0">
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                  className="font-semibold text-lg flex items-center gap-2 lg:pointer-events-none"
                >
                  <SlidersHorizontal size={18} /> Filters
                  <ChevronDown size={16} className={`lg:hidden transition-transform duration-300 ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
                </button>
                <button 
                  onClick={() => setActiveFilters([])}
                  className={`text-sm text-[#888] hover:text-white transition-colors underline underline-offset-4 ${!isMobileFiltersOpen ? 'hidden lg:block' : ''}`}
                >
                  Clear All
                </button>
              </div>

              <div className={`flex-col space-y-2 ${isMobileFiltersOpen ? 'flex' : 'hidden lg:flex'}`}>
                {ACCORDION_FILTERS.map((section, idx) => (
                  <div key={idx} className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => toggleAccordion(section.title)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-medium text-[15px]">{section.title}</span>
                      <ChevronDown 
                        size={16} 
                        className={`text-[#888] transition-transform duration-300 ${openAccordions.includes(section.title) ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {openAccordions.includes(section.title) && (
                      <div className="px-5 pb-5 pt-1 flex flex-col gap-3">
                        {section.options.map(option => {
                          const isActive = activeFilters.includes(option);
                          return (
                            <label key={option} className="flex items-center gap-3 cursor-pointer group">
                              <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                                isActive ? 'bg-[#EE7325] border-[#EE7325]' : 'bg-[#1a1a1a] border-white/10 group-hover:border-white/30'
                              }`}>
                                {isActive && <Check size={12} strokeWidth={3} />}
                              </div>
                              <span className={`text-sm ${isActive ? 'text-white font-medium' : 'text-[#888] group-hover:text-white transition-colors'}`}>
                                {option}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ))}

                {/* Price Slider mockup */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion("Price")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-[15px]">Price</span>
                    <ChevronDown size={16} className={`text-[#888] transition-transform duration-300 ${openAccordions.includes("Price") ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordions.includes("Price") && (
                    <div className="px-5 pb-6 pt-2">
                      <div className="h-1 bg-white/10 rounded-full mb-6 relative">
                        <div className="absolute left-[20%] right-[30%] h-full bg-[#EE7325] rounded-full" />
                        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#EE7325] rounded-full cursor-grab" />
                        <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#EE7325] rounded-full cursor-grab" />
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 flex-1 flex items-center">
                          <span className="text-[#888] text-sm mr-1">$</span>
                          <input type="text" value="20" className="bg-transparent w-full outline-none text-sm" readOnly />
                        </div>
                        <span className="text-[#888]">-</span>
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 flex-1 flex items-center">
                          <span className="text-[#888] text-sm mr-1">$</span>
                          <input type="text" value="150" className="bg-transparent w-full outline-none text-sm" readOnly />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button className="w-full py-3.5 bg-[#EE7325] hover:bg-[#F08F49] text-white rounded-full font-medium transition-colors mt-4">
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* 6. Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {GRID_ITEMS.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col rounded-3xl overflow-hidden bg-[#151515] border border-white/5 group hover:border-white/20 transition-all duration-500 relative"
                  >
                    {/* Badge */}
                    {item.badge && (
                      <div className={`absolute top-4 left-4 z-20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md ${
                        item.badge === 'Rare Find' ? 'bg-[#EE7325] text-white' : 
                        item.badge === 'Sale' ? 'bg-red-600 text-white' : 
                        'bg-white text-black'
                      }`}>
                        {item.badge}
                      </div>
                    )}
                    
                    {/* Like button */}
                    <button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-[#EE7325] hover:bg-white/20 transition-all">
                      <Heart size={16} strokeWidth={2} />
                    </button>

                    {/* Image Container - Light bg */}
                    <div className="bg-[#f5f5f5] w-full h-[240px] flex items-center justify-center p-6 relative overflow-hidden cursor-pointer">
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none z-10" />
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-[90%] h-[90%] object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110 translate-y-2 relative z-0"
                      />
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="mb-3 flex-1 cursor-pointer">
                        <h3 className="text-white font-medium text-[15px] leading-snug group-hover:text-[#EE7325] transition-colors mb-2">
                          {item.title}
                        </h3>
                        <div className="text-[#888] text-xs space-y-1">
                          <p>{item.scale} • {item.driver}</p>
                          <p>Condition: <span className="text-[#ccc]">{item.condition}</span></p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-lg font-semibold text-white">{item.price}</span>
                        <div className="flex items-center gap-2">
                          <button className="p-2.5 rounded-full border border-white/20 hover:border-white text-white transition-colors lg:hidden group-hover:flex">
                            <Search size={16} />
                          </button>
                          <button className="bg-white hover:bg-[#EE7325] hover:text-white text-black text-sm font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2">
                            <ShoppingCart size={16} /> <span className="hidden sm:inline-block">Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 8. Pagination / Load More */}
              <div className="mt-16 flex justify-center">
                <button className="border border-white/20 hover:border-white text-white rounded-full px-10 py-3.5 font-medium transition-colors bg-[#0a0a0a]/50 backdrop-blur-sm">
                  Load More Models
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seamless blend to footer (no extra space added) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0" />
      </section>

      {/* 10. Footer */}
      <CTAAndFooter onFooterVisible={() => {}} />
    </div>
  );
}