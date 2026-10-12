import React, { useState } from 'react';
import { ArrowLeft, Lock, Share2, Bookmark, Check, Globe } from 'lucide-react';
import { LeMondeArticle, LanguageMode } from '../types';

interface LeMondeArticleViewProps {
  article: LeMondeArticle;
  language: LanguageMode;
  onToggleLanguage: () => void;
  onBack: () => void;
  onOpenArticle: (id: string) => void;
  allArticles: LeMondeArticle[];
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenSubscribe: () => void;
}

export const LeMondeArticleView: React.FC<LeMondeArticleViewProps> = ({
  article,
  language,
  onToggleLanguage,
  onBack,
  onOpenArticle,
  allArticles,
  isSaved,
  onToggleSave,
  onOpenSubscribe
}) => {
  const [copied, setCopied] = useState(false);

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTitle = language === 'fr' && article.frenchTitle ? article.frenchTitle : article.title;
  const currentDeck = language === 'fr' && article.frenchDeck ? article.frenchDeck : article.deck;
  const currentContent = language === 'fr' && article.frenchContent ? article.frenchContent : article.content;

  return (
    <article className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Sticky Reader Utility Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e2e2] px-4 py-2.5 transition-all">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between text-xs">
          {/* Back button & Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 font-bold text-black hover:text-[#005691] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>À la Une</span>
            </button>
            <span className="text-[#e2e2e2]">|</span>
            <span className="text-[#666] uppercase tracking-wider text-[11px] font-semibold">
              {article.section}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Language toggle for article */}
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded border border-[#e2e2e2] hover:border-black text-[11px] font-medium transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#666]" />
              <span>{language === 'en' ? 'Lire en français' : 'Read in English'}</span>
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                isSaved ? 'text-black bg-neutral-100' : 'text-[#777] hover:text-black'
              }`}
              title={isSaved ? 'Saved article' : 'Save article'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-black' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1 p-1.5 text-[#777] hover:text-black rounded transition-colors cursor-pointer"
              title="Share link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              {copied && <span className="text-[10px] text-emerald-600 font-bold">Copied!</span>}
            </button>

            {/* Subscribe Yellow CTA */}
            <button
              onClick={onOpenSubscribe}
              className="bg-[#FFE000] hover:bg-[#e6ca00] text-black px-3 py-1 rounded-xs font-bold text-xs uppercase cursor-pointer transition-colors shadow-xs"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Container */}
      <div className="max-w-[760px] mx-auto px-4 py-8">
        {/* Kicker & Subscriber badge */}
        <div className="flex items-center gap-2 mb-3">
          {article.isSubscriberOnly && (
            <span className="badge-subscriber">
              <Lock className="w-2.5 h-2.5" />
              Subscribers only
            </span>
          )}
          {article.kicker && (
            <span
              style={{ color: article.kickerColor || '#005691' }}
              className="text-xs uppercase font-bold tracking-widest"
            >
              {article.kicker}
            </span>
          )}
        </div>

        {/* Big Editorial Headline */}
        <h1 className="headline-lemonde font-bold text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-[1.12] mb-4">
          {currentTitle}
        </h1>

        {/* Lead Deck */}
        <p className="subheadline-lemonde text-lg sm:text-xl text-[#333] leading-relaxed mb-6 font-serif">
          {currentDeck}
        </p>

        {/* Byline and Dateline */}
        <div className="border-t border-b border-[#e2e2e2] py-3.5 mb-6 flex flex-col sm:flex-row justify-between sm:items-center text-xs text-[#666] gap-2 font-sans">
          <div>
            <p className="font-bold text-sm text-black">
              By {article.author}
              {article.authorLocation && <span className="font-normal text-[#555]">, {article.authorLocation}</span>}
            </p>
            {article.authorRole && (
              <p className="text-[11px] text-[#777]">{article.authorRole}</p>
            )}
          </div>
          <div className="text-left sm:text-right">
            <p className="text-black font-medium">{article.publishedAt}</p>
            <p className="text-[11px] text-[#777]">{article.readTime}</p>
          </div>
        </div>

        {/* Lead Image */}
        {article.imageUrl && (
          <figure className="mb-8">
            <div className="overflow-hidden border border-[#e2e2e2] bg-neutral-100">
              <img
                src={article.imageUrl}
                alt={article.imageCaption || article.title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            {(article.imageCaption || article.imageCredit) && (
              <figcaption className="text-xs text-[#666] font-sans mt-2 flex flex-col sm:flex-row justify-between leading-snug">
                <span>{article.imageCaption}</span>
                {article.imageCredit && (
                  <span className="uppercase text-[10px] text-black font-semibold pt-1 sm:pt-0">
                    {article.imageCredit}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        )}

        {/* Body Paragraphs */}
        <div className="space-y-6 font-serif text-[#222] text-[17px] leading-[1.75]">
          {currentContent.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-black leading-relaxed'
                  : 'leading-relaxed'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Editorial Pull Quote */}
        {article.pullQuote && (
          <blockquote className="my-10 py-6 border-y-2 border-black text-center px-4 sm:px-8">
            <p className="headline-lemonde italic text-xl sm:text-2xl text-neutral-900 leading-snug mb-3">
              « {article.pullQuote.quote} »
            </p>
            <cite className="font-sans font-semibold text-xs uppercase tracking-wider text-[#666] not-italic block">
              — {article.pullQuote.attribution}
            </cite>
          </blockquote>
        )}

        {/* Subscriber Box & Support Le Monde */}
        <div className="my-10 p-6 bg-[#fffdec] border border-[#e2e2e2] rounded-xs text-center space-y-3">
          <div className="w-10 h-10 bg-[#FFE000] text-black rounded-full flex items-center justify-center mx-auto shadow-xs">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-black">
            The rest of this investigation is reserved for subscribers
          </h3>
          <p className="text-xs text-[#444] max-w-md mx-auto leading-relaxed">
            Support the work of 530 journalists in Paris and bureaus around the globe. Get full unlimited digital access to Le Monde in English and in French.
          </p>
          <button
            onClick={onOpenSubscribe}
            className="bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase px-6 py-2.5 rounded-xs transition-colors cursor-pointer"
          >
            Subscribe from €2.99 / month
          </button>
        </div>

        {/* Related Coverage */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 pt-6 border-t-2 border-black">
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-black mb-4">
              More From Le Monde in English
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onOpenArticle(rel.id)}
                  className="p-3 border border-[#e2e2e2] rounded-xs hover:border-black cursor-pointer transition-all space-y-1.5 group bg-neutral-50/50"
                >
                  <span className="text-[10px] uppercase font-bold text-[#005691] tracking-wider block">
                    {rel.section}
                  </span>
                  <h4 className="headline-lemonde font-bold text-sm text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                    {language === 'fr' && rel.frenchTitle ? rel.frenchTitle : rel.title}
                  </h4>
                  <p className="text-[11px] text-[#777] font-sans">By {rel.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
