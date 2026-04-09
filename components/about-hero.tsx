'use client';

import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight text-foreground">
              A Decade of Excellence
              <span className="block text-primary">in STEM Education</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              KEMSAP Aloha Africa is an educational programs company based in Kenya with franchise operations across three East African countries. We are deeply committed to investing in modern educational tools and brain development programs.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-foreground">Our Core Focus:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  'Abacus Mental Development',
                  'Coding for Kids',
                  'Professional Chess Training'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-foreground/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-down">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hands-on-learning-8ySvsVJsQYLXxlcNLWimMWcpcfTMxn.png"
              alt="Hands-on Learning"
              width={450}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
