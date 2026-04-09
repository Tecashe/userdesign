'use client';

import { Target, Eye, Heart } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="group animate-fade-in-up">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-10 hover:bg-white/60 hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To nurture creativity, build future innovators, and develop critical thinking skills in young learners through hands-on STEM education tailored to African excellence and the Kenyan CBC curriculum.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-10 hover:bg-white/60 hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To become the leading STEM education provider across East Africa, empowering over 100,000 students to become confident innovators, problem-solvers, and leaders shaping the future of technology and education.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-10 hover:bg-white/60 hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>Excellence in education and training</p>
                  <p>Student-centered learning approaches</p>
                  <p>Innovation and continuous improvement</p>
                  <p>Community and partnership focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
