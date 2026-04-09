'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground border-t border-primary/20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <div>
                <p className="font-bold text-white text-lg">KEMSAP</p>
                <p className="text-primary font-semibold text-xs">Aloha Africa</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transforming young minds across East Africa through world-class STEM education.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wide">Navigation</h4>
            <div className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-primary font-medium text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wide">Programs</h4>
            <div className="space-y-2">
              {[
                { label: 'Coding', href: '/programs#coding' },
                { label: 'Robotics', href: '/programs#robotics' },
                { label: 'Abacus', href: '/programs#abacus' },
                { label: 'Chess', href: '/programs#chess' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-primary font-medium text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wide">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+254702782335"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +254 702 782 335
              </a>
              <a
                href="mailto:kemsapaloha@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                Kemsapaloha@gmail.com
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Utawala, Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary/20 mb-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-white/60 text-xs font-medium">
            © {currentYear} KEMSAP Aloha Africa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 hover:text-primary text-xs font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-primary text-xs font-medium transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
