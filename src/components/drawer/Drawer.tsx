import React from 'react';

type DrawerProps = {
  isVisible: boolean; 
  width?: string; 
  onClose: () => void; 
  children: React.ReactNode; 
};

const Drawer: React.FC<DrawerProps> = ({ isVisible, width = 'w-64', onClose, children }) => {
  return (
    <>
      {isVisible && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out ${width}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default Drawer;

