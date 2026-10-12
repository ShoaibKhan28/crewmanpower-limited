import React from 'react';
import Button from '../common/Button';
import { companyStats } from '../../data/companyStats';

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Content & Stats */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-orange">
              <span className="w-5 h-0.5 bg-brand-orange inline-block rounded-full"></span>
              <span>ABOUT US</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight leading-tight">
              Your Trusted <br />
              <span className="text-brand-primary">Manpower</span> Partner
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-brand-body leading-relaxed text-slate-600">
              Crewmanpower is a leading provider of premium quality temporary and permanent workforce management systems nationwide. We connect the right people with the right opportunities, helping businesses build stronger teams and achieve their goals.
            </p>

            {/* Learn More Button */}
            <div className="pt-2">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon
                className="px-7 py-3"
              >
                Learn More
              </Button>
            </div>

            {/* Statistics Row */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-3 gap-4 sm:gap-6">
              {companyStats.map((stat) => (
                <div key={stat.id} className="space-y-1">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-brand-muted leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3-Image Composition */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* Main Portrait Image (Left side of grid) */}
              <div className="col-span-7">
                <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                  <img
                    src="/images/crewmanpower-confident-industrial-professional.jpg"
                    alt="Confident smiling industrial professional in safety gear"
                    loading="lazy"
                    className="w-full h-full object-cover object-center min-h-[340px] sm:min-h-[420px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Two Stacked Images (Right side of grid) */}
              <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                {/* Top Image: Team of 4 workers in hardhats */}
                <div className="flex-1 rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
                  <img
                    src="/images/crewmanpower-workforce-team-discussion.jpg"
                    alt="Workforce team discussion on site"
                    loading="lazy"
                    className="w-full h-full object-cover object-center min-h-[160px] sm:min-h-[200px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Image: Engineers reviewing blueprints */}
                <div className="flex-1 rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
                  <img
                    src="/images/crewmanpower-engineers-reviewing-blueprints.jpg"
                    alt="Engineers reviewing blueprints together"
                    loading="lazy"
                    className="w-full h-full object-cover object-center min-h-[160px] sm:min-h-[200px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
