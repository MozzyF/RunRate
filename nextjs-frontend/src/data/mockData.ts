import { DashboardData } from '../types/dashboard';

export const mockDashboardData: DashboardData = {
  runRateSummary: {
    monthlyBurnRate: 250000,
    annualBurnRate: 3000000,
    budgetVariance: -5.2,
    forecastedRunway: 18,
    trend: 'down',
  },
  costBreakdown: {
    categories: [
      {
        id: '1',
        name: 'Salaries',
        amount: 150000,
        percentage: 60,
        trend: 'up',
      },
      {
        id: '2',
        name: 'Tools & Software',
        amount: 25000,
        percentage: 10,
        trend: 'stable',
      },
      {
        id: '3',
        name: 'Office & Facilities',
        amount: 35000,
        percentage: 14,
        trend: 'down',
      },
      {
        id: '4',
        name: 'Marketing',
        amount: 20000,
        percentage: 8,
        trend: 'up',
      },
      {
        id: '5',
        name: 'Other',
        amount: 20000,
        percentage: 8,
        trend: 'stable',
      },
    ],
    total: 250000,
    period: {
      start: '2024-01-01',
      end: '2024-01-31',
    },
  },
  projects: [
    {
      id: '1',
      name: 'Product Launch Q1',
      status: 'on-track',
      budget: 50000,
      spent: 35000,
      progress: 70,
      startDate: '2024-01-01',
      endDate: '2024-03-31',
    },
    {
      id: '2',
      name: 'Market Expansion',
      status: 'at-risk',
      budget: 75000,
      spent: 60000,
      progress: 80,
      startDate: '2024-01-01',
      endDate: '2024-06-30',
    },
    {
      id: '3',
      name: 'Tech Infrastructure Upgrade',
      status: 'delayed',
      budget: 100000,
      spent: 25000,
      progress: 25,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    },
  ],
  scenarios: [
    {
      id: '1',
      name: 'Conservative Growth',
      assumptions: {
        headcount: 25,
        monthlySpend: 250000,
        revenue: 200000,
      },
      impact: {
        runway: 24,
        burnRate: 50000,
        variance: -2.5,
      },
    },
    {
      id: '2',
      name: 'Aggressive Growth',
      assumptions: {
        headcount: 40,
        monthlySpend: 400000,
        revenue: 350000,
      },
      impact: {
        runway: 18,
        burnRate: 50000,
        variance: 5.0,
      },
    },
  ],
}; 