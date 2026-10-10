import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCarousel from '../../features/testimonials/TestimonialCarousel';

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          tagline="TESTIMONIALS"
          title="What Our Clients Say"
          highlight="Clients Say"
          subtitle="Real-world feedback from project heads, operations directors, and facility leaders."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Carousel Component */}
        <TestimonialCarousel />
      </div>
    </section>
  );
}
