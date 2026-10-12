import React, { useState } from 'react';
import { X, Search, ChevronRight, Lock } from 'lucide-react';
import { LeMondeArticle, LanguageMode } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: LeMondeArticle[];
  language: LanguageMode;
  onOpenArticle: (articleId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  language,
  onOpenArticle
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? articles.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        (a.frenchTitle && a.frenchTitle.toLowerCase().includes(query.toLowerCase())) ||
        a.deck.toLowerCase().includes(query.toLowerCase()) ||
        a.author.toLowerCase().includes(query.toLowerCase()) ||
        a.section.toLowerCase().includes(query.toLowerCase()) ||
        a.content.some(p => p.toLowerCase().includes(query.toLowerCase()))
      )
    : articles.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-16 p-4">
      <div className="bg-white max-w-2xl w-full rounded-xs shadow-2xl overflow-hidden border border-neutral-300">
        {/* Search Header Input */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search Le Monde in English: France, Glucksmann, Thales, investigations..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 text-sm outline-none placeholder:text-neutral-400 font-sans text-black"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-black cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-[#666] pb-1 border-b border-[#e2e2e2]">
            <span>{query ? `Results (${filtered.length})` : 'Recent Top Stories'}</span>
            <span>Le Monde Archive</span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-10 text-neutral-500 text-xs font-sans">
              No articles found for “{query}”. Try searching for “France”, “high school”, “Thales”, or “Glucksmann”.
            </div>
          ) : (
            filtered.map(art => (
              <div
                key={art.id}
                onClick={() => {
                  onOpenArticle(art.id);
                  onClose();
                }}
                className="p-3 border border-transparent hover:border-[#e2e2e2] hover:bg-neutral-50 rounded-xs cursor-pointer transition-colors group flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-[#666] uppercase font-bold tracking-wider">
                    <span>{art.section}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                    {art.isSubscriberOnly && (
                      <span className="badge-subscriber text-[9px] py-0">
                        <Lock className="w-2 h-2" />
                        Subscribers
                      </span>
                    )}
                  </div>
                  <h4 className="headline-lemonde font-bold text-base text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                    {language === 'fr' && art.frenchTitle ? art.frenchTitle : art.title}
                  </h4>
                  <p className="text-xs text-[#444] line-clamp-1 font-serif">
                    {language === 'fr' && art.frenchDeck ? art.frenchDeck : art.deck}
                  </p>
                  <p className="text-[11px] text-[#777] font-sans">By {art.author}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black flex-shrink-0 self-center" />
              </div>
            ))
          )}
        </div>

        <div className="px-4 py-2.5 bg-neutral-50 border-t border-[#e2e2e2] text-xs text-neutral-500 flex justify-between">
          <span>Search Le Monde in English</span>
          <span className="font-semibold text-black">Updated live from Paris</span>
        </div>
      </div>
    </div>
  );
};
