'use client';

import Image from 'next/image';

export function ProgramsHero() {
  return (
    <section className="relative min-h-[80vh] pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight text-foreground">
              Comprehensive
              <span className="block text-primary">STEM Programs</span>
              <span className="block">for Every Student</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              From foundational coding to advanced robotics and strategic thinking, our programs empower students to excel in science, technology, engineering, and mathematics.
            </p>
            <p className="text-lg text-foreground/60">
              All programs are aligned with the Kenyan CBC curriculum and delivered by certified instructors.
            </p>
          </div>

          <div className="animate-fade-in-down">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/curriculumn-Si0c6LJXVsYwcLcur9aTFRrcucmC5t.png"
              alt="STEM Curriculum"
              width={500}
              height={350}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
