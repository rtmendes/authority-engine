import { Link } from 'react-router-dom';
import { courseModules } from '../data/courseData';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-4 py-1.5 text-sm text-brand-300 mb-6 border border-brand-500/30">
          <span>🔍</span> 10 Modules · 150 Minutes · $10K Value
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent leading-tight">
          The Authority Engine
        </h1>
        <p className="text-xl md:text-2xl text-brand-200 font-medium mb-2">
          SEO × AEO × LLM Topical Domination
        </p>
        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The complete system for ranking #1 on Google, dominating AI Overviews,
          and getting cited by ChatGPT, Gemini & Perplexity. Built from 3 premium
          SEO programs, 150+ tested strategies, and 20+ production-ready n8n workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/dashboard" className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-600/30">
            Open Dashboard →
          </Link>
          <a href="#modules" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/20">
            View Modules
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '977', label: 'Source Files Analyzed' },
            { val: '150+', label: 'Tested Strategies' },
            { val: '20+', label: 'n8n Workflows' },
            { val: '13', label: 'API Integrations' },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-brand-400">{s.val}</div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div id="modules" className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">10 Modules to Total Search Domination</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {courseModules.map(m => (
            <Link key={m.id} to={`/module/${m.id}`} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{m.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 mb-1">Module {m.id} · {m.duration}</div>
                  <h3 className="font-semibold text-white group-hover:text-brand-300 transition-colors">{m.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{m.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.keyTools.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/20">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Three Pillars */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-10">The Three-Pillar Domination Model</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '🔍', title: 'Traditional SEO', pct: '50%', desc: 'Semantic branching, technical mastery, and off-page authority that compounds over time', color: 'from-blue-500/20 to-blue-600/10' },
            { icon: '🤖', title: 'Answer Engine Optimization', pct: '30%', desc: 'Semantic snippets, PAA domination, and structured data that AI Overviews pull from', color: 'from-purple-500/20 to-purple-600/10' },
            { icon: '🧠', title: 'Generative Engine Optimization', pct: '20%', desc: 'Entity establishment, LLM seeding, and content that ChatGPT & Gemini cite by name', color: 'from-orange-500/20 to-orange-600/10' },
          ].map((p, i) => (
            <div key={i} className={`bg-gradient-to-b ${p.color} border border-white/10 rounded-xl p-6 text-center`}>
              <span className="text-3xl">{p.icon}</span>
              <div className="text-3xl font-bold text-white mt-3">{p.pct}</div>
              <h3 className="font-semibold text-white mt-1">{p.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
        The Authority Engine — Synthesized by Viktor AI · InsightProfit Revenue Intelligence
      </div>
    </div>
  );
}
