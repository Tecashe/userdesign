import { Navigation } from '@/components/navigation';
import { HomeHero } from '@/components/home-hero';
import { FeaturesSection } from '@/components/features-section';
import { ProgramsShowcase } from '@/components/programs-showcase';
import { BenefitsSection } from '@/components/benefits-section';
import { StatsSection } from '@/components/stats-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HomeHero />
        <FeaturesSection />
        <ProgramsShowcase />
        <BenefitsSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
