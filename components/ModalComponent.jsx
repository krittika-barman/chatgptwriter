import React from 'react';

const ModalComponent = ({ isOpen, onClose, onGenerate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Generate Reply</h2>
        <textarea 
          className="w-full p-2 border border-gray-300 rounded mb-4" 
          rows="4" 
          placeholder="Type your command here..."
        />
        <div className="flex justify-between">
          <button 
            onClick={onGenerate} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate
          </button>
          <button 
            onClick={onClose} 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;