// src/App.tsx
import React, { useState } from 'react';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const generateReply = () => {
    setResponse(
      'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.'
    );
  };

  return (
    <div className="App">
      <button onClick={openModal} className="ai-icon">
        {/* AI Icon */}
      </button>
      {showModal && <Modal onClose={closeModal} onGenerate={generateReply} />}
      {response && (
        <div className="generated-response">
          <p>{response}</p>
          <button
  onClick={() => {
    // Insert response into LinkedIn message box
    const inputField = document.querySelector('.msg-form__contenteditable') as HTMLElement; // Type assertion
    if (inputField) {
      inputField.innerText = response;
    }
    setResponse('');
  }}
  className="insert-btn"
>
  Insert
</button>
        </div>
      )}
    </div>
  );
};

export default App;