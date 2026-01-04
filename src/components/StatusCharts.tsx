export function StatusCharts() {
  const projectStatus = [
    { label: 'Study (Feasibility)', value: 75 },
    { label: 'Other Study/Project r...', value: 35 },
    { label: 'Design (FEED)', value: 10 },
    { label: 'Implement', value: 10 }
  ];

  const statusById1 = [
    { label: 'At to Start', value: 85 },
    { label: 'In Progress', value: 80 },
    { label: 'Completed', value: 20 },
    { label: 'On Hold', value: 20 }
  ];

  const statusById2 = [
    { label: 'At to Start', value: 90 },
    { label: 'In Progress', value: 90 },
    { label: 'Completed', value: 25 },
    { label: 'On Hold', value: 25 }
  ];

  const BarChart = ({ title, data }: { title: string, data: any[] }) => (
    <div>
      <h3 className="text-white/90 mb-3 text-sm">{title}</h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-32 text-white/70 text-xs truncate">{item.label}</div>
            <div className="flex-1 bg-slate-800/50 rounded h-5 overflow-hidden">
              <div 
                className="bg-blue-500 h-full rounded transition-all duration-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-3 gap-6 h-full">
      <div className="flex flex-col justify-center">
        <BarChart title="Project Status" data={projectStatus} />
      </div>
      <div className="flex flex-col justify-center">
        <BarChart title="Count of Status_ID by Status_ID" data={statusById1} />
      </div>
      <div className="flex flex-col justify-center">
        <BarChart title="Count of Status_ID by Status_ID" data={statusById2} />
      </div>
    </div>
  );
}
