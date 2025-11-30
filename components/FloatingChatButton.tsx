// components/FloatingChatButton.tsx
'use client'; 

import Link from 'next/link';

// You can use a common chat icon SVG here.
// I'll provide a standard Message Circle icon.
const ChatIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
  </svg>
);

// Define the URL for your n8n workflow or the Telegram Bot
// We'll use the Telegram Bot link since it's an immediate chat interface.
const CHATBOT_URL = "https://t.me/Manduma_bot"; 

export default function FloatingChatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href={CHATBOT_URL} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat with Manduma AI Bot"
      >
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 flex items-center justify-center"
        >
          <ChatIcon />
        </button>
      </Link>
    </div>
  );
}