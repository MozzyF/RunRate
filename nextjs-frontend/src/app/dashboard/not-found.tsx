import Layout from '@/components/Layout';
import { FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function DashboardNotFound() {
  return (
    <Layout>
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <FileQuestion className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Dashboard not found
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            The dashboard you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </Layout>
  );
} 