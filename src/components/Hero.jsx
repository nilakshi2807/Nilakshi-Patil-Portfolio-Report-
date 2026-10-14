import React from 'react';
import { ArrowRight, Mail, Sparkles, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] glow-gradient-indigo blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[280px] glow-gradient-cyan blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[360px] h-[280px] glow-gradient-purple blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md mb-8 hover:border-cyan-500/50 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 tracking-wide">
            {personal.availability}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
            {personal.name}
          </span>
          <br />
          <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-200 mt-2 block">
            {personal.role}
          </span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 font-normal leading-relaxed mb-10">
          {personal.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Get in Touch
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-base font-medium text-slate-300 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 hover:text-white transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {personal.socials.github && personal.socials.github !== '#' && (
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:-translate-y-1"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {personal.socials.linkedin && personal.socials.linkedin !== '#' && (
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:-translate-y-1"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          {personal.socials.twitter && personal.socials.twitter !== '#' && (
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:-translate-y-1"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              aria-label="Direct Email"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
