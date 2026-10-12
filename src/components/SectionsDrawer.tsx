import React, { useState } from 'react';
import { X, Search, ChevronRight } from 'lucide-react';

interface SectionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: string) => void;
  onOpenGame: (game: 'wordle' | 'connections' | 'spellingbee' | 'mini') => void;
}

const DESKS = [
  {
    category: 'NEWS',
    items: ['World', 'U.S.', 'Politics', 'Business', 'Tech', 'Science', 'Health', 'Sports', 'Climate', 'Education', 'Weather']
  },
  {
    category: 'OPINION',
    items: ['Today’s Opinion', 'Columnists', 'Editorials', 'Guest Essays', 'Letters', 'Sunday Opinion']
  },
  {
    category: 'ARTS & CULTURE',
    items: ['Arts', 'Books', 'Movies', 'Music', 'Television', 'Theater', 'Visual Arts', 'Dance']
  },
  {
    category: 'LIVING & LIFESTYLE',
    items: ['Style', 'Food', 'Travel', 'Magazine', 'T Magazine', 'Real Estate', 'Love & Relationships', 'Well']
  },
  {
    category: 'SPECIAL STANDALONES',
    items: ['Cooking', 'Wirecutter', 'The Athletic', 'NYT Games', 'Audio & Podcasts', 'Video']
  }
];

export const SectionsDrawer: React.FC<SectionsDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  onOpenGame
}) => {
  const [filter, setFilter] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Top Header */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-masthead-title text-2xl text-black">The New York Times</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input in drawer */}
        <div className="p-4 border-b border-[#e2e2e2] bg-neutral-50">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search sections or topics..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-300 rounded bg-white focus:outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Section List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Quick Playable Games Shortcut */}
          <div className="p-3 bg-neutral-100 rounded border border-neutral-200">
            <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-black block mb-2">
              Daily NYT Games
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  onClose();
                  onOpenGame('wordle');
                }}
                className="p-2 bg-white rounded border border-neutral-200 text-left hover:border-black transition-colors"
              >
                <strong className="block text-black">Wordle</strong>
                <span className="text-[10px] text-neutral-500">Solve daily 5-letter word</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenGame('connections');
                }}
                className="p-2 bg-white rounded border border-neutral-200 text-left hover:border-black transition-colors"
              >
                <strong className="block text-black">Connections</strong>
                <span className="text-[10px] text-neutral-500">Group words into 4s</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenGame('mini');
                }}
                className="p-2 bg-white rounded border border-neutral-200 text-left hover:border-black transition-colors"
              >
                <strong className="block text-black">The Mini</strong>
                <span className="text-[10px] text-neutral-500">Quick 5x5 Crossword</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenGame('spellingbee');
                }}
                className="p-2 bg-white rounded border border-neutral-200 text-left hover:border-black transition-colors"
              >
                <strong className="block text-black">Spelling Bee</strong>
                <span className="text-[10px] text-neutral-500">Find words in honey hive</span>
              </button>
            </div>
          </div>

          {DESKS.map(desk => {
            const filteredItems = desk.items.filter(i =>
              i.toLowerCase().includes(filter.toLowerCase())
            );

            if (filter && filteredItems.length === 0) return null;

            return (
              <div key={desk.category}>
                <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#727272] mb-2 pb-1 border-b border-[#e2e2e2]">
                  {desk.category}
                </h4>
                <ul className="space-y-1">
                  {filteredItems.map(item => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          onSelectSection(item);
                          onClose();
                        }}
                        className="w-full text-left py-1.5 px-2 text-xs font-serif text-neutral-800 hover:text-black hover:bg-neutral-100 rounded flex items-center justify-between group transition-colors"
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer in Drawer */}
        <div className="p-4 bg-neutral-50 border-t border-[#e2e2e2] text-center text-xs text-neutral-500">
          <span>The New York Times International Edition</span>
        </div>
      </div>
    </div>
  );
};
