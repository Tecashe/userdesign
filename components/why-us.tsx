'use client';

import { Card } from '@/components/ui/card';
import { Users, Lightbulb, Zap, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Certified professionals providing engaging lessons tailored to spark curiosity and creativity.',
      color: 'text-primary'
    },
    {
      icon: Lightbulb,
      title: 'Tailored Curriculum',
      description: 'Personalized learning approaches that foster mastery and confidence in STEM fields.',
      color: 'text-accent'
    },
    {
      icon: Zap,
      title: 'Hands-on Learning',
      description: 'Interactive projects to nurture problem-solving and critical thinking skills in children.',
      color: 'text-secondary'
    },
    {
      icon: HeartHandshake,
      title: 'Comprehensive Support',
      description: 'Dedicated guidance and support for parents, schools, and young learners alike.',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-5xl font-bold text-foreground">
              Empowering Minds with <span className="text-primary">STEM Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover why KEMSAP ALOHA AFRICA stands out in empowering kids through practical and innovative STEM programs.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={index}
                  className="group relative p-8 bg-card border border-border/60 hover:border-primary/40 overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 space-y-4">
                    <div className={`w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300`}>
                      <Icon className={`w-7 h-7 ${reason.color}`} />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
