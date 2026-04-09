'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

const gallery: GalleryItem[] = [
  { id: '1', title: 'Students Building Robots', category: 'Robotics', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robotics%20%281%29-crF1BpZww5NoPxueudSfhZnaHPLWKg.jpg' },
  { id: '2', title: 'Competition Event', category: 'Events', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery3-ONw2ooN9RvVXPvj52sGYtFvHVFenb7.jpg' },
  { id: '3', title: 'Workshop Showcase', category: 'STEM Learning', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gallery1-np17liMmiPgpxLSvxNNewR9te06wwA.jpg' },
  { id: '4', title: 'Interactive Learning', category: 'Hands-on', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stem-rIb2bsw6uU3I3HqUUtDJSRUPenx5Ct.jpg' },
  { id: '5', title: 'Robotics Project', category: 'Engineering', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robotics-Mj1T6u3lwaYCYLQjZ7SDld4fwZFaYz.jpg' },
  { id: '6', title: 'Team Collaboration', category: 'Events', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comprehensive-support-cXuesElI30661rTpeCQyOgAuOKtFEl.png' }
];

export function EventsGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Events Gallery</h2>
          <p className="text-lg text-foreground/60">Visual highlights from past and current KEMSAP events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 rounded-2xl border border-primary/10 overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300`} />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm font-medium">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
