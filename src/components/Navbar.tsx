import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/workflows', label: 'Workflows' },
  { to: '/scorecard', label: 'Scorecard' },
  { to: '/roadmap', label: 'Roadmap' },
];

export function Navbar() {
  const loc = useLocation();
  return (
    <nav className="sticky top-0 z-50 glass border-b border-surface-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-ink-400">
          <span className="text-xl">🔍</span>
          <span className="hidden sm:inline">Authority Engine</span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                loc.pathname === l.to
                  ? 'bg-brand-600 text-white'
                  : 'text-ink-100 hover:bg-surface-200'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
