import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  customIcon: CustomIcon,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#FF7900] text-white hover:bg-[#E06A00] focus:ring-[#FF7900] shadow-sm hover:shadow active:scale-[0.99]",
    navy: "bg-[#071B36] text-white hover:bg-[#06152B] focus:ring-[#071B36] shadow-sm hover:shadow active:scale-[0.99]",
    blue: "bg-[#0878E8] text-white hover:bg-[#0663C4] focus:ring-[#0878E8] shadow-sm hover:shadow active:scale-[0.99]",
    outline: "border-2 border-white text-white hover:bg-white/10 focus:ring-white",
    outlineNavy: "border-2 border-[#071B36] text-[#071B36] hover:bg-[#071B36] hover:text-white focus:ring-[#071B36]",
    secondary: "bg-[#F4F7FB] text-[#26364A] hover:bg-[#E2E8F0] focus:ring-[#0878E8]",
    ghost: "text-[#0878E8] hover:bg-blue-50 focus:ring-[#0878E8]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin mr-1.5" />}
      <span>{children}</span>
      {!loading && icon && <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />}
      {!loading && CustomIcon && <CustomIcon className="w-4 h-4 ml-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedStyles}`} aria-label={ariaLabel} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedStyles}`} aria-label={ariaLabel} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`group ${combinedStyles}`}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
