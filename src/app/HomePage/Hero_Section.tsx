"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Footer from './footer_section';

export default function HomePage() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();

// Hero 1 - Zoom Out Animation
const splineZoomOut = useTransform(scrollYProgress, [0, 1], [1, 0.9]); // Scaling from 100% to 75%

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  
  }, []);

  useEffect(() => {
    // Function to check the screen width
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsLargeScreen(true); // Enable transition for larger screens (tablets, laptops)
      } else {
        setIsLargeScreen(false); // Disable transition for smaller screens (mobile)
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
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
    <div className="bg-white text-black min-h-screen font-sans overflow-hidden cursor-none ">
      <section className='h-screen relative'>
        <motion.div
          className="fixed w-8 h-8 rounded-full pointer-events-none z-50"
          variants={cursorVariants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
        <header className="flex justify-between items-center p-8 relative z-40">
          <motion.div
            className="text-3xl font-bold tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/qtb_logo.png"
              alt="Quantechbit Logo"
              width={150}
              height={80}
            />
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
          className="flex flex-col justify-start items-center p-8  min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-7xl text-center font-semibold font-sans leading-tight mb-14 mt-3">
            Crafting tomorrow's<br /> vision, today.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-center text-blue-800 font-semibold font-sans leading-tight mb-12">
            We move brands to our next chapter.
          </p>
          <div className="flex justify-center items-center w-full">
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black flex items-center justify-center"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.main>

  
      
    {/* Add a spacer or margin to push the next section down */ }
    < div className = "absolute bottom-0 left-0 w-full h-12 bg-white" />
      </section >

    {/* Second section with Spline */ }
    <section className="w-full h-screen flex flex-col justify-between items-center bg-slate-100">
      <motion.div
        style={isLargeScreen ? { scale: splineZoomOut } : {}}
        className="w-full h-screen flex justify-center items-center"
      >
        <Footer />

      </motion.div>
      <div className="text-center text-gray-500 p-4">
    Copyright © 2023 Designed & Developed by <a href="https://quantechbit.com" className="text-blue-600 hover:underline">Quantechbit</a>
  </div>
    </section>
     
    </div >
  );
}
