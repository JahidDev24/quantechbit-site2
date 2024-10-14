'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    image: "/images/boy.jpg",
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: 2,
    image: "/images/boy.jpg",
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs"
  },
  {
    id: 3,
    image: "https://picsum.photos/800/600?random=3",
    quote: "Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking.",
    author: "Steve Jobs"
  }
]

export default function EnhancedAnimatedTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const changeTestimonial = useCallback((index: number) => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex(index)
    }
  }, [isAnimating])

  const nextTestimonial = useCallback(() => {
    changeTestimonial((currentIndex + 1) % testimonials.length)
  }, [currentIndex, changeTestimonial])

  const prevTestimonial = useCallback(() => {
    changeTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length)
  }, [currentIndex, changeTestimonial])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition duration

    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(autoPlayTimer)
  }, [nextTestimonial])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">WHAT PEOPLE SAY...</h2>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg border"> {/* Added border for debugging */}
        <div className="relative w-full h-96"> {/* Fixed height */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0 z-10'  // Set z-10 for active
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-full z-0'
                  : 'opacity-0 translate-x-full z-0'
              }`}
            >
              <img
                src={testimonial.image}
                alt={`Testimonial ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end">
                <div className="w-full md:w-1/2 p-4 md:p-8 text-white">
                  <div className="bg-gray-900 bg-opacity-75 p-4 md:p-6 rounded-lg">
                    <p className="text-sm md:text-lg mb-4 leading-relaxed transition-opacity duration-300 ease-in-out">
                      {testimonial.quote}
                    </p>
                    <p className="text-right text-sm md:text-base transition-opacity duration-300 ease-in-out">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => changeTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
