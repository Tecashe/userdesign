'use client';

import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HomeHero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
      {/* BOLD Background - Bright Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-96 right-0 w-[700px] h-[700px] bg-primary/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-96 -left-64 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* BOLD Content */}
          <div className="space-y-10">
            {/* BOLD Badge with Strong Border */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-black text-base border-4 border-primary w-fit">
              <Sparkles className="w-6 h-6" />
              #1 STEM Provider in Africa
            </div>

            {/* Premium Heading - Professional Scale */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Unlock Your Child&apos;s
              <br />
              <span className="text-primary">STEM Potential</span>
            </h1>

            {/* Premium Subheading */}
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-lg font-medium">
              Master coding, robotics, chess & abacus with Africa&apos;s #1 STEM educators. CBC-aligned curriculum, hands-on learning, proven results.
            </p>

            {/* Premium Features - Refined */}
            <div className="space-y-3 pt-4">
              {[
                '2,000+ Students Empowered',
                '30+ Schools Partnered',
                '50+ Expert Instructors',
                '98% Parent Satisfaction'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-base font-semibold text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-10">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#stats"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold text-base rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                View Impact
              </a>
            </div>

            {/* Premium Trust Section */}
            <div className="pt-10 border-t border-primary/20">
              <p className="font-semibold text-foreground/60 text-sm uppercase tracking-wide mb-4">Trusted by Kenya&apos;s Leading Schools</p>
              <div className="grid grid-cols-3 gap-3">
                {['Precious Blood', 'Kitengela Intl', 'CITAM Schools'].map((school) => (
                  <div key={school} className="px-3 py-2 rounded-lg bg-primary/8 border border-primary/20 font-medium text-center text-foreground text-sm">
                    {school}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Hero Image */}
          <div className="relative h-[500px] sm:h-[550px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-banner1-thrlV7cYZEg8Q4MgYIyiiymavy4t23.jpg"
                alt="Happy student learning"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Premium Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-2xl">
                  2K+
                </div>
                <div>
                  <p className="font-bold text-base text-foreground">Students</p>
                  <p className="font-semibold text-primary text-sm">East Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
