'use client';

import { Award, BookOpen, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Expert Instructors',
    description: 'Certified professionals providing engaging lessons tailored to spark curiosity and creativity.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'CBC Aligned Curriculum',
    description: 'Personalized learning approaches aligned with the Kenyan curriculum that foster mastery.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Hands-on Learning',
    description: 'Interactive projects and real-world applications that nurture problem-solving skills.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Comprehensive Support',
    description: 'Dedicated guidance for parents, schools, and learners throughout their journey.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Why Choose KEMSAP</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            STEM excellence through innovation, expertise, and commitment to student success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-down">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comprehensive-support-cXuesElI30661rTpeCQyOgAuOKtFEl.png"
              alt="Comprehensive Support"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
