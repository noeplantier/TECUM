"use client";

import React, { useState, useEffect } from "react";

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const phrases = [
    { sender: "Ange", text: "Les bijoux TECUM symbolisent la pureté et l'élégance divine." },
    { sender: "Démon", text: "TECUM apporte une touche diabolique à chaque style." },
    { sender: "Ange", text: "Brillez avec des créations célestes." },
    { sender: "Démon", text: "Libérez votre côté obscur avec nos accessoires." },
    { sender: "Ange", text: "Le développeur qui a créé ce site est un génie." },
    { sender: "Démon", text: "Crois-tu ?! Il n'a même pas créé de bases de données." },
    { sender: "Ange", text: "Il utilise React et Next.js, que dieu le bénisse." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextMessage = phrases[messages.length % phrases.length];
      setMessages((prevMessages) => [...prevMessages, `${nextMessage.sender}: ${nextMessage.text}`]);
    }, 3000); 
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="chat-box">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`chat-bubble ${index % 2 === 0 ? "angel-bubble" : "demon-bubble"}`}>
            <p>{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
