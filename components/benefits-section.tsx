'use client';

import { Trophy, TrendingUp, Users, Zap } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Trophy,
      number: '2,000+',
      title: 'Students Transformed',
      description: 'Young minds empowered with essential STEM skills for their future.'
    },
    {
      icon: TrendingUp,
      number: '98%',
      title: 'Satisfaction Rate',
      description: 'Parents and students consistently rate our programs at the highest level.'
    },
    {
      icon: Users,
      number: '30+',
      title: 'School Partnerships',
      description: 'Trusted by Kenya\'s leading educational institutions.'
    },
    {
      icon: Zap,
      number: '50+',
      title: 'Expert Educators',
      description: 'Certified instructors dedicated to student success.'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Proven Results, Real Impact
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Our track record speaks for itself. Here&apos;s what our commitment to excellence has delivered.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="relative group"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 rounded-xl transition-all duration-300 group-hover:from-primary/10 group-hover:to-primary/5" />

                {/* Card Content */}
                <div className="relative bg-white rounded-xl p-8 border border-primary/10 transition-all duration-300 group-hover:border-primary/30">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl font-bold text-primary mb-2">
                    {benefit.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
