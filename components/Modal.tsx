// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  onClose: () => void;
  onGenerate: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onGenerate }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-semibold mb-4">Generate AI Reply</h2>
        <textarea
          className="border w-full h-20 p-2 mb-4"
          placeholder="Enter your command"
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;