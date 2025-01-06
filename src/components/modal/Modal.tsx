import React from "react";

type Action = {
  label: string;
  type: "confirm" | "cancel"; 
  onClick: () => void;
};

type ModalProps = {
  isVisible: boolean;
  title: string;
  content: string;
  actions: Action[];
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isVisible, title, content, actions, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 p-6 rounded-md shadow-lg z-50">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="text-sm text-gray-700 mb-4">{content}</div>

        {/* Modal Actions */}
        <div className="flex justify-end space-x-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.onClick();
                onClose();
              }}
              className={`px-4 py-2 rounded-md text-white ${
                action.type === 'confirm'
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-gray-500 hover:bg-gray-600'
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Modal;
