import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({
  variant = 'dark', // 'dark' (navy text) or 'light' (white text)
  size = 'md',
  showText = true,
  className = '',
}) {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10 sm:h-11 sm:w-11',
    lg: 'h-14 w-14',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="CrewManpower Homepage"
    >
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size] || sizeClasses.md}`}>
        {hasError ? (
          <div className="text-xs text-red-500 font-mono border border-red-300 p-1 rounded bg-red-50 text-center">
            Logo missing
          </div>
        ) : (
          <img
            src="/images/logo.png"
            alt="CrewManpower Logo"
            className="w-full h-full object-contain select-none"
            loading="eager"
            onError={() => {
              console.error("Official logo failed to load from /logo.png");
              setHasError(true);
            }}
          />
        )}
      </div>

      {showText && (
        <span className={`font-black tracking-tight leading-none ${textSizeClasses[size] || textSizeClasses.md}`}>
          <span className={variant === 'light' ? 'text-white' : 'text-[#071B36]'}>
            CREW
          </span>
          <span className="text-[#FF7900]">
            MANPOWER
          </span>
        </span>
      )}
    </Link>
  );
}
