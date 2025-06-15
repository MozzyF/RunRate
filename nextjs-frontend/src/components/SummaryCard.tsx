import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
  icon: React.ReactNode;
  className?: string;
}

export default function SummaryCard({
  title,
  value,
  trend,
  trendValue,
  icon,
  className = '',
}: SummaryCardProps) {
  const formatValue = (value: number) => {
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

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 dark:text-green-400';
      case 'down':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={`rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          {icon}
        </div>
        {trend !== 'stable' && (
          <div className={`flex items-center space-x-1 ${getTrendColor(trend)}`}>
            {getTrendIcon(trend)}
            <span className="text-sm font-medium">{formatPercentage(trendValue)}</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
          {formatValue(value)}
        </p>
      </div>
    </div>
  );
} 