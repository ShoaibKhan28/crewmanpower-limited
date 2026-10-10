import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
import { coreServices } from '../../data/services';

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F7FB]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          tagline="OUR CORE SERVICES"
          title="Comprehensive Workforce Solutions"
          highlight="Workforce"
          subtitle="Specialized recruitment and staffing personnel tailored to the operational demands of modern enterprises."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* 5 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {coreServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
