/* eslint-disable @next/next/no-img-element */
// components/TestimonialCarousel.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Projects = [
  {
    id: 1,
    image: "/projects/p11.jpg",
    quote: "Hard work beats talent when talent doesn't work hard",
    author: "Tim Notke",
  },
  {
    id: 2,
    image: "/projects/p12.jpg",
    quote: "Hard work beats talent when talent doesn't work hard",
    author: "Tim Notke",
  },
  {
    id: 3,
    image: "/projects/p13.jpg",
    quote: "Hard work beats talent when talent doesn't work hard",
    author: "Tim Notke",
  },
  {
    id: 4,
    image: "/projects/p14.jpg",
    quote: "Hard work beats talent when talent doesn't work hard",
    author: "Tim Notke",
  },
  {
    id: 5,
    image: "/projects/p15.jpg",
    quote: "Hard work beats talent when talent doesn't work hard",
    author: "Tim Notke",
  },
  // Add more Projects here
];


export default function ProjectSection() { 
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Projects.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Projects.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden">
        <div className="relative flex items-center justify-center w-full max-w-5xl space-x-4">
          {/* Previous Button */}
          <button
            className="absolute left-0 p-2 text-3xl text-gray-700 z-20 hover:bg-gray-200 rounded-full"
            onClick={goToPrevious}
          >
            &#8592;
          </button>
  
          {/* Carousel Items */}
          <div className="carousel-wrapper relative flex items-center space-x-4">
            {Projects.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isLeft = index === (currentIndex - 1 + Projects.length) % Projects.length;
              const isRight = index === (currentIndex + 1) % Projects.length;
  
              return (
                <motion.div
                  key={testimonial.id}
                  className={`carousel-item relative ${
                    isActive ? "carousel-active" : "carousel-inactive"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1.2 : 0.8,
                    translateX: isLeft
                      ? "-150px"
                      : isRight
                      ? "150px"
                      : "0",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              );
            })}
          </div>
  
          {/* Next Button */}
          <button
            className="absolute right-0 p-2 text-3xl text-gray-700 z-20 hover:bg-gray-200 rounded-full"
            onClick={goToNext}
          >
            &#8594;
          </button>
        </div>
  
        {/* Testimonial Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={Projects[currentIndex].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <h3 className="text-xl font-semibold">
              {Projects[currentIndex].author}
            </h3>
            <p className="text-gray-700 mt-4">
              {Projects[currentIndex].quote}
            </p>
          </motion.div>
        </AnimatePresence>
  
        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }
  