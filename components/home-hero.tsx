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

import { ArrowRight, Sparkles, Code2, Bot, Brain, Crown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#f5f2ed] to-[#efe9e0]">
      <style>{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-rotate {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      <svg
        className="absolute top-0 right-0 w-[55%] max-w-[680px] opacity-60 pointer-events-none"
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M580 40 C620 140 590 280 520 360 C460 430 340 490 220 480 C100 470 20 390 10 270 C0 150 80 40 200 10 C320 -20 540 -60 580 40Z"
          fill="hsl(var(--primary) / 0.08)"
        />
      </svg>

      <div className="h-12 sm:h-16 lg:h-20" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 pb-20 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* LEFT — COPY */}
          <div className="space-y-8 z-10 relative lg:pr-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0f1117] leading-tight tracking-tight">
              Unlock Your Child&apos;s{' '}
              <span className="relative inline-block" style={{ color: 'hsl(var(--primary))' }}>
                STEM Potential
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4a4f5e] leading-relaxed max-w-[520px] font-medium">
              Master Coding, Robotics, Chess & Abacus with Africa&apos;s leading STEM educators.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Code2, label: 'Coding' },
                { icon: Bot, label: 'Robotics' },
                { icon: Brain, label: 'Abacus' },
                { icon: Crown, label: 'Chess' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-primary/20 text-sm font-semibold text-[#0f1117] shadow-sm"
                >
                  <Icon className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 w-full sm:w-auto"
                style={{
                  background: 'hsl(var(--primary))',
                  boxShadow: '0 12px 40px hsl(var(--primary) / 0.40)',
                }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-white border-2 border-primary/30 text-[#0f1117] hover:bg-primary/5 transition-all duration-300 active:scale-95 w-full sm:w-auto"
              >
                Explore Programs
              </a>
            </div>

          </div>

          {/* RIGHT — MORPHING BLOB GALLERY */}
          <div className="relative flex items-center justify-center h-[500px] sm:h-[600px] lg:h-[calc(100vh-5rem)] -mx-4 sm:-mx-6 lg:mx-0 lg:min-h-[700px]">
            <div className="relative w-full h-full flex items-center justify-center">

              {/* Central morphing blob */}
              <div
                className="absolute w-96 h-96 overflow-hidden shadow-2xl animate-morph animate-float"
                style={{
                  background: 'hsl(var(--primary) / 0.08)',
                  filter: 'drop-shadow(0 25px 80px rgba(0,0,0,0.20))',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Image
                  src="/images/stem-kids-coding.jpg"
                  alt="Kids coding"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              </div>

              {/* Top-left blob */}
              <div
                className="absolute w-64 h-64 overflow-hidden shadow-lg animate-morph hidden sm:block"
                style={{
                  top: '5%',
                  left: '-8%',
                  borderRadius: '45% 55% 60% 40% / 55% 45% 40% 60%',
                  animation: 'morph 6s ease-in-out infinite',
                  animationDelay: '1s',
                  filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.12))',
                }}
              >
                <Image
                  src="/images/stem-girls.jpg"
                  alt="Girls STEM"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-left blob */}
              <div
                className="absolute w-72 h-72 overflow-hidden shadow-lg animate-morph hidden md:block"
                style={{
                  bottom: '-10%',
                  left: '-12%',
                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                  animation: 'morph 7s ease-in-out infinite',
                  animationDelay: '2s',
                  filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.12))',
                }}
              >
                <Image
                  src="/images/stem-math.jpg"
                  alt="Math"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top-right blob */}
              <div
                className="absolute w-60 h-60 overflow-hidden shadow-lg animate-morph hidden sm:block"
                style={{
                  top: '2%',
                  right: '-8%',
                  borderRadius: '70% 30% 46% 54% / 30% 29% 71% 70%',
                  animation: 'morph 6.5s ease-in-out infinite',
                  animationDelay: '0.5s',
                  filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.12))',
                }}
              >
                <Image
                  src="/images/stem-chess.jpg"
                  alt="Chess"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-right blob */}
              <div
                className="absolute w-80 h-80 overflow-hidden shadow-xl animate-morph hidden lg:block"
                style={{
                  bottom: '-8%',
                  right: '-10%',
                  borderRadius: '56% 44% 50% 50% / 50% 50% 50% 50%',
                  animation: 'morph 8s ease-in-out infinite',
                  animationDelay: '1.5s',
                  filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.15))',
                  border: '4px solid hsl(var(--primary) / 0.1)',
                }}
              >
                <Image
                  src="/images/stem-robotics.jpg"
                  alt="Robotics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Rotating ring decoration */}
              <svg
                className="absolute w-96 h-96 pointer-events-none animate-rotate"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.15,
                }}
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="10,10"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </svg>


            </div>
          </div>

        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-[#e8e4dc] mt-4 lg:mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Code2, title: 'Coding & Robotics', desc: 'Project-based STEM for Grades 1–8' },
              { icon: Brain, title: 'Abacus Mental Math', desc: 'Speed & accuracy from Pre-Primary' },
              { icon: Crown, title: 'Chess Mastery', desc: 'Strategy & critical thinking' },
              { icon: Bot, title: 'CBC-Aligned', desc: 'Integrated into school curriculum' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'hsl(var(--primary) / 0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0f1117] leading-tight">{title}</p>
                  <p className="text-xs text-[#8a8f9e] mt-0.5 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


