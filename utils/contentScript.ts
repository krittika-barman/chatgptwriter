let icon: HTMLImageElement | null = null;

// Function to show the AI icon when the input is focused
const showIcon = () => {
  icon = document.createElement('img');
  icon.src = chrome.runtime.getURL('icon.svg'); // Use your exported SVG from Figma
  icon.classList.add('absolute', 'right-2', 'top-2', 'cursor-pointer');
  icon.onclick = openModal; // Attach event to open modal
  document.body.appendChild(icon);
};

// Function to hide the AI icon
const hideIcon = () => {
  if (icon) {
    icon.remove();
  }
};

// Detect input focus and blur on LinkedIn message box
const messageInput = document.querySelector('.msg-form__contenteditable'); // Modify the selector if necessary
if (messageInput) {
  messageInput.addEventListener('focus', showIcon);
  messageInput.addEventListener('blur', hideIcon);
}

// Function to open modal
const openModal = () => {
  chrome.runtime.sendMessage({ action: 'openModal' });
};