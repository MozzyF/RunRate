import Layout from '@/components/Layout';

export default function DashboardLoading() {
  return (
    <Layout>
      <div className="space-y-6 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
} 