import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AboutHero } from '@/components/about-hero';
import { MissionVision } from '@/components/mission-vision';
import { TeamShowcase } from '@/components/team-showcase';
import { PartnersList } from '@/components/partners-list';
import { JourneyTimeline } from '@/components/journey-timeline';

export const metadata = {
  title: 'About KEMSAP - Our Story & Mission',
  description: 'Learn about KEMSAP Aloha Africa\'s decade of excellence in STEM education and our commitment to empowering students across East Africa.'
};

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <MissionVision />
        <JourneyTimeline />
        <TeamShowcase />
        <PartnersList />
      </main>
      <Footer />
    </>
  );
}
