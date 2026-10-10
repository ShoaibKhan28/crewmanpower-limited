import React from 'react';
import { ShieldCheck, Clock, BarChart3, Handshake } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Verified Workforce',
      description: 'Background checked and trained professionals.',
      detail: 'Multi-tiered identity screening, criminal background clearance, and certified technical trade skill validation before any site onboarding.'
    },
    {
      icon: Clock,
      title: 'Timely Deployment',
      description: 'We value your time and project deadlines.',
      detail: 'Swift recruitment turnarounds with ready-to-deploy candidate benches for emergency ramp-ups and scheduled infrastructure milestones.'
    },
    {
      icon: BarChart3,
      title: 'Industry Expertise',
      description: 'Deep understanding of diverse industry needs.',
      detail: 'Sector-specific recruitment teams attuned to regulatory compliance, safety certifications, and specialized machinery operation.'
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnership',
      description: 'Focused on building lasting relationships.',
      detail: 'Dedicated workforce account managers, regular payroll audits, and ongoing field performance evaluations for peace of mind.'
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4F7FB]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          tagline="WHY CHOOSE CREWMANPOWER"
          title="A Reliable Partner for Your Growth"
          highlight="Your Growth"
          subtitle="Building operational resilience through verified talent, transparent compliance, and responsive service."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(7,27,54,0.06)] hover:shadow-[0_12px_24px_-6px_rgba(7,27,54,0.12)] transition-all duration-300 text-center flex flex-col items-center group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-navy mb-2.5">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
