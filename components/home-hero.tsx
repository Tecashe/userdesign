// 'use client';

// import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// export function HomeHero() {
//   return (
//     <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
//       {/* BOLD Background - Bright Gradients */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-96 right-0 w-[700px] h-[700px] bg-primary/25 rounded-full blur-3xl" />
//         <div className="absolute -bottom-96 -left-64 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* BOLD Content */}
//           <div className="space-y-10">
//             {/* BOLD Badge with Strong Border */}
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-black text-base border-4 border-primary w-fit">
//               <Sparkles className="w-6 h-6" />
//               #1 STEM Provider in Africa
//             </div>

//             {/* Premium Heading - Professional Scale */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-tight">
//               Unlock Your Child&apos;s
//               <br />
//               <span className="text-primary">STEM Potential</span>
//             </h1>

//             {/* Premium Subheading */}
//             <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-lg font-medium">
//               Master coding, robotics, chess & abacus with Africa&apos;s #1 STEM educators. CBC-aligned curriculum, hands-on learning, proven results.
//             </p>

//             {/* Premium Features - Refined */}
//             <div className="space-y-3 pt-4">
//               {[
//                 '2,000+ Students Empowered',
//                 '30+ Schools Partnered',
//                 '50+ Expert Instructors',
//                 '98% Parent Satisfaction'
//               ].map((feature) => (
//                 <div key={feature} className="flex items-center gap-3 text-base font-semibold text-foreground">
//                   <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
//                   {feature}
//                 </div>
//               ))}
//             </div>

//             {/* Premium CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-10">
//               <Link
//                 href="/programs"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 Start Free Trial
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//               <a
//                 href="#stats"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold text-base rounded-lg hover:bg-primary/5 transition-all duration-300"
//               >
//                 View Impact
//               </a>
//             </div>

//             {/* Premium Trust Section */}
//             <div className="pt-10 border-t border-primary/20">
//               <p className="font-semibold text-foreground/60 text-sm uppercase tracking-wide mb-4">Trusted by Kenya&apos;s Leading Schools</p>
//               <div className="grid grid-cols-3 gap-3">
//                 {['Precious Blood', 'Kitengela Intl', 'CITAM Schools'].map((school) => (
//                   <div key={school} className="px-3 py-2 rounded-lg bg-primary/8 border border-primary/20 font-medium text-center text-foreground text-sm">
//                     {school}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Premium Hero Image */}
//           <div className="relative h-[500px] sm:h-[550px]">
//             <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-banner1-thrlV7cYZEg8Q4MgYIyiiymavy4t23.jpg"
//                 alt="Happy student learning"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//             </div>

//             {/* Premium Floating Card */}
//             <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-primary/10">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-2xl">
//                   2K+
//                 </div>
//                 <div>
//                   <p className="font-bold text-base text-foreground">Students</p>
//                   <p className="font-semibold text-primary text-sm">East Africa</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















// 'use client';

// import { ArrowRight, Sparkles, Code2, Bot, Brain, Crown } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// export function HomeHero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#FAF8F5]">

//       {/* ── Subtle warm grain texture overlay ── */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.03]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: 'repeat',
//           backgroundSize: '128px',
//         }}
//       />

//       {/* ── Large decorative blob top-right ── */}
//       <svg
//         className="absolute top-0 right-0 w-[55%] max-w-[680px] opacity-60 pointer-events-none"
//         viewBox="0 0 600 520"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <path
//           d="M580 40 C620 140 590 280 520 360 C460 430 340 490 220 480 C100 470 20 390 10 270 C0 150 80 40 200 10 C320 -20 540 -60 580 40Z"
//           fill="hsl(var(--primary) / 0.08)"
//         />
//       </svg>

//       {/* ── Small decorative blob bottom-left ── */}
//       <svg
//         className="absolute bottom-0 left-0 w-[35%] max-w-[400px] opacity-50 pointer-events-none"
//         viewBox="0 0 400 360"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <path
//           d="M20 340 C-30 240 10 100 100 40 C190 -20 340 10 380 120 C420 230 360 370 240 380 C120 390 70 440 20 340Z"
//           fill="hsl(var(--primary) / 0.06)"
//         />
//       </svg>

