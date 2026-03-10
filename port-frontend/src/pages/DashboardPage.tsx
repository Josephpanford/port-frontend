import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Group } from '../types';

export const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  const mockGroups: Group[] = [
    { id: '1', name: 'Engineering Team', description: 'Technical discussions and updates' },
    { id: '2', name: 'Product Updates', description: 'Product roadmap and feature announcements' },
    { id: '3', name: 'General', description: 'Company-wide conversations' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Port Dashboard</h1>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Groups</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGroups.map((group) => (
              <Link
                key={group.id}
                to={`/groups/${group.id}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.name}</h3>
                <p className="text-gray-600 text-sm">{group.description}</p>
                <div className="mt-4 text-indigo-600 text-sm font-medium hover:text-indigo-800">
                  Enter group →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md">
              Create New Group
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
