'use client';

import { Check } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  coding: boolean;
  robotics: boolean;
  abacus: boolean;
  chess: boolean;
}

const comparison: ComparisonRow[] = [
  { feature: 'Hands-On Learning', coding: true, robotics: true, abacus: true, chess: true },
  { feature: 'Project-Based', coding: true, robotics: true, abacus: false, chess: false },
  { feature: 'Group Activities', coding: true, robotics: true, abacus: true, chess: true },
  { feature: 'One-on-One Support', coding: true, robotics: true, abacus: true, chess: true },
  { feature: 'Certificate Program', coding: true, robotics: true, abacus: true, chess: true },
  { feature: 'Advanced Modules', coding: true, robotics: true, abacus: false, chess: true },
  { feature: 'Competitive Opportunities', coding: false, robotics: true, abacus: false, chess: true },
  { feature: 'Summer Programs', coding: true, robotics: true, abacus: true, chess: true }
];

export function ProgramComparison() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Program Comparison</h2>
          <p className="text-lg text-foreground/60">Detailed breakdown of features across all programs</p>
        </div>

        <div className="overflow-x-auto animate-fade-in-up">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-4 px-6 font-bold text-foreground">Features</th>
                <th className="text-center py-4 px-6 font-bold text-foreground">Coding</th>
                <th className="text-center py-4 px-6 font-bold text-foreground">Robotics</th>
                <th className="text-center py-4 px-6 font-bold text-foreground">Abacus</th>
                <th className="text-center py-4 px-6 font-bold text-foreground">Chess</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/10 hover:bg-primary/5 transition-colors duration-200"
                >
                  <td className="py-4 px-6 font-medium text-foreground/80">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {row.coding && <Check className="w-6 h-6 text-primary mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.robotics && <Check className="w-6 h-6 text-primary mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.abacus && <Check className="w-6 h-6 text-primary mx-auto" />}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.chess && <Check className="w-6 h-6 text-primary mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
