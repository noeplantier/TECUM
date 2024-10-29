"use client";
import { useEffect } from 'react';

const ChatBot: React.FC = () => {
  useEffect(() => {
    // Inject the script only once when the component is mounted
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.aichatbotApiKey = "18851c0f-f5d8-4145-be92-c3c71f33b863";
      window.aichatbotProviderId = "f9e9c5e4-6d1a-4b8c-8d3f-3f9e9c5e46d1";
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://script.chatlab.com/aichatbot.js";
    script2.id = "18851c0f-f5d8-4145-be92-c3c71f33b863";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      // Clean up the scripts if needed when component is unmounted
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div style={chatBotStyle}>
      {/* The chatbot will load in the container due to the script */}
    </div>
  );
};

const chatBotStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
};

export default ChatBot;
