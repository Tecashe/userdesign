'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Tr. Mercy Makena',
      role: 'Abacus Instructor',
      content: 'My experience with Abacus has been great. I enjoy helping students and Abacus gave me the tools to achieve that.',
      initials: 'MM',
      rating: 5,
      bgColor: 'bg-primary'
    },
    {
      name: 'Jayden Maina',
      role: 'Student, Precious Blood Academy',
      content: 'Before I learned Abacus, I used to fear maths but now I can easily do sums even without a calculator.',
      initials: 'JM',
      rating: 5,
      bgColor: 'bg-accent'
    },
    {
      name: 'Esther Musila',
      role: 'Student, Kitengela Intl School',
      content: 'Coding is interesting. I can now develop games and simple apps.',
      initials: 'EM',
      rating: 5,
      bgColor: 'bg-secondary'
    },
    {
      name: 'Bramwel Silongi',
      role: 'Student, Citam Schools Nakuru',
      content: 'I am already mastering chess at the age of 9 years. I enjoy thinking of my next move and feel like I can predict the future.',
      initials: 'BS',
      rating: 5,
      bgColor: 'bg-primary'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-5xl font-bold text-foreground">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the impact we&apos;ve made on students and educators across East Africa.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative p-8 bg-card border border-border/60 hover:border-primary/40 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-border/40" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-border/60">
                      <AvatarFallback className={`${testimonial.bgColor} text-white font-bold text-sm`}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Now
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
