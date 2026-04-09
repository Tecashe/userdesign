'use client';

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-foreground/70">
            Have questions about our programs? Ready to enroll your child? We are always here to assist you.
          </p>
        </div>
      </div>
    </section>
  );
}
