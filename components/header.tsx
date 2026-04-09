'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer animate-fade-in-down">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-foreground font-bold text-lg">K</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">KEMSAP</h1>
            <p className="text-xs text-muted-foreground">Aloha Africa</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#programs" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
            Programs
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
            Testimonials
          </a>
          <a href="#events" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
            Events
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
            FAQ
          </a>
        </div>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border/40 px-6 py-4 space-y-4 animate-slide-in-down">
          <a href="#about" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#programs" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Programs
          </a>
          <a href="#testimonials" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#events" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Events
          </a>
          <a href="#faq" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
