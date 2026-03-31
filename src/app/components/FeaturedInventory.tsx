import { useState, useEffect } from "react";
import carImg1 from "../../assets/059cb1a979abd2d2306cc604a51c290b1e0319f3.png";
import carImg2 from "../../assets/2464f675890430fcee29648b90e04f62ca90a47c.png";
import carImg3 from "../../assets/6f139aa249c3231a3056d85a155cfdafad7ffaee.png";
import carImg4 from "../../assets/d1cbee48378b9cd41c5123cd6993aa969d871966.png";
import carImg5 from "../../assets/149777985f68f0500345018e0e1b5bcec2207839.png";

const CARS = [
  {
    id: 1,
    name: "1:24 CHASE ELLIOTT #9 NAPA CHEVY",
    sellerName: "Michael R.",
    sellerRole: "Verified Seller",
    image: carImg1,
    sellerImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
  },
  {
    id: 2,
    name: "1:24 RYAN BLANEY #12 MENARDS FORD",
    sellerName: "David C.",
    sellerRole: "Premium Member",
    image: carImg2,
    sellerImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80",
  },
  {
    id: 3,
    name: "1:24 BUBBA WALLACE #23 AIR FORCE",
    sellerName: "James W.",
    sellerRole: "Elite Collector",
    image: carImg3,
    sellerImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80",
  },
  {
    id: 4,
    name: "1:24 CHASE ELLIOTT #9 KELLEY BLUE BOOK",
    sellerName: "Elena V.",
    sellerRole: "Verified Seller",
    image: carImg4,
    sellerImg: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&q=80",
  },
  {
    id: 5,
    name: "1:24 KYLE LARSON #5 HENDRICKCARS",
    sellerName: "Robert T.",
    sellerRole: "Top Rated",
    image: carImg5,
    sellerImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export function FeaturedInventory() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-20 md:py-28 px-4 z-10 font-sans min-h-[600px] md:min-h-[900px] overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[500px] md:h-[700px] pointer-events-none rounded-[100%] opacity-40 md:opacity-100"
        style={{
          background: 'radial-gradient(ellipse, rgba(238, 115, 37, 0.15) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 
          className="text-[#FDF4ED] text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.3] font-medium mb-4"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Our Featured Inventory
        </h2>
        <p 
          className="text-[#e2e2e2] text-xl md:text-2xl lg:text-[1.85rem] leading-[1.4] max-w-[850px] mx-auto"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          A curated selection of our rarest, most exclusive models
        </p>
      </div>

      {/* Carousel Container */}
      {/* Add perspective wrapper to enable 3D transforms */}
      <div 
        className="relative w-full max-w-[1400px] h-[500px] flex items-center justify-center pointer-events-none"
        style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
      >
        {CARS.map((car, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;
          
          let translateX = 0;
          let translateZ = 0;
          let rotateY = 0;
          let scale = 1;
          let blur = 0;
          let opacity = 1;

          // Compute exactly mapped positions based on the reference design
          if (offset === 0) {
            translateX = 0;
            translateZ = 0;
            rotateY = 0;
            scale = 1;
            blur = 0;
            opacity = 1;
          } else if (offset === -1) {
            translateX = isMobile ? -140 : -380;
            translateZ = isMobile ? -100 : -150;
            rotateY = isMobile ? 12 : 18;
            scale = isMobile ? 0.9 : 0.85;
            blur = 2;
            opacity = 0.9;
          } else if (offset === 1) {
            translateX = isMobile ? 140 : 380;
            translateZ = isMobile ? -100 : -150;
            rotateY = isMobile ? -12 : -18;
            scale = isMobile ? 0.9 : 0.85;
            blur = 2;
            opacity = 0.9;
          } else if (offset === -2) {
            translateX = isMobile ? -240 : -680;
            translateZ = isMobile ? -200 : -300;
            rotateY = isMobile ? 20 : 28;
            scale = isMobile ? 0.8 : 0.7;
            blur = 4;
            opacity = isMobile ? 0 : 0.6; // Hide far items on mobile to avoid overflow
          } else if (offset === 2) {
            translateX = isMobile ? 240 : 680;
            translateZ = isMobile ? -200 : -300;
            rotateY = isMobile ? -20 : -28;
            scale = isMobile ? 0.8 : 0.7;
            blur = 4;
            opacity = isMobile ? 0 : 0.6; // Hide far items on mobile to avoid overflow
          } else {
            // Hide if further out
            opacity = 0;
            scale = 0;
            blur = 10;
          }

          const cardWidth = isMobile ? '280px' : '420px';
          const cardHeight = isMobile ? '320px' : '420px';

          return (
            <div
              key={car.id}
              onClick={() => setActiveIndex(index)}
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-2xl overflow-hidden pointer-events-auto"
              style={{
                width: cardWidth,
                height: cardHeight,
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: 50 - absOffset * 10,
                opacity,
                filter: `blur(${blur}px)`,
                background: '#ffffff',
                boxShadow: isActive 
                  ? '0 0 60px rgba(255, 255, 255, 0.15)' 
                  : '0 10px 30px rgba(0,0,0,0.6)',
                pointerEvents: absOffset > 2 ? 'none' : 'auto',
              }}
            >
              {/* Seller Profile (Active Only) */}
              <div 
                className="absolute top-5 left-5 flex items-center gap-2.5 transition-opacity duration-300"
                style={{ opacity: isActive ? 1 : 0 }}
              >
                <img src={car.sellerImg} alt={car.sellerName} className="w-9 h-9 rounded-full object-cover shadow-md border border-gray-200" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-gray-500 text-[11px] font-medium tracking-wider">{car.sellerRole}</span>
                  <span className="text-black text-[13px] font-bold">{car.sellerName}</span>
                </div>
              </div>

              {/* Car Image */}
              <img 
                src={car.image} 
                alt={car.name} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-auto object-contain transition-transform duration-500"
                style={{
                  marginTop: isActive ? '-25px' : '-30px',
                  mixBlendMode: 'multiply'
                }}
              />

              {/* Footer text / Button */}
              <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex flex-col items-center px-4">
                <h3 
                  className={`text-black font-medium text-center transition-all duration-500 font-sans ${isActive ? 'text-[1.2rem] md:text-[1.65rem] mb-2 md:mb-4' : 'text-[0.9rem] md:text-[1.1rem] opacity-90'}`}
                  style={{ fontFamily: '"DM Sans", sans-serif', lineHeight: 1.2 }}
                >
                  {car.name}
                </h3>
                
                <div 
                  className="transition-all duration-500 overflow-hidden"
                  style={{ 
                    maxHeight: isActive ? '50px' : '0px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  <button 
                    className="text-white rounded-full px-6 md:px-10 py-2.5 md:py-3.5 transition-colors"
                    style={{
                      backgroundColor: "#EE7325",
                      fontSize: isMobile ? "0.85rem" : "0.97rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F08F49")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EE7325")}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2 mt-16 relative z-10">
        {CARS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === i 
                ? 'w-8 h-2 bg-white' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}