import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export const SurveyToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowSurveyModal(false);
      setIsVisible(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating toast */}
      <aside
        className="fixed bottom-4 left-4 max-w-xs bg-white border border-gray-300 shadow-xl rounded-md p-3 text-xs z-30 transition-opacity duration-300 hidden md:block"
        data-purpose="survey-toast-widget"
      >
        <div className="flex justify-between items-start mb-1.5">
          <p className="font-bold text-gray-800 text-[11px]">Have feedback?</p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-black font-bold text-sm leading-none cursor-pointer"
            aria-label="Dismiss feedback prompt"
          >
            ×
          </button>
        </div>
        <p className="text-[11px] text-gray-600 mb-2.5">
          Help us shape your reading experience on the International edition.
        </p>
        <button
          onClick={() => setShowSurveyModal(true)}
          className="bg-black hover:bg-gray-800 text-white font-medium py-1 px-2.5 rounded text-[10px] tracking-wide cursor-pointer transition-colors"
        >
          Take brief survey
        </button>
      </aside>

      {/* Survey Modal */}
      {showSurveyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-sm w-full rounded-lg shadow-2xl p-5 border border-neutral-200">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#e2e2e2]">
              <h4 className="font-bold text-sm text-black">Reader Feedback Survey</h4>
              <button
                onClick={() => setShowSurveyModal(false)}
                className="text-neutral-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 text-center text-xs space-y-2">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <p className="font-bold text-neutral-900">Thank you for your feedback!</p>
                <p className="text-neutral-600 text-[11px]">Your response helps us improve the International Edition.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                    How satisfied are you with the International Edition?
                  </label>
                  <div className="flex gap-2 justify-center py-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`w-8 h-8 rounded border text-xs font-bold transition-colors ${
                          rating === star
                            ? 'bg-black text-white border-black'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                        }`}
                      >
                        {star}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-400 px-1">
                    <span>1 = Needs work</span>
                    <span>5 = Excellent</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                    What features or topics would you like to see more of?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., more European economics, daily crossword puzzles, audio..."
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                    className="w-full text-xs p-2 border border-neutral-300 rounded focus:border-black focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSurveyModal(false)}
                    className="px-3 py-1.5 border border-neutral-300 rounded text-neutral-700 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-black text-white rounded font-semibold hover:bg-neutral-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
