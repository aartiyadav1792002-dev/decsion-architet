import React, { useState } from 'react';
import { X, Search, ChevronRight } from 'lucide-react';

interface SectionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: string) => void;
  onOpenNewsletter: () => void;
}

const LEMONDE_DESKS = [
  {
    category: 'NEWS & POLITICS',
    items: ['World', 'French politics', 'France', 'Economy', 'Environment', 'Sciences', 'Health', 'Education', 'Campus']
  },
  {
    category: 'ANALYSIS & OPINION',
    items: ['Opinion', 'Editorials', 'Columns', 'Analysis', 'Les Décodeurs', 'Investigation']
  },
  {
    category: 'CULTURE & LIFESTYLE',
    items: ['Culture', 'M International', 'Cinema & Series', 'Books & Literature', 'Music', 'Visual Arts', 'Sports', 'L’Époque']
  },
  {
    category: 'SPECIAL DEPARTMENTS',
    items: ['Le Monde Africa', 'Pixels (Tech)', 'Podcasts & Audio', 'Video Investigations', 'Archives (Since 1944)']
  }
];

export const SectionsDrawer: React.FC<SectionsDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  onOpenNewsletter
}) => {
  const [filter, setFilter] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h2 className="font-lemonde-logo text-3xl font-bold text-black">Le Monde</h2>
            <span className="text-[11px] uppercase font-bold text-neutral-500 tracking-wider">in English</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-[#e2e2e2] bg-neutral-50">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search Le Monde sections or topics..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-300 rounded-xs bg-white focus:outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Section List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Newsletter Shortcut */}
          <div className="p-3.5 bg-[#fffdec] border border-amber-200 rounded-xs">
            <span className="font-bold text-xs uppercase tracking-wider text-black block mb-1">
              Daily Selection Newsletter
            </span>
            <p className="text-xs text-neutral-700 mb-2">
              Get our daily translation of Le Monde delivered free to your inbox.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenNewsletter();
              }}
              className="bg-black hover:bg-neutral-800 text-white text-xs font-bold px-3 py-1.5 rounded-xs cursor-pointer"
            >
              Sign up for free
            </button>
          </div>

          {LEMONDE_DESKS.map(desk => {
            const filteredItems = desk.items.filter(i =>
              i.toLowerCase().includes(filter.toLowerCase())
            );

            if (filter && filteredItems.length === 0) return null;

            return (
              <div key={desk.category}>
                <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#666] mb-2 pb-1 border-b border-[#e2e2e2]">
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
                        className="w-full text-left py-1.5 px-2 text-xs font-serif text-neutral-900 hover:text-black hover:bg-neutral-100 rounded flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <span className={item === 'Les Décodeurs' ? 'text-[#005691] font-bold' : ''}>
                          {item}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-[#e2e2e2] text-center text-xs text-neutral-500">
          <span>Le Monde in English · Paris</span>
        </div>
      </div>
    </div>
  );
};
