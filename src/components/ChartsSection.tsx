import { DonutCharts } from './DonutCharts';
import { StatusCharts } from './StatusCharts';

export function ChartsSection() {
  return (
    <div className="flex-1 bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-xl p-5">
      <div className="grid grid-cols-4 gap-6 h-full">
        <DonutCharts />
        <div className="col-span-3">
          <StatusCharts />
        </div>
      </div>
    </div>
  );
}
