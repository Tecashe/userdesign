import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { EventsHero } from '@/components/events-hero';
import { EventsGallery } from '@/components/events-gallery';
import { UpcomingEvents } from '@/components/upcoming-events';

export const metadata = {
  title: 'Events & Activities - KEMSAP',
  description: 'Discover upcoming STEM events, bootcamps, expos, and workshops organized by KEMSAP Aloha Africa.'
};

export default function Events() {
  return (
    <>
      <Navigation />
      <main>
        <EventsHero />
        <UpcomingEvents />
        <EventsGallery />
      </main>
      <Footer />
    </>
  );
}
