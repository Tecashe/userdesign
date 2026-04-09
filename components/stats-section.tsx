'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export function StatsSection() {
  const stats: StatItem[] = [
    { value: 2000, label: 'Students Empowered', suffix: '+' },
    { value: 30, label: 'Schools Partnered', suffix: '+' },
    { value: 98, label: 'Satisfaction Rate', suffix: '%' },
    { value: 50, label: 'Expert Instructors', suffix: '+' }
  ];

  return (
    <section id="stats" className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Our Impact
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Delivering measurable results through commitment to excellence and student success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stat Card */}
              <div className="relative bg-white rounded-xl p-8 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                {/* Stat Value */}
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Stat Label */}
                <p className="text-foreground/70 font-semibold text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
