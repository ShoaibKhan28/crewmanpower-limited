import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  const { quote, author, role, organization, industry, isPlaceholder } = testimonial;

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(7,27,54,0.06)] max-w-3xl mx-auto relative transition-all">
      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
        {/* Large Blue Quote Icon */}
        <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center">
          <Quote className="w-7 h-7 fill-brand-primary text-brand-primary" />
        </div>

        {/* Content */}
        <div className="space-y-4 flex-1">
          <blockquote className="text-base sm:text-lg text-brand-body leading-relaxed font-normal italic">
            "{quote}"
          </blockquote>

          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-base font-bold text-brand-navy">
                {author}
              </p>
              <p className="text-xs sm:text-sm text-brand-muted">
                {role}, <span className="font-medium text-brand-body">{organization}</span>
              </p>
            </div>

            {industry && (
              <span className="inline-block text-[11px] font-semibold tracking-wider uppercase bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full self-start sm:self-auto">
                {industry}
              </span>
            )}
          </div>

          {isPlaceholder && (
            <p className="text-[10px] text-slate-400 italic">
              * Design placeholder content for layout verification.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
