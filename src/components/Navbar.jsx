import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            {portfolioData.personal.name.split(' ')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-indigo-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-sm hover:shadow-cyan-500/10"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1017] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
