import React from 'react';
import Button from '../common/Button';

export default function TeamCtaSection() {
  return (
    <section className="bg-[#071B36] text-white overflow-hidden py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#06152B] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image: Two engineers in hardhats reviewing blueprints */}
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full min-h-[300px] relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                alt="Construction leaders reviewing site plans"
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06152B] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#06152B]"></div>
            </div>

            {/* Right Column: Content & Action */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-6">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-orange">
                <span className="w-5 h-0.5 bg-brand-orange inline-block rounded-full"></span>
                <span>LOOKING FOR MANPOWER?</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Let's Build <span className="text-brand-orange">Your Team</span>
              </h2>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                Whether you need skilled workers, project-based manpower or complete workforce solutions, Crewmanpower is here to help.
              </p>

              {/* Button */}
              <div className="pt-2">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon
                  className="px-8 py-3.5 shadow-lg shadow-orange-950/40"
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
