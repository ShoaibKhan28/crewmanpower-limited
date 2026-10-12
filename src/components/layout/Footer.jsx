import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUp, Phone, Mail } from 'lucide-react';
import Logo from '../common/Logo';
import { LinkedinIcon, FacebookIcon, InstagramIcon } from '../common/SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Healthcare Staffing', path: '/services#healthcare-staffing' },
    { name: 'Security Services', path: '/services#security-services' },
    { name: 'Housekeeping Staffing', path: '/services#housekeeping-staffing' },
    { name: 'Corporate Staffing', path: '/services#corporate-staffing' },
    { name: 'Facility Management', path: '/services#facility-management' },
  ];

  return (
    <footer className="relative bg-[#06152B] text-slate-300 pt-16 pb-10 overflow-hidden">
      {/* Subtle curved top edge wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none -translate-y-[98%]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 text-[#06152B] preserve-3d"
        >
          <path
            d="M0,32 C320,85 720,5 1440,32 L1440,80 L0,80 Z"
            fill="#06152B"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Company */}
          <div className="space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              Leading provider of premium quality temporary and permanent workforce management systems nationwide.
            </p>
            
            
          </div>

          {/* Column 2: Our Core Services */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
              Our Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:bg-brand-orange transition-colors"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Head Office */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
              Head Office
            </h3>
            <div className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
              <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
              <address className="not-italic">
                1-B FIRST FLOOR, GALAXY TOWER,<br />
                VIJAYANT KHAND, GOMTI NAGAR,<br />
                LUCKNOW, UTTAR PRADESH - 226010
              </address>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-1.5">
              <p className="flex items-center gap-1.5">
                <span className="text-brand-orange font-semibold">Direct Desk:</span>
                <a href="tel:7310050047" className="hover:text-white transition-colors font-medium">7310050047</a>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-brand-orange font-semibold">Email:</span>
                <a href="mailto:info@crewmanpower.com" className="hover:text-white transition-colors font-medium">info@crewmanpower.com</a>
              </p>
            </div>
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
              Connect With Us
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Follow our verified recruitment updates, workforce trends, and active job openings across channels.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/crewmanpower/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CrewManpower LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-[#0878E8] hover:bg-[#FF7900] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Crewmanpower-Private-Limited/61591359092145/?mibextid=wwXIfr&rdid=rlSaSefB8sImD9Mo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EatzT5nY1%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CrewManpower Facebook Profile"
                className="w-10 h-10 rounded-full bg-[#0878E8] hover:bg-[#FF7900] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/crewmanpower?igsh=bmRodnh5ZWtlanhs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CrewManpower Instagram Profile"
                className="w-10 h-10 rounded-full bg-[#0878E8] hover:bg-[#FF7900] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-semibold text-brand-orange hover:text-white transition-colors gap-1.5"
              >
                <span>Request Custom Staffing Plan</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center sm:text-left">
            &copy; 2026 Crewmanpower Solutions. All Rights Reserved. Designed for elite industry scaling.
          </p>
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-slate-400 hover:text-brand-orange transition-colors focus:outline-none"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
