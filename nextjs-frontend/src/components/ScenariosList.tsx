import { Scenario } from '../types/dashboard';
import { TrendingUp, TrendingDown, DollarSign, Users, Building2 } from 'lucide-react';

interface ScenariosListProps {
  data: Scenario[];
  className?: string;
}

export default function ScenariosList({ data, className = '' }: ScenariosListProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  const getMetricIcon = (metric: string) => {
    switch (metric.toLowerCase()) {
      case 'revenue':
        return <DollarSign className="h-5 w-5" />;
      case 'headcount':
        return <Users className="h-5 w-5" />;
      case 'office space':
        return <Building2 className="h-5 w-5" />;
      default:
        return <TrendingUp className="h-5 w-5" />;
    }
  };

  const getTrendIcon = (value: number) => {
    if (value > 0) {
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    }
    if (value < 0) {
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    }
    return null;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {data.map((scenario) => (
        <div
          key={scenario.id}
          className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{scenario.name}</h3>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {scenario.type}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{scenario.description}</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scenario.metrics.map((metric) => (
              <div
                key={metric.name}
                className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  {getMetricIcon(metric.name)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{metric.name}</p>
                  <div className="mt-1 flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {metric.name.toLowerCase() === 'revenue'
                        ? formatCurrency(metric.value)
                        : metric.value.toLocaleString()}
                    </span>
                    {metric.change !== 0 && (
                      <div className="flex items-center space-x-1">
                        {getTrendIcon(metric.change)}
                        <span
                          className={`text-sm ${
                            metric.change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                          }`}
                        >
                          {formatPercentage(Math.abs(metric.change))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 