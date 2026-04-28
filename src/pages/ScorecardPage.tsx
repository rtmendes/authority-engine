import { Navbar } from '../components/Navbar';
import { useState } from 'react';

const criteria = [
  { name: 'Keyword in H1, URL, meta title, first paragraph', max: 5 },
  { name: 'FAQ schema with 5+ Q&As', max: 5 },
  { name: 'Semantic snippets (40-80 word extractable answers)', max: 5 },
  { name: 'Unique data / research / named framework', max: 5 },
  { name: 'Author bio with PersonMarkup', max: 5 },
  { name: '3+ internal links to hub and sibling pages', max: 5 },
  { name: 'Original images or infographics', max: 5 },
  { name: 'Clear definitions using "X is..." format', max: 5 },
  { name: 'Proper heading hierarchy (H1→H2→H3)', max: 5 },
  { name: 'Updated timestamp visible', max: 5 },
];

export function ScorecardPage() {
  const [scores, setScores] = useState<number[]>(criteria.map(() => 0));
  const [pageUrl, setPageUrl] = useState('');
  const total = scores.reduce((a, b) => a + b, 0);
  const max = criteria.reduce((a, b) => a + b.max, 0);
  const grade = total >= 40 ? 'A' : total >= 30 ? 'B' : total >= 20 ? 'C' : 'D';
  const gradeColor = total >= 40 ? 'text-green-600' : total >= 30 ? 'text-blue-600' : total >= 20 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-surface-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-ink-400 mb-1">📊 Triple-Optimized Content Scorecard</h1>
        <p className="text-sm text-ink-50 mb-6">Rate each page before publishing. Target: 40+ out of 50.</p>

        <div className="bg-white rounded-2xl border border-surface-200 p-6 mb-6">
          <input
            type="text"
            placeholder="Enter page URL to score..."
            value={pageUrl}
            onChange={e => setPageUrl(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-surface-200 text-sm mb-6 focus:outline-none focus:border-brand-400"
          />
          
          <div className="space-y-3">
            {criteria.map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1">
                  <span className="text-sm text-ink-200">{c.name}</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: c.max + 1 }, (_, v) => (
                    <button
                      key={v}
                      onClick={() => setScores(s => s.map((x, j) => j === i ? v : x))}
                      className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                        scores[i] === v
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'bg-surface-100 text-ink-50 hover:bg-surface-200'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score Summary */}
        <div className="bg-white rounded-2xl border border-surface-200 p-6 text-center">
          <div className={`text-6xl font-bold ${gradeColor}`}>{total}<span className="text-2xl text-ink-50">/{max}</span></div>
          <div className={`text-3xl font-bold mt-2 ${gradeColor}`}>Grade: {grade}</div>
          <p className="text-sm text-ink-50 mt-2">
            {total >= 40 ? '✅ Ready to publish! This page is optimized for Google, AI Overviews, AND LLMs.' :
             total >= 30 ? '⚠️ Good foundation. Improve weak areas before publishing.' :
             total >= 20 ? '🔧 Needs work. Focus on the criteria scoring 0-1.' :
             '❌ Not ready. Major improvements needed across multiple criteria.'}
          </p>
        </div>
      </div>
    </div>
  );
}
