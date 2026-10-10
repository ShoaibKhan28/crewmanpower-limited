import React from 'react';
import { Link } from 'react-router-dom';

export default function IndustryCard({ industry }) {
  const { id, title, image } = industry;

  return (
    <Link
      to={`/industries#${id}`}
      className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-brand-primary"
    >
      <div className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-slate-900">
        {/* Industry Image */}
        <img
          src={image}
          alt={`${title} workforce`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />

        {/* Gradient vignette for clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
      </div>

      {/* Solid Dark Navy Title Bar at Bottom */}
      <div className="bg-[#071B36] text-white py-3.5 px-3 text-center transition-colors duration-300 group-hover:bg-[#0878E8]">
        <h3 className="text-sm sm:text-base font-bold tracking-wide truncate">
          {title}
        </h3>
      </div>
    </Link>
  );
}
