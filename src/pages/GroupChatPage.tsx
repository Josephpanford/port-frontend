import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Message } from '../types';

export const GroupChatPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();

  const mockMessages: Message[] = [
    {
      id: '1',
      groupId: groupId || '1',
      senderName: 'Alice Johnson',
      content: 'Hey team! How is the new feature coming along?',
      timestamp: '2024-01-15T10:30:00Z',
    },
    {
      id: '2',
      groupId: groupId || '1',
      senderName: 'Bob Smith',
      content: 'Making good progress! Should be ready for testing by tomorrow.',
      timestamp: '2024-01-15T10:35:00Z',
    },
    {
      id: '3',
      groupId: groupId || '1',
      senderName: 'Carol Davis',
      content: 'Great! I can help with the testing.',
      timestamp: '2024-01-15T10:40:00Z',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                Group {groupId} Chat
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {mockMessages.map((message) => (
              <div key={message.id} className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
                    <span className="text-white font-medium">
                      {message.senderName.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-gray-900">
                      {message.senderName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                  <p className="text-sm text-gray-800 mt-1">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
