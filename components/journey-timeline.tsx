'use client';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: '2014',
    title: 'Foundation',
    description: 'KEMSAP Aloha Africa founded with a vision to revolutionize STEM education in Kenya.'
  },
  {
    year: '2016',
    title: 'Expansion',
    description: 'Extended operations to Uganda and Tanzania, reaching more students across East Africa.'
  },
  {
    year: '2018',
    title: 'Curriculum Alignment',
    description: 'Successfully aligned programs with the Kenyan CBC curriculum for enhanced learning outcomes.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched hybrid learning models combining in-person and online STEM instruction.'
  },
  {
    year: '2023',
    title: 'Milestone Achievement',
    description: 'Reached 2000+ empowered students and 30+ partner schools across East Africa.'
  },
  {
    year: '2024',
    title: 'Innovation Lead',
    description: 'Introducing advanced robotics and AI modules for next-generation STEM learners.'
  }
];

export function JourneyTimeline() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-foreground/60">A decade of transforming education across East Africa</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2 origin-top animate-slide-up" style={{
              backgroundImage: 'linear-gradient(180deg, var(--primary), var(--accent), var(--primary))',
              height: '100%'
            }} />

            {/* Timeline Events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={event.year} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-white border-4 border-primary transform -translate-x-2.5 md:-translate-x-3.5 shadow-lg" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:w-1/2' : 'md:ml-auto md:pl-12 md:w-1/2'}`}>
                    <div className="group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/60 hover:border-primary/30 transition-all duration-300">
                        <p className="text-sm font-bold text-primary mb-2">{event.year}</p>
                        <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-foreground/70 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
