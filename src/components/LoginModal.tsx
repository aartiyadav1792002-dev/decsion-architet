import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(email);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-sm w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        <div className="flex justify-between items-center px-6 pt-5 pb-3 border-b border-[#e2e2e2]">
          <h2 className="font-masthead-title text-2xl text-black">The New York Times</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <h3 className="font-serif font-bold text-xl text-black">Log in or create an account</h3>
            <p className="text-xs text-[#727272] mt-1">
              Enter your email to continue to your Times account.
            </p>
          </div>

          {submitted ? (
            <div className="py-4 text-center text-xs text-emerald-700 font-medium flex items-center justify-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>Signed in successfully as {email}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-300 rounded focus:border-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white py-2.5 rounded font-semibold text-xs transition-colors cursor-pointer"
              >
                Continue with Email
              </button>

              <div className="relative my-3 text-center">
                <span className="bg-white px-2 text-[10px] text-neutral-400 uppercase tracking-widest relative z-10">
                  or
                </span>
                <div className="absolute inset-x-0 top-1/2 border-t border-[#e2e2e2]" />
              </div>

              <button
                type="button"
                onClick={() => {
                  setEmail('reader@google.com');
                  setSubmitted(true);
                  setTimeout(() => {
                    onSuccess('reader@google.com');
                    onClose();
                  }, 1000);
                }}
                className="w-full border border-neutral-300 hover:bg-neutral-50 text-neutral-800 py-2 rounded text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setEmail('reader@apple.com');
                  setSubmitted(true);
                  setTimeout(() => {
                    onSuccess('reader@apple.com');
                    onClose();
                  }, 1000);
                }}
                className="w-full border border-neutral-300 hover:bg-neutral-50 text-neutral-800 py-2 rounded text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Continue with Apple</span>
              </button>
            </form>
          )}

          <p className="text-[10px] text-neutral-400 text-center leading-normal">
            By continuing, you agree to the Terms of Service and Privacy Policy of The New York Times Company.
          </p>
        </div>
      </div>
    </div>
  );
};
