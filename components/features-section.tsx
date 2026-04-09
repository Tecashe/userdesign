'use client';

import { Code2, Cpu, Brain, Lightbulb } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: 'World-Class Curriculum',
      description: 'CBC-aligned, expertly designed programs that combine theory with hands-on practice.'
    },
    {
      icon: Cpu,
      title: 'Expert Instructors',
      description: 'Over 50 certified educators with years of experience in STEM fields.'
    },
    {
      icon: Brain,
      title: 'Problem Solving Focus',
      description: 'Build critical thinking and creative problem-solving skills for real-world success.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description: 'Latest technologies and teaching methods to inspire the next generation of innovators.'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-foreground/2">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Why Choose KEMSAP
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            We combine proven teaching methodologies with cutting-edge technology to deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300 rounded-b-lg" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
