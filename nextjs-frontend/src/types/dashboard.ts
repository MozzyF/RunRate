export interface RunRateSummary {
  totalRevenue: number;
  totalExpenses: number;
  netIncome: number;
  revenueGrowth: number;
  expenseGrowth: number;
  profitMargin: number;
}

export interface CostCategory {
  id: string;
  name: string;
  amount: number;
  percentage: number;
}

export interface Project {
  id: string;
  name: string;
  status: 'On Track' | 'At Risk' | 'Off Track';
  budget: number;
  spent: number;
}

export interface Metric {
  name: string;
  value: number;
  change: number;
}

export interface Scenario {
  id: string;
  name: string;
  type: 'Optimistic' | 'Base' | 'Conservative';
  description: string;
  metrics: Metric[];
}

export interface DashboardData {
  runRateSummary: RunRateSummary;
  costBreakdown: CostCategory[];
  projects: Project[];
  scenarios: Scenario[];
} 