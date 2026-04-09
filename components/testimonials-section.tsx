'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  school: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Tr. Mercy Makena',
    role: 'Abacus Instructor',
    content: 'My experience with Abacus has been great. I enjoy helping students and Abacus gave me the tools to achieve that.',
    school: 'KEMSAP Instructor',
    rating: 5,
    avatar: 'M'
  },
  {
    id: '2',
    name: 'Jayden Maina',
    role: 'Student',
    content: 'Before I learned Abacus, I used to fear maths but now I can easily do sums even without a calculator.',
    school: 'Precious Blood Academy',
    rating: 5,
    avatar: 'J'
  },
  {
    id: '3',
    name: 'Esther Musila',
    role: 'Student',
    content: 'Coding is interesting. I can now develop games and simple apps.',
    school: 'Kitengela Intl School',
    rating: 5,
    avatar: 'E'
  },
  {
    id: '4',
    name: 'Bramwel Silongi',
    role: 'Student',
    content: 'I am already mastering chess at the age of 9 years. I enjoy thinking of my next move and feel like I can predict the future.',
    school: 'CITAM Schools Nakuru',
    rating: 5,
    avatar: 'B'
  }
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Success Stories
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Hear from students, parents, and educators who have experienced the KEMSAP difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group"
            >
              {/* Testimonial Card */}
              <div className="relative bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-primary/10 hover:border-primary/30">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author Section */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-primary font-semibold text-xs">{testimonial.role}</p>
                    <p className="text-foreground/60 text-xs">{testimonial.school}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-primary/10">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6">
              "{testimonials[activeTestimonial].content}"
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {testimonials[activeTestimonial].avatar}
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{testimonials[activeTestimonial].name}</p>
                <p className="text-primary font-semibold text-xs">{testimonials[activeTestimonial].role}</p>
                <p className="text-foreground/60 text-xs">{testimonials[activeTestimonial].school}</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-primary w-6' : 'bg-primary/20 w-2 hover:bg-primary/40'
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
