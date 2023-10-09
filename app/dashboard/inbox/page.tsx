// pages/dashboard.tsx
import React from 'react';
import { employees } from '../../../Employees';
import InboxComponent from '@/app/components/InboxComponent/InboxComponent';

const InboxPage: React.FC = () => {
  const user = employees[0];
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
      <div className="bg-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 p-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Inbox</h1>
        <div className="flex">
          <InboxComponent messages={user.messages} />
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
