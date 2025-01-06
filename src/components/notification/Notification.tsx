import React from 'react';

type NotificationType = 'success' | 'error' | 'warning';

interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const typeClasses = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 border-l-4 p-4 rounded-md shadow-md ${typeClasses[type]}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-grow">
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Notification;
