"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Search } from "lucide-react"
import { useNavigate } from "react-router"
import logoImg from "../../assets/9be4e4b64d29837228d06600361eb9082b93ac61.png"

export const Navbar = ({ isHidden = false }: { isHidden?: boolean }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const NAV_ITEMS = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Sell & Trade", path: "/#" },
    { label: "Community", path: "/#" },
    { label: "About", path: "/#" },
    { label: "Contact", path: "/#" }
  ]

  return (
    <motion.div 
      className="fixed top-0 left-0 w-full flex justify-center py-6 px-4 z-50 pointer-events-none font-sans"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-6 py-3 bg-[#121212]/90 backdrop-blur-md border border-white/10 rounded-full shadow-lg w-full max-w-[1200px] relative pointer-events-auto">
        <div className="flex items-center">
          <motion.div
            className="mr-6 cursor-pointer"
            onClick={() => navigate("/")}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={logoImg} 
              alt="Dezzert Diecast" 
              className="h-12 md:h-14 w-auto object-contain" 
            />
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <button 
                onClick={() => navigate(item.path)}
                className="text-[0.93rem] text-[#e2e2e2] hover:text-[#EE7325] transition-colors font-medium cursor-pointer bg-transparent border-none p-0"
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button 
            className="text-[#e2e2e2] hover:text-[#EE7325] transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Search size={18} strokeWidth={1.8} />
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2 text-[0.93rem] text-white border border-white rounded-full hover:bg-[#FDF4ED] hover:text-[#EE7325] hover:border-[#FDF4ED] transition-colors"
            >
              Sign in
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="lg:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-white" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0a] z-50 pt-24 px-6 lg:hidden pointer-events-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-8 w-8 text-white" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <button 
                    className="text-xl text-white font-medium hover:text-[#EE7325] transition-colors bg-transparent border-none p-0 w-full text-left" 
                    onClick={() => {
                      navigate(item.path);
                      toggleMenu();
                    }}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-4 text-lg text-white border border-white rounded-full hover:bg-white hover:text-[#EE7325] transition-colors"
                  onClick={toggleMenu}
                >
                  Sign in
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
