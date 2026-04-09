'use client';

import { CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    'Nurturing Creativity, Building Future Innovators',
    'Hands-On Classroom & Individual-Based Learning',
    'Certified Expert Trainers'
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="group relative animate-slide-in-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative bg-card rounded-2xl p-8 border border-border/60">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🎓</div>
                  <p className="text-foreground font-semibold text-lg">A Decade of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-5xl font-bold text-foreground leading-tight">
                A Decade of Excellence in STEM Education
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KEMSAP ALOHA AFRICA is an Educational Programs Company based in Kenya with franchise operations in 3 East African Countries. We are a STEM-driven organization invested in modern educational tools and brain development programs that fuel academic performance.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/40 hover:bg-muted/50 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/60">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">👥</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Trusted Partners</p>
                  <p className="font-semibold text-foreground">30+ Schools & Institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
