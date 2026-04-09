'use client';

export function FaqHero() {
  return (
    <section className="relative min-h-[70vh] pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
            Frequently Asked
            <span className="block text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Get answers to common questions about our STEM programs, enrollment, curriculum, pricing, and everything else you need to know about KEMSAP Aloha Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
