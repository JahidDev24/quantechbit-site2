
"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const menuRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: "transparent",
      border: "2px solid #000",
    },
    hover: {
      x: cursorPosition.x - 32,
      y: cursorPosition.y - 32,
      backgroundColor: "rgba(0,0,0,0.1)",
      border: "2px solid #000",
      height: 64,
      width: 64,
    },
  };

  const menuItems = ["Work", "Expertise", "About", "Careers", "Contact"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans overflow-hidden cursor-none">
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <header className="flex justify-between items-center p-8 relative z-40">
        <motion.div 
          className="text-xl font-bold tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Quantechbit®
        </motion.div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="z-50 p-2"
          onMouseEnter={() => setCursorVariant("hover")}
          onMouseLeave={() => setCursorVariant("default")}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-30"
          >
            <motion.nav 
              className="flex flex-col justify-center items-center h-full"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-5xl mb-4 hover:opacity-50 transition-opacity"
                  variants={itemVariants}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main 
        className="flex flex-col justify-center items-start p-8 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-light leading-tight mb-8">
          Designing the<br />future today
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12">
          We move brands to their<br />next chapter.
        </p>
        <motion.div 
          className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.main>
    </div>
  )
}