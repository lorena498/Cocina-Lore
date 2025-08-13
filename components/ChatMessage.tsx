import React from 'react';
import { Message, Sender } from '../types';
import { BotIcon, UserIcon } from './Icons';
import WhatsAppButton from './WhatsAppButton';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === Sender.Bot;
  const showWhatsAppButton = isBot && message.text.includes('[WHATSAPP_ORDER]');
  const cleanText = message.text.replace('[WHATSAPP_ORDER]', '').trim();

  const wrapperClasses = `flex items-start gap-3 my-4 ${isBot ? 'justify-start' : 'justify-end'}`;
  const messageContainerClasses = `flex flex-col ${isBot ? 'items-start' : 'items-end'}`;
  const messageClasses = `max-w-md lg:max-w-lg p-4 rounded-2xl shadow-md prose prose-sm prose-invert prose-p:my-0 ${isBot ? 'bg-brand-surface text-brand-text rounded-bl-none' : 'bg-brand-primary text-white rounded-br-none'}`;
  
  const formattedText = cleanText.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const IconContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-brand-surface text-brand-primary">
        {children}
    </div>
  );

  return (
    <div className={wrapperClasses}>
      {isBot && <IconContainer><BotIcon /></IconContainer>}
      <div className={messageContainerClasses}>
        <div className={messageClasses}>
          <p>{formattedText}</p>
        </div>
        {showWhatsAppButton && <WhatsAppButton orderText={cleanText} />}
      </div>
      {!isBot && <IconContainer><UserIcon /></IconContainer>}
    </div>
  );
};

export default ChatMessage;