import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why Us', path: '/#why-us', isHash: true },
    { name: 'Contact', path: '/contact' },
  ];

  const handleHashClick = (e, path) => {
    e.preventDefault();
    const hash = path.replace('/', '');
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + hash);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" size="md" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleHashClick(e, link.path)}
                    className="text-sm font-semibold text-brand-body hover:text-brand-orange transition-colors relative py-1"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors relative py-1 ${
                      isActive
                        ? 'text-brand-navy after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-orange'
                        : 'text-brand-body hover:text-brand-orange'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              to="/contact"
              variant="navy"
              size="md"
              icon
              className="rounded-md font-semibold text-sm px-5 py-2.5 bg-[#071B36] hover:bg-[#06152B]"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              if (link.isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleHashClick(e, link.path)}
                    className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-body hover:bg-slate-50 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-brand-primary border-l-4 border-brand-orange font-bold'
                        : 'text-brand-body hover:bg-slate-50 hover:text-brand-orange'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon
                className="w-full justify-center"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
