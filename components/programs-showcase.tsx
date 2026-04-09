'use client';

import { Code2, Zap, Calculator, Gamepad2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradeLevel: string;
  image: string;
}

const programs: Program[] = [
  {
    id: 'coding',
    title: 'Coding for Innovators',
    description: 'Master programming with project-based learning tailored to students\' creativity and logic skills.',
    icon: <Code2 className="w-8 h-8" />,
    features: ['10+ Lessons', 'Beginner to Advanced', 'Project-Based Learning', 'Interactive Coding'],
    gradeLevel: 'Grades 1-8',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stem-rIb2bsw6uU3I3HqUUtDJSRUPenx5Ct.jpg'
  },
  {
    id: 'robotics',
    title: 'Robotics Exploration',
    description: 'Build and program robots to inspire curiosity and problem-solving in tomorrow\'s engineers.',
    icon: <Zap className="w-8 h-8" />,
    features: ['Hands-on Activities', 'Advanced Engineering', 'Robot Programming', 'STEM Challenges'],
    gradeLevel: 'Grades 3+',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robotics-Mj1T6u3lwaYCYLQjZ7SDld4fwZFaYz.jpg'
  },
  {
    id: 'abacus',
    title: 'Abacus Mental Math',
    description: 'Strengthen math skills through abacus learning, unlocking speed and accuracy in calculations.',
    icon: <Calculator className="w-8 h-8" />,
    features: ['15+ Lessons', 'Mental Math Mastery', 'Speed & Accuracy', 'Young Learners Focus'],
    gradeLevel: 'Pre-Primary to Grade 5',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-banner1-thrlV7cYZEg8Q4MgYIyiiymavy4t23.jpg'
  },
  {
    id: 'chess',
    title: 'Chess Mastery',
    description: 'Develop critical thinking, strategy, and problem-solving skills through the engaging world of chess.',
    icon: <Gamepad2 className="w-8 h-8" />,
    features: ['Strategic Thinking', 'Problem Solving', 'Competitive Training', 'All Age Levels'],
    gradeLevel: 'Grade 1 and Up',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hands-on-learning-8ySvsVJsQYLXxlcNLWimMWcpcfTMxn.png'
  }
];

export function ProgramsShowcase() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Bold Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-96 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Our Programs
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Choose from our comprehensive suite of STEM programs designed to inspire and engage students at every level.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group"
            >
              {/* Program Card */}
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/90 text-white flex items-center justify-center">
                    {program.icon}
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {program.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Grade Level Badge */}
                    <div className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                      {program.gradeLevel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Explore All Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
