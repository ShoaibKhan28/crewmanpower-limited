import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import IndustriesSection from '../components/home/IndustriesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import TeamCtaSection from '../components/home/TeamCtaSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseSection />
      <TeamCtaSection />
      {/* <TestimonialsSection /> */}
    </div>
  );
}
