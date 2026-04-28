import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { courseModules } from '../data/courseData';
import { useProgress } from '../hooks/useProgress';

export function DashboardPage() {
  const { completed, pct, completedCount, totalLessons } = useProgress();

  const moduleProgress = (moduleId: number) => {
    const m = courseModules.find(x => x.id === moduleId)!;
    const done = m.lessons.filter(l => completed[l.id]).length;
    return { done, total: m.lessons.length, pct: Math.round((done / m.lessons.length) * 100) };
  };

  return (
    <div className="min-h-screen bg-surface-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-brand-700 to-brand-900 rounded-2xl p-6 mb-8 text-white">
          <h1 className="text-2xl font-bold mb-1">Your Progress</h1>
          <p className="text-brand-200 text-sm mb-4">{completedCount} of {totalLessons} lessons completed</p>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex justify-between text-xs text-brand-200 mt-2">
            <span>{pct}% complete</span>
            <span>{totalLessons - completedCount} remaining</span>
          </div>
        </div>

        {/* Module Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseModules.map(m => {
            const p = moduleProgress(m.id);
            return (
              <Link key={m.id} to={`/module/${m.id}`} className="bg-white rounded-xl border border-surface-200 p-5 card-hover group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{m.icon}</span>
                  <span className="text-xs text-ink-50">{m.duration}</span>
                </div>
                <h3 className="font-semibold text-ink-400 group-hover:text-brand-600 transition-colors text-sm">{m.title}</h3>
                <p className="text-xs text-ink-50 mt-1 mb-3">{m.subtitle}</p>
                <div className="w-full h-1.5 bg-surface-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-300" style={{ width: `${p.pct}%`, backgroundColor: m.color }} />
                </div>
                <div className="text-[10px] text-ink-50 mt-1">{p.done}/{p.total} lessons</div>
                <div className="mt-3 text-[10px] text-ink-50 bg-surface-100 rounded-lg p-2">
                  <strong className="text-ink-200">Deliverable:</strong> {m.deliverable}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Link to="/workflows" className="bg-white rounded-xl border border-surface-200 p-5 card-hover text-center">
            <span className="text-2xl">⚡</span>
            <h3 className="font-semibold text-sm mt-2">n8n Workflows</h3>
            <p className="text-xs text-ink-50 mt-1">13 automation workflows ready to deploy</p>
          </Link>
          <Link to="/scorecard" className="bg-white rounded-xl border border-surface-200 p-5 card-hover text-center">
            <span className="text-2xl">📊</span>
            <h3 className="font-semibold text-sm mt-2">SEO Scorecard</h3>
            <p className="text-xs text-ink-50 mt-1">Rate your pages with the 50-point system</p>
          </Link>
          <Link to="/roadmap" className="bg-white rounded-xl border border-surface-200 p-5 card-hover text-center">
            <span className="text-2xl">🗺️</span>
            <h3 className="font-semibold text-sm mt-2">90-Day Roadmap</h3>
            <p className="text-xs text-ink-50 mt-1">Week-by-week implementation plan</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
