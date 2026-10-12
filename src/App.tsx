/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LeMondeHeader } from './components/LeMondeHeader';
import { LeMondeFrontPage } from './components/LeMondeFrontPage';
import { LeMondeArticleView } from './components/LeMondeArticleView';
import { LeMondeFooter } from './components/LeMondeFooter';
import { LeMondeSubscribeModal } from './components/LeMondeSubscribeModal';
import { LeMondeNewsletterModal } from './components/LeMondeNewsletterModal';
import { SectionsDrawer } from './components/SectionsDrawer';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { LEMONDE_ARTICLES } from './data/lemonde_articles';
import { LanguageMode } from './types';

export default function App() {
  const [language, setLanguage] = useState<LanguageMode>('en');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('All');
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('lemonde_saved_articles');
      return stored ? JSON.parse(stored) : ['france-nation-on-edge'];
    } catch {
      return ['france-nation-on-edge'];
    }
  });

  // Modals state
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);

  // User notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('lemonde_saved_articles', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  // Scroll to top when selecting an article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeArticleId]);

  const activeArticle = LEMONDE_ARTICLES.find(a => a.id === activeArticleId);

  const handleToggleSave = (articleId: string) => {
    if (savedIds.includes(articleId)) {
      setSavedIds(savedIds.filter(id => id !== articleId));
    } else {
      setSavedIds([...savedIds, articleId]);
    }
  };

  const handleOpenArticle = (id: string) => {
    setActiveArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFront = () => {
    setActiveArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSection = (section: string) => {
    setActiveSection(section);
    if (activeArticleId) {
      const match = LEMONDE_ARTICLES.find(a => a.section.toLowerCase() === section.toLowerCase());
      if (match) {
        setActiveArticleId(match.id);
      } else {
        setActiveArticleId(null);
      }
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fr' : 'en';
    setLanguage(next);
    setToastMessage(next === 'fr' ? 'Édition affichée en français' : 'Switched to Le Monde in English');
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col font-sans selection:bg-[#FFE000] selection:text-black">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 right-4 z-50 bg-[#1a1a1a] text-white text-xs px-4 py-2.5 rounded-xs shadow-xl flex items-center gap-2 max-w-sm animate-fade-in border border-neutral-700 font-sans">
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-white font-sans text-xs ml-auto cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Le Monde Header */}
      <LeMondeHeader
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenSections={() => setIsSectionsOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onSelectSection={handleSelectSection}
        activeSection={activeSection}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedOpen(true)}
        onGoHome={handleBackToFront}
      />

      {/* Content Area: Front Page or Full Article View */}
      <div className="flex-1">
        {activeArticle ? (
          <LeMondeArticleView
            article={activeArticle}
            language={language}
            onToggleLanguage={toggleLanguage}
            onBack={handleBackToFront}
            onOpenArticle={handleOpenArticle}
            allArticles={LEMONDE_ARTICLES}
            isSaved={savedIds.includes(activeArticle.id)}
            onToggleSave={handleToggleSave}
            onOpenSubscribe={() => setIsSubscribeOpen(true)}
          />
        ) : (
          <LeMondeFrontPage
            articles={LEMONDE_ARTICLES}
            language={language}
            onOpenArticle={handleOpenArticle}
            onOpenSubscribe={() => setIsSubscribeOpen(true)}
            onOpenNewsletter={() => setIsNewsletterOpen(true)}
          />
        )}
      </div>

      {/* Le Monde Footer */}
      <LeMondeFooter
        onSelectSection={handleSelectSection}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
        onGoHome={handleBackToFront}
      />

      {/* Modals & Drawers */}
      <SectionsDrawer
        isOpen={isSectionsOpen}
        onClose={() => setIsSectionsOpen(false)}
        onSelectSection={handleSelectSection}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={LEMONDE_ARTICLES}
        language={language}
        onOpenArticle={handleOpenArticle}
      />

      <LeMondeSubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      <LeMondeNewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={email => {
          setToastMessage(`Bienvenue, ${email}`);
          setTimeout(() => setToastMessage(null), 3000);
        }}
      />

      <SavedArticlesModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        allArticles={LEMONDE_ARTICLES}
        language={language}
        onOpenArticle={handleOpenArticle}
        onRemoveSaved={handleToggleSave}
      />
    </div>
  );
}
