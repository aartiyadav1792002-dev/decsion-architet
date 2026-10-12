import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'all-access' | 'basic'>('all-access');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-5 pb-3 border-b border-[#e2e2e2]">
          <h2 className="font-masthead-title text-3xl text-black">The New York Times</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {subscribed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-black">Welcome to The Times</h3>
            <p className="text-xs text-neutral-600">
              Your unlimited Digital All-Access subscription is now active. Enjoy independent journalism, Cooking, Games, Wirecutter, and The Athletic.
            </p>
            <button
              onClick={onClose}
              className="bg-black text-white text-xs font-semibold px-6 py-2 rounded-full cursor-pointer hover:bg-neutral-800"
            >
              Start Reading
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#a81c1c]">
                Limited Time Offer
              </span>
              <h3 className="font-serif font-bold text-2xl text-black mt-1 leading-snug">
                Unlimited digital access. <br className="hidden sm:inline" />
                Special rate: $0.50/week.
              </h3>
              <p className="text-xs text-[#727272] mt-1 font-sans">
                Cancel anytime. Billed every 4 weeks.
              </p>
            </div>

            {/* Plan selection */}
            <div className="space-y-3">
              <div
                onClick={() => setSelectedPlan('all-access')}
                className={`p-4 border rounded-sm cursor-pointer transition-all ${
                  selectedPlan === 'all-access'
                    ? 'border-black bg-neutral-50 ring-1 ring-black'
                    : 'border-[#e2e2e2] hover:border-neutral-400'
                }`}
              >
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-sm text-black">All Access Digital</h4>
                  <span className="font-bold text-sm text-black">$0.50/wk</span>
                </div>
                <p className="text-xs text-[#727272] mt-0.5">
                  Includes News, Cooking, Games, Wirecutter, and The Athletic.
                </p>
              </div>

              <div
                onClick={() => setSelectedPlan('basic')}
                className={`p-4 border rounded-sm cursor-pointer transition-all ${
                  selectedPlan === 'basic'
                    ? 'border-black bg-neutral-50 ring-1 ring-black'
                    : 'border-[#e2e2e2] hover:border-neutral-400'
                }`}
              >
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-sm text-black">News Only</h4>
                  <span className="font-bold text-sm text-black">$0.35/wk</span>
                </div>
                <p className="text-xs text-[#727272] mt-0.5">
                  Unlimited standard articles and live news trackers.
                </p>
              </div>
            </div>

            {/* Features list */}
            <ul className="text-xs text-neutral-700 space-y-1.5 font-sans">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Award-winning international and investigative reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Daily interactive puzzles: Wordle, Connections, and The Mini</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Audio editions & narrated articles on any device</span>
              </li>
            </ul>

            <button
              onClick={() => setSubscribed(true)}
              className="w-full bg-[#245982] hover:bg-[#1b4363] text-white py-3 rounded-xs font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Subscribe Now for $0.50/wk
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
