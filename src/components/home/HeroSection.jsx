import React from 'react';
import { Users, Clock, BarChart3, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function HeroSection() {
  const trustIndicators = [
    {
      icon: Users,
      label: 'Skilled & Verified Workforce',
    },
    {
      icon: Clock,
      label: 'On-Time Deployment',
    },
    {
      icon: BarChart3,
      label: 'Industry-Focused Solutions',
    },
  ];

  return (
    <section className="relative bg-[#071B36] text-white overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06152B] via-[#071B36]/95 to-[#071B36]/70 lg:to-transparent"></div>
        {/* Soft radial glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-orange">
              <span className="w-6 h-0.5 bg-brand-orange inline-block rounded-full"></span>
              <span>RELIABLE WORKFORCE SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Staffing Solutions<br />
              <span className="text-brand-orange">For Success</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
              Providing trusted manpower and workforce solutions for industries, businesses and nationwide opportunities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon
                className="px-7 py-3.5 shadow-lg shadow-orange-950/30 font-bold"
              >
                Hire Manpower
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="px-7 py-3.5 border-slate-400/60 hover:bg-white/10 hover:border-white font-bold"
              >
                Our Services
              </Button>
            </div>

            {/* 3 Trust Indicators */}
            <div className="pt-6 sm:pt-10 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {trustIndicators.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-brand-orange flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Visual Worker Feature */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/5] bg-slate-800">
                <img
                  src="/images/crewmanpower-industrial-engineer-project-site.jpg"
                  alt="Industrial engineer on project site"
                  className="w-full h-full object-cover object-top filter brightness-95"
                />

                {/* Subtle dark gradient overlay at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06152B]/80 via-transparent to-black/20"></div>

                {/* Branded Vest Logo Overlay matching design */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/40 flex items-center gap-2">
                  <img
                    src="images/logo.png"
                    alt="CrewManpower Verified"
                    className="w-8 h-8 object-contain"
                  />
                  <div className="text-left pr-1">
                    <p className="text-[10px] font-bold text-brand-navy uppercase tracking-wider leading-none">CrewManpower</p>
                    <p className="text-[9px] text-brand-orange font-semibold leading-none mt-0.5">Verified Badge</p>
                  </div>
                </div>
              </div>

              {/* Floating decorative badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#0878E8] text-white p-3.5 rounded-xl shadow-xl border border-white/20 hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-none">5,000+ Deployed</p>
                  <p className="text-[10px] text-blue-100 leading-none mt-1">Multi-sector capability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
