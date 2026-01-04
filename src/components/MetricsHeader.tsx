export function MetricsHeader() {
  const metrics = [
    { value: '1bn', label: 'Total Approved Budget' },
    { value: '920M', label: 'Total Actual Expenditure' },
    { value: '$81.09, MM', label: 'Total Budget Remaining' },
    { value: '91.9%', label: 'Budget Utilization %' }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center py-3">
          <div className="text-white text-xl mb-1">{metric.value}</div>
          <div className="text-gray-400 text-xs">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