//       {/* ── Paintbrush stroke behind image (inspired by BraVaa) ── */}
//       <svg
//         className="absolute right-0 top-[8%] w-[52%] max-w-[660px] pointer-events-none hidden lg:block"
//         viewBox="0 0 640 580"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <path
//           d="M80 480 C40 380 60 200 160 120 C260 40 440 20 540 100 C640 180 660 360 580 460 C500 560 380 600 260 580 C140 560 120 580 80 480Z"
//           fill="hsl(var(--primary) / 0.10)"
//         />
//         <path
//           d="M120 460 C90 380 110 230 190 160 C270 90 420 80 510 150 C600 220 610 380 540 460 C470 540 360 570 250 550 C140 530 150 540 120 460Z"
//           fill="hsl(var(--primary) / 0.07)"
//         />
//       </svg>

//       {/* ── NAVBAR SPACER ── */}
//       <div className="h-24 lg:h-28" />

//       {/* ════════════════════════════════════════
//           MAIN CONTENT GRID
//       ════════════════════════════════════════ */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-0">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-7rem)]">

//           {/* ══════════════════════════════
//               LEFT — COPY
//           ══════════════════════════════ */}
//           <div className="space-y-7 lg:pr-10 z-10 relative">

//             {/* Kicker pill */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/25 shadow-sm text-sm font-semibold text-primary w-fit">
//               <Sparkles className="w-4 h-4" />
//               #1 STEM Provider in East Africa
//             </div>

//             {/* Headline — inspired by Progress template's editorial weight */}
//             <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold text-[#0f1117] leading-[1.08] tracking-tight">
//               Unlock Your Child&apos;s{' '}
//               <br className="hidden sm:block" />
//               <span
//                 className="relative inline-block"
//                 style={{ color: 'hsl(var(--primary))' }}
//               >
//                 STEM Potential
//                 {/* Underline squiggle */}
//                 <svg
//                   className="absolute -bottom-2 left-0 w-full"
//                   viewBox="0 0 320 12"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M2 9 C40 3 80 11 120 6 C160 1 200 10 240 5 C280 0 308 8 318 6"
//                     stroke="hsl(var(--primary) / 0.4)"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//             </h1>

//             {/* Sub */}
//             <p className="text-base sm:text-lg text-[#4a4f5e] leading-relaxed max-w-[480px]">
//               Master Coding, Robotics, Chess &amp; Abacus with Africa&apos;s leading STEM educators.
//               CBC-aligned curriculum, hands-on learning, proven results.
//             </p>

//             {/* ── Program icon pills ── */}
//             <div className="flex flex-wrap gap-2 pt-1">
//               {[
//                 { icon: Code2, label: 'Coding' },
//                 { icon: Bot, label: 'Robotics' },
//                 { icon: Brain, label: 'Abacus' },
//                 { icon: Crown, label: 'Chess' },
//               ].map(({ icon: Icon, label }) => (
//                 <div
//                   key={label}
//                   className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-primary/20 text-sm font-semibold text-[#0f1117] shadow-sm"
//                 >
//                   <Icon className="w-3.5 h-3.5" style={{ color: 'hsl(var(--primary))' }} />
//                   {label}
//                 </div>
//               ))}
//             </div>

//             {/* ── CTAs ── */}
//             <div className="flex flex-col sm:flex-row gap-3 pt-2">
//               <Link
//                 href="/programs"
//                 className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
//                 style={{
//                   background: 'hsl(var(--primary))',
//                   boxShadow: '0 8px 28px hsl(var(--primary) / 0.30)',
//                 }}
//               >
//                 Start Free Trial
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//               <a
//                 href="#programs"
//                 className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white border border-primary/25 text-[#0f1117] hover:bg-primary/5 transition-all duration-300 active:scale-95"
//               >
//                 Explore Programs
//               </a>
//             </div>

