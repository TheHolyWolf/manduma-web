// components/FloatingChatButton.tsx
'use client'; 

import { useState, useRef, useEffect } from 'react';

// Manduma Logo Icon Component (Used for Open state)
const MandumaLogoIcon = () => (
    // Assuming your Manduma logo icon (the heart/shield shape) is in the public folder
    <img 
        src="/MandumaLogo.svg" // 👈 CONFIRM THIS PATH TO YOUR LOGO ICON
        alt="Manduma Chat Logo" 
        className="w-13 h-13" 
    />
);

// Close Icon (Used for Closed state and Header button)
const CloseIcon = ({ className = "w-4 h-4" }: { className?: string } = {}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

// Define the message structure
interface Message {
    sender: 'user' | 'agent';
    text: string;
}

// Your live n8n webhook URL
const N8N_WEBHOOK_URL = "https://n8n.manduma.com/webhook/e2d1db70-acfc-40fc-b07d-8697eb866d72"; 

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with a welcome message
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'agent', text: 'Hi there! I am the Manduma AI Agent. Ask me about the Free Scan or the 90-Day Sprint.' }
  ]);
  
  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputMessage.trim();
    if (!userMessage || isSending) return;

    // 1. Add user message to history
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputMessage('');
    setIsSending(true);

    // 2. Add temporary "Agent is typing" message
    setMessages(prev => [...prev, { sender: 'agent', text: '...' }]);

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage, source: 'Manduma Chat' }),
        });

        if (response.ok) {
            const data = await response.json();
            
            // The n8n response must contain the agent's answer in a specific field (e.g., 'answer')
            const agentAnswer = data.answer || "Sorry, I couldn't find an answer. Please try rephrasing.";

            // 3. Remove "Agent is typing" and add the actual response
            setMessages(prev => {
                const newMessages = prev.slice(0, -1); // Remove the last (typing) message
                return [...newMessages, { sender: 'agent', text: agentAnswer }];
            });

        } else {
            // Handle HTTP errors
            setMessages(prev => {
                const newMessages = prev.slice(0, -1);
                return [...newMessages, { sender: 'agent', text: `Error: Webhook returned status ${response.status}. Check n8n Respond to Webhook node.` }];
            });
            console.error('Webhook failed with status:', response.status);
        }
    } catch (error) {
        // This is the "Failed to fetch" path.
        setMessages(prev => {
            const newMessages = prev.slice(0, -1);
            return [...newMessages, { sender: 'agent', text: 'Network Error: Connection blocked. Please check CORS/Firewall settings.' }];
        });
        console.error('Network error sending message:', error);
    } finally {
        setIsSending(false);
    }
  };

  const MessageBubble = ({ sender, text }: Message) => (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
        <div className={`max-w-[75%] px-3 py-2 rounded-xl text-sm ${
            sender === 'user'
                ? 'bg-purple-600 text-white rounded-br-none'
                : 'bg-slate-100 text-slate-800 rounded-tl-none'
        }`}>
            {text}
        </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
        
        {/* Chat Modal Window */}
        {isOpen && (
            <div className="bg-white rounded-lg shadow-xl w-80 mb-4 flex flex-col h-[400px]">
                {/* Header */}
                <div className="p-4 border-b bg-purple-600 text-white rounded-t-lg flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Manduma AI Chat</h3>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="hover:text-purple-200 transition"
                        aria-label="Close Chat"
                    >
                        <CloseIcon />
                    </button>
                </div>
                
                {/* Body/Message Area */}
                <div className="p-4 flex-grow overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
                    ))}
                    {/* Ref for auto-scrolling */}
                    <div ref={messagesEndRef} /> 
                </div>
                
                {/* Footer/Form */}
                <form onSubmit={handleSubmit} className="p-3 border-t">
                    <div className="flex space-x-2">
                        <input
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Ask a question..."
                            className="flex-grow p-2 border border-slate-300 rounded-md focus:ring-purple-500 focus:border-purple-500 text-sm text-slate-900"
                            required
                            disabled={isSending}
                        />
                        <button
                            type="submit"
                            className={`py-2 px-4 rounded-lg text-white font-medium transition shrink-0 ${
                                isSending || !inputMessage.trim()
                                    ? 'bg-purple-400 cursor-not-allowed'
                                    : 'bg-purple-600 hover:bg-purple-700'
                            }`}
                            disabled={isSending || !inputMessage.trim()}
                        >
                            {isSending ? '...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        )}

        {/* Floating Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white hover:bg-grey text-purple-700 p-4 rounded-full shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 flex items-center justify-center"
          aria-label={isOpen ? "Close Chat" : "Open Chat"}
        >
          {isOpen ? <CloseIcon className="w-6 h-6" /> : <MandumaLogoIcon />}
        </button>
    </div>
  );
}