import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ModulePage } from './pages/ModulePage';
import { WorkflowsPage } from './pages/WorkflowsPage';
import { ScorecardPage } from './pages/ScorecardPage';
import { RoadmapPage } from './pages/RoadmapPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/module/:id" element={<ModulePage />} />
      <Route path="/workflows" element={<WorkflowsPage />} />
      <Route path="/scorecard" element={<ScorecardPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
    </Routes>
  );
}
