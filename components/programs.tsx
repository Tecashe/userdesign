'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Coding for Innovators',
      description: 'Master programming with project-based learning tailored to students\' creativity and logic skills.',
      icon: '💻',
      level: 'Beginner to Advanced',
      grades: 'Grades 1-8',
      lessons: '10+',
      badge: 'Popular'
    },
    {
      title: 'Robotics Exploration',
      description: 'Build and program robots to inspire curiosity and problem-solving in tomorrow\'s engineers.',
      icon: '🤖',
      level: 'Hands-on Activities',
      grades: 'Grades 3 and Above',
      lessons: '10+',
      badge: 'Advanced'
    },
    {
      title: 'Abacus Mental Math',
      description: 'Strengthen math skills through abacus learning, unlocking speed and accuracy in calculations.',
      icon: '🧮',
      level: 'For Young Learners',
      grades: 'Pre-Primary to Grade 5',
      lessons: '10+',
      badge: 'Foundational'
    },
    {
      title: 'Chess Mastery',
      description: 'Develop critical thinking, strategy, and problem-solving skills through the engaging world of chess.',
      icon: '♟️',
      level: 'For All Ages',
      grades: 'Grade 1 and Up',
      lessons: '15+',
      badge: 'Strategic'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-5xl font-bold text-foreground">
              Empowering Students to <span className="text-primary">Excel</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our comprehensive programs designed for every learning style and level.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group relative p-8 bg-card border border-border/60 hover:border-primary/40 overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-6">
                  {/* Badge and Icon */}
                  <div className="flex items-start justify-between">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                      {program.badge}
                    </Badge>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/40">
                    <div>
                      <p className="text-sm text-muted-foreground">Grades</p>
                      <p className="font-semibold text-foreground text-sm">{program.grades}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Level</p>
                      <p className="font-semibold text-foreground text-sm">{program.level}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Lessons</p>
                      <p className="font-semibold text-foreground text-sm">{program.lessons}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn transition-all duration-300"
                  >
                    Explore Program
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </Card>
            ))}
          </div>

          {/* All Courses Button */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5"
            >
              View All Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
