import { NextResponse } from 'next/server';
import { DashboardData } from '@/types/dashboard';

export async function GET() {
  // TODO: Replace with actual database query
  const data: DashboardData = {
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
  };

  return NextResponse.json(data);
} 