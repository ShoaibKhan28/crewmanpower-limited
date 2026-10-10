import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../../components/common/TestimonialCard';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client Testimonials"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-brand-primary hover:border-brand-primary hover:shadow-md flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary shrink-0"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Current Slide */}
        <div className="flex-1 overflow-hidden py-4" aria-live="polite">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-brand-primary hover:border-brand-primary hover:shadow-md flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary shrink-0"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary ${
              index === currentIndex
                ? 'w-7 h-2 bg-brand-primary'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
