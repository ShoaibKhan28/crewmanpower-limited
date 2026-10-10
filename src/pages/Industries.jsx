import React from 'react';
import { CheckCircle2, ShieldCheck, Factory, HardHat, Flame, Truck, Coffee, Building2 } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { industries } from '../data/industries';

const iconByIndustry = {
  construction: HardHat,
  manufacturing: Factory,
  'oil-gas': Flame,
  'logistics-warehousing': Truck,
  hospitality: Coffee,
  'facility-management': Building2,
};

export default function Industries() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#071B36] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-orange mb-3">
            <span className="w-5 h-0.5 bg-brand-orange rounded-full"></span>
            <span>SECTOR SPECIALIZATIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Workforce Solutions Built for <span className="text-brand-orange">Your Industry</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every sector has distinct compliance codes, equipment protocols, and productivity pressures. We deploy trade-certified talent prepared for your exact environment.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152B] to-transparent opacity-80 pointer-events-none"></div>
      </section>

      {/* Industries Grid Deep-Dive */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const Icon = iconByIndustry[ind.id] || Factory;

              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="scroll-mt-28 bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(7,27,54,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={ind.image}
                        alt={`${ind.title} operations`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#071B36]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-white flex items-center gap-2 text-xs font-bold">
                        <Icon className="w-4 h-4 text-brand-orange" />
                        <span>{ind.title}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-brand-primary">
                          {ind.tagline}
                        </p>
                        <h3 className="text-xl font-bold text-brand-navy mt-1">
                          {ind.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {ind.description}
                      </p>

                      {/* Stat badge */}
                      <div className="bg-blue-50/70 border border-blue-100 rounded-lg p-2.5 text-xs font-bold text-brand-navy flex items-center justify-between">
                        <span className="text-brand-muted font-normal">Track Record:</span>
                        <span className="text-brand-primary">{ind.stats}</span>
                      </div>

                      {/* Roles */}
                      <div>
                        <h4 className="text-[11px] font-bold text-brand-navy uppercase tracking-wider mb-2">
                          Standard Placements:
                        </h4>
                        <ul className="space-y-1.5">
                          {ind.roles.map((role, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="p-6 pt-0 mt-2">
                    <Button
                      to={`/contact?industry=${encodeURIComponent(ind.title)}`}
                      variant="navy"
                      size="sm"
                      icon
                      className="w-full justify-center"
                    >
                      Request {ind.title} Crew
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Guarantee Banner */}
      <section className="py-16 bg-[#F4F7FB] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-slate-200">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            100% Statutory and Safety Compliance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our teams arrive fully insured, credential-checked, and outfitted with mandatory personal protective gear (PPE) compliant with state and national labor standards.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="lg" icon>
              Consult an Industry Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
