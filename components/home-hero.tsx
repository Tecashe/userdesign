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

//       {/* â”€â”€ Subtle warm grain texture overlay â”€â”€ */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.03]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: 'repeat',
//           backgroundSize: '128px',
//         }}
//       />

//       {/* â”€â”€ Large decorative blob top-right â”€â”€ */}
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

//       {/* â”€â”€ Small decorative blob bottom-left â”€â”€ */}
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

//       {/* â”€â”€ Paintbrush stroke behind image (inspired by BraVaa) â”€â”€ */}
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

//       {/* â”€â”€ NAVBAR SPACER â”€â”€ */}
//       <div className="h-24 lg:h-28" />

//       {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//           MAIN CONTENT GRID
//       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-0">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[calc(100vh-7rem)]">

//           {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//               LEFT â€” COPY
//           â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
//           <div className="space-y-7 lg:pr-10 z-10 relative">

//             {/* Kicker pill */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/25 shadow-sm text-sm font-semibold text-primary w-fit">
//               <Sparkles className="w-4 h-4" />
//               #1 STEM Provider in East Africa
//             </div>

//             {/* Headline â€” inspired by Progress template's editorial weight */}
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

//             {/* â”€â”€ Program icon pills â”€â”€ */}
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

//             {/* â”€â”€ CTAs â”€â”€ */}
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

//             {/* â”€â”€ Trust strip â”€â”€ */}
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

//           {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//               RIGHT â€” IMAGE CLUSTER
//           â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
//           <div className="relative flex items-center justify-center lg:justify-end h-[480px] sm:h-[560px] lg:h-[calc(100vh-7rem)] max-h-[700px]">

//             {/* â”€â”€ HEXAGON IMAGE CLUSTER (inspired by Progress template) â”€â”€ */}
//             <div className="relative w-full max-w-[480px] h-full">

//               {/* â”€â”€ Hex 1 â€” LARGE, main hero image â”€â”€ */}
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

//               {/* â”€â”€ Hex 2 â€” MEDIUM, bottom-left â”€â”€ */}
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

//               {/* â”€â”€ Hex 3 â€” SMALL, top-left accent â”€â”€ */}
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
//                   {/* Decorative hex â€” filled with pattern */}
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

//               {/* â”€â”€ Decorative corner accent lines (like Progress template) â”€â”€ */}
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

//               {/* â”€â”€ Floating stat card â€” Students â”€â”€ */}
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

//               {/* â”€â”€ Floating stat card â€” Schools â”€â”€ */}
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

//       {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//           BOTTOM FEATURE BAR (inspired by BraVaa)
//       â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
//       <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-[#e8e4dc] mt-4 lg:mt-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
//             {[
//               { icon: Code2, title: 'Coding & Robotics', desc: 'Project-based STEM for Grades 1â€“8' },
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

