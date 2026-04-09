import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProgramsHero } from '@/components/programs-hero';
import { ProgramsDetail } from '@/components/programs-detail';
import { ProgramComparison } from '@/components/program-comparison';

export const metadata = {
  title: 'STEM Programs - Coding, Robotics, Chess, Abacus',
  description: 'Explore our comprehensive STEM programs designed for students of all levels, aligned with the Kenyan CBC curriculum.'
};

export default function Programs() {
  return (
    <>
      <Navigation />
      <main>
        <ProgramsHero />
        <ProgramsDetail />
        <ProgramComparison />
      </main>
      <Footer />
    </>
  );
}
