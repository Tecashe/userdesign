'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'Coding Bootcamp for Kids',
      type: 'Bootcamp',
      location: 'Kitengela Campus',
      date: 'Feb 15, 2025',
      description: 'Join us for an exciting coding bootcamp where kids learn to program robots and create games.',
      icon: '💻'
    },
    {
      title: 'Robotics Expo 2025',
      type: 'Expo',
      location: 'Nairobi CBD',
      date: 'Mar 10, 2025',
      description: 'Showcase your robotics creations and network with other STEM enthusiasts.',
      icon: '🤖'
    },
    {
      title: 'STEM Webinar: Future Trends',
      type: 'Webinar',
      location: '3 PM - 5 PM',
      date: 'Apr 05, 2025',
      description: 'Explore the future of STEM education and how KEMSAP is driving change.',
      icon: '📺'
    }
  ];

  const typeColors: Record<string, { bg: string; text: string }> = {
    Bootcamp: { bg: 'bg-primary/20', text: 'text-primary' },
    Expo: { bg: 'bg-accent/20', text: 'text-accent' },
    Webinar: { bg: 'bg-secondary/20', text: 'text-secondary' }
  };

  return (
    <section id="events" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-5xl md:text-5xl font-bold text-foreground">
              Explore <span className="text-primary">KEMSAP Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Upcoming events designed to inspire, engage, and celebrate STEM learning.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const colors = typeColors[event.type as keyof typeof typeColors];
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border border-border/60 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Event Image / Icon area */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                      {event.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 space-y-4">
                    {/* Badge */}
                    <Badge className={`w-fit ${colors.bg} ${colors.text} border-0`}>
                      {event.type}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 py-4 border-t border-border/40">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn transition-all duration-300">
                      Learn More
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </Button>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
                </Card>
              );
            })}
          </div>

          {/* All Events Button */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5"
            >
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
