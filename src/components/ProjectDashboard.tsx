import { MetricsHeader } from './MetricsHeader';
import { ChartsSection } from './ChartsSection';
import { ProjectTable } from './ProjectTable';

export function ProjectDashboard() {
  return (
    <div className="relative z-10 h-full flex flex-col p-6 gap-4">
      <MetricsHeader />
      <ChartsSection />
      <ProjectTable />
    </div>
  );
}
