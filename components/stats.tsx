'use client';

import { useEffect, useState } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({
    students: 0,
    schools: 0,
    satisfaction: 0,
    instructors: 0
  });

  useEffect(() => {
    const targets = { students: 2000, schools: 30, satisfaction: 98, instructors: 50 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        students: Math.floor(targets.students * progress),
        schools: Math.floor(targets.schools * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        instructors: Math.floor(targets.instructors * progress)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      number: counts.students,
      label: 'Students Empowered',
      suffix: '+',
      icon: '👥'
    },
    {
      number: counts.schools,
      label: 'Schools Reached',
      suffix: '+',
      icon: '🏫'
    },
    {
      number: counts.satisfaction,
      label: 'Student Satisfaction',
      suffix: '%',
      icon: '⭐'
    },
    {
      number: counts.instructors,
      label: 'Certified Instructors',
      suffix: '+',
      icon: '🎓'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See the measurable difference we&apos;ve made in STEM education across Africa.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 bg-card rounded-2xl border border-border/60 hover:border-primary/40 text-center transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10 space-y-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {stat.number}
                      <span className="text-3xl">{stat.suffix}</span>
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
