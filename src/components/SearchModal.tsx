import React, { useState } from 'react';
import { X, Search, Clock, ChevronRight } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onOpenArticle: (articleId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onOpenArticle
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? articles.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.deck.toLowerCase().includes(query.toLowerCase()) ||
        a.author.toLowerCase().includes(query.toLowerCase()) ||
        a.section.toLowerCase().includes(query.toLowerCase()) ||
        a.content.some(p => p.toLowerCase().includes(query.toLowerCase()))
      )
    : articles.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-16 p-4">
      <div className="bg-white max-w-2xl w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        {/* Search Header Input */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search all stories, opinion pieces, topics and authors..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 text-sm outline-none placeholder:text-neutral-400 font-sans text-black"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-black"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-[#727272] pb-1 border-b border-[#e2e2e2]">
            <span>{query ? `Results (${filtered.length})` : 'Recent & Front Page Stories'}</span>
            <span>The New York Times Archive</span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-10 text-neutral-500 text-xs">
              No matching stories found for “{query}”. Try searching for “Saudi”, “Gaza”, “Orszag”, or “Architecture”.
            </div>
          ) : (
            filtered.map(art => (
              <div
                key={art.id}
                onClick={() => {
                  onOpenArticle(art.id);
                  onClose();
                }}
                className="p-3 border border-transparent hover:border-[#e2e2e2] hover:bg-neutral-50 rounded cursor-pointer transition-colors group flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-[#727272] uppercase font-bold tracking-wider">
                    <span>{art.section}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[#444] line-clamp-1 font-serif">
                    {art.deck}
                  </p>
                  <p className="text-[11px] text-[#727272] font-sans">By {art.author}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black flex-shrink-0 self-center" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-neutral-50 border-t border-[#e2e2e2] text-xs text-neutral-500 flex justify-between">
          <span>Press ESC or click close to exit</span>
          <span className="font-medium text-black">Updated in real-time</span>
        </div>
      </div>
    </div>
  );
};
