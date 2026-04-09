'use client';

import { Code2, Zap, Gamepad2, Calculator } from 'lucide-react';
import Image from 'next/image';

interface Program {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradeLevel: string;
  difficulty: string;
  lessons: string;
  description: string;
  keyPoints: string[];
}

const programs: Program[] = [
  {
    id: 'coding',
    title: 'Coding for Innovators',
    subtitle: 'Master Programming & Web Development',
    icon: <Code2 className="w-8 h-8" />,
    gradeLevel: 'Grades 1-8',
    difficulty: 'Beginner to Advanced',
    lessons: '10+',
    description: 'Master programming with project-based learning tailored to students creativity and logic skills. Students learn to build games, web applications, and interactive systems while developing computational thinking.',
    keyPoints: [
      'Python, JavaScript, and Visual Programming',
      'Game Development Fundamentals',
      'Web Design and Development',
      'Problem-Solving through Code',
      'Project-Based Learning',
      'Competitive Coding'
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics Exploration',
    subtitle: 'Build, Program & Innovate',
    icon: <Zap className="w-8 h-8" />,
    gradeLevel: 'Grades 3+',
    difficulty: 'Intermediate',
    lessons: '10+',
    description: 'Build and program robots to inspire curiosity and problem-solving. Students work with cutting-edge robotics platforms, learning engineering principles, programming logic, and real-world applications.',
    keyPoints: [
      'Robot Assembly & Design',
      'Sensor Integration',
      'Advanced Programming',
      'STEM Challenges',
      'Engineering Principles',
      'Real-World Applications'
    ]
  },
  {
    id: 'abacus',
    title: 'Abacus Mental Math',
    subtitle: 'Speed, Accuracy & Mental Agility',
    icon: <Calculator className="w-8 h-8" />,
    gradeLevel: 'Pre-Primary to Grade 5',
    difficulty: 'Beginner to Advanced',
    lessons: '15+',
    description: 'Strengthen math skills through abacus learning, unlocking speed and accuracy in calculations. Students develop mental math abilities while improving concentration and memory.',
    keyPoints: [
      'Mental Math Mastery',
      'Speed Calculation',
      'Memory Development',
      'Concentration Building',
      'Confidence in Numbers',
      'Academic Excellence'
    ],
  },
  {
    id: 'chess',
    title: 'Chess Mastery',
    subtitle: 'Strategy, Thinking & Excellence',
    icon: <Gamepad2 className="w-8 h-8" />,
    gradeLevel: 'Grade 1 and Up',
    difficulty: 'All Ages',
    lessons: 'Ongoing',
    description: 'Develop critical thinking, strategy, and problem-solving skills through chess. Students learn game theory, tactical play, and strategic planning while building confidence and competitive spirit.',
    keyPoints: [
      'Strategic Thinking',
      'Tactical Mastery',
      'Game Theory Foundations',
      'Competitive Play',
      'Problem Solving',
      'Character Building'
    ]
  }
];

export function ProgramsDetail() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Visual Card */}
              <div className={`${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className={`group relative bg-gradient-to-br ${program.gradient} rounded-3xl border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className="relative p-12 h-96 flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${program.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {program.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">{program.title}</h3>
                      <p className="text-foreground/70 font-medium">{program.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Grade Level</p>
                        <p className="font-semibold text-sm text-foreground">{program.gradeLevel}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Difficulty</p>
                        <p className="font-semibold text-sm text-foreground">{program.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Lessons</p>
                        <p className="font-semibold text-sm text-foreground">{program.lessons}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">{program.description}</p>

                <h4 className="text-lg font-bold text-foreground mb-6">What You'll Learn:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {program.keyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-foreground/80 text-sm">{point}</p>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300 group/btn">
                  Enroll Now
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
