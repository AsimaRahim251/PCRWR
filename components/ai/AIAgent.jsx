import React, { useState } from 'react';
import './ai-feedback.css';

export default function AIAgent() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Salam! Main aapka water quality AI assistant hoon. Kya main aapki koi madad kar sakta hoon?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: `Aapne kaha: "${input}". Main is baray mein aur jankari dhundta hoon...`
      };
      setMessages(prev => [...prev, botResponse]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="ai-agent-container">
      <div className="ai-header">
        <h2>🤖 Water Quality AI Assistant</h2>
        <p>Apne water quality ke baray mein swal poochein</p>
      </div>

      <div className="ai-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
        {loading && <div className="message bot loading"><span className="message-text">Soch raha hoon...</span></div>}
      </div>

      <div className="ai-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Apna swal likhen..."
          className="ai-input"
        />
        <button onClick={handleSend} className="ai-send-btn">
          Bhejein
        </button>
      </div>
    </div>
  );
}
