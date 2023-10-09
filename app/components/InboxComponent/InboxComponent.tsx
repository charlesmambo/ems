// src/components/InboxComponent.tsx
import React from 'react';

interface InboxProps {
  messages: Array<{
    id: string;
    sender: string;
    content: string;
    timestamp: string;
  }>;
}

const InboxComponent: React.FC<InboxProps> = ({ messages }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Inbox</h2>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="bg-gray-100 p-3 rounded-lg shadow">
            <h3 className="text-lg font-medium">{message.sender}</h3>
            <p className="text-gray-500">{message.content}</p>
            <p className="text-gray-400">{message.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxComponent;
