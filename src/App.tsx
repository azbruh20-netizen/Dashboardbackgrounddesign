import { DashboardLayout } from './components/DashboardLayout';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] via-[#0a1525] to-black flex items-center justify-center p-8">
      <div className="w-[1280px] h-[720px]">
        <DashboardLayout />
      </div>
    </div>
  );
}
