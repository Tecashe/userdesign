'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 pt-32 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full w-fit group cursor-pointer hover:bg-secondary/15 transition-colors duration-300">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Premium STEM Education</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-foreground">
                Empower Kids Through{' '}
                <span className="text-primary">Coding, Robotics</span> & <span className="text-accent">STEM</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover how KEMSAP Aloha Africa transforms young minds through innovative STEM programs designed to nurture creativity, critical thinking, and future-ready skills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                Check Progress Tracking
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/40">
              <div>
                <p className="text-3xl font-bold text-primary">2K+</p>
                <p className="text-sm text-muted-foreground">Students Empowered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Schools Partnered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="aspect-square bg-gradient-to-br from-primary/40 to-accent/40 rounded-xl flex items-center justify-center animate-pulse">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-foreground font-semibold">STEM Innovation Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
