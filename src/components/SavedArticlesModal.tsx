import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  allArticles: Article[];
  onOpenArticle: (id: string) => void;
  onRemoveSaved: (id: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedIds,
  allArticles,
  onOpenArticle,
  onRemoveSaved
}) => {
  if (!isOpen) return null;

  const savedArticles = allArticles.filter(a => savedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e2e2]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 fill-black text-black" />
            <h3 className="font-bold text-base text-black">Your Saved Articles ({savedArticles.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {savedArticles.length === 0 ? (
            <div className="text-center py-8 text-neutral-500 text-xs space-y-2">
              <p>You haven’t saved any articles yet.</p>
              <p className="text-[#727272]">Click the bookmark icon on any story to save it for later reading.</p>
            </div>
          ) : (
            savedArticles.map(art => (
              <div
                key={art.id}
                className="p-3 border border-[#e2e2e2] rounded flex items-start justify-between gap-3 hover:border-black transition-colors group"
              >
                <div
                  onClick={() => {
                    onClose();
                    onOpenArticle(art.id);
                  }}
                  className="flex-1 cursor-pointer space-y-1"
                >
                  <span className="text-[10px] uppercase font-bold text-[#727272]">
                    {art.section} · {art.readTime}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-black group-hover:text-[#00628e] leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-[11px] text-[#727272]">By {art.author}</p>
                </div>

                <button
                  onClick={() => onRemoveSaved(art.id)}
                  title="Remove from saved"
                  className="p-1 text-neutral-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="px-6 py-3 bg-neutral-50 border-t border-[#e2e2e2] flex justify-between items-center text-xs text-neutral-600">
          <span>Saved to your local reader session</span>
          <button
            onClick={onClose}
            className="font-medium text-black hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
