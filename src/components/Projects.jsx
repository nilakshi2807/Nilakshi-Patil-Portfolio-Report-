import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base">
            Hand-picked selection of responsive web applications, academic portals, and database utilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden hover:border-slate-700/80 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {/* Badge overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-800/40">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-800/40">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
