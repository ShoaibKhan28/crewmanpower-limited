import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Clock, ShieldCheck, CheckCircle2, Phone, Mail } from 'lucide-react';
import QuoteForm from '../features/quote/QuoteForm';
import CorporateHub, { corporateContacts } from '../components/contact/CorporateHub';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || searchParams.get('industry') || '';

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#071B36] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-orange mb-3">
            <span className="w-5 h-0.5 bg-brand-orange rounded-full"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Request Workforce <span className="text-brand-orange">& Quotation</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Need skilled project manpower, permanent recruitment, or facility staff? Reach our leadership team directly or submit your specifications below.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152B] to-transparent opacity-80 pointer-events-none"></div>
      </section>

      {/* Corporate Hub Direct Channels Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CorporateHub layout="grid" />
        </div>
      </section>

      {/* Main Quote Form & Office Details */}
      <section className="py-16 sm:py-24 bg-[#F4F7FB]" id="quote-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 Columns: Interactive Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm initialService={initialService} />
            </div>

            {/* Right 5 Columns: Official Office Information & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              {/* Head Office Card */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy">Registered Head Office</h3>
                    <p className="text-xs text-brand-muted">Lucknow Operational Center</p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  <address className="not-italic">
                    1-B FIRST FLOOR, GALAXY TOWER,<br />
                    VIJAYANT KHAND, GOMTI NAGAR,<br />
                    LUCKNOW, UTTAR PRADESH - 226010
                  </address>
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>Office Hours: Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24/7 Field Emergency Response for On-Site Deployments</span>
                  </div>
                </div>
              </div>

              {/* Quick Direct Desk Contacts */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3">
                <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-2">
                  Direct Executive Desks
                </h4>
                <div className="space-y-2.5 text-xs">
                  {corporateContacts.map((contact) => (
                    <div key={contact.id} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-none">
                      <span className="font-semibold text-slate-800">{contact.name}</span>
                      <a
                        href={contact.phoneHref}
                        className="font-bold text-brand-primary hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-brand-navy border-b border-slate-100 pb-3">
                  Our Quotation SLA
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-brand-primary font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <span><strong>Requirement Analysis:</strong> Staffing managers assess headcount, certifications, and shift timings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-brand-primary font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <span><strong>Itemized Quotation:</strong> Transparent billing structure including wages, PF/ESI, and supervisor ratios within 24h.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-brand-primary font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <span><strong>Rapid Deployment:</strong> Mobilization of vetted, badge-verified personnel directly to your project site.</span>
                  </li>
                </ul>
              </div>

              {/* Confidentiality Guarantee */}
              <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className="font-bold text-brand-navy">Confidential Enterprise Inquiries</p>
                  <p className="mt-0.5">Project locations, shift counts, and trade specifications remain strictly protected under standard non-disclosure terms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
