'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactDetail {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link?: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    details: ['+254 702 782 335', '+254 726 002 662'],
    link: 'tel:+254702782335'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    details: ['Kemsapaloha@gmail.com'],
    link: 'mailto:kemsapaloha@gmail.com'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Address',
    details: ['P.O. Box 49860-00100', 'Nairobi GPO, Kenya', 'Utawala, Gesora Road']
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Hours',
    details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      {contactDetails.map((detail, index) => (
        <div key={detail.title} className="group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/60 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {detail.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-foreground mb-3">{detail.title}</h3>
                <div className="space-y-1">
                  {detail.details.map((info, infoIndex) => (
                    <p key={infoIndex} className="text-foreground/70 text-sm">
                      {detail.link ? (
                        <a href={detail.link} className="hover:text-primary transition-colors">
                          {info}
                        </a>
                      ) : (
                        info
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/254702782335"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/60 hover:border-primary/30 transition-all duration-300 text-center">
          <p className="text-foreground/80 text-sm mb-3">Prefer quick messaging?</p>
          <button className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300">
            Message on WhatsApp
          </button>
        </div>
      </a>
    </div>
  );
}
