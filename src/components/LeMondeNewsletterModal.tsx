import React, { useState } from 'react';
import { X, Check, Mail } from 'lucide-react';

interface LeMondeNewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeMondeNewsletterModal: React.FC<LeMondeNewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-xs shadow-2xl overflow-hidden border border-neutral-300">
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#e2e2e2]">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-black" />
            <h3 className="font-bold text-sm text-black uppercase tracking-wider">
              Le Monde in English Newsletter
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {submitted ? (
            <div className="py-6 text-center space-y-2 text-xs">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <p className="font-bold text-sm text-black">Merci ! You're subscribed.</p>
              <p className="text-neutral-600">
                You will receive your first English dispatch from Paris tomorrow morning.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-neutral-700 leading-relaxed font-serif text-sm">
                Every weekday at 10 AM Paris time, receive our essential briefing on French politics, European affairs, culture, and investigations translated into English.
              </p>
              <div>
                <label className="block text-[11px] font-bold uppercase text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-xs text-xs focus:border-black focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase py-2.5 rounded-xs transition-colors cursor-pointer"
              >
                Subscribe to Daily Newsletter
              </button>
              <p className="text-[10px] text-neutral-400 text-center">
                Free newsletter. You can unsubscribe at any moment.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
