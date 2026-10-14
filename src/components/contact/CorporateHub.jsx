import React from 'react';
import { Building2 } from 'lucide-react';

export const corporateContacts = [
  {
    id: 'director',
    name: 'Abu Khan (Director)',
    // phone: '7310050047',
    phoneHref: 'tel:7310050047',
    email: 'info@crewmanpower.com',
    emailHref: 'mailto:info@crewmanpower.com',
  },
  {
    id: 'operations',
    name: 'ABID KHAN(Gn Manager)',
    phone: '9194120047',
    phoneHref: 'tel:9194120047',
    email: 'crewmanpowers@gmail.com',
    emailHref: 'mailto:crewmanpowers@gmail.com',
  },
  {
    id: 'hr',
    name: 'HR',
    phone: '9194150047',
    phoneHref: 'tel:94150047',
    email: 'hr@crewmanpower.com',
    emailHref: 'mailto:hr@crewmanpower.com',
  },
  
];

export default function CorporateHub({ className = '', layout = 'grid' }) {
  const isStacked = layout === 'stacked';

  return (
    <div className={className}>
      {/* Header with Badge */}
      <div className="mb-6 sm:mb-8 text-left">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0878E8] bg-[#EAF3FD] px-3.5 py-1.5 rounded-full mb-3">
          GET IN TOUCH
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B36] tracking-tight">
          Contact Our Corporate Hub
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
          Reach out to our offices or operational units directly through our verified channels below.
        </p>
      </div>

      {/* Cards Container */}
      <div
        className={
          isStacked
            ? 'space-y-4'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
        }
      >
        {corporateContacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_2px_12px_-3px_rgba(7,27,54,0.05)] hover:shadow-md hover:border-blue-200 transition-all duration-200 flex items-center gap-4 sm:gap-5 group"
          >
            {/* Building Icon Container */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EAF3FD] flex items-center justify-center shrink-0 text-[#071B36] group-hover:bg-[#0878E8] group-hover:text-white transition-colors duration-200">
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            {/* Details */}
            <div className="min-w-0 flex-1 space-y-0.5">
              <h3 className="text-base sm:text-lg font-bold text-[#071B36] truncate">
                {contact.name}
              </h3>

              <div>
                <a
                  href={contact.emailHref}
                  className="text-xs sm:text-sm text-slate-600 hover:text-[#071B36] hover:underline transition-colors truncate block"
                >
                  {contact.email}
                </a>
                
              </div>

              <div>
                <a
                  href={contact.phoneHref}
                  className="text-sm font-semibold text-[#0878E8] hover:underline hover:text-[#0663c4] transition-colors inline-block"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
