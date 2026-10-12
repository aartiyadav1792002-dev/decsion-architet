import React from 'react';
import { X, FileText, ArrowRight, Printer } from 'lucide-react';
import { Article } from '../types';

interface TodaysPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onOpenArticle: (id: string) => void;
}

export const TodaysPaperModal: React.FC<TodaysPaperModalProps> = ({
  isOpen,
  onClose,
  articles,
  onOpenArticle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e2e2]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#727272]">
              Print Broadsheet Index
            </span>
            <h3 className="font-masthead-title text-3xl text-black">Today’s Paper</h3>
            <span className="text-xs text-[#727272] font-sans">
              Monday, October 12, 2026 · Vol. CLXXV, No. 60,342
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              title="Print Page"
              className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page A1 Stories */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-black pb-1.5 border-b-2 border-black mb-3">
              The Front Page (Section A, Page 1)
            </h4>
            <div className="divide-y divide-[#e2e2e2] space-y-3">
              {articles.slice(0, 6).map((art, idx) => (
                <div
                  key={art.id}
                  onClick={() => {
                    onClose();
                    onOpenArticle(art.id);
                  }}
                  className="pt-3 flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-mono text-[#727272] uppercase">
                      Col. {idx + 1} · {art.section}
                    </span>
                    <h5 className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] leading-snug">
                      {art.title}
                    </h5>
                    <p className="text-xs text-[#444] font-serif line-clamp-2">
                      {art.deck}
                    </p>
                    <p className="text-[11px] text-[#727272] font-sans">By {art.author}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black self-center flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-neutral-50 border-t border-[#e2e2e2] flex justify-between items-center text-xs text-[#727272]">
          <span>Full replica digitized for subscribers</span>
          <button
            onClick={onClose}
            className="font-semibold text-black hover:underline"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
