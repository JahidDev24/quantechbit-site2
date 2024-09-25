import { motion, useTransform, useScroll } from 'framer-motion'
import React from 'react'

export default function Hero_section2() {
    const { scrollYProgress } = useScroll();
  
    // Hero 1 - Zoom Out Animation
    const splineZoomOut = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]); // Scaling effect on scroll
  
    // Hero 2 - Zoom In Animation
    const sectionZoomIn = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
  
  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-100">
    <motion.div
      style={{ scale: sectionZoomIn }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold">Welcome to the Next Section</h1>
      <p className="text-2xl mt-4">Zoom In Effect as You Scroll</p>
    </motion.div>
  </section>
  )
}
