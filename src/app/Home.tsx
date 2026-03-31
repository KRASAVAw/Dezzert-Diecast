import { Search } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
import { FeaturedInventory } from "./components/FeaturedInventory";
import { ShopByCategory } from "./components/ShopByCategory";
import { Navbar } from "./components/Navbar";
import { BuySellTrade } from "./components/BuySellTrade";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CommunityHub } from "./components/CommunityHub";
import { CollectorStories } from "./components/CollectorStories";
import { CTAAndFooter } from "./components/CTAAndFooter";
import logoImg from "../assets/9be4e4b64d29837228d06600361eb9082b93ac61.png";

export function Home() {
  const navigate = useNavigate();
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (heroVideoRef.current) {
      const playPromise = heroVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // console.warn("Hero video play interrupted, safe to ignore:", error);
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans overflow-x-clip">
      <Navbar isHidden={isNavbarHidden} />

      <div className="relative flex-1 flex flex-col min-h-screen" style={{ position: "relative" }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <video
            ref={heroVideoRef}
            src="https://media.weavy.ai/video/upload/uploads/LqNWgWA6S9SJxrb6nemjsm3Rexb2/cqu9iav368oiqauxobg4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[125%] sm:w-[115%] md:w-[105%] lg:w-[95%] xl:w-[90%] max-w-none h-auto object-contain -translate-y-[5vh] relative z-0"
            style={{
              maskImage: 'radial-gradient(50% 50% at 50% 50%, black 55%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 55%, transparent 95%)'
            }}
          />
          <div className="absolute bottom-0 left-0 w-full h-[40vh] max-h-[500px] bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        </div>

        <div className="relative z-20 mt-auto flex flex-col items-center pb-[8vh] md:pb-12 px-6 text-center w-full max-w-2xl mx-auto">
          <p
            className="text-white mb-6 md:mb-8 text-[0.9rem] md:text-[0.97rem] leading-relaxed"
          >
            Built for NASCAR diecast fans to discover rare finds, grow their collection, and connect with passionate collectors.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigate('/shop')}
              className="text-white rounded-full w-full sm:w-auto px-8 md:px-10 py-3.5 transition-colors font-medium"
              style={{
                backgroundColor: "#EE7325",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F08F49")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EE7325")}
            >
              Shop Inventory
            </button>
            <button
              className="text-white border border-white rounded-full w-full sm:w-auto px-8 md:px-10 py-3.5 hover:bg-[#FDF4ED] hover:text-[#EE7325] transition-colors font-medium"
              style={{
                backgroundColor: "transparent",
              }}
            >
              Sell & Trade
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-[#0a0a0a] w-full flex flex-col" style={{ position: "relative" }}>
        {/* Seamless blend from hero black background into this section */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        
        <section className="relative flex flex-col items-center justify-center py-32 px-6 z-10 min-h-[600px]">
          <div 
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
            }}
          >
            <video
              src="https://media.weavy.ai/video/upload/uploads/2c3x4Gsj9YRNdP8JgbATiVPTfZ62/qajvqgqelexovtvt7crq.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 w-full h-full object-cover pointer-events-none"
              style={{
                opacity: 0.55,
                transform: "translate(-50%, -50%)"
              }}
            />
          </div>

          <div 
            className="absolute bottom-[-200px] md:bottom-[-300px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] md:h-[800px] pointer-events-none z-0 opacity-50 md:opacity-100"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(238, 115, 37, 0.12) 0%, transparent 65%)'
            }}
          />

          <div className="relative z-10 mb-8 flex flex-col items-center justify-center">
            <img 
              src={logoImg} 
              alt="Dezzert Diecast" 
              className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          </div>

          <div className="relative z-10 max-w-[1000px] text-center mb-12">
            <h3 
              className="text-[#FDF4ED] text-xl md:text-2xl lg:text-3xl font-bold mb-4"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Born in the Desert <span className="text-[#EE7325] px-1">-</span> Built to Collect
            </h3>
            <h2 
              className="text-[#FDF4ED] text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.3] font-medium"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="text-[#EE7325]">NASCAR Diecast Marketplace</span> for Serious Collectors
            </h2>
          </div>

          <div className="relative z-10 max-w-[850px] text-center flex flex-col items-center">
            <p 
              className="text-[#e2e2e2] text-xl md:text-2xl lg:text-[1.85rem] leading-[1.4] mb-12"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Buy, sell, and trade NASCAR diecasts in one place. Discover rare models, execute trades, and join the ultimate community for enthusiasts.
            </p>
            <button
              className="text-white rounded-full px-12 py-4 transition-colors font-medium text-lg tracking-wide shadow-lg"
              style={{ backgroundColor: "#EE7325" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F08F49")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EE7325")}
            >
              Join the Community
            </button>
          </div>
        </section>

        <FeaturedInventory />
        <ShopByCategory />
        <BuySellTrade />
        <WhyChooseUs />
        <CommunityHub />
        <CollectorStories />
        <CTAAndFooter onFooterVisible={setIsNavbarHidden} />
      </div>
    </div>
  );
}
