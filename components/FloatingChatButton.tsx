// components/FloatingChatButton.tsx
'use client'; 

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// --- ICONS ---
// ... (Icon definitions remain unchanged)

// 1. Manduma Logo Icon (Used in the button and header)
const MandumaLogoIcon = ({ size = 24 }: { size?: number }) => (
    <div className="relative" style={{ width: size, height: size }}>
        <Image 
            src="/MandumaLogo.svg" 
            alt="Manduma AI" 
            fill
            className="object-contain"
        />
    </div>
);

// 2. Close Icon (Clean SVG)
const CloseIcon = ({ className = "w-5 h-5" }: { className?: string } = {}) => (
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

// 3. Send Icon (Paper airplane style)
const SendIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-4 h-4"
    >
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

// --- CONFIGURATION ---

// Define the message structure
interface Message {
    sender: 'user' | 'agent';
    text: string;
}

// ⚠️ CONFIRMED: Using the new n8n Webhook URL
const N8N_WEBHOOK_URL = "https://n8n.manduma.com/webhook/13684992-d01b-49fd-8817-148c1a8c7258"; 

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with a welcome message from the "Assistant"
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'agent', text: 'Hello! I am your Manduma Assistant. How can I help you stop the leaks in your business today?' }
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

    // 2. Add temporary "Thinking..." indicator
    setMessages(prev => [...prev, { sender: 'agent', text: '...' }]);

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ message: userMessage, source: 'Manduma Chat Frontend' }), 
        });

        if (response.ok) {
            const data = await response.json();
            
            // ⚠️ IMPROVEMENT: Clearer message if 'answer' is missing from n8n response
            const agentAnswer = data.answer || "Successfully triggered workflow, but the AI response was empty. Please verify your n8n Response node configuration.";

            // 3. Replace "..." with actual answer
            setMessages(prev => {
                const newMessages = prev.slice(0, -1); 
                return [...newMessages, { sender: 'agent', text: agentAnswer }];
            });

        } else {
            // Handle HTTP errors (e.g., 404, 500)
            setMessages(prev => {
                const newMessages = prev.slice(0, -1);
                return [...newMessages, { sender: 'agent', text: `Error: The workflow returned an error (Status: ${response.status}). Please check the n8n logs.` }];
            });
        }
    } catch (error) {
        // Handle Network/CORS errors
        console.error("Fetch error:", error);
        setMessages(prev => {
            const newMessages = prev.slice(0, -1);
            return [...newMessages, { 
                sender: 'agent', 
                text: 'Connection failed. This is usually due to server-side CORS restrictions or an invalid webhook URL.' 
            }];
        });
    } finally {
        setIsSending(false);
    }
  };

  // --- UI COMPONENTS ---
  // ... (MessageBubble and return structure remain unchanged)
  const MessageBubble = ({ sender, text }: Message) => (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
        {/* Avatar for Agent */}
        {sender === 'agent' && (
            <div className="w-6 h-6 mr-2 flex-shrink-0 mt-1">
                <MandumaLogoIcon size={24} />
            </div>
        )}
        
        <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
            sender === 'user'
                ? 'bg-purple-600 text-white rounded-br-none'
                : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
        }`}>
            {text === '...' ? (
                // Thinking Indicator (Dot Animation)
                <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                </span>
            ) : (
                text
            )}
        </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        
        {/* CHAT WINDOW */}
        {isOpen && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl shadow-2xl w-[350px] mb-4 flex flex-col h-[500px] overflow-hidden transition-all animate-in slide-in-from-bottom-5 duration-300">
                
                {/* Header */}
                <div className="p-4 bg-white border-b border-slate-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <MandumaLogoIcon size={32} />
                            {/* Online Status Dot */}
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-sm">Manduma Assistant</h3>
                            <p className="text-xs text-slate-500">Business Health OS</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition"
                        aria-label="Close Chat"
                    >
                        <CloseIcon />
                    </button>
                </div>
                
                {/* Messages Area */}
                <div className="flex-grow p-4 overflow-y-auto bg-slate-50">
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
                    ))}
                    <div ref={messagesEndRef} /> 
                </div>
                
                {/* Input Area */}
                <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100">
                    <div className="relative flex items-center">
                        <input
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Ask a question..."
                            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
                            required
                            disabled={isSending}
                        />
                        <button
                            type="submit"
                            className={`absolute right-2 p-2 rounded-lg transition-all ${
                                isSending || !inputMessage.trim()
                                    ? 'text-slate-300 cursor-not-allowed'
                                    : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg'
                            }`}
                            disabled={isSending || !inputMessage.trim()}
                        >
                            <SendIcon />
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-slate-400">Powered by Manduma Health OS</p>
                    </div>
                </form>
            </div>
        )}

        {/* FLOATING TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 
            flex items-center justify-center border border-slate-100
            ${isOpen ? 'bg-slate-900 text-white rotate-90' : 'bg-white text-purple-600'}
          `}
          aria-label={isOpen ? "Close Chat" : "Open Chat"}
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6" /> 
          ) : (
            <div className="w-8 h-8 relative">
                 <Image 
                    src="/MandumaLogo.svg" 
                    alt="Chat" 
                    fill
                    className="object-contain"
                />
            </div>
          )}
        </button>
    </div>
  );
}