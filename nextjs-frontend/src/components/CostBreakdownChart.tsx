import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CostCategory } from '../types/dashboard';

interface CostBreakdownChartProps {
  data: CostCategory[];
  className?: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function CostBreakdownChart({ data, className = '' }: CostBreakdownChartProps) {
  const formatValue = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className={`rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 ${className}`}>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">Cost Breakdown</h3>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="amount"
              nameKey="name"
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => formatValue(value)}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                padding: '0.5rem',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {data.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatValue(item.amount)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 