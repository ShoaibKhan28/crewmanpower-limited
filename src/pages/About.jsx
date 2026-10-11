import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, CheckCircle2, Target, Eye, HeartHandshake } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { companyStats } from '../data/companyStats';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Safety & Compliance First',
      description: 'Zero-compromise adherence to regional labor laws, statutory PF/ESI norms, and OSHA safety standards across all work sites.'
    },
    {
      icon: Award,
      title: 'Verified Competence',
      description: 'Every worker undergo rigorous trade evaluation, credential checks, and background screening prior to site deployment.'
    },
    {
      icon: HeartHandshake,
      title: 'Worker Welfare & Dignity',
      description: 'Fair wage practices, timely payroll processing, protective equipment distribution, and transparent worker advocacy.'
    },
    {
      icon: Users,
      title: 'Client Reliability',
      description: 'Responsive operational turnarounds, emergency reserve benches, and dedicated field managers ensuring zero project disruption.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Talent Sourcing & Mobilization',
      description: 'Extensive grassroots recruitment networks across urban and rural talent belts.'
    },
    {
      step: '02',
      title: 'Strict Verification & KYC',
      description: 'Identity checks, criminal background screening, and trade certification validation.'
    },
    {
      step: '03',
      title: 'Safety & Site Induction',
      description: 'Hazard awareness, protocol alignment, and site-specific safety briefings.'
    },
    {
      step: '04',
      title: 'Deployment & Field Supervision',
      description: 'On-time transport, shift management, attendance logging, and continuous performance oversight.'
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#071B36] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-orange mb-3">
            <span className="w-5 h-0.5 bg-brand-orange rounded-full"></span>
            <span>ABOUT CREWMANPOWER</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Bridging Industry Demand with <span className="text-brand-orange">Skilled Hands</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            CrewManpower is an enterprise staffing and facility solutions organization connecting ambitious companies with dependable, verified talent across India.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152B] to-transparent opacity-80 pointer-events-none"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story & Philosophy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-orange">
                <span className="w-5 h-0.5 bg-brand-orange inline-block rounded-full"></span>
                <span>OUR STORY & VALUES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
                Empowering Projects Through <span className="text-brand-primary">Responsible Workforce</span> Management
              </h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed text-slate-600">
                Founded with a conviction that industrial progress depends on workforce dependability, CrewManpower provides end-to-end temporary and permanent staffing solutions. Whether managing 500 site workers for a mega infrastructure project or providing discreet front-desk security for corporate headquarters, we deliver with speed and discipline.
              </p>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed text-slate-600">
                Our operations span across critical sectors including healthcare, industrial manufacturing, logistics, civil construction, and facility engineering.
              </p>

              {/* Stats Box */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100">
                {companyStats.map((stat) => (
                  <div key={stat.id}>
                    <p className="text-2xl sm:text-3xl font-extrabold text-brand-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-brand-muted font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
                <img
                  src="/images/engineers.png"
                  alt="Industrial development with workers"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay card */}
              <div className="absolute -bottom-6 -left-6 bg-[#071B36] text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-xs border border-white/10">
                <p className="text-xs font-bold text-brand-orange uppercase tracking-wider">Our Pledge</p>
                <p className="text-xs text-slate-200 mt-1">100% statutory labor compliance, prompt insurance coverage, and zero illegal subcontracting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-16 sm:py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tagline="CORE PRINCIPLES"
            title="The Pillars That Guide Every Placement"
            highlight="Pillars"
            subtitle="How we ensure reliability for enterprises and dignity for workers."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Deployment Workflow */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tagline="HOW WE OPERATE"
            title="Our 4-Stage Deployment Lifecycle"
            highlight="Deployment"
            subtitle="Structured methodology designed to minimize downtime and eliminate mismatched labor."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative bg-[#F4F7FB] rounded-2xl p-7 border border-slate-200/60"
              >
                <div className="text-3xl font-black text-brand-orange/40 mb-3 font-mono">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon
              className="px-8"
            >
              Partner with CrewManpower
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
