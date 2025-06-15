'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SummaryCard from '@/components/SummaryCard';
import CostBreakdownChart from '@/components/CostBreakdownChart';
import ProjectsTable from '@/components/ProjectsTable';
import ScenariosList from '@/components/ScenariosList';
import { DashboardData } from '@/types/dashboard';
import { DollarSign, TrendingUp, TrendingDown, Percent } from 'lucide-react';

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // For now, use mock data
        setData({
          runRateSummary: {
            totalRevenue: 2500000,
            totalExpenses: 1800000,
            netIncome: 700000,
            revenueGrowth: 0.15,
            expenseGrowth: 0.08,
            profitMargin: 0.28,
          },
          costBreakdown: [
            { id: '1', name: 'Personnel', amount: 1200000, percentage: 0.67 },
            { id: '2', name: 'Office Space', amount: 300000, percentage: 0.17 },
            { id: '3', name: 'Technology', amount: 200000, percentage: 0.11 },
            { id: '4', name: 'Other', amount: 100000, percentage: 0.05 },
          ],
          projects: [
            {
              id: '1',
              name: 'Product Launch',
              status: 'On Track',
              budget: 500000,
              spent: 350000,
            },
            {
              id: '2',
              name: 'Market Expansion',
              status: 'At Risk',
              budget: 750000,
              spent: 600000,
            },
            {
              id: '3',
              name: 'R&D Initiative',
              status: 'Off Track',
              budget: 1000000,
              spent: 950000,
            },
          ],
          scenarios: [
            {
              id: '1',
              name: 'Base Case',
              type: 'Base',
              description: 'Current market conditions and growth trajectory',
              metrics: [
                { name: 'Revenue', value: 2500000, change: 0.15 },
                { name: 'Headcount', value: 150, change: 0.1 },
                { name: 'Office Space', value: 10000, change: 0.05 },
              ],
            },
            {
              id: '2',
              name: 'Optimistic Growth',
              type: 'Optimistic',
              description: 'Accelerated market adoption and expansion',
              metrics: [
                { name: 'Revenue', value: 3000000, change: 0.25 },
                { name: 'Headcount', value: 180, change: 0.2 },
                { name: 'Office Space', value: 12000, change: 0.1 },
              ],
            },
            {
              id: '3',
              name: 'Conservative Outlook',
              type: 'Conservative',
              description: 'Market challenges and slower growth',
              metrics: [
                { name: 'Revenue', value: 2000000, change: 0.05 },
                { name: 'Headcount', value: 120, change: -0.05 },
                { name: 'Office Space', value: 8000, change: -0.1 },
              ],
            },
          ],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <div className="text-lg text-gray-600 dark:text-gray-400">Loading dashboard...</div>
        </div>
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <div className="text-lg text-red-600 dark:text-red-400">Failed to load dashboard data</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Total Revenue"
            value={data.runRateSummary.totalRevenue}
            trend={data.runRateSummary.revenueGrowth > 0 ? 'up' : 'down'}
            trendValue={Math.abs(data.runRateSummary.revenueGrowth)}
            icon={<DollarSign className="h-6 w-6" />}
          />
          <SummaryCard
            title="Total Expenses"
            value={data.runRateSummary.totalExpenses}
            trend={data.runRateSummary.expenseGrowth > 0 ? 'up' : 'down'}
            trendValue={Math.abs(data.runRateSummary.expenseGrowth)}
            icon={<DollarSign className="h-6 w-6" />}
          />
          <SummaryCard
            title="Net Income"
            value={data.runRateSummary.netIncome}
            trend={data.runRateSummary.netIncome > 0 ? 'up' : 'down'}
            trendValue={Math.abs(data.runRateSummary.netIncome)}
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <SummaryCard
            title="Profit Margin"
            value={data.runRateSummary.profitMargin}
            trend={data.runRateSummary.profitMargin > 0 ? 'up' : 'down'}
            trendValue={Math.abs(data.runRateSummary.profitMargin)}
            icon={<Percent className="h-6 w-6" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CostBreakdownChart data={data.costBreakdown} />
          <ProjectsTable data={data.projects} />
        </div>

        <ScenariosList data={data.scenarios} />
      </div>
    </Layout>
  );
} 