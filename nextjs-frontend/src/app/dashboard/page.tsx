'use client';

import React, { useState } from 'react';
import { BudgetGrid } from '@/components/BudgetGrid';
import { ForecastToggle } from '@/components/ForecastToggle';
import { SummaryChart } from '@/components/SummaryChart';

// Mock data - replace with actual API calls
const mockData = {
  budgetItems: [
    {
      id: '1',
      category: 'Salary',
      months: {
        Jan: 5000,
        Feb: 5000,
        Mar: 5000,
      },
    },
    {
      id: '2',
      category: 'Rent',
      months: {
        Jan: -1500,
        Feb: -1500,
        Mar: -1500,
      },
    },
  ],
  summaryData: {
    labels: ['Jan', 'Feb', 'Mar'],
    income: [5000, 5000, 5000],
    expenses: [2000, 2000, 2000],
    balance: [3000, 3000, 3000],
  },
};

export default function DashboardPage() {
  const [isAIForecast, setIsAIForecast] = useState(false);
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  const handleBudgetUpdate = (id: string, month: string, value: number) => {
    // TODO: Implement API call to update budget
    console.log('Update budget:', { id, month, value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Financial Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Track and forecast your personal finances
          </p>
        </div>

        <div className="mb-8">
          <ForecastToggle isAIForecast={isAIForecast} onToggle={setIsAIForecast} />
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Cash Flow Summary</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setChartType('bar')}
                className={`px-3 py-1 rounded ${
                  chartType === 'bar'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border'
                }`}
              >
                Bar
              </button>
              <button
                onClick={() => setChartType('line')}
                className={`px-3 py-1 rounded ${
                  chartType === 'line'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border'
                }`}
              >
                Line
              </button>
            </div>
          </div>
          <SummaryChart data={mockData.summaryData} type={chartType} />
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Budget Grid</h2>
          </div>
          <div className="p-6">
            <BudgetGrid data={mockData.budgetItems} onUpdate={handleBudgetUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
} 