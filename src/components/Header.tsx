import React from 'react';
import { Menu, Search, Bookmark } from 'lucide-react';
import { Edition } from '../types';

interface HeaderProps {
  currentEdition: Edition;
  onSelectEdition: (edition: Edition) => void;
  onOpenSections: () => void;
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenLogin: () => void;
  onOpenTodaysPaper: () => void;
  onSelectSection: (section: string) => void;
  activeSection: string;
  savedCount: number;
  onOpenSaved: () => void;
  onGoHome: () => void;
}

const SECTIONS = [
  { name: 'World', color: 'text-black font-semibold' },
  { name: 'U.S.', color: 'text-black' },
  { name: 'Politics', color: 'text-black' },
  { name: 'Business', color: 'text-black' },
  { name: 'Tech', color: 'text-black' },
  { name: 'Science', color: 'text-black' },
  { name: 'Health', color: 'text-black' },
  { name: 'Sports', color: 'text-black' },
  { name: 'Arts', color: 'text-black' },
  { name: 'Books', color: 'text-black' },
  { name: 'Style', color: 'text-black' },
  { name: 'Food', color: 'text-black' },
  { name: 'Travel', color: 'text-black' },
  { name: 'Magazine', color: 'text-black' },
  { name: 'T Magazine', color: 'text-black' },
  { name: 'Real Estate', color: 'text-black' },
  { name: 'Video', color: 'text-black' },
  { name: 'Audio', color: 'text-black font-medium' },
  { name: 'Games', color: 'text-black font-semibold' },
  { name: 'Cooking', color: 'text-[#a81c1c] font-semibold' },
  { name: 'Wirecutter', color: 'text-black font-medium' },
  { name: 'The Athletic', color: 'text-black font-bold' }
];

export const Header: React.FC<HeaderProps> = ({
  currentEdition,
  onSelectEdition,
  onOpenSections,
  onOpenSearch,
  onOpenSubscribe,
  onOpenLogin,
  onOpenTodaysPaper,
  onSelectSection,
  activeSection,
  savedCount,
  onOpenSaved,
  onGoHome
}) => {
  const editions: Edition[] = ['U.S.', 'INTERNATIONAL', 'CANADA', 'ESPAÑOL', '中文'];

  return (
    <header className="max-w-[1340px] mx-auto px-4 pt-2" data-purpose="site-header">
      {/* Top Utility Bar: Edition, Date, Subscription CTAs */}
      <div className="flex items-center justify-between text-[11px] pb-1.5 text-neutral-800">
        {/* Left: Menu trigger & Search */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSections}
            aria-label="Open Section Menu"
            className="flex items-center gap-1.5 hover:text-black font-semibold text-xs tracking-tight transition-colors cursor-pointer"
          >
            <Menu className="w-4 h-4 text-black" strokeWidth={2.2} />
            <span className="uppercase tracking-wider text-[10px]">Sections</span>
          </button>
          
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="flex items-center gap-1 hover:text-black transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" strokeWidth={2.2} />
            <span className="uppercase tracking-wider text-[10px]">Search</span>
          </button>

          {/* Edition Selector Links */}
          <nav className="hidden md:flex items-center gap-2 border-l border-[#e2e2e2] pl-4 text-[11px] text-[#727272] font-medium tracking-tight">
            {editions.map((ed, idx) => (
              <React.Fragment key={ed}>
                <button
                  onClick={() => onSelectEdition(ed)}
                  className={`cursor-pointer transition-colors ${
                    currentEdition === ed
                      ? 'text-black font-bold'
                      : 'hover:text-black font-medium'
                  }`}
                >
                  {ed}
                </button>
                {idx < editions.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Right: Saved Articles, Subscribe and Log in Buttons */}
        <div className="flex items-center gap-3">
          {savedCount > 0 && (
            <button
              onClick={onOpenSaved}
              className="flex items-center gap-1 text-[11px] font-medium text-neutral-700 hover:text-black px-2 py-1 rounded transition-colors"
              title="Saved Articles"
            >
              <Bookmark className="w-3.5 h-3.5 fill-neutral-800" />
              <span>Saved ({savedCount})</span>
            </button>
          )}

          <button
            onClick={onOpenSubscribe}
            className="bg-[#245982] hover:bg-[#1b4363] text-white px-3 py-1.5 rounded-sm font-semibold uppercase text-[10px] tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Subscribe for $0.50/wk
          </button>
          
          <button
            onClick={onOpenLogin}
            className="bg-white border border-[#245982] text-[#245982] hover:bg-slate-50 px-3 py-1.5 rounded-sm font-semibold uppercase text-[10px] tracking-wider transition-colors cursor-pointer whitespace-nowrap"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Center Masthead Area */}
      <div className="relative py-2 flex flex-col items-center border-b border-[#e2e2e2]">
        {/* Date & Today's Paper link */}
        <div className="w-full flex justify-between items-baseline text-[11px] text-[#727272]">
          <span className="font-sans font-bold text-[#363636]">Monday, October 12, 2026</span>
          <button
            onClick={onOpenTodaysPaper}
            className="hover:underline hidden sm:inline text-[#363636] font-sans text-[11px] cursor-pointer"
          >
            Today’s Paper
          </button>
        </div>

        {/* Iconic Brand Masthead */}
        <button
          onClick={onGoHome}
          aria-label="The New York Times Home"
          className="my-1 focus:outline-none cursor-pointer block group text-center"
        >
          <h1 className="font-masthead-title text-5xl sm:text-7xl md:text-8xl tracking-tight text-center text-black leading-none py-1 select-none transition-opacity group-hover:opacity-95">
            The New York Times
          </h1>
        </button>

        {/* Edition subline */}
        <div className="w-full text-right text-[10px] text-[#727272] hidden md:block">
          <span className="font-medium text-black">{currentEdition} Edition</span>
        </div>
      </div>

      {/* Double Border Separator */}
      <div className="my-1 border-b-2 border-black" />

      {/* Primary Topic Navigation Bar */}
      <nav
        aria-label="Primary Navigation"
        className="hidden lg:flex items-center justify-between text-[11px] py-1 border-b border-[#e2e2e2] text-[#363636] font-sans font-normal overflow-x-auto whitespace-nowrap scrollbar-none"
      >
        {SECTIONS.map((sec) => (
          <button
            key={sec.name}
            onClick={() => onSelectSection(sec.name)}
            className={`cursor-pointer transition-colors hover:underline px-1 py-0.5 ${sec.color} ${
              activeSection === sec.name ? 'underline decoration-2 font-bold' : ''
            }`}
          >
            {sec.name}
          </button>
        ))}
      </nav>
    </header>
  );
};
