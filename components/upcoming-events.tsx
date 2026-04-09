'use client';

import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

interface Event {
  id: string;
  type: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  color: string;
}

const events: Event[] = [
  {
    id: 'bootcamp',
    type: 'Bootcamp',
    title: 'Coding Bootcamp for Kids',
    description: 'Intensive week-long coding program where kids learn to program robots and create interactive games through project-based learning.',
    date: 'February 15-19, 2025',
    time: '9:00 AM - 4:00 PM',
    location: 'Kitengela Campus',
    attendees: 45,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'expo',
    type: 'Expo',
    title: 'Robotics Expo 2025',
    description: 'Showcase your robotics creations, network with other STEM enthusiasts, and explore cutting-edge technologies in robotics and automation.',
    date: 'March 10-12, 2025',
    time: '10:00 AM - 6:00 PM',
    location: 'Nairobi CBD Convention Center',
    attendees: 300,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'webinar',
    type: 'Webinar',
    title: 'STEM Webinar: Future Trends in Tech',
    description: 'Expert-led discussion on emerging technologies, AI in education, and career opportunities in STEM fields across East Africa and globally.',
    date: 'April 5, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'Online (Virtual)',
    attendees: 500,
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'competition',
    type: 'Competition',
    title: 'East Africa Chess Championship',
    description: 'Premier chess competition bringing together young champions from across East Africa to compete and display strategic mastery.',
    date: 'May 1-3, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Nairobi Sports Club',
    attendees: 200,
    color: 'from-green-500 to-emerald-500'
  }
];

export function UpcomingEvents() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-foreground/60">Mark your calendar for these exciting STEM experiences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/70 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white text-xs font-bold mb-4`}>
                    <span className="w-2 h-2 rounded-full bg-white" />
                    {event.type}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>

                  {/* Details */}
                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 text-sm text-foreground/70">
                      <Calendar className="w-4 h-4 flex-shrink-0 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/70">
                      <MapPin className="w-4 h-4 flex-shrink-0 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/70">
                      <Users className="w-4 h-4 flex-shrink-0 text-primary" />
                      <span>{event.attendees}+ registered</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300 group/btn">
                    Register Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