//             {/* ── Trust strip ── */}
//             <div className="pt-6 border-t border-[#e8e4dc]">
//               <p className="text-xs font-semibold uppercase tracking-widest text-[#9ca0ac] mb-3">
//                 Trusted by Kenya&apos;s Leading Schools
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {['Precious Blood', 'Kitengela Intl', 'CITAM Schools', 'Jabali Academy'].map((s) => (
//                   <span
//                     key={s}
//                     className="px-3 py-1 rounded-full bg-white border border-primary/20 text-xs font-semibold text-[#0f1117]"
//                   >
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ══════════════════════════════
//               RIGHT — IMAGE CLUSTER
//           ══════════════════════════════ */}
//           <div className="relative flex items-center justify-center lg:justify-end h-[480px] sm:h-[560px] lg:h-[calc(100vh-7rem)] max-h-[700px]">

//             {/* ── HEXAGON IMAGE CLUSTER (inspired by Progress template) ── */}
//             <div className="relative w-full max-w-[480px] h-full">

//               {/* ── Hex 1 — LARGE, main hero image ── */}
//               <div
//                 className="absolute"
//                 style={{
//                   top: '5%',
//                   right: '2%',
//                   width: '62%',
//                   paddingBottom: '70%',
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 overflow-hidden shadow-2xl"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//                   }}
//                 >
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-banner1-thrlV7cYZEg8Q4MgYIyiiymavy4t23.jpg"
//                     alt="Student learning coding"
//                     fill
//                     className="object-cover object-center scale-110"
//                     priority
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
//                 </div>
//                 {/* Hex border ring */}
//                 <div
//                   className="absolute inset-[-4px] pointer-events-none"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//                     background: 'hsl(var(--primary) / 0.18)',
//                     zIndex: -1,
//                   }}
//                 />
//               </div>

//               {/* ── Hex 2 — MEDIUM, bottom-left ── */}
//               <div
//                 className="absolute"
//                 style={{
//                   bottom: '4%',
//                   left: '0%',
//                   width: '44%',
//                   paddingBottom: '50%',
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 overflow-hidden shadow-xl"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//                   }}
//                 >
//                   <Image
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-banner-2-Gg0JGo4TaYiKoIc0JBB1ZrGobP3hQY.jpg"
//                     alt="Student doing robotics"
//                     fill
//                     className="object-cover object-center scale-110"
//                   />
//                 </div>
//                 <div
//                   className="absolute inset-[-4px] pointer-events-none"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//                     background: 'hsl(var(--primary) / 0.15)',
//                     zIndex: -1,
//                   }}
//                 />
//               </div>

//               {/* ── Hex 3 — SMALL, top-left accent ── */}
//               <div
//                 className="absolute hidden sm:block"
//                 style={{
//                   top: '28%',
//                   left: '4%',
//                   width: '30%',
//                   paddingBottom: '34%',
//                 }}
//               >
//                 <div
//                   className="absolute inset-0 overflow-hidden shadow-lg"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//                     background: 'hsl(var(--primary) / 0.12)',
//                   }}
//                 >
//                   {/* Decorative hex — filled with pattern */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="grid grid-cols-3 gap-1 opacity-60">
//                       {Array.from({ length: 9 }).map((_, i) => (
//                         <div
//                           key={i}
//                           className="w-2 h-2 rounded-full"
//                           style={{ background: 'hsl(var(--primary))' }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* ── Decorative corner accent lines (like Progress template) ── */}
//               <svg
//                 className="absolute top-[2%] right-[10%] pointer-events-none"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 32 32"
//                 fill="none"
//                 aria-hidden="true"
//               >
//                 <rect x="0" y="0" width="32" height="5" rx="2.5" fill="hsl(var(--primary))" />
//                 <rect x="0" y="0" width="5" height="32" rx="2.5" fill="hsl(var(--primary) / 0.4)" />
//               </svg>
//               <svg
//                 className="absolute bottom-[6%] right-[0%] pointer-events-none rotate-180"
//                 width="28"
//                 height="28"
//                 viewBox="0 0 32 32"
//                 fill="none"
//                 aria-hidden="true"
//               >
//                 <rect x="0" y="0" width="32" height="5" rx="2.5" fill="hsl(var(--primary) / 0.5)" />
//                 <rect x="0" y="0" width="5" height="32" rx="2.5" fill="hsl(var(--primary) / 0.25)" />
//               </svg>

//               {/* ── Floating stat card — Students ── */}
//               <div
//                 className="absolute z-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-primary/10 flex items-center gap-3"
//                 style={{ bottom: '28%', right: '-2%' }}
//               >
//                 <div
//                   className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-extrabold flex-shrink-0"
//                   style={{ background: 'hsl(var(--primary))' }}
//                 >
//                   2K+
//                 </div>
//                 <div>
//                   <p className="font-bold text-sm text-[#0f1117] leading-tight">Students</p>
//                   <p className="text-xs font-medium leading-tight" style={{ color: 'hsl(var(--primary))' }}>
//                     East Africa
//                   </p>
//                 </div>
//               </div>

//               {/* ── Floating stat card — Schools ── */}
//               <div
//                 className="absolute z-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-primary/10 flex items-center gap-3"
//                 style={{ top: '18%', left: '-4%' }}
//               >
//                 <div
//                   className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-extrabold flex-shrink-0"
//                   style={{ background: 'hsl(var(--primary) / 0.85)' }}
//                 >
//                   30+
//                 </div>
//                 <div>
//                   <p className="font-bold text-sm text-[#0f1117] leading-tight">Schools</p>
//                   <p className="text-xs font-medium leading-tight" style={{ color: 'hsl(var(--primary))' }}>
//                     Partners
//                   </p>
//                 </div>
//               </div>

//             </div>
//             {/* END image cluster */}
//           </div>
//           {/* END right col */}

//         </div>
//         {/* END grid */}
//       </div>

//       {/* ════════════════════════════════════════
//           BOTTOM FEATURE BAR (inspired by BraVaa)
//       ════════════════════════════════════════ */}
//       <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-[#e8e4dc] mt-4 lg:mt-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
//             {[
//               { icon: Code2, title: 'Coding & Robotics', desc: 'Project-based STEM for Grades 1–8' },
//               { icon: Brain, title: 'Abacus Mental Math', desc: 'Speed & accuracy from Pre-Primary' },
//               { icon: Crown, title: 'Chess Mastery', desc: 'Strategy & critical thinking' },
//               { icon: Bot, title: 'CBC-Aligned', desc: 'Integrated into school curriculum' },
//             ].map(({ icon: Icon, title, desc }) => (
//               <div key={title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200">
//                 <div
//                   className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
//                   style={{ background: 'hsl(var(--primary) / 0.1)' }}
//                 >
//                   <Icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
//                 </div>
//                 <div>
//                   <p className="font-bold text-sm text-[#0f1117] leading-tight">{title}</p>
//                   <p className="text-xs text-[#8a8f9e] mt-0.5 leading-snug">{desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }


'use client';

import Link from 'next/link';
import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────
   KEMSAP — Premium Hero Section v3
   Design: Editorial serif × warm-cream × full-bleed image ×
           animated ticker × orchestrated staggered animations ×
           ink blob atmosphere × glass stat cards
───────────────────────────────────────────────────────────────── */

const PROGRAMS = [
  { num: '01', emoji: '⌨️', label: 'Coding' },
  { num: '02', emoji: '🤖', label: 'Robotics' },
  { num: '03', emoji: '🧮', label: 'Abacus' },
  { num: '04', emoji: '♟️', label: 'Chess' },
] as const;

const SCHOOLS = ['Precious Blood', 'Kitengela Intl', 'CITAM Schools', 'Jabali Academy'];

const TICKER_ITEMS = [
  'Coding for Kids', 'Robotics Exploration', 'Abacus Mental Math',
  'Chess Mastery', 'CBC Aligned', '30+ Schools', '3 Countries', '2,000+ Students',
];

export function HomeHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .ks-font-display { font-family: 'Instrument Serif', Georgia, serif; }
        .ks-font-body    { font-family: 'DM Sans', system-ui, sans-serif; }

        @keyframes ks-fade-up {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ks-slide-r {
          from { opacity:0; transform:translateX(-20px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes ks-scale-in {
          from { opacity:0; transform:scale(0.92); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes ks-draw {
          from { width:0; }
          to   { width:100%; }
        }
        @keyframes ks-float-a {
          0%,100% { transform:translateY(0px); }
          50%     { transform:translateY(-10px); }
        }
        @keyframes ks-float-b {
          0%,100% { transform:translateY(0px); }
          50%     { transform:translateY(8px); }
        }
        @keyframes ks-ticker {
          from { transform:translateX(0); }
          to   { transform:translateX(-50%); }
        }
        @keyframes ks-live {
          0%,100% { opacity:1; box-shadow:0 0 0 3px rgba(34,197,94,0.2); }
          50%     { opacity:0.6; box-shadow:0 0 0 6px rgba(34,197,94,0.08); }
        }

        .ks-anim-up    { animation:ks-fade-up  0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .ks-anim-right { animation:ks-slide-r  0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .ks-anim-scale { animation:ks-scale-in 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s both; }

        .ks-d100  { animation-delay:100ms;  }
        .ks-d200  { animation-delay:200ms;  }
        .ks-d350  { animation-delay:350ms;  }
        .ks-d450  { animation-delay:450ms;  }
        .ks-d550  { animation-delay:550ms;  }
        .ks-d650  { animation-delay:650ms;  }
        .ks-d900  { animation-delay:900ms;  }
        .ks-d1050 { animation-delay:1050ms; }
        .ks-d1200 { animation-delay:1200ms; }
        .ks-d1400 { animation-delay:1400ms; }

        .ks-float-a { animation:ks-float-a 5s ease-in-out 2s infinite; }
        .ks-float-b { animation:ks-float-b 6s ease-in-out 2.5s infinite; }
        .ks-float-c { animation:ks-float-a 7s ease-in-out 3s infinite; }

        /* Italic headline underline */
        .ks-italic-line { position:relative; display:inline-block; }
        .ks-italic-line::after {
          content:'';
          position:absolute; bottom:-4px; left:0;
          height:3px; border-radius:2px;
          background:hsl(var(--primary));
          animation:ks-draw 0.9s cubic-bezier(0.22,1,0.36,1) 1.3s both;
          width:0;
        }

        /* Ticker */
        .ks-ticker-track { animation:ks-ticker 22s linear infinite; }

        /* Live dot */
        .ks-live-dot {
          width:8px; height:8px; border-radius:50%;
          background:#22c55e; flex-shrink:0;
          animation:ks-live 2s ease infinite;
        }

        /* Stat bar animated fill */
        .ks-bar-fill {
          height:100%; border-radius:2px;
          background:linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)/0.45));
          animation:ks-draw 1.5s cubic-bezier(0.22,1,0.36,1) 1.6s both;
        }

        /* Glass card */
        .ks-glass {
          background:rgba(255,255,255,0.92);
          backdrop-filter:blur(16px);
          border:1px solid rgba(255,255,255,0.9);
          box-shadow:0 20px 60px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.9) inset;
        }

        /* Program pill */
        .ks-pill {
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(8px);
          transition:all 0.2s ease;
          cursor:default;
        }
        .ks-pill:hover {
          border-color:hsl(var(--primary)) !important;
          background:hsl(var(--primary)/0.06);
          transform:translateY(-2px);
        }

        /* CTA buttons */
        .ks-btn-main {
          box-shadow:0 8px 32px hsl(var(--primary)/0.35), inset 0 1px 0 rgba(255,255,255,0.2);
          transition:all 0.25s cubic-bezier(0.22,1,0.36,1);
          position:relative; overflow:hidden;
        }
        .ks-btn-main::before {
          content:'';position:absolute;inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent);
          pointer-events:none;
        }
        .ks-btn-main:hover {
          transform:translateY(-3px);
          box-shadow:0 14px 40px hsl(var(--primary)/0.45);
        }
        .ks-btn-ghost {
          transition:all 0.2s ease;
          border:1.5px solid rgba(13,13,13,0.16);
        }
        .ks-btn-ghost:hover {
          border-color:hsl(var(--primary));
          color:hsl(var(--primary));
          background:hsl(var(--primary)/0.04);
        }
      `}</style>

      <section className="ks-font-body relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[#FAF7F2]">

        {/* Ambient radial background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: [
              'radial-gradient(circle at 18% 80%, hsl(var(--primary)/0.07) 0%, transparent 50%)',
              'radial-gradient(circle at 82% 12%, hsl(var(--primary)/0.05) 0%, transparent 45%)',
            ].join(','),
          }}
        />

        {/* Large watermark */}
        <div
          aria-hidden="true"
          className="ks-font-display absolute bottom-[6%] left-[-1%] pointer-events-none z-0 select-none leading-none"
          style={{
            fontSize: 'clamp(8rem, 18vw, 18rem)',
            color: 'hsl(var(--primary)/0.04)',
            letterSpacing: '-0.04em',
          }}
        >
          STEM
        </div>

        {/* Dot grid */}
        <svg
          aria-hidden="true"
          className="absolute top-[10%] right-[51%] pointer-events-none z-[1] opacity-[0.06]"
          width="110" height="110" viewBox="0 0 110 110" fill="none"
        >
          {[10, 30, 50, 70, 90].flatMap(y =>
            [10, 30, 50, 70, 90].map(x => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="hsl(var(--primary))" />
            ))
          )}
        </svg>

        {/* ════════ LEFT — COPY ════════ */}
        <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-28 pb-10 lg:pt-0 lg:pb-24">

          {/* Eyebrow */}
          <div className="ks-anim-right ks-d100 flex items-center gap-3 mb-7">
            <div
              className="w-8 h-[2px] rounded-full flex-shrink-0"
              style={{ background: 'hsl(var(--primary))' }}
            />
            <span
              className="text-[11px] font-semibold tracking-[0.16em] uppercase"
              style={{ color: 'hsl(var(--primary))' }}
            >
              Kenya · East Africa · 3 Countries
            </span>
          </div>

          {/* Headline */}
          <h1
            className="ks-font-display ks-anim-up ks-d200 text-[#0D0D0D] leading-[1.0] tracking-tight mb-3"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)' }}
          >
            Unlock Your<br />
            Child&apos;s{' '}
            <em className="ks-italic-line" style={{ fontStyle: 'italic', color: 'hsl(var(--primary))' }}>
              STEM
            </em><br />
            Potential.
          </h1>

          {/* Sub-headline */}
          <p
            className="ks-font-display ks-anim-up ks-d350 mb-7 leading-[1.2]"
            style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', color: 'rgba(13,13,13,0.45)' }}
          >
            Where future<br />innovators are born.
          </p>

          {/* Body */}
          <p className="ks-anim-up ks-d450 text-[15px] leading-relaxed text-[#4A4F5E] max-w-[430px] mb-8">
            Master Coding, Robotics, Chess &amp; Abacus with Africa&apos;s leading STEM educators.
            CBC-aligned curriculum, hands-on learning, proven results.
          </p>

          {/* Program pills */}
          <div className="ks-anim-up ks-d550 flex flex-wrap gap-2 mb-9">
            {PROGRAMS.map(({ num, emoji, label }) => (
              <div
                key={label}
                className="ks-pill flex items-center gap-1.5 px-4 py-2 rounded-full border"
                style={{ borderColor: 'hsl(var(--primary)/0.22)' }}
              >
                <span
                  className="text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ color: 'hsl(var(--primary))', background: 'hsl(var(--primary)/0.10)' }}
                >
                  {num}
                </span>
                <span className="text-sm">{emoji}</span>
                <span className="text-[13px] font-medium text-[#0D0D0D]">{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="ks-anim-up ks-d650 flex flex-wrap gap-3 mb-10">
            <Link
              href="/programs"
              className="ks-btn-main inline-flex items-center gap-2 px-7 py-[14px] rounded-[14px] text-white text-[14px] font-semibold"
              style={{ background: 'hsl(var(--primary))' }}
            >
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#programs"
              className="ks-btn-ghost inline-flex items-center gap-2 px-7 py-[14px] rounded-[14px] text-[#0D0D0D] text-[14px] font-medium bg-transparent"
            >
              Explore Programs
            </a>
          </div>

          {/* Trust strip */}
          <div className="ks-anim-up ks-d1400 pt-6" style={{ borderTop: '1px solid rgba(13,13,13,0.08)' }}>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgba(13,13,13,0.28)' }}>
              Trusted by Kenya&apos;s leading schools
            </p>
            <div className="flex flex-wrap gap-2">
              {SCHOOLS.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-lg text-[12px] font-medium"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(13,13,13,0.10)',
                    color: 'rgba(13,13,13,0.55)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ════════ RIGHT — IMAGE ════════ */}
        <div className="relative overflow-hidden" style={{ minHeight: 'clamp(320px, 60vw, 100vh)' }}>

          {/* Ink blob atmosphere */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 700 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="ks-blob-g" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.22" />
                <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.10" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path
              d="M 120 80 C 200 20 440 -20 580 100 C 720 220 680 500 580 640 C 480 780 280 860 140 780 C 0 700 -40 480 20 300 C 60 180 40 140 120 80 Z"
              fill="url(#ks-blob-g)"
            />
            <path
              d="M 200 180 C 280 120 460 100 560 220 C 660 340 620 560 520 660 C 420 760 240 780 160 680 C 80 580 100 380 160 280 C 190 230 160 220 200 180 Z"
              fill="hsl(var(--primary))"
              fillOpacity="0.06"
            />
          </svg>

          {/* Full-bleed image */}
          <div className="ks-anim-scale absolute inset-0 z-[1]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-banner1-thrlV7cYZEg8Q4MgYIyiiymavy4t23.jpg"
              alt="Young student discovering STEM"
              fill
              className="object-cover object-[center_top]"
              style={{ transform: 'scale(1.04)' }}
              priority
            />
          </div>

          {/* Left + bottom fade overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background: [
                'linear-gradient(to right, #FAF7F2 0%, transparent 28%)',
                'linear-gradient(to top, #FAF7F2 0%, transparent 22%)',
              ].join(','),
            }}
          />

          {/* Hairline vertical rule */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-[15%] bottom-[15%] w-px z-[3]"
            style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--primary)/0.28), transparent)' }}
          />

          {/* ── Stat card: Schools ── */}
          <div className="ks-glass ks-anim-up ks-d900 ks-float-a absolute z-10 top-[18%] right-[5%] rounded-[18px] p-4 min-w-[158px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'rgba(13,13,13,0.35)' }}>Partner Schools</span>
              <span className="ks-live-dot" />
            </div>
            <p className="ks-font-display text-[2rem] leading-none text-[#0D0D0D] mb-0.5">
              <span style={{ color: 'hsl(var(--primary))' }}>30</span>+
            </p>
            <p className="text-[11px] font-medium mb-2.5" style={{ color: 'rgba(13,13,13,0.50)' }}>Across East Africa</p>
            <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(13,13,13,0.06)' }}>
              <div className="ks-bar-fill" style={{ width: '75%' }} />
            </div>
          </div>

          {/* ── Stat card: Students ── */}
          <div className="ks-glass ks-anim-up ks-d1050 ks-float-b absolute z-10 bottom-[28%] right-[8%] rounded-[18px] p-4 min-w-[180px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'rgba(13,13,13,0.35)' }}>Students Empowered</span>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.5l-3.7 1.8.7-4.1-3-2.9 4.2-.7z" fill="hsl(var(--primary))" />
              </svg>
            </div>
            <p className="ks-font-display text-[2rem] leading-none text-[#0D0D0D] mb-0.5">
              <span style={{ color: 'hsl(var(--primary))' }}>2,000</span>+
            </p>
            <p className="text-[11px] font-medium mb-2.5" style={{ color: 'rgba(13,13,13,0.50)' }}>CBC-aligned learners</p>
            <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(13,13,13,0.06)' }}>
              <div className="ks-bar-fill" style={{ width: '88%' }} />
            </div>
          </div>

          {/* ── Stat card: Satisfaction (hidden mobile) ── */}
          <div className="ks-glass ks-anim-up ks-d1200 ks-float-c absolute z-10 bottom-[16%] left-[4%] rounded-[18px] p-4 min-w-[148px] hidden sm:block">
            <div className="mb-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'rgba(13,13,13,0.35)' }}>Parent Satisfaction</span>
            </div>
            <p className="ks-font-display text-[2rem] leading-none text-[#0D0D0D] mb-0.5">
              <span style={{ color: 'hsl(var(--primary))' }}>98</span>%
            </p>
            <p className="text-[11px] font-medium mb-2.5" style={{ color: 'rgba(13,13,13,0.50)' }}>Would recommend</p>
            <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(13,13,13,0.06)' }}>
              <div className="ks-bar-fill" style={{ width: '98%' }} />
            </div>
          </div>

          {/* ── Scrolling ticker ── */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden py-2.5"
            style={{ background: 'hsl(var(--primary))' }}
          >
            <div className="ks-ticker-track flex w-max">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 px-8 whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.5)' }} />
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* end right */}

      </section>
    </>
  );
}