import { useState } from 'react';
import { Project } from '../types/dashboard';
import { ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsTableProps {
  data: Project[];
  className?: string;
}

type SortField = 'name' | 'status' | 'budget' | 'spent';
type SortDirection = 'asc' | 'desc';

export default function ProjectsTable({ data, className = '' }: ProjectsTableProps) {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

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

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const multiplier = sortDirection === 'asc' ? 1 : -1;
    if (sortField === 'name') {
      return multiplier * a.name.localeCompare(b.name);
    }
    if (sortField === 'status') {
      return multiplier * a.status.localeCompare(b.status);
    }
    if (sortField === 'budget') {
      return multiplier * (a.budget - b.budget);
    }
    return multiplier * (a.spent - b.spent);
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on track':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'at risk':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'off track':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className={`rounded-lg bg-white shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleSort('name')}
                >
                  <span>Project</span>
                  {sortField === 'name' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleSort('status')}
                >
                  <span>Status</span>
                  {sortField === 'status' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleSort('budget')}
                >
                  <span>Budget</span>
                  {sortField === 'budget' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                <button
                  className="flex items-center space-x-1"
                  onClick={() => handleSort('spent')}
                >
                  <span>Spent</span>
                  {sortField === 'spent' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Progress
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
            {sortedData.map((project) => (
              <tr key={project.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{project.name}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {formatCurrency(project.budget)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {formatCurrency(project.spent)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="w-full max-w-xs">
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="absolute left-0 top-0 h-full bg-blue-600 dark:bg-blue-500"
                        style={{ width: formatPercentage(project.spent / project.budget) }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {formatPercentage(project.spent / project.budget)}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 