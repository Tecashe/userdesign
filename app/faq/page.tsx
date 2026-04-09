import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FaqHero } from '@/components/faq-hero';
import { FaqAccordion } from '@/components/faq-accordion';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to commonly asked questions about KEMSAP programs, enrollment, costs, and more.'
};

export default function FAQ() {
  return (
    <>
      <Navigation />
      <main>
        <FaqHero />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}
