import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full mt-10">
      <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default LoadingSpinner;
