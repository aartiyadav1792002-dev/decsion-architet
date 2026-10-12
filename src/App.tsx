/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FrontPage } from './components/FrontPage';
import { ArticleView } from './components/ArticleView';
import { Footer } from './components/Footer';
import { WordleModal } from './components/WordleModal';
import { ConnectionsModal } from './components/ConnectionsModal';
import { TheMiniModal } from './components/TheMiniModal';
import { SpellingBeeModal } from './components/SpellingBeeModal';
import { SectionsDrawer } from './components/SectionsDrawer';
import { SearchModal } from './components/SearchModal';
import { SubscribeModal } from './components/SubscribeModal';
import { LoginModal } from './components/LoginModal';
import { AudioPlayer } from './components/AudioPlayer';
import { LiveUpdatesModal } from './components/LiveUpdatesModal';
import { TodaysPaperModal } from './components/TodaysPaperModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { SurveyToast } from './components/SurveyToast';
import { ARTICLES } from './data/articles';
import { Article, Edition } from './types';

export default function App() {
  const [currentEdition, setCurrentEdition] = useState<Edition>('INTERNATIONAL');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('All');
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('nyt_saved_articles');
      return stored ? JSON.parse(stored) : ['saudi-yemeni-airports'];
    } catch {
      return ['saudi-yemeni-airports'];
    }
  });

  // Modals state
  const [activeGame, setActiveGame] = useState<'wordle' | 'connections' | 'spellingbee' | 'mini' | null>(null);
  const [isSectionsOpen, setIsSectionsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLiveUpdatesOpen, setIsLiveUpdatesOpen] = useState<boolean>(false);
  const [isTodaysPaperOpen, setIsTodaysPaperOpen] = useState<boolean>(false);
  const [isSavedOpen, setIsSavedOpen] = useState<boolean>(false);

  // Audio track state
  const [audioArticle, setAudioArticle] = useState<Article | null>(null);

  // User notification for brief catch-up
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('nyt_saved_articles', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  // Scroll to top on article switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeArticleId]);

  const activeArticle = ARTICLES.find(a => a.id === activeArticleId);

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
    if (section === 'Games') {
      setActiveGame('wordle');
      return;
    }
    if (section === 'Wirecutter') {
      setActiveArticleId('wirecutter-headphones');
      return;
    }
    if (section === 'Cooking') {
      setActiveArticleId('nyt-cooking-roman-autumn-stew');
      return;
    }
    if (section === 'The Athletic') {
      setActiveArticleId('champions-league-tactics-no-9');
      return;
    }
    if (section === 'Audio') {
      const audioArt = ARTICLES.find(a => a.hasAudio) || ARTICLES[0];
      setAudioArticle(audioArt);
      return;
    }

    // Filter to first matching article if currently on article view, or return to front
    if (activeArticleId) {
      const match = ARTICLES.find(a => a.section.toLowerCase() === section.toLowerCase());
      if (match) {
        setActiveArticleId(match.id);
      } else {
        setActiveArticleId(null);
      }
    }
  };

  const handleOpenCatchUp = (topic: string) => {
    setToastMessage(`Selected briefing: ${topic}`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#121212] flex flex-col font-sans selection:bg-[#121212] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 right-4 z-50 bg-[#121212] text-white text-xs px-4 py-2.5 rounded shadow-xl flex items-center gap-2 max-w-sm animate-fade-in border border-neutral-700 font-serif">
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-white font-sans text-xs ml-auto"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Header */}
      <Header
        currentEdition={currentEdition}
        onSelectEdition={setCurrentEdition}
        onOpenSections={() => setIsSectionsOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenTodaysPaper={() => setIsTodaysPaperOpen(true)}
        onSelectSection={handleSelectSection}
        activeSection={activeSection}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedOpen(true)}
        onGoHome={handleBackToFront}
      />

      {/* Main Content: Broadsheet Front Page or Full Article View */}
      <div className="flex-1">
        {activeArticle ? (
          <ArticleView
            article={activeArticle}
            onBack={handleBackToFront}
            onOpenArticle={handleOpenArticle}
            allArticles={ARTICLES}
            isSaved={savedIds.includes(activeArticle.id)}
            onToggleSave={handleToggleSave}
            onPlayAudio={art => setAudioArticle(art)}
          />
        ) : (
          <FrontPage
            articles={ARTICLES}
            onOpenArticle={handleOpenArticle}
            onOpenLiveUpdates={() => setIsLiveUpdatesOpen(true)}
            onOpenGame={game => setActiveGame(game)}
            onOpenWirecutter={() => handleOpenArticle('wirecutter-headphones')}
            onOpenCatchUp={handleOpenCatchUp}
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onSelectSection={handleSelectSection}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenGame={game => setActiveGame(game)}
        onGoHome={handleBackToFront}
      />

      {/* Floating Survey Widget */}
      <SurveyToast />

      {/* Floating Audio Bar */}
      <AudioPlayer
        article={audioArticle}
        onClose={() => setAudioArticle(null)}
      />

      {/* Interactive Game Modals */}
      <WordleModal
        isOpen={activeGame === 'wordle'}
        onClose={() => setActiveGame(null)}
      />
      <ConnectionsModal
        isOpen={activeGame === 'connections'}
        onClose={() => setActiveGame(null)}
      />
      <TheMiniModal
        isOpen={activeGame === 'mini'}
        onClose={() => setActiveGame(null)}
      />
      <SpellingBeeModal
        isOpen={activeGame === 'spellingbee'}
        onClose={() => setActiveGame(null)}
      />

      {/* App Drawer & Utility Modals */}
      <SectionsDrawer
        isOpen={isSectionsOpen}
        onClose={() => setIsSectionsOpen(false)}
        onSelectSection={handleSelectSection}
        onOpenGame={game => setActiveGame(game)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onOpenArticle={handleOpenArticle}
      />

      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={email => {
          setToastMessage(`Welcome back, ${email}`);
          setTimeout(() => setToastMessage(null), 3000);
        }}
      />

      <LiveUpdatesModal
        isOpen={isLiveUpdatesOpen}
        onClose={() => setIsLiveUpdatesOpen(false)}
        onOpenArticle={handleOpenArticle}
      />

      <TodaysPaperModal
        isOpen={isTodaysPaperOpen}
        onClose={() => setIsTodaysPaperOpen(false)}
        articles={ARTICLES}
        onOpenArticle={handleOpenArticle}
      />

      <SavedArticlesModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        allArticles={ARTICLES}
        onOpenArticle={handleOpenArticle}
        onRemoveSaved={handleToggleSave}
      />
    </div>
  );
}
