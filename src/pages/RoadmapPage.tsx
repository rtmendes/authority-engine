import { Navbar } from '../components/Navbar';
import { useState } from 'react';

const weeks = [
  { week: '1', phase: 'Foundation', focus: 'Research & Planning', tasks: ['Select niche via DEEPR framework', 'Draft semantic branch map (50-100 pages)', 'Set up n8n + DataforSEO + GSC', 'Competitive analysis of top 5 competitors'], module: 'M1, M2', color: 'bg-blue-500' },
  { week: '2', phase: 'Technical', focus: 'Site Infrastructure', tasks: ['Deploy schema markup (Article, FAQ, Breadcrumb)', 'Optimize page speed (LCP < 2.5s)', 'Configure Cloudflare CDN with WebP', 'Submit XML sitemap to Search Console'], module: 'M3', color: 'bg-purple-500' },
  { week: '3', phase: 'Automation', focus: 'Workflow Deployment', tasks: ['Deploy n8n keyword research workflow', 'Deploy content briefing workflow', 'Set up SEO health monitor (daily)', 'Configure competitor change tracker'], module: 'M8', color: 'bg-indigo-500' },
  { week: '4', phase: 'Content', focus: 'Initial Content Push', tasks: ['Publish first 20 pages with full schema', 'Build interlinking between all pages', 'Complete PAA mining for niche', 'Write semantic snippets for top 20 queries'], module: 'M2, M4, M9', color: 'bg-green-500' },
  { week: '5-6', phase: 'Content Scale', focus: 'Production Pipeline', tasks: ['Scale to 5 pages/day with AI pipeline', '50+ pages live with triple-optimization', 'FAQ schema on all pages', 'Feature snippet targeting for top queries'], module: 'M4, M9', color: 'bg-emerald-500' },
  { week: '7-8', phase: 'Authority', focus: 'Outreach + LLM Seeding', tasks: ['Set up Instantly + Hunter.io', 'Send 100 outreach emails', 'Acquire 30+ backlinks', 'Launch Reddit/Quora seeding campaign', 'Complete entity establishment'], module: 'M5, M6', color: 'bg-orange-500' },
  { week: '9-10', phase: 'Microsites', focus: 'Build & Launch', tasks: ['Build 3 microsites', 'Claim GBP for each', 'Submit 50 citations per site', 'Build 10+ backlinks per site'], module: 'M7', color: 'bg-pink-500' },
  { week: '11-12', phase: 'Optimize', focus: 'Measure & Scale', tasks: ['Full KPI dashboard live', 'Refresh underperforming pages', 'Scale winning content angles', '90-day review and next quarter plan'], module: 'M10', color: 'bg-teal-500' },
];

export function RoadmapPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem('ae-roadmap') || '{}'); } catch { return {}; }
  });

  const toggle = (key: string) => {
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    localStorage.setItem('ae-roadmap', JSON.stringify(next));
  };

  return (
    <div className="min-h-screen bg-surface-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-ink-400 mb-1">🗺️ 90-Day Implementation Roadmap</h1>
        <p className="text-sm text-ink-50 mb-8">Week-by-week action plan to total search domination</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-surface-200" />

          <div className="space-y-6">
            {weeks.map((w, wi) => (
              <div key={wi} className="relative pl-12">
                <div className={`absolute left-2.5 top-2 w-3 h-3 rounded-full ${w.color}`} />
                <div className="bg-white rounded-xl border border-surface-200 p-5 card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full text-white ${w.color}`}>Week {w.week}</span>
                      <span className="text-[10px] text-ink-50 ml-2">{w.module}</span>
                    </div>
                    <span className="text-xs font-medium text-ink-200">{w.phase}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-ink-400 mb-3">{w.focus}</h3>
                  <div className="space-y-2">
                    {w.tasks.map((t, ti) => {
                      const key = `${wi}-${ti}`;
                      return (
                        <button key={ti} onClick={() => toggle(key)} className="flex items-center gap-2 text-left w-full group">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] transition-all ${
                            checked[key] ? 'bg-brand-600 border-brand-600 text-white' : 'border-surface-300 group-hover:border-brand-400'
                          }`}>
                            {checked[key] && '✓'}
                          </div>
                          <span className={`text-xs ${checked[key] ? 'text-ink-50 line-through' : 'text-ink-200'}`}>{t}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
