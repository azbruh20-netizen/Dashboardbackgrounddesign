export function MetricCards() {
  const metrics = [
    { value: '1bn', label: 'Total Approved Budget', change: '+12%' },
    { value: '920M', label: 'Total Actual Expenditure', change: '+8%' },
    { value: '$81.09M', label: 'Total Budget Remaining', change: '-4%' },
    { value: '91.9%', label: 'Budget Utilization', change: '+2%' }
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="bg-[#1a2942]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-[#1a2942]/80 transition-all"
        >
          <div className="flex flex-col">
            <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
            <p className="text-white text-3xl mb-2">{metric.value}</p>
            <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {metric.change} from last month
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
