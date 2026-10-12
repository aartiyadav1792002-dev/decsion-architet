import React from 'react';
import { Menu, Search, User, Globe, Bookmark } from 'lucide-react';
import { LanguageMode } from '../types';

interface LeMondeHeaderProps {
  language: LanguageMode;
  onToggleLanguage: () => void;
  onOpenSections: () => void;
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenLogin: () => void;
  onSelectSection: (section: string) => void;
  activeSection: string;
  savedCount: number;
  onOpenSaved: () => void;
  onGoHome: () => void;
}

const LEMONDE_SECTIONS = [
  'World',
  'French politics',
  'France',
  'Economy',
  'Environment',
  'Opinion',
  'Culture',
  'Sports',
  'Les Décodeurs',
  'Investigation',
  'M International'
];

export const LeMondeHeader: React.FC<LeMondeHeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenSections,
  onOpenSearch,
  onOpenSubscribe,
  onOpenLogin,
  onSelectSection,
  activeSection,
  savedCount,
  onOpenSaved,
  onGoHome
}) => {
  return (
    <header className="w-full bg-white border-b border-[#e2e2e2] sticky top-0 z-40" data-purpose="lemonde-header">
      {/* Top Utility Bar */}
      <div className="max-w-[1360px] mx-auto px-4 py-2 flex items-center justify-between text-xs border-b border-[#f0f0f0]">
        {/* Left: Sections & Search */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSections}
            className="flex items-center gap-1.5 text-black hover:text-[#666] font-semibold text-xs tracking-tight transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-4 h-4 text-black" strokeWidth={2.2} />
            <span className="uppercase text-[11px] font-bold">Sections</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 text-[#444] hover:text-black transition-colors cursor-pointer"
            aria-label="Search Le Monde"
          >
            <Search className="w-3.5 h-3.5 text-black" strokeWidth={2.2} />
            <span className="text-[11px] font-medium hidden sm:inline">Search</span>
          </button>

          {/* Language Switcher: En français | In English */}
          <div className="hidden md:flex items-center gap-1.5 pl-3 border-l border-[#e2e2e2] text-[11px]">
            <Globe className="w-3.5 h-3.5 text-[#666]" />
            <button
              onClick={onToggleLanguage}
              className={`hover:underline cursor-pointer ${
                language === 'fr' ? 'font-bold text-black underline' : 'text-[#666]'
              }`}
            >
              En français
            </button>
            <span className="text-[#bbb]">|</span>
            <button
              onClick={onToggleLanguage}
              className={`hover:underline cursor-pointer ${
                language === 'en' ? 'font-bold text-black underline' : 'text-[#666]'
              }`}
            >
              In English
            </button>
          </div>
        </div>

        {/* Center Date & Edition Label for mobile */}
        <div className="hidden lg:block text-[11px] text-[#666] font-sans">
          <span>Monday, October 12, 2026</span>
          <span className="mx-2 text-[#ccc]">·</span>
          <span className="font-semibold text-black">Paris Time</span>
        </div>

        {/* Right: Saved, Sign In & Signature Yellow Subscribe Button */}
        <div className="flex items-center gap-3">
          {savedCount > 0 && (
            <button
              onClick={onOpenSaved}
              className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-neutral-800 hover:text-black px-2 py-1 rounded transition-colors"
            >
              <Bookmark className="w-3.5 h-3.5 fill-black" />
              <span>Saved ({savedCount})</span>
            </button>
          )}

          <button
            onClick={onOpenLogin}
            className="flex items-center gap-1 text-[#222] hover:text-black text-[11px] font-semibold tracking-tight transition-colors cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-black" />
            <span className="hidden sm:inline">Sign In</span>
          </button>

          {/* Trademark Le Monde Yellow CTA Button */}
          <button
            onClick={onOpenSubscribe}
            className="bg-[#FFE000] hover:bg-[#e6ca00] text-black px-3.5 py-1.5 rounded-xs font-bold text-xs uppercase tracking-tight shadow-xs transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Brand Wordmark Centerpiece */}
      <div className="py-2.5 px-4 text-center border-b border-[#e2e2e2] bg-white">
        <button
          onClick={onGoHome}
          className="inline-flex flex-col items-center group cursor-pointer focus:outline-none"
        >
          <div className="flex items-baseline gap-2">
            <h1 className="font-lemonde-logo text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-none group-hover:opacity-90 transition-opacity select-none">
              Le Monde
            </h1>
          </div>
          <span className="text-[11px] sm:text-xs font-sans tracking-widest uppercase font-bold text-[#666] mt-0.5">
            in English
          </span>
        </button>
      </div>

      {/* Primary Category Navigation Bar */}
      <nav
        aria-label="Le Monde Topics"
        className="max-w-[1360px] mx-auto px-4 flex items-center justify-between text-xs py-2 overflow-x-auto whitespace-nowrap scrollbar-none font-sans font-medium text-[#2c2c2c]"
      >
        {LEMONDE_SECTIONS.map((sec) => (
          <button
            key={sec}
            onClick={() => onSelectSection(sec)}
            className={`px-2 py-0.5 hover:text-black hover:underline cursor-pointer transition-colors ${
              activeSection === sec
                ? 'text-black font-bold border-b-2 border-black -mb-2 pb-1.5'
                : 'text-[#333]'
            }`}
          >
            {sec === 'Les Décodeurs' ? (
              <span className="text-[#005691] font-bold">Les Décodeurs</span>
            ) : sec === 'M International' ? (
              <span className="font-bold text-[#111]">M International</span>
            ) : (
              sec
            )}
          </button>
        ))}
      </nav>
    </header>
  );
};
