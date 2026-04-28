import { Navbar } from '../components/Navbar';
import { n8nWorkflows } from '../data/courseData';
import { useState } from 'react';

export function WorkflowsPage() {
  const [filter, setFilter] = useState('all');
  const frequencies = ['all', ...new Set(n8nWorkflows.map(w => w.frequency))];

  const filtered = filter === 'all' ? n8nWorkflows : n8nWorkflows.filter(w => w.frequency === filter);

  return (
    <div className="min-h-screen bg-surface-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-ink-400 mb-1">⚡ n8n Workflow Arsenal</h1>
        <p className="text-sm text-ink-50 mb-6">13 production-ready automation workflows from the Rank Expand Academy</p>

        <div className="flex gap-2 mb-6 flex-wrap">
          {frequencies.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === f ? 'bg-brand-600 text-white' : 'bg-white border border-surface-200 text-ink-100 hover:bg-surface-100'
            }`}>
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((w, i) => (
            <div key={i} className="bg-white rounded-xl border border-surface-200 p-4 card-hover">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-ink-400">{w.name}</h3>
                  <p className="text-xs text-ink-50 mt-1">{w.description}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  w.frequency === 'Daily' ? 'bg-red-100 text-red-700' :
                  w.frequency === 'Weekly' ? 'bg-orange-100 text-orange-700' :
                  w.frequency === 'Monthly' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {w.frequency}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded bg-surface-100 text-ink-50">APIs: {w.apis}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
