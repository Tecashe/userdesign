'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is KEMSAP Aloha Africa? Why Should You Care?',
      answer: 'KEMSAP Aloha Africa offers exciting STEM programs like abacus, coding, and robotics for children. Our programs are designed to ignite creativity, develop problem-solving skills, and prepare young minds for the future. We empower your child\'s potential through technology and innovation!'
    },
    {
      question: 'Which Age Groups Can Benefit from KEMSAP Aloha Africa?',
      answer: 'Our programs cater to students from grades 1 through 8, building foundational skills that will stay with your child throughout their academic journey. Whether it\'s learning coding basics or getting hands-on with robotics, we support kids at every learning stage!'
    },
    {
      question: 'How Can My Child Benefit from KEMSAP\'s Programs?',
      answer: 'Our coding and robotics programs aren\'t just about tech – they also boost critical life skills! Children gain practical experience with technology while developing teamwork, problem-solving, and creativity. Plus, they have fun while learning!'
    },
    {
      question: 'How Much Do KEMSAP Aloha Africa\'s Programs Cost?',
      answer: 'Our pricing is affordable and flexible, designed to fit various budgets. Each program (coding, robotics, abacus) has tailored pricing, and we can provide details upon request. Reach out to us to get a personalized quote!'
    },
    {
      question: 'Does My Child Need Prior Coding or Robotics Experience?',
      answer: 'No experience required! Our beginner-friendly programs start from the basics and grow with the child. Whether your child is just starting with coding or has some background in robotics, we ensure they progress at their own pace with hands-on support.'
    },
    {
      question: 'Can KEMSAP\'s Programs Be Part of My Child\'s School Curriculum?',
      answer: 'Absolutely! We collaborate with schools to integrate our programs into the existing curriculum, making learning even more enriching. Schools can schedule lessons during or after school hours to align with the Kenyan CBC system.'
    },
    {
      question: 'Can My Child Learn Outside of School with KEMSAP?',
      answer: 'Yes! Our personalized one-on-one programs are perfect for children who wish to learn outside of school. Parents can enroll their children in specialized sessions at any time, providing ultimate flexibility!'
    },
    {
      question: 'How Can Schools Partner with KEMSAP Aloha Africa?',
      answer: 'If your school is interested in partnering with KEMSAP, simply reach out through our website or contact our support team. We offer tailored solutions with detailed plans and educator training to fit each school\'s needs.'
    },
    {
      question: 'How Are KEMSAP\'s Instructors Trained?',
      answer: 'All of our instructors are thoroughly trained to deliver engaging, hands-on lessons. They receive continuous support to ensure your child is motivated and inspired to succeed in coding, robotics, and abacus education!'
    },
    {
      question: 'Can My Child Join KEMSAP Programs If They Aren\'t at One of Our Partner Schools?',
      answer: 'Yes! Children not enrolled in our partner schools can still join any of our programs. Parents can easily sign their kids up for external coding and robotics sessions at any time – it\'s never too late to start!'
    },
    {
      question: 'How Can I Stay Updated on KEMSAP\'s Latest News and Programs?',
      answer: 'Stay in the loop by subscribing to our newsletter, following us on social media, or contacting us directly. We\'ll keep you informed about new programs, events, and exciting opportunities for your child\'s education!'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-5xl font-bold text-foreground">
              Everything You Need to <span className="text-primary">Know</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We&apos;ve got answers about KEMSAP Aloha Africa, our programs, and how we can help your child succeed.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group px-6 py-4 bg-card border border-border/60 rounded-lg hover:border-primary/40 transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="hover:text-primary transition-colors duration-300 text-left text-lg font-semibold text-foreground">
                  <span className="flex-1 text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4 border-t border-border/40 mt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
