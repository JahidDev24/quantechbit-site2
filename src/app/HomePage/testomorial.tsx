"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "UI Designer",
    image: "/images/boy.jpg?height=48&width=48",
    quote: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches organically bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.",
  },
  {
    id: 2,
    name: "Emma Johnson",
    role: "Product Manager",
    image: "/images/boy.jpg?height=48&width=48",
    quote: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Software Engineer",
    image: "/images/boy.jpg?height=48&width=48",
    quote: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
  },
]

export default function Testomorial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#f0faf0] px-4 py-2 inline-block rounded-full mb-1">
          <span className="text-sm font-semibold text-green-800">TESTIMONIAL</span>
          <div className="w-10 h-0.5 bg-black rounded-full pl-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-6">
              Check what our clients Say about us
            </h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl text-red-500 absolute -top-2 -left-3"> <FontAwesomeIcon icon={faQuoteLeftAlt}  /></div>
                  <p className="text-gray-600 mb-6 ml-6 mt-3 relative z-10">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-red-500">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    </div>
                    <div className="ml-auto">
                      <button className="p-2 bg-gray-100 rounded-full mr-2" onClick={prevTestimonial}>
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full" onClick={nextTestimonial}>
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gray-900 rounded-full transform -rotate-6"></div>
            <Image
              src="/images/boy.jpg"
              alt="Person working at desk"
              width={400}
              height={250}
              className="rounded-full relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}