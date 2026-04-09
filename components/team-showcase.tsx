'use client';

import Image from 'next/image';

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  expertise: string;
}

const team: TeamMember[] = [
  {
    initials: 'JM',
    name: 'John Mwangi',
    role: 'Founder & CEO',
    expertise: 'STEM Education Strategy'
  },
  {
    initials: 'SM',
    name: 'Sarah Kipchoge',
    role: 'Head of Curriculum',
    expertise: 'Educational Design'
  },
  {
    initials: 'PO',
    name: 'Peter Okoro',
    role: 'Director of Programs',
    expertise: 'Program Development'
  },
  {
    initials: 'LC',
    name: 'Lucy Kariuki',
    role: 'Director of Partnerships',
    expertise: 'School Relations'
  },
  {
    initials: 'RM',
    name: 'Robert Musyoka',
    role: 'Lead Robotics Instructor',
    expertise: 'Advanced Robotics'
  },
  {
    initials: 'AM',
    name: 'Alice Mwangi',
    role: 'Head of Student Success',
    expertise: 'Student Development'
  }
];

export function TeamShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Leadership Team</h2>
            <p className="text-lg text-foreground/60 mb-8">Dedicated experts driving STEM excellence across East Africa</p>
            
            <div className="space-y-4">
              {team.map((member) => (
                <div key={member.name} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold">{member.role}</p>
                  <p className="text-foreground/60 text-sm">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-down">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expert-MemSisPKoFJ6B9nimUaE1LXjsjt8BH.png"
              alt="Expert Team"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
