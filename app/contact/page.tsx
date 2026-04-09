import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ContactHero } from '@/components/contact-hero';
import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';

export const metadata = {
  title: 'Contact Us - Get in Touch with KEMSAP',
  description: 'Reach out to KEMSAP Aloha Africa. We are here to assist with any inquiries about our STEM programs.'
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        <ContactHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
