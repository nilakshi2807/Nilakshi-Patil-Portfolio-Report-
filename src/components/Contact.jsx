import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 text-base">
            Have an open role, an exciting project, or simply want to say hello? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-sm text-slate-400 mb-6">
                I typically respond within 24 hours. Feel free to copy my direct email or connect on social platforms.
              </p>

              {/* Direct email card with copy button */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/40 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-200 truncate">{personal.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/40 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-200">{personal.location}</div>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-950/40 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Status
                </div>
                <div className="text-xs text-slate-300">
                  {personal.availability}
                </div>
              </div>
            </div>

            {/* Quick social links */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/70">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                Connect Directly
              </h4>
              <div className="space-y-2.5">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-medium text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-medium text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl relative backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Fill out the form below and I'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-center animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Message Sent!</h4>
                  <p className="text-sm text-emerald-200/80">
                    Thank you for reaching out. I've received your note and will reply shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Hi ${personal.name.split(' ')[0]}, I'd like to talk about...`}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
