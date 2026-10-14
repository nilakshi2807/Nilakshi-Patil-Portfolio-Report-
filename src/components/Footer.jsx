import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06070a] border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <span className="text-lg font-bold text-white">
              {personal.name}
            </span>
            <p className="text-xs text-slate-500 mt-1">
              {personal.role} • Crafting dependable web applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {personal.socials.github && personal.socials.github !== '#' && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {personal.socials.linkedin && personal.socials.linkedin !== '#' && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {personal.socials.twitter && personal.socials.twitter !== '#' && (
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
