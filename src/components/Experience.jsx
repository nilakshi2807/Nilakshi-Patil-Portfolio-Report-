import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-base">
            My professional career path and educational background in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-800/50 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {experience.map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-400/50" />

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/40">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <span className="font-semibold text-slate-300">{item.company}</span>
                      {item.location && (
                        <span className="flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-indigo-950/70 border border-indigo-800/50 text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-400 group-hover:bg-indigo-400 transition-colors shadow-sm shadow-indigo-400/50" />

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/40">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-slate-300 mb-3">
                      {item.institution}
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