import { ArrowRight, Sparkles, Code2, Bot, Brain, Crown, Star, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HomeHero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'oklch(0.68 0.22 56)' }}
    >
      {/* â”€â”€ Keyframes â”€â”€ */}
      <style>{`
        @keyframes morphBlob {
          0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          33%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          66%  { border-radius: 50% 50% 40% 60% / 40% 70% 50% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }
        @keyframes floatSide {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(1.5deg); }
        }
        @keyframes ringRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.18; }
          50%       { opacity: 0.30; }
        }
        .blob-morph      { animation: morphBlob 10s ease-in-out infinite; }
        .blob-morph-alt  { animation: morphBlob 13s ease-in-out infinite reverse; }
        .blob-morph-slow { animation: morphBlob 16s ease-in-out infinite; }
        .float-up        { animation: floatUp 4s ease-in-out infinite; }
        .float-side      { animation: floatSide 5.5s ease-in-out infinite; }
        .ring-rotate     { animation: ringRotate 28s linear infinite; }
        .ring-pulse      { animation: ringPulse 4s ease-in-out infinite; }
      `}</style>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          BACKGROUND LAYERS (5-layer depth)
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

      {/* Layer 1 â€” Brighter amber glow orb, top-left */}
      <div
        className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, oklch(0.80 0.20 62) 0%, transparent 68%)' }}
      />
      {/* Layer 2 â€” Deeper amber orb, bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, oklch(0.52 0.22 46) 0%, transparent 68%)' }}
      />

      {/* Layer 3 â€” SVG noise grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
          opacity: 0.045,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Layer 4 â€” White polka-dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.20) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.55,
        }}
      />

      {/* Layer 5 â€” Diagonal white sheen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 55%, rgba(0,0,0,0.06) 100%)',
        }}
      />

      {/* â”€â”€ Navbar spacer â”€â”€ */}
      <div className="h-20 lg:h-24" />

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          MAIN CONTENT GRID
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100vh-7rem)]">

          {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
              LEFT â€” COPY
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
          <div className="space-y-8 z-10 relative order-2 lg:order-1">

            {/* Kicker pill */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold w-fit"
              style={{
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.38)',
                color: 'white',
              }}
            >
              <Sparkles className="w-4 h-4" />
              #1 STEM Provider in East Africa
              <Star className="w-3.5 h-3.5 fill-white opacity-80" />
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-[3.8rem] xl:text-[4.4rem] font-black leading-[1.06] tracking-tight"
              style={{ color: 'white', textShadow: '0 2px 32px rgba(0,0,0,0.12)' }}
            >
              Unlock Your<br />
              Child&apos;s{' '}
              <span
                className="italic"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(255,255,255,0.35)',
                  textDecorationThickness: '3px',
                  textUnderlineOffset: '6px',
                }}
              >
                STEM
              </span>
              <br />Potential.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl leading-relaxed max-w-[500px] font-medium"
              style={{ color: 'rgba(255,255,255,0.82)' }}
            >
              Master Coding, Robotics, Chess &amp; Abacus with Africa&apos;s leading
              educators. CBC-aligned, hands-on, proven results.
            </p>

            {/* Program pills */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: Code2,  label: 'Coding'   },
                { icon: Bot,    label: 'Robotics'  },
                { icon: Brain,  label: 'Abacus'   },
                { icon: Crown,  label: 'Chess'     },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.30)',
                    color: 'white',
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 w-full sm:w-auto"
                style={{
                  background: '#0f1117',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.28)',
                }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:bg-white/25 active:scale-95 w-full sm:w-auto"
                style={{
                  background: 'rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(14px)',
                  border: '2px solid rgba(255,255,255,0.40)',
                  color: 'white',
                }}
              >
                Explore Programs
              </a>
            </div>

            {/* Trust strip */}
            <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.22)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.60)' }}>
                Trusted by Kenya&apos;s Leading Schools
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {[
                  { icon: Users, value: '2,000+', label: 'Students' },
                  { icon: Star,  value: '30+',    label: 'Schools'  },
                  { icon: Crown, value: '98%',    label: 'Satisfaction' },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.65)' }} />
                    <span className="font-black text-white text-lg leading-none">{value}</span>
                    <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.65)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
              RIGHT â€” IMAGE CLUSTER
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
          <div
            className="relative order-1 lg:order-2"
            style={{ height: '520px', minHeight: '520px' }}
          >
            {/* â”€â”€ Rotating dashed ring behind center (positioned independently) â”€â”€ */}
            <svg
              className="ring-rotate ring-pulse absolute pointer-events-none"
              style={{ top: '50%', left: '50%', width: '420px', height: '420px', marginTop: '-210px', marginLeft: '-210px' }}
              viewBox="0 0 420 420"
              aria-hidden="true"
            >
              <circle cx="210" cy="210" r="200" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="14 10" />
              <circle cx="210" cy="210" r="170" fill="none" stroke="white" strokeWidth="1"   strokeDasharray="7 7" />
            </svg>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
                CENTER BLOB â€” wrapper pattern (FIX for stacking)
                Outer div: centering transform only (no animation)
                Inner div: morph + float animations only
            â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
            >
              <div
                className="blob-morph float-up overflow-hidden"
                style={{
                  width: '320px',
                  height: '320px',
                  border: '4px solid rgba(255,255,255,0.38)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.28), 0 0 0 10px rgba(255,255,255,0.08)',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/hero-banner1.jpg"
                    alt="Student learning STEM"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.22) 100%)' }}
                  />
                </div>
              </div>
            </div>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
                TOP-RIGHT BLOB â€” coding.jpg
            â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <div
              style={{ position: 'absolute', top: '2%', right: '2%', zIndex: 8 }}
            >
              <div
                className="blob-morph-alt float-side overflow-hidden"
                style={{
                  width: '190px',
                  height: '190px',
                  border: '3px solid rgba(255,255,255,0.30)',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.22)',
                  animationDelay: '1.2s',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/coding.jpg"
                    alt="Students coding"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
                BOTTOM-LEFT BLOB â€” chess.jpg
            â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
            <div
              style={{ position: 'absolute', bottom: '4%', left: '2%', zIndex: 8 }}
            >
              <div
                className="blob-morph-slow float-up overflow-hidden"
                style={{
                  width: '210px',
                  height: '210px',
                  border: '3px solid rgba(255,255,255,0.30)',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.22)',
                  animationDelay: '2.5s',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/chess.jpg"
                    alt="Students playing chess"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* â”€â”€ Glass stat card â€” Students (right-center) â”€â”€ */}
            <div
              className="absolute z-20 flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{
                bottom: '30%',
                right: '-4px',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.38)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-sm"
                style={{ background: '#0f1117', color: 'white' }}
              >
                2K+
              </div>
              <div>
                <p className="font-bold text-sm text-white leading-tight">Students</p>
                <p className="text-xs font-medium leading-tight" style={{ color: 'rgba(255,255,255,0.70)' }}>East Africa</p>
              </div>
            </div>

            {/* â”€â”€ Glass stat card â€” Schools (left-center) â”€â”€ */}
            <div
              className="absolute z-20 flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{
                top: '28%',
                left: '-4px',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.38)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-sm"
                style={{ background: '#0f1117', color: 'white' }}
              >
                30+
              </div>
              <div>
                <p className="font-bold text-sm text-white leading-tight">Schools</p>
                <p className="text-xs font-medium leading-tight" style={{ color: 'rgba(255,255,255,0.70)' }}>Partners</p>
              </div>
            </div>

          </div>
          {/* END right col */}

        </div>
      </div>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          BOTTOM FEATURE BAR
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        className="relative z-10"
        style={{
          background: 'rgba(0,0,0,0.18)',
          backdropFilter: 'blur(14px)',
          borderTop: '1px solid rgba(255,255,255,0.16)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Code2,  title: 'Coding & Robotics',  desc: 'Project-based STEM, Grades 1â€“8'     },
              { icon: Brain,  title: 'Abacus Mental Math',  desc: 'Speed & accuracy from Pre-Primary'  },
              { icon: Crown,  title: 'Chess Mastery',       desc: 'Strategy & critical thinking'       },
              { icon: Bot,    title: 'CBC-Aligned',          desc: 'Integrated into school curriculum' },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-3 rounded-xl transition-colors duration-200"
                style={{ cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.26)' }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white leading-tight">{title}</p>
                  <p className="text-xs mt-0.5 leading-snug" style={{ color: 'rgba(255,255,255,0.62)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

