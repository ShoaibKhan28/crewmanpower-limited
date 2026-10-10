import React from 'react';

export default function SectionTitle({
  tagline,
  title,
  highlight,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center';

  // Highlight word replacement
  const renderTitle = () => {
    if (!highlight || !title) return title;

    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return (
          <span
            key={index}
            className={theme === 'dark' ? 'text-brand-orange' : 'text-brand-primary'}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {tagline && (
        <div
          className={`inline-flex items-center gap-2 mb-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-orange ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="w-5 h-0.5 bg-brand-orange inline-block rounded-full"></span>
          <span>{tagline}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          theme === 'dark' ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-brand-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
