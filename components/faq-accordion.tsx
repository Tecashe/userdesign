'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: '1',
    category: 'About Programs',
    question: 'What is KEMSAP Aloha Africa? Why should you care?',
    answer: 'KEMSAP Aloha Africa offers exciting STEM programs like abacus, coding, and robotics for children. Our programs are designed to ignite creativity, develop problem-solving skills, and prepare young minds for the future. We empower your child\'s potential through technology and innovation.'
  },
  {
    id: '2',
    category: 'Age & Grade Levels',
    question: 'Which age groups can benefit from KEMSAP Aloha Africa?',
    answer: 'Our programs cater to students from grades 3 through 8, building foundational skills that will stay with your child throughout their academic journey. Whether it\'s learning coding basics or getting hands-on with robotics, we support kids at every learning stage.'
  },
  {
    id: '3',
    category: 'Program Benefits',
    question: 'How can my child benefit from KEMSAP\'s programs?',
    answer: 'Our coding and robotics programs aren\'t just about tech – they also boost critical life skills! Children gain practical experience with technology while developing teamwork, problem-solving, and creativity. Plus, they have fun while learning.'
  },
  {
    id: '4',
    category: 'Pricing',
    question: 'How much do KEMSAP Aloha Africa\'s programs cost?',
    answer: 'Our pricing is affordable and flexible, designed to fit various budgets. Each program (coding, robotics, abacus) has tailored pricing, and we can provide details upon request. Reach out to us to get a personalized quote.'
  },
  {
    id: '5',
    category: 'Prerequisites',
    question: 'Does my child need prior coding or robotics experience?',
    answer: 'No experience required! Our beginner-friendly programs start from the basics and grow with the child. Whether your child is just starting with coding or has some background in robotics, we ensure they progress at their own pace with hands-on support.'
  },
  {
    id: '6',
    category: 'School Integration',
    question: 'Can KEMSAP\'s programs be part of my child\'s school curriculum?',
    answer: 'Absolutely! We collaborate with schools to integrate our programs into the existing curriculum, making learning even more enriching. Schools can schedule lessons during or after school hours to align with the Kenyan CBC system.'
  },
  {
    id: '7',
    category: 'External Learning',
    question: 'Can my child learn outside of school with KEMSAP?',
    answer: 'Yes! Our personalized one-on-one programs are perfect for children who wish to learn outside of school. Parents can enroll their children in specialized sessions at any time, providing ultimate flexibility.'
  },
  {
    id: '8',
    category: 'School Partnerships',
    question: 'How can schools partner with KEMSAP Aloha Africa?',
    answer: 'If your school is interested in partnering with KEMSAP, simply reach out through our website or contact our support team. We offer tailored solutions with detailed plans and educator training to fit each school\'s needs.'
  },
  {
    id: '9',
    category: 'Instructors',
    question: 'How are KEMSAP\'s instructors trained?',
    answer: 'All of our instructors are thoroughly trained to deliver engaging, hands-on lessons. They receive continuous support to ensure your child is motivated and inspired to succeed in coding, robotics, and abacus education.'
  },
  {
    id: '10',
    category: 'Impact',
    question: 'How has KEMSAP Aloha Africa impacted students so far?',
    answer: 'Our impact is measurable! We\'ve partnered with over 30 schools, empowering over 2,000 students with critical STEM skills. We\'re changing lives by shaping future innovators and preparing children for success.'
  },
  {
    id: '11',
    category: 'Non-Partner Schools',
    question: 'Can my child join KEMSAP programs if they aren\'t at one of our partner schools?',
    answer: 'Yes! Children not enrolled in our partner schools can still join any of our programs. Parents can easily sign their kids up for external coding and robotics sessions at any time – it\'s never too late to start.'
  },
  {
    id: '12',
    category: 'Updates & News',
    question: 'How can I stay updated on KEMSAP\'s latest news and programs?',
    answer: 'Stay in the loop by subscribing to our newsletter, following us on social media, or contacting us directly. We\'ll keep you informed about new programs, events, and exciting opportunities for your child\'s education.'
  }
];

export function FaqAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map(f => f.category)));

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={category} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b-2 border-primary/20">{category}</h3>
              
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                      className="w-full text-left"
                    >
                      <div className="group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/60 hover:border-primary/30 transition-all duration-300">
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="font-bold text-foreground text-lg text-left leading-relaxed pr-6">
                              {faq.question}
                            </h4>
                            <ChevronDown
                              className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                                expandedId === faq.id ? 'rotate-180' : ''
                              }`}
                            />
                          </div>

                          {/* Answer */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              expandedId === faq.id ? 'max-h-96 mt-4' : 'max-h-0'
                            }`}
                          >
                            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                            <p className="text-foreground/70 leading-relaxed text-sm">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
              <p className="text-foreground/70 mb-6">
                Contact our support team directly. We're always happy to help.
              </p>
              <a
                href="https://wa.me/254702782335"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
