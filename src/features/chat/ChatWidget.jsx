import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Hello! Welcome to CrewManpower. How can we support your workforce or staffing requirements today?',
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'Need urgent industrial workforce',
    'Direct contact numbers',
    'Healthcare staffing inquiry',
    'Get quote for security guards'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText.trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setIsTyping(true);

    // Simulate smart support response
    setTimeout(() => {
      let replyText = "Thank you for reaching out! Our deployment managers can assemble and verify candidates for your project within 24-48 hours. Please submit your exact worker count via our quote form or call our direct desks.";
      
      const lower = query.toLowerCase();
      if (lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('number') || lower.includes('director') || lower.includes('hr')) {
        replyText = "Direct Corporate Desks:\n• Director Abu Khan: 7310050047 (info@crewmanpower.com)\n• HR Mansi: +91 9194150047 (hr@crewmanpower.com)\n• Operations Abid Khan: 9194050047 (crewmanpowers@gmail.com)\n• Lucknow Head Office: 1-B First Floor, Galaxy Tower, Gomti Nagar.";
      } else if (lower.includes('health') || lower.includes('hospital') || lower.includes('nurse')) {
        replyText = "For healthcare institutions, we supply verified nursing staff, clinical aides, and sanitization teams meeting all healthcare regulatory criteria. Would you like to submit a request for your facility?";
      } else if (lower.includes('quote') || lower.includes('cost') || lower.includes('price')) {
        replyText = "Workforce costs depend on skill level, site location, and shift duration. You can fill out our interactive Quote Request form for a detailed estimate!";
      } else if (lower.includes('security') || lower.includes('guard')) {
        replyText = "Our security personnel are verified, physically trained, and available for commercial buildings, factories, and residential campuses.";
      }

      const botReply = {
        id: Date.now() + 1,
        sender: 'agent',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showQuoteAction: true
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pop-up Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="CrewManpower Quick Inquiry Desk"
          className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-[90vw] max-w-sm sm:w-96 flex flex-col mb-4 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          style={{ height: '480px' }}
        >
          {/* Header */}
          <div className="bg-[#071B36] text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-brand-primary/20 flex items-center justify-center border border-white/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#071B36]"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">CrewManpower Desk</h4>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span>Active & Verified Staffing</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F4F7FB]/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-brand-primary text-white rounded-br-xs'
                      : 'bg-white text-brand-body border border-slate-200/80 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.showQuoteAction && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex gap-2">
                      <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center text-[11px] font-bold text-brand-orange hover:underline gap-1"
                      >
                        <span>Open Contact & Quote Form</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-400 bg-white border border-slate-200/60 rounded-xl px-3 py-2 w-20">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap flex gap-1.5 no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="text-[11px] bg-slate-100 hover:bg-blue-50 hover:text-brand-primary text-slate-600 px-2.5 py-1 rounded-full transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about staffing, direct contacts, quotes..."
              className="flex-1 bg-slate-50 border border-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand-primary text-slate-800 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primaryHover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0878E8] hover:bg-[#0663C4] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95 group relative"
        aria-label={isOpen ? "Close live inquiry desk" : "Open live inquiry desk"}
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-orange rounded-full border-2 border-white animate-pulse"></span>
        {isOpen ? (
          <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
