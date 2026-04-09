'use client';

interface Partner {
  name: string;
  category: string;
}

const partners: Partner[] = [
  { name: 'Precious Blood Academy', category: 'Partner School' },
  { name: 'Kitengela International School', category: 'Partner School' },
  { name: 'CITAM Schools Nakuru', category: 'Partner School' },
  { name: 'Knowledville Schools', category: 'Partner School' },
  { name: 'Nairobi Tech Hub', category: 'Technology Partner' },
  { name: 'East Africa STEM Alliance', category: 'Educational Partner' },
  { name: 'Kenya Science Society', category: 'Research Partner' },
  { name: 'African Innovation Initiative', category: 'Innovation Partner' }
];

export function PartnersList() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-foreground/60">Collaborating with leading institutions across East Africa</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center hover:bg-white/60 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <p className="font-bold text-foreground text-sm mb-2">{partner.name}</p>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
