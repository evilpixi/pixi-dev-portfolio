import React, { useState } from 'react';
import './Chat.css';

interface Message
{
  user: string;
  text: string;
}

const Chat: React.FC = () =>
{
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () =>
  {
    if (input.trim())
    {
      setMessages([...messages, { user: 'User', text: input }]);
      setInput('');
    }
  };

  return (
    <>
      <h2>Chat</h2>
      try talking with me!
      <div className="chat-container">
        <div className="chatzone-padding">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className="chat-message">
                <strong>{message.user}:</strong> {message.text}
              </div>
            ))}
          </div>
        </div>
        <div className="chat-inputs-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input"
          />
          <button onClick={handleSend} className="chat-button">
            Send
          </button>
        </div>

      </div>
    </>
  );
};

export default Chat;
