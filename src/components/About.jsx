import React from 'react';
import { Palette, Zap, Sparkles, Layout, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      title: "Pixel-Perfect UI/UX",
      desc: "Translating design visions into fluid, accessible, and intuitive digital interfaces with flawless attention to detail.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Performance & Vitals",
      desc: "Optimizing render times, bundle efficiency, and asset delivery to guarantee blazing fast and responsive experiences.",
    },
    {
      icon: <Layout className="w-6 h-6 text-emerald-400" />,
      title: "Modular Component Systems",
      desc: "Engineering scalable design systems and reusable component architectures that stand the test of time.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: "Creative & Curious Vision",
      desc: "Passionate about modern animation techniques, emerging frontend standards, and intuitive user workflows.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafting modern, accessible, and high-performance web experiences
          </h2>
        </div>

        {/* Bio & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>{personal.bio}</p>
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{personal.availability}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-900/40 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              My Guiding Principles
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 mt-1 font-mono">01.</span>
                <span>User-first empathy with strict accessibility and mobile responsiveness.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 mt-1 font-mono">02.</span>
                <span>Clean, declarative, and maintainable component architectures.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 mt-1 font-mono">03.</span>
                <span>Limitless curiosity to learn, explore, and adopt cutting-edge frontend capabilities.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/80 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="p-3 w-fit rounded-xl bg-slate-800/80 border border-slate-700/60 mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-slate-400 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
