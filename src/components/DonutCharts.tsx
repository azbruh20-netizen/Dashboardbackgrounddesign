import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export function DonutCharts() {
  const data = [
    { name: 'Total Actual', value: 920 },
    { name: 'Remaining', value: 80 }
  ];

  const COLORS = ['#3b82f6', '#1e293b'];

  const DonutChart = () => (
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={22}
              outerRadius={30}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-gray-300 text-xs">Total Actua...</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <span className="text-gray-300 text-xs">Total Budg...</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center space-y-6">
      <DonutChart />
      <DonutChart />
      <DonutChart />
    </div>
  );
}
