import React from 'react';

type EmptyStateProps = {
  message?: string; 
  imageUrl?: string; 
};

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "No data available",
  imageUrl = "https://via.placeholder.com/150",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <img src={imageUrl} alt="Empty State" className="mb-4 w-32 h-32 object-contain" />
      <p className="text-lg text-gray-600">{message}</p>
    </div>
  );
};

export default EmptyState;

