'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-primary/10' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              K
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-primary text-lg tracking-tight">KEMSAP</span>
              <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">Aloha Africa</span>
            </div>
          </Link>

          {/* Desktop Navigation - Premium */}
          <nav className="hidden lg:flex items-center gap-10">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Programs', href: '/programs' },
              { label: 'Events', href: '/events' },
              { label: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/75 hover:text-primary font-bold transition-all duration-300 relative group text-sm tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/60 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Premium CTA and Mobile Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+254702782335"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 font-bold text-sm shadow-md group"
            >
              <Phone className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
              <span>Call Now</span>
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-8 animate-fade-in-down border-t border-primary/10 mt-4">
            <div className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Events', href: '/events' },
                { label: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-bold text-sm group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300" />
                    {item.label}
                  </span>
                </Link>
              ))}
              <a
                href="tel:+254702782335"
                className="block px-4 py-3 mt-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white text-center font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
