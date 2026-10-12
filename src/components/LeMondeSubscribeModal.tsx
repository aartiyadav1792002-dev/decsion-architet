import React, { useState } from 'react';
import { X, Check, Lock } from 'lucide-react';

interface LeMondeSubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeMondeSubscribeModal: React.FC<LeMondeSubscribeModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-xs shadow-2xl overflow-hidden border border-neutral-300">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#e2e2e2]">
          <div className="flex items-baseline gap-2">
            <h3 className="font-lemonde-logo text-3xl font-bold text-black">Le Monde</h3>
            <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">in English</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDone ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-black">Bienvenue à Le Monde</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Your unlimited digital subscription is now active. You have full access to both the English edition and French edition, our digital archives, and daily journalism.
            </p>
            <button
              onClick={onClose}
              className="bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase px-6 py-2.5 rounded-xs cursor-pointer"
            >
              Start Reading
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            <div>
              <span className="badge-subscriber mb-2">
                <Lock className="w-2.5 h-2.5" />
                Special International Offer
              </span>
              <h4 className="headline-lemonde font-bold text-2xl text-black mt-2 leading-snug">
                Read without limits. Understand France and the world.
              </h4>
              <p className="text-xs text-neutral-600 mt-1">
                Cancel anytime with one click in your account settings.
              </p>
            </div>

            {/* Plan selector */}
            <div className="space-y-3">
              <div
                onClick={() => setSelectedPlan('monthly')}
                className={`p-4 border rounded-xs cursor-pointer transition-all ${
                  selectedPlan === 'monthly'
                    ? 'border-black bg-[#fffdec] ring-1 ring-black'
                    : 'border-[#e2e2e2] hover:border-neutral-400'
                }`}
              >
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-black">Monthly Subscription</span>
                  <span className="font-bold text-base text-black">€2.99 / month</span>
                </div>
                <p className="text-xs text-neutral-600 mt-0.5">
                  €2.99/mo for the first 3 months, then €11.99/month.
                </p>
              </div>

              <div
                onClick={() => setSelectedPlan('annual')}
                className={`p-4 border rounded-xs cursor-pointer transition-all ${
                  selectedPlan === 'annual'
                    ? 'border-black bg-[#fffdec] ring-1 ring-black'
                    : 'border-[#e2e2e2] hover:border-neutral-400'
                }`}
              >
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm text-black">Annual Subscription</span>
                  <span className="font-bold text-base text-black">€99 / year</span>
                </div>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Save 30% compared to the standard monthly rate.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <ul className="text-xs text-neutral-700 space-y-2 font-sans">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Unlimited access to articles translated into English & all articles in French</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Exclusive investigations, editorials, and Le Monde’s cultural supplements</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Ad-light reading experience across web, tablet, and mobile apps</span>
              </li>
            </ul>

            <button
              onClick={() => setIsDone(true)}
              className="w-full bg-[#FFE000] hover:bg-[#e6ca00] text-black font-bold text-xs uppercase tracking-wider py-3 rounded-xs transition-colors cursor-pointer shadow-xs"
            >
              Subscribe now for {selectedPlan === 'monthly' ? '€2.99 / mo' : '€99 / yr'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
