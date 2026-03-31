import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { MoveUpRight } from "lucide-react";
import bgImage from "../../assets/c1ed2f5adee32acfe8cd23d4782116914cd458a9.png";
import logoImg from "../../assets/9be4e4b64d29837228d06600361eb9082b93ac61.png";

const NavLinks = ({ isGlass = false }: { isGlass?: boolean }) => (
  <div className={`w-full flex flex-col gap-8 ${isGlass ? 'text-[#FDF4ED]' : 'text-[#6b6b6b]'}`}>
    <div className="flex items-center justify-between text-[11px] lg:text-xs font-medium w-full tracking-wide">
      <span className="shrink-0">© Copyright 2026</span>
      <div className={`flex-1 mx-6 lg:mx-10 h-px ${isGlass ? 'bg-[#FDF4ED]/20' : 'bg-[#333333]'}`}></div>
      <span className="shrink-0">All Rights Reserved</span>
    </div>
    <div className="hidden md:flex justify-between text-[13px] lg:text-sm w-full font-medium">
      {["Home", "About", "Service", "Platform", "How It Works", "Contact"].map(link => (
        <a key={link} href="#" className={`hover:${isGlass ? 'text-[#EE7325]' : 'text-white'} transition-colors`}>{link}</a>
      ))}
    </div>
    <div className="flex md:hidden flex-wrap gap-x-6 gap-y-4 text-[13px] font-medium justify-center">
      {["Home", "About", "Service", "Platform", "How It Works", "Contact"].map(link => (
        <a key={link} href="#" className={`hover:${isGlass ? 'text-[#EE7325]' : 'text-white'} transition-colors`}>{link}</a>
      ))}
    </div>
  </div>
);

export function CTAAndFooter({ onFooterVisible }: { onFooterVisible?: (visible: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const isFooterInView = useInView(footerRef, { amount: 0.05 });

  useEffect(() => {
    onFooterVisible?.(isFooterInView);
  }, [isFooterInView, onFooterVisible]);

  // Parallax animations for the CTA text content
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  // Logo scroll reveal animations
  const logoProgress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const logoWidth = useTransform(logoProgress, (p) => `calc(${p} * var(--logo-target-w))`);
  const logoMargin = useTransform(logoProgress, (p) => `calc(${p} * var(--logo-target-m) + 0.25em)`);
  const logoScale = useTransform(logoProgress, [0, 1], [0.3, 1]);
  const logoOpacity = useTransform(logoProgress, [0, 0.15, 1], [0, 0, 1]);

  return (
    <div ref={containerRef} className="relative font-sans bg-[#050505]" style={{ position: "relative" }}>
      {/* Sticky Background & CTA Content */}
      <div className="sticky top-0 h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden z-0 bg-[#050505]">
        {/* Background Setup */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <img
            src={bgImage}
            alt="Dark Abstract Texture"
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          {/* Hide baked-in figma text at the top of the background image */}
          <div className="absolute top-0 inset-x-0 h-[25%] bg-[#050505] z-0" />
          <div className="absolute top-[25%] inset-x-0 h-[15%] bg-gradient-to-b from-[#050505] to-transparent z-0" />

          {/* Gradients to blend smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#0a0a0a] opacity-90" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />
          
          {/* Warm glow from the center */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#EE7325]/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
        </div>

        {/* CTA Content with Framer Motion Parallax */}
        <motion.div 
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 flex flex-col items-center justify-center text-center max-w-[1200px] px-6 mt-[-8vh]"
        >
          <h2 className="text-[#FDF4ED] text-[2.75rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tighter font-medium mb-6">
            Ready to Manage Diecast as <br className="hidden md:block" />
            <span className="inline md:inline-block md:mt-1">
              <span>One</span>
              <style>{`
                .logo-anim-wrapper {
                  --logo-target-w: 70px;
                  --logo-target-h: 80px;
                  --logo-target-m: 0.5rem;
                }
                @media (min-width: 768px) {
                  .logo-anim-wrapper {
                    --logo-target-w: 105px;
                    --logo-target-h: 120px;
                    --logo-target-m: 1rem;
                  }
                }
              `}</style>
              <motion.span 
                className="logo-anim-wrapper inline-flex items-center align-middle justify-center relative md:translate-y-[-12px] overflow-hidden"
                style={{
                  width: logoWidth,
                  marginLeft: logoMargin,
                  marginRight: logoMargin,
                }}
              >
                <motion.img 
                  src={logoImg} 
                  alt="Dezzert Logo" 
                  className="max-w-none object-contain" 
                  style={{
                    width: "var(--logo-target-w)",
                    height: "var(--logo-target-h)",
                    scale: logoScale,
                    opacity: logoOpacity
                  }}
                />
              </motion.span>
              <span>System?</span>
            </span>
          </h2>

          <p className="text-[#A68F87] text-[15px] md:text-[17px] font-medium mb-10 max-w-[700px] leading-relaxed">
            Explore how Dezzert Diecast helps organizations plan, manage, and scale collections across complex systems. Start Collecting, Browse Inventory, List Your Diecast.
          </p>

          <button className="bg-[#FDF4ED] text-black pl-6 pr-1.5 py-1.5 rounded-2xl flex items-center gap-4 font-semibold text-[14px] md:text-[15px] tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(253,244,237,0.15)] pointer-events-auto">
            <span>Explore Platform</span>
            <div className="bg-[#050505] text-[#FDF4ED] p-2.5 md:p-3 rounded-xl flex items-center justify-center">
              <MoveUpRight size={16} strokeWidth={2.5} />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Spacer to allow scrolling past the sticky CTA */}
      <div className="h-[60vh] w-full pointer-events-none" />

      {/* Sliding Footer Panel (Glassmorphic) */}
      <footer ref={footerRef} className="relative z-20 w-full min-h-[65svh] bg-[#ffffff]/[0.02] backdrop-blur-[32px] border-t border-white/10 rounded-t-[2.5rem] md:rounded-t-[3rem] flex flex-col justify-between overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.8)] pt-12 md:pt-16">
        
        {/* Navigation Links */}
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 z-10 mb-auto relative">
          <NavLinks isGlass={true} />
        </div>

        {/* Giant Bottom Text */}
        <div className="w-full flex items-center justify-center mt-20 md:mt-auto mb-[-6vw] md:mb-[-4.5vw] relative pointer-events-none select-none overflow-hidden mix-blend-plus-lighter opacity-90">
          <h1 
            className="text-[16vw] leading-[0.75] font-bold text-[#FDF4ED] tracking-tighter w-full text-center block whitespace-nowrap" 
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            DezzertDiecast
          </h1>
        </div>
      </footer>
    </div>
  );
}