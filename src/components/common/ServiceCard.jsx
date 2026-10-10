import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Shield, 
  Sparkles, 
  Users, 
  Settings, 
  ArrowRight,
  HelpCircle 
} from 'lucide-react';

const iconMap = {
  Stethoscope: Stethoscope,
  Shield: Shield,
  Sparkles: Sparkles,
  Users: Users,
  Settings: Settings,
};

export default function ServiceCard({ service }) {
  const { title, shortDescription, icon, link } = service;
  const IconComponent = iconMap[icon] || HelpCircle;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(7,27,54,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(7,27,54,0.12)] hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2.5 group-hover:text-brand-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-muted leading-relaxed mb-6">
          {shortDescription}
        </p>
      </div>

      {/* Learn More link */}
      <div>
        <Link
          to={link || '/services'}
          className="inline-flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-orange transition-colors gap-1.5 focus:outline-none"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
