import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="bg-brand-background/70 backdrop-blur-sm p-4 border-t border-brand-primary/30 flex-shrink-0">
        <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full mx-auto">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                disabled={isLoading}
                className="flex-1 p-3 bg-brand-surface text-brand-text rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 disabled:opacity-50"
                autoComplete="off"
            />
            <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-brand-primary text-white p-3 rounded-full hover:bg-brand-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-300 flex-shrink-0"
                aria-label="Enviar mensaje"
            >
                <SendIcon />
            </button>
        </form>
    </div>
  );
};

export default ChatInput;