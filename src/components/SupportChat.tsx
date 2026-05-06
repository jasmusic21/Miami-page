import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface SupportChatProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function SupportChat({ isOpen, onToggle }: SupportChatProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const url = `https://wa.me/573000000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
    onToggle();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden transform transition-all origin-bottom-right">
          <div className="bg-pink-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-xl">
                🍹
              </div>
              <div className="text-white">
                <h4 className="font-bold text-sm leading-tight">Soporte Miami</h4>
                <p className="text-[10px] text-pink-200">En línea</p>
              </div>
            </div>
            <button 
              onClick={onToggle}
              className="text-pink-200 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 bg-neutral-50 h-48 overflow-y-auto flex flex-col gap-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-neutral-700 max-w-[85%]">
              ¡Hola! ¿En qué te podemos ayudar hoy con tus granizados o vapers?
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-neutral-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Escribe tu mensaje..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-neutral-100 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button 
              type="submit"
              className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors shadow-sm"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4 ml-[-2px] mt-[1px]" />
            </button>
          </form>
        </div>
      )}

      <button 
        onClick={onToggle}
        className={`w-14 h-14 bg-neutral-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
        style={{ position: isOpen ? 'absolute' : 'relative', opacity: isOpen ? 0 : 1 }}
        aria-label="Toggle support chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
