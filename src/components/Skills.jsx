import React from 'react';
import { Layout, Server, Database, Wrench, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    'Frontend Development': <Layout className="w-5 h-5 text-cyan-400" />,
    'Backend Programming': <Server className="w-5 h-5 text-indigo-400" />,
    'Database & Cloud': <Database className="w-5 h-5 text-purple-400" />,
    'Tools & DevOps': <Wrench className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Expertise & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technologies & Tools
          </h2>
          <p className="text-slate-400 text-base">
            A comprehensive overview of the modern tools and frameworks I use in development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group shadow-lg"
            >
              {/* Subtle top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  {categoryIcons[category.category] || <Layout className="w-5 h-5 text-cyan-400" />}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.category}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/60 border border-slate-700/60 hover:border-cyan-500/60 hover:bg-slate-800 hover:text-white transition-all shadow-sm cursor-default"
                  >
                    <Check className="w-3 h-3 text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
