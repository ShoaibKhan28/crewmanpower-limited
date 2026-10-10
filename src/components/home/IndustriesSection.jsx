import React from 'react';
import SectionTitle from '../common/SectionTitle';
import IndustryCard from '../common/IndustryCard';
import { industries } from '../../data/industries';

export default function IndustriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          tagline="INDUSTRIES WE SERVE"
          title="Powering Businesses Across Industries"
          highlight="Industries"
          subtitle="Deploying domain-certified labor and field specialists aligned with critical sectoral regulations."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {industries.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}
