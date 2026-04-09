'use client';

export function EventsHero() {
  return (
    <section className="relative min-h-[70vh] pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
            Explore KEMSAP
            <span className="block text-gradient">Events & Activities</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Join us for immersive STEM experiences, bootcamps, expos, webinars, and networking events designed to inspire and empower young innovators.
          </p>
          <p className="text-lg text-foreground/60">
            Connect with fellow learners, showcase your projects, and discover the future of STEM education across East Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
