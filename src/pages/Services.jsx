import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Shield, 
  Sparkles, 
  Users, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Layers,
  FileCheck
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { coreServices } from '../data/services';

const iconMap = {
  Stethoscope,
  Shield,
  Sparkles,
  Users,
  Settings,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(coreServices[0].id);

  const staffingModels = [
    {
      title: 'Contractual Workforce',
      description: 'Flexible 3 to 12-month staffing for infrastructure projects, seasonal industrial surges, or planned expansion.',
      badge: 'Most Popular'
    },
    {
      title: 'Permanent Recruitment',
      description: 'End-to-end talent sourcing, technical vetting, and onboarding for specialized permanent positions.',
      badge: 'Strategic'
    },
    {
      title: 'Managed Facility Services',
      description: 'Comprehensive operations including on-site supervision, shift scheduling, replacement guarantee, and compliance.',
      badge: 'Turnkey'
    },
    {
      title: 'Rapid Emergency Deployment',
      description: 'Urgent turnaround deployment within 24-48 hours for contingency operations and strike mitigations.',
      badge: '24-48h SLA'
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#071B36] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-orange mb-3">
            <span className="w-5 h-0.5 bg-brand-orange rounded-full"></span>
            <span>END-TO-END SOLUTIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Specialized Workforce <span className="text-brand-orange">Services</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Delivering trained, verified, and industry-ready personnel tailored to healthcare, security, housekeeping, administrative, and facility management operations.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152B] to-transparent opacity-80 pointer-events-none"></div>
      </section>

      {/* Services Deep-Dive Section */}
      <section className="py-16 sm:py-24 bg-white" id="services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {coreServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Settings;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 border border-slate-100 rounded-3xl p-6 sm:p-10 lg:p-12 bg-white shadow-[0_4px_30px_-5px_rgba(7,27,54,0.06)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left (or Right for even): Image */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100 group">
                      <img
                        src={service.image}
                        alt={`${service.title} professionals`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Right (or Left for even): Detailed Specs */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                          Core Service #{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Key Roles Provided */}
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                        Key Roles Deployed:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.keyRoles.map((role, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Feature Highlights */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {service.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-xs bg-slate-100 text-slate-700 font-medium px-3 py-1.5 rounded-full"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="pt-4 flex items-center gap-4">
                      <Button
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="primary"
                        size="md"
                        icon
                      >
                        Request {service.title}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Staffing Engagement Models */}
      <section className="py-16 sm:py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tagline="ENGAGEMENT FLEXIBILITY"
            title="Tailored Staffing Delivery Models"
            highlight="Delivery Models"
            subtitle="Choose a deployment framework suited to your project timelines, budget constraints, and regulatory requirements."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingModels.map((model, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-brand-primary px-2.5 py-1 rounded-full mb-4">
                    {model.badge}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                    {model.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-brand-primary hover:text-brand-orange transition-colors flex items-center gap-1"
                  >
                    <span>Inquire for model</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
