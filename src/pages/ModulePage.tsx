import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { courseModules } from '../data/courseData';
import { useProgress } from '../hooks/useProgress';

export function ModulePage() {
  const { id } = useParams();
  const m = courseModules.find(x => x.id === Number(id));
  const { completed, toggleLesson } = useProgress();

  if (!m) return <div className="p-8 text-center">Module not found</div>;

  const prev = courseModules.find(x => x.id === m.id - 1);
  const next = courseModules.find(x => x.id === m.id + 1);
  const doneLessons = m.lessons.filter(l => completed[l.id]).length;

  return (
    <div className="min-h-screen bg-surface-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-surface-200 p-6 mb-6">
          <div className="flex items-center gap-2 text-xs text-ink-50 mb-2">
            <Link to="/dashboard" className="hover:text-brand-600">Dashboard</Link>
            <span>›</span>
            <span>Module {m.id}</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-4xl">{m.icon}</span>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-ink-400">{m.title}</h1>
              <p className="text-sm text-ink-50 mt-1">{m.subtitle}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs text-ink-50">⏱ {m.duration}</span>
                <span className="text-xs text-ink-50">{doneLessons}/{m.lessons.length} complete</span>
              </div>
              <div className="w-full h-1.5 bg-surface-200 rounded-full overflow-hidden mt-2">
                <div className="h-full rounded-full transition-all" style={{ width: `${(doneLessons/m.lessons.length)*100}%`, backgroundColor: m.color }} />
              </div>
            </div>
          </div>
          {/* Key Tools */}
          <div className="flex flex-wrap gap-2 mt-4">
            {m.keyTools.map((t, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full border border-surface-300 text-ink-100">{t}</span>
            ))}
          </div>
          <div className="mt-3 text-xs bg-surface-100 rounded-lg p-3">
            <strong className="text-ink-200">Module Deliverable:</strong> {m.deliverable}
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-3">
          {m.lessons.map((l, i) => (
            <div key={l.id} className="bg-white rounded-xl border border-surface-200 overflow-hidden">
              <button
                onClick={() => toggleLesson(l.id)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-surface-100 transition-colors"
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs transition-all ${
                  completed[l.id] ? 'bg-brand-600 border-brand-600 text-white' : 'border-surface-300 text-transparent'
                }`}>
                  ✓
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${completed[l.id] ? 'text-ink-50 line-through' : 'text-ink-400'}`}>
                      {l.id}. {l.title}
                    </span>
                    <span className="text-xs text-ink-50">{l.duration}</span>
                  </div>
                </div>
              </button>
              <div className="px-4 pb-4 pl-13">
                <div className="flex flex-wrap gap-1.5 ml-9">
                  {l.topics.map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-0.5 rounded bg-surface-100 text-ink-100">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {prev ? (
            <Link to={`/module/${prev.id}`} className="px-4 py-2 bg-white border border-surface-200 rounded-lg text-sm text-ink-200 hover:border-brand-300 transition-colors">
              ← {prev.icon} Module {prev.id}
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/module/${next.id}`} className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm hover:bg-brand-700 transition-colors">
              Module {next.id} {next.icon} →
            </Link>
          ) : (
            <Link to="/dashboard" className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
              🎉 Back to Dashboard
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
