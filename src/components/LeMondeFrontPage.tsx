import React from 'react';
import { Lock, ArrowRight, ShieldCheck, Mail, Flame } from 'lucide-react';
import { LeMondeArticle, LanguageMode } from '../types';
import { MOST_READ_TITLES, DECODEURS_FACT_CHECKS } from '../data/lemonde_articles';

interface LeMondeFrontPageProps {
  articles: LeMondeArticle[];
  language: LanguageMode;
  onOpenArticle: (id: string) => void;
  onOpenSubscribe: () => void;
  onOpenNewsletter: () => void;
}

export const LeMondeFrontPage: React.FC<LeMondeFrontPageProps> = ({
  articles,
  language,
  onOpenArticle,
  onOpenSubscribe,
  onOpenNewsletter
}) => {
  const getArticle = (id: string) => articles.find(a => a.id === id);

  const leadStory = getArticle('france-nation-on-edge');
  const highSchoolGrievances = getArticle('high-school-grievances');
  const debtCrisis = getArticle('france-debt-crisis-global');
  const glucksmann = getArticle('glucksmann-primary-win');
  const filiuColumn = getArticle('filiu-column-netanyahu');
  const thales = getArticle('thales-azerbaijan-investigation');
  const esports = getArticle('esports-sexual-violence');
  const darkSuit = getArticle('m-magazine-dark-suit');
  const hasanPiker = getArticle('hasan-piker-profile');
  const parcoursup = getArticle('parcoursup-explainer');
  const editorial = getArticle('editorial-arrests-france');

  const getTitle = (art?: LeMondeArticle) => {
    if (!art) return '';
    return language === 'fr' && art.frenchTitle ? art.frenchTitle : art.title;
  };

  const getDeck = (art?: LeMondeArticle) => {
    if (!art) return '';
    return language === 'fr' && art.frenchDeck ? art.frenchDeck : art.deck;
  };

  return (
    <main className="max-w-[1360px] mx-auto px-4 py-6" id="main-content">
      {/* SECTION 1: À LA UNE (Lead Package + Most Read Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-[#e2e2e2] pb-10">
        
        {/* LEFT / CENTER: Lead Stories (Col span 8) */}
        <section className="lg:col-span-8 space-y-8">
          
          {/* Main Hero Lead Story */}
          {leadStory && (
            <article className="border-b border-[#e2e2e2] pb-8 group">
              <div
                onClick={() => onOpenArticle(leadStory.id)}
                className="cursor-pointer space-y-3"
              >
                {/* Hero Photograph with Agency Credit */}
                <div className="relative overflow-hidden bg-neutral-100 border border-[#e2e2e2] aspect-[16/9]">
                  <img
                    src={leadStory.imageUrl}
                    alt={leadStory.imageCaption || leadStory.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge-subscriber shadow-xs">
                      <Lock className="w-2.5 h-2.5" />
                      Subscribers only
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline text-[11px] text-[#666] font-sans pt-1">
                  <span className="uppercase font-bold tracking-wider text-[#c00]">
                    {leadStory.kicker || 'France'}
                  </span>
                  <span className="uppercase text-[10px] tracking-tight">
                    {leadStory.imageCredit}
                  </span>
                </div>

                {/* Lead Headline */}
                <h2 className="headline-lemonde font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] group-hover:text-[#005691] transition-colors leading-[1.12]">
                  {getTitle(leadStory)}
                </h2>

                {/* Lead Deck */}
                <p className="subheadline-lemonde text-base sm:text-lg text-[#333] leading-relaxed">
                  {getDeck(leadStory)}
                </p>

                <div className="flex items-center gap-3 text-xs text-[#666] pt-1">
                  <span className="font-semibold text-black">By {leadStory.author}</span>
                  <span>·</span>
                  <span>{leadStory.authorLocation}</span>
                  <span>·</span>
                  <span>{leadStory.readTime}</span>
                </div>
              </div>
            </article>
          )}

          {/* 2-Column Companion Stories Grid Below Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Story 1 */}
            {highSchoolGrievances && (
              <article
                onClick={() => onOpenArticle(highSchoolGrievances.id)}
                className="space-y-2 cursor-pointer group pb-4 border-b md:border-b-0 md:border-r border-[#e2e2e2] md:pr-6"
              >
                <span className="badge-subscriber">
                  <Lock className="w-2.5 h-2.5" />
                  Subscribers only
                </span>
                <h3 className="headline-lemonde font-bold text-xl text-[#1a1a1a] group-hover:text-[#005691] transition-colors leading-snug">
                  {getTitle(highSchoolGrievances)}
                </h3>
                <p className="text-xs text-[#444] font-serif leading-relaxed line-clamp-3">
                  {getDeck(highSchoolGrievances)}
                </p>
                <span className="text-[11px] text-[#777] block font-sans">
                  By {highSchoolGrievances.author} · {highSchoolGrievances.readTime}
                </span>
              </article>
            )}

            {/* Story 2 */}
            {debtCrisis && (
              <article
                onClick={() => onOpenArticle(debtCrisis.id)}
                className="space-y-2 cursor-pointer group"
              >
                <span className="badge-subscriber">
                  <Lock className="w-2.5 h-2.5" />
                  Subscribers only
                </span>
                <h3 className="headline-lemonde font-bold text-xl text-[#1a1a1a] group-hover:text-[#005691] transition-colors leading-snug">
                  {getTitle(debtCrisis)}
                </h3>
                <p className="text-xs text-[#444] font-serif leading-relaxed line-clamp-3">
                  {getDeck(debtCrisis)}
                </p>
                <span className="text-[11px] text-[#777] block font-sans">
                  By {debtCrisis.author} · {debtCrisis.readTime}
                </span>
              </article>
            )}
          </div>
        </section>

        {/* RIGHT SIDEBAR: Most Read + Newsletter (Col span 4) */}
        <aside className="lg:col-span-4 space-y-8 lg:pl-4">
          
          {/* Most Read Box */}
          <div className="border border-[#e2e2e2] p-5 rounded-xs bg-[#fbfbfb]">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-black mb-4">
              <Flame className="w-4 h-4 text-[#c00]" />
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-black">
                Most Read
              </h3>
            </div>

            <ol className="space-y-4">
              {MOST_READ_TITLES.slice(0, 8).map((titleText, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    const match = articles.find(a => a.title.includes(titleText) || titleText.includes(a.title));
                    if (match) onOpenArticle(match.id);
                    else onOpenArticle('france-nation-on-edge');
                  }}
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <span className="font-serif font-bold text-2xl text-[#888] group-hover:text-black leading-none w-6 flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <p className="headline-lemonde text-xs sm:text-sm font-semibold text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                      {titleText}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Daily Newsletter Promo Box */}
          <div className="border border-[#e2e2e2] p-5 bg-[#fffdec] rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-black">
              <Mail className="w-4 h-4 text-black" />
              <h4 className="font-bold text-xs uppercase tracking-wider">
                Le Monde in English
              </h4>
            </div>
            <p className="text-xs text-[#333] leading-relaxed">
              Sign up to receive our daily curated selection of <em>Le Monde</em> articles translated into English, direct to your inbox.
            </p>
            <button
              onClick={onOpenNewsletter}
              className="w-full bg-black hover:bg-[#333] text-white py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Sign up for free
            </button>
          </div>

          {/* Les Décodeurs Fact Checking Box */}
          <div className="border border-[#e2e2e2] p-5 bg-white rounded-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-2">
              <span className="font-bold text-xs text-[#005691] tracking-wide uppercase">
                Les Décodeurs
              </span>
              <ShieldCheck className="w-4 h-4 text-[#005691]" />
            </div>
            <div className="space-y-3">
              {DECODEURS_FACT_CHECKS.map((fc, i) => (
                <div key={i} className="text-xs space-y-1">
                  <span className="inline-block bg-[#c00] text-white font-bold text-[9px] uppercase px-1.5 py-0.5 rounded-xs">
                    {fc.verdict}
                  </span>
                  <p className="font-serif font-bold text-neutral-900 leading-snug">
                    {fc.claim}
                  </p>
                  <p className="text-[11px] text-[#666] leading-tight">
                    {fc.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* SECTION 2: INVESTIGATION & WORLD ANALYSIS */}
      <section className="py-10 border-b border-[#e2e2e2]">
        <div className="flex items-center justify-between pb-6">
          <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-black flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#c00] inline-block" />
            French Politics & Investigations
          </h3>
          <span className="text-xs text-[#666]">Exclusive reporting from Paris</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1: Glucksmann */}
          {glucksmann && (
            <article
              onClick={() => onOpenArticle(glucksmann.id)}
              className="space-y-3 cursor-pointer group"
            >
              {glucksmann.imageUrl && (
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-[#e2e2e2]">
                  <img
                    src={glucksmann.imageUrl}
                    alt={glucksmann.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#005691] block">
                {glucksmann.kicker}
              </span>
              <h4 className="headline-lemonde font-bold text-lg text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(glucksmann)}
              </h4>
              <p className="text-xs text-[#444] font-serif leading-relaxed line-clamp-2">
                {getDeck(glucksmann)}
              </p>
              <span className="text-[11px] text-[#777] font-sans block">
                By {glucksmann.author} · {glucksmann.readTime}
              </span>
            </article>
          )}

          {/* Item 2: Thales Investigation */}
          {thales && (
            <article
              onClick={() => onOpenArticle(thales.id)}
              className="space-y-3 cursor-pointer group"
            >
              {thales.imageUrl && (
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-[#e2e2e2] relative">
                  <img
                    src={thales.imageUrl}
                    alt={thales.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="badge-subscriber">
                      <Lock className="w-2.5 h-2.5" />
                      Subscribers only
                    </span>
                  </div>
                </div>
              )}
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#c00] block">
                {thales.kicker}
              </span>
              <h4 className="headline-lemonde font-bold text-lg text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(thales)}
              </h4>
              <p className="text-xs text-[#444] font-serif leading-relaxed line-clamp-2">
                {getDeck(thales)}
              </p>
              <span className="text-[11px] text-[#777] font-sans block">
                By {thales.author} · {thales.readTime}
              </span>
            </article>
          )}

          {/* Item 3: Women in E-sports */}
          {esports && (
            <article
              onClick={() => onOpenArticle(esports.id)}
              className="space-y-3 cursor-pointer group"
            >
              {esports.imageUrl && (
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-[#e2e2e2] relative">
                  <img
                    src={esports.imageUrl}
                    alt={esports.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="badge-subscriber">
                      <Lock className="w-2.5 h-2.5" />
                      Subscribers only
                    </span>
                  </div>
                </div>
              )}
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#c00] block">
                {esports.kicker}
              </span>
              <h4 className="headline-lemonde font-bold text-lg text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(esports)}
              </h4>
              <p className="text-xs text-[#444] font-serif leading-relaxed line-clamp-2">
                {getDeck(esports)}
              </p>
              <span className="text-[11px] text-[#777] font-sans block">
                By {esports.author} · {esports.readTime}
              </span>
            </article>
          )}
        </div>
      </section>

      {/* SECTION 3: OPINION & CULTURE (Filiu column & M Magazine) */}
      <section className="py-10 border-b border-[#e2e2e2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Opinion Column (Col span 7) */}
          {filiuColumn && (
            <div
              onClick={() => onOpenArticle(filiuColumn.id)}
              className="lg:col-span-7 space-y-3 cursor-pointer group border-b lg:border-b-0 lg:border-r border-[#e2e2e2] lg:pr-8"
            >
              <div className="flex items-center gap-2">
                <span className="badge-subscriber">
                  <Lock className="w-2.5 h-2.5" />
                  Subscribers only
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#666]">
                  Column
                </span>
              </div>
              <h3 className="headline-lemonde font-bold text-2xl sm:text-3xl text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(filiuColumn)}
              </h3>
              <p className="subheadline-lemonde text-sm text-[#333] leading-relaxed">
                {getDeck(filiuColumn)}
              </p>
              <div className="text-xs text-[#666] pt-1">
                <span className="font-bold text-black">{filiuColumn.author}</span>
                <span className="block text-[11px] text-[#777]">{filiuColumn.authorRole}</span>
              </div>
            </div>
          )}

          {/* Right: M Le Magazine du Monde Fashion & Style (Col span 5) */}
          {darkSuit && (
            <div
              onClick={() => onOpenArticle(darkSuit.id)}
              className="lg:col-span-5 space-y-3 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-black">
                  M Le Magazine du Monde
                </span>
                <span className="text-[10px] text-[#666]">Lifestyle & Sartorial</span>
              </div>
              {darkSuit.imageUrl && (
                <div className="aspect-[16/9] overflow-hidden bg-neutral-100 border border-[#e2e2e2]">
                  <img
                    src={darkSuit.imageUrl}
                    alt={darkSuit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h4 className="headline-lemonde font-bold text-lg text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(darkSuit)}
              </h4>
              <p className="text-xs text-[#444] font-serif leading-relaxed line-clamp-2">
                {getDeck(darkSuit)}
              </p>
              <span className="text-[11px] text-[#777] font-sans block">
                By {darkSuit.author} · {darkSuit.authorRole}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: EDITOR'S PICKS */}
      <section className="py-10">
        <div className="flex items-center justify-between pb-6">
          <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-black">
            Editor’s Picks
          </h3>
          <span className="text-xs text-[#666]">Selected by the English edition editors</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Hasan Piker */}
          {hasanPiker && (
            <article
              onClick={() => onOpenArticle(hasanPiker.id)}
              className="p-4 border border-[#e2e2e2] rounded-xs bg-[#fafafa] hover:bg-white hover:border-black transition-all cursor-pointer space-y-2 group"
            >
              <div className="flex justify-between items-center text-[10px]">
                <span className="uppercase font-bold tracking-wider text-[#005691]">
                  {hasanPiker.kicker}
                </span>
                <span className="badge-subscriber">
                  <Lock className="w-2.5 h-2.5" />
                  Subscribers
                </span>
              </div>
              <h4 className="headline-lemonde font-bold text-base text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(hasanPiker)}
              </h4>
              <p className="text-xs text-[#555] font-serif line-clamp-2">
                {getDeck(hasanPiker)}
              </p>
              <div className="text-[11px] text-[#777] font-sans pt-1">
                By {hasanPiker.author} in {hasanPiker.authorLocation} · {hasanPiker.readTime}
              </div>
            </article>
          )}

          {/* Card 2: Parcoursup */}
          {parcoursup && (
            <article
              onClick={() => onOpenArticle(parcoursup.id)}
              className="p-4 border border-[#e2e2e2] rounded-xs bg-[#fafafa] hover:bg-white hover:border-black transition-all cursor-pointer space-y-2 group"
            >
              <div className="flex justify-between items-center text-[10px]">
                <span className="uppercase font-bold tracking-wider text-[#005691]">
                  {parcoursup.kicker}
                </span>
                <span className="badge-subscriber">
                  <Lock className="w-2.5 h-2.5" />
                  Subscribers
                </span>
              </div>
              <h4 className="headline-lemonde font-bold text-base text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(parcoursup)}
              </h4>
              <p className="text-xs text-[#555] font-serif line-clamp-2">
                {getDeck(parcoursup)}
              </p>
              <div className="text-[11px] text-[#777] font-sans pt-1">
                By {parcoursup.author} · {parcoursup.readTime}
              </div>
            </article>
          )}

          {/* Card 3: Editorial */}
          {editorial && (
            <article
              onClick={() => onOpenArticle(editorial.id)}
              className="p-4 border border-[#e2e2e2] rounded-xs bg-[#fafafa] hover:bg-white hover:border-black transition-all cursor-pointer space-y-2 group"
            >
              <div className="flex justify-between items-center text-[10px]">
                <span className="uppercase font-bold tracking-wider text-[#c00]">
                  {editorial.kicker}
                </span>
                <span className="badge-subscriber">
                  <Lock className="w-2.5 h-2.5" />
                  Subscribers
                </span>
              </div>
              <h4 className="headline-lemonde font-bold text-base text-[#1a1a1a] group-hover:text-[#005691] leading-snug">
                {getTitle(editorial)}
              </h4>
              <p className="text-xs text-[#555] font-serif line-clamp-2">
                {getDeck(editorial)}
              </p>
              <div className="text-[11px] text-[#777] font-sans pt-1">
                {editorial.author} · {editorial.readTime}
              </div>
            </article>
          )}
        </div>
      </section>

      {/* Sticky Bottom Yellow Subscription Ribbon */}
      <section className="mt-8 bg-[#FFE000] p-6 rounded-xs flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-bold text-lg text-black">
            Unlimited access to Le Monde in English
          </h4>
          <p className="text-xs text-neutral-800">
            Support independent, rigorous journalism from our Paris newsroom. From €2.99/month.
          </p>
        </div>
        <button
          onClick={onOpenSubscribe}
          className="bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xs transition-colors cursor-pointer whitespace-nowrap shadow-xs"
        >
          Subscribe now
        </button>
      </section>
    </main>
  );
};
