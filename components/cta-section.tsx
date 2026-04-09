'use client';

import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium CTA Card */}
        <div className="relative bg-primary rounded-2xl p-12 sm:p-20 text-center shadow-xl overflow-hidden">
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your Child&apos;s Future?
            </h2>

            {/* Subtext */}
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Start with a free consultation and discover how KEMSAP can help your child master STEM skills and unlock their potential.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/254702782335"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                'Free Consultation',
                'No Commitment',
                '98% Satisfaction'
              ].map((item) => (
                <div key={item} className="text-white/90 text-sm font-semibold">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
