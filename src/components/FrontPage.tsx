import React from 'react';
import { Article } from '../types';
import { BreakingBar } from './BreakingBar';

interface FrontPageProps {
  articles: Article[];
  onOpenArticle: (articleId: string) => void;
  onOpenLiveUpdates: () => void;
  onOpenGame: (gameName: 'wordle' | 'connections' | 'spellingbee' | 'mini') => void;
  onOpenWirecutter: () => void;
  onOpenCatchUp: (topic: string) => void;
}

export const FrontPage: React.FC<FrontPageProps> = ({
  articles,
  onOpenArticle,
  onOpenLiveUpdates,
  onOpenGame,
  onOpenWirecutter,
  onOpenCatchUp
}) => {
  const getArticle = (id: string) => articles.find(a => a.id === id);

  const saudiStrike = getArticle('saudi-yemeni-airports');
  const saudiOptions = getArticle('saudi-arabia-houthis-options');
  const chinaTree = getArticle('china-tree-hides-enemy');
  const gazaHope = getArticle('gaza-khan-younis-hope');
  const wildernessDogs = getArticle('wilderness-adventure-dogs');
  const inuitNow = getArticle('what-means-to-be-inuit-now');
  const orszag = getArticle('peter-orszag-grocery-bill');
  const kingsbury = getArticle('kathleen-kingsbury-democracy-eastern-europe');
  const broder = getArticle('david-broder-far-right-environmental');
  const arcticOcean = getArticle('architecture-arctic-ocean');
  const romanStew = getArticle('nyt-cooking-roman-autumn-stew');
  const soccerTactics = getArticle('champions-league-tactics-no-9');
  const berlinClubs = getArticle('berlin-underground-clubs-unification');
  const wirecutterAudio = getArticle('wirecutter-headphones');

  return (
    <main className="max-w-[1340px] mx-auto px-4 py-4" data-purpose="editorial-newspaper-layout" id="main-content">
      {/* Top Headline Banner Tracker */}
      <BreakingBar onOpenLiveUpdates={onOpenLiveUpdates} />

      {/* Primary 3-Column Newspaper Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-[#e2e2e2] pb-8">
        
        {/* LEFT COLUMN: Lead Stories & Core Analysis (Col span 4) */}
        <section className="lg:col-span-4 lg:pr-6 border-col pr-0 space-y-6" data-purpose="left-lead-column">
          {/* Main Lead Story */}
          {saudiStrike && (
            <article className="space-y-2 border-b border-[#e2e2e2] pb-5 group">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#a81c1c]">
                {saudiStrike.kicker || 'Breaking Report'}
              </span>
              <h2
                onClick={() => onOpenArticle(saudiStrike.id)}
                className="headline-editorial font-bold text-2xl sm:text-3xl text-[#121212] group-hover:text-[#363636] cursor-pointer transition-colors leading-tight"
              >
                {saudiStrike.title}
              </h2>
              <p className="subheadline-editorial text-sm sm:text-[15px] text-[#333333] leading-relaxed">
                {saudiStrike.deck}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-[#727272]">
                <span className="font-sans font-medium text-black">By {saudiStrike.author}</span>
                <span>{saudiStrike.readTime}</span>
              </div>
            </article>
          )}

          {/* Secondary Analysis Story */}
          {saudiOptions && (
            <article className="space-y-2 border-b border-[#e2e2e2] pb-5 group">
              <span className="text-[10px] uppercase font-semibold text-[#727272] tracking-wider">
                {saudiOptions.kicker || 'News Analysis'}
              </span>
              <h3
                onClick={() => onOpenArticle(saudiOptions.id)}
                className="headline-editorial font-bold text-xl text-[#121212] group-hover:text-[#363636] cursor-pointer leading-snug"
              >
                {saudiOptions.title}
              </h3>
              <p className="subheadline-editorial text-sm text-[#444444] leading-relaxed">
                {saudiOptions.deck}
              </p>
              <div className="pt-1 flex items-center justify-between text-[11px] text-[#727272]">
                <span className="font-sans">By {saudiOptions.author}</span>
                <span>{saudiOptions.readTime}</span>
              </div>
            </article>
          )}

          {/* Quick News Summary Digest */}
          <div className="bg-[#f9f9f9] p-3.5 border border-[#e2e2e2] rounded-sm space-y-2">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-black">
              Catch Up on the News
            </h4>
            <ul className="divide-y divide-[#e2e2e2] text-xs font-serif space-y-2 pt-1">
              <li
                onClick={() => onOpenCatchUp('Israeli Election: Coalition hurdles mount after historic razor-thin vote margins.')}
                className="pt-2 hover:text-[#00628e] cursor-pointer transition-colors"
              >
                • Israeli Election Like No Other: Coalition hurdles mount after historic razor-thin vote margins.
              </li>
              <li
                onClick={() => onOpenCatchUp('Taliban diplomacy: European migration pacts unlock frozen diplomatic channels.')}
                className="pt-2 hover:text-[#00628e] cursor-pointer transition-colors"
              >
                • The Taliban are using Europe’s anxiety over migration pacts to unlock frozen diplomatic channels.
              </li>
              <li
                onClick={() => onOpenCatchUp('French transport strikes: Public sector unions contest pension plans.')}
                className="pt-2 hover:text-[#00628e] cursor-pointer transition-colors"
              >
                • France braces for widespread transport walkouts as public sector unions contest pension plans.
              </li>
            </ul>
          </div>

          {/* Additional Column Item */}
          {chinaTree && (
            <article className="space-y-1.5 pt-1 group">
              <h3
                onClick={() => onOpenArticle(chinaTree.id)}
                className="headline-editorial font-semibold text-lg text-[#121212] group-hover:text-[#00628e] cursor-pointer leading-snug"
              >
                {chinaTree.title}
              </h3>
              <p className="subheadline-editorial text-xs text-[#363636]">
                {chinaTree.deck}
              </p>
              <span className="text-[11px] text-[#727272] block pt-1">{chinaTree.readTime}</span>
            </article>
          )}
        </section>

        {/* CENTER COLUMN: Primary Hero Image & Major International Dispatch (Col span 5) */}
        <section className="lg:col-span-5 lg:px-6 border-col px-0 py-6 lg:py-0 space-y-5" data-purpose="center-hero-column">
          {/* Hero Visual Element */}
          <div className="space-y-2">
            <div
              onClick={() => onOpenArticle('saudi-yemeni-airports')}
              className="relative overflow-hidden bg-gray-100 border border-[#e2e2e2] cursor-pointer group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdC9eVybZVjbrm77dsZ3snooULI2Do-xBzdSYc7bk4_8TCRclP1AcxjqGEfey1pSLmWr0597Um3WgUR1aZXNp9FhMA368J18IDkiq1zx1vO0SWcWX6jEHx5khbHIBuOArtxs8gs0h8ayGULsm4EHwsfTjM3BbakllXeuoiBSUb4FZjEfc7Dn1TleA-dgip_My9opTAKNomT24MIRM8OFHFZyvuAtdpGVkocEkqGupCaXoBCFCidV8uTA"
                alt="Emergency vehicles and plumes of smoke at the damaged airport tarmac perimeter."
                className="w-full h-auto object-cover aspect-[16/10] filter grayscale contrast-105 group-hover:contrast-100 transition-all duration-300"
                loading="eager"
              />
            </div>
            <figcaption className="text-[11px] text-[#727272] font-sans flex justify-between leading-snug">
              <span>Damage assessed near terminal gates in Riyadh after early morning strikes.</span>
              <span className="uppercase tracking-tighter text-[9px] text-[#363636] pl-2 whitespace-nowrap">
                Tomas Munita for The New York Times
              </span>
            </figcaption>
          </div>

          {/* Featured Dispatch Article */}
          {gazaHope && (
            <article className="space-y-2.5 group">
              <h2
                onClick={() => onOpenArticle(gazaHope.id)}
                className="headline-editorial font-bold text-2xl sm:text-3xl text-[#121212] group-hover:text-[#363636] cursor-pointer leading-tight"
              >
                {gazaHope.title}
              </h2>
              <p className="subheadline-editorial text-sm sm:text-base text-[#333333] leading-relaxed">
                {gazaHope.deck}
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#727272] border-b border-[#e2e2e2] pb-4">
                <span className="font-sans font-medium text-black">By {gazaHope.author}</span>
                <span>{gazaHope.readTime}</span>
              </div>
            </article>
          )}

          {/* Secondary Story in Center Column: The Great Read */}
          {wildernessDogs && (
            <article className="space-y-2 pt-1 group">
              <div className="flex gap-4 items-start">
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#727272]">
                    The Great Read
                  </span>
                  <h3
                    onClick={() => onOpenArticle(wildernessDogs.id)}
                    className="headline-editorial font-bold text-lg text-[#121212] group-hover:text-[#00628e] cursor-pointer leading-tight"
                  >
                    {wildernessDogs.title}
                  </h3>
                  <p className="subheadline-editorial text-xs text-[#363636] leading-snug">
                    {wildernessDogs.deck}
                  </p>
                </div>
                <div
                  onClick={() => onOpenArticle(wildernessDogs.id)}
                  className="w-24 h-24 flex-shrink-0 bg-gray-100 border border-[#e2e2e2] overflow-hidden cursor-pointer"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbg__7nBx8YPV6sJeeJVqG5Nw7zTFxMIiVLEnUiZdTvi73-5FSZ6Esy7yWVwIWixORKQzm2NG1wSQ-iFQGFNV4mRAKA9JLRVrX14q4UalNoAWRFO6fy8kF7EKusOxp6xpBQdQlVWd7a2Vzoa7e5zFDGLyGX3P1Z3koibMN4LzwK32NPKbh4EdMXkvJ3ykdKJ4wTqEZQVpX_4Uex_3FGLTJENje15uXVq5vcMC4KxgMMtP9aGBnjbol-g"
                    alt="Two sled dogs resting near a northern spruce forest."
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <div className="text-[11px] text-[#727272] pt-1">
                <span>By {wildernessDogs.author}</span> · {wildernessDogs.readTime}
              </div>
            </article>
          )}

          {/* Cultural Feature Card */}
          {inuitNow && (
            <article className="border-t border-[#e2e2e2] pt-4 space-y-2 group">
              <h3
                onClick={() => onOpenArticle(inuitNow.id)}
                className="headline-editorial font-semibold text-lg text-[#121212] group-hover:text-black cursor-pointer leading-tight"
              >
                {inuitNow.title}
              </h3>
              <p className="subheadline-editorial text-xs text-[#363636] leading-relaxed">
                {inuitNow.deck}
              </p>
            </article>
          )}
        </section>

        {/* RIGHT COLUMN: Opinion & Sidebar Features (Col span 3) */}
        <aside className="lg:col-span-3 lg:pl-6 space-y-6 pt-6 lg:pt-0" data-purpose="right-opinion-column">
          {/* Section Title */}
          <div className="border-b-2 border-black pb-1">
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-black">
              Opinion
            </h3>
          </div>

          {/* Opinion Columnist Item 1: Peter R. Orszag */}
          {orszag && (
            <article className="space-y-2 border-b border-[#e2e2e2] pb-4 group">
              <div className="flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmltGQUIWPz6wuwRnUxLfSABL5_q0ECyfmGW0xX64CGoFlyoeMOx3CpGGTKNYGFOzjqgADZF8eRbqTOo3JLhCxvYvRn4PaLbDg3XdcRD8cDVgY6UGJm266Tu_-AqQY6FmhAn1dN37EVLMIPZsjrI6Y20l33eeUiUS8io5DMr2Jg0Ytok36QLIs7xf9CsUoi8PV8BuRrLX2gDuGKq9LGnnRGpLjMrFPtnNA-5fWXs6i91YxEfwt9Teh5w"
                  alt="Portrait of columnist Peter R. Orszag"
                  className="w-10 h-10 rounded-full object-cover border border-[#e2e2e2]"
                />
                <div>
                  <p className="font-sans font-bold text-xs text-black">{orszag.author}</p>
                  <p className="text-[10px] text-[#727272] uppercase tracking-wider">Contributing Opinion Writer</p>
                </div>
              </div>
              <h4
                onClick={() => onOpenArticle(orszag.id)}
                className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] cursor-pointer leading-snug"
              >
                {orszag.title}
              </h4>
              <p className="subheadline-editorial text-xs text-[#363636]">
                {orszag.deck}
              </p>
            </article>
          )}

          {/* Opinion Columnist Item 2: Kathleen Kingsbury */}
          {kingsbury && (
            <article className="space-y-2 border-b border-[#e2e2e2] pb-4 group">
              <div className="flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRsypyGKiUOz-Ywj25TOwpcszPj53Fr4q_cYmjKsfezh5xAUHwQN9QL-bgEhf4wM4eHcUKlsmlGUfwGXAYsNW21tLCuon4rWsVrp5QneuVbo00vji3tZRXPnMi2ZNG7bKL7OOZa1CR8yWExlxZRJ6DpdSMeGYlAO6Yh4YCZxAZiTsre-yXdn5_Wb3kppeY6bGzFKFIBBmTGWR5iTRBeH9DXUnwr-vPU3LK5kVLzpfFMAx6wCUISGrqcg"
                  alt="Portrait of Kathleen Kingsbury"
                  className="w-10 h-10 rounded-full object-cover border border-[#e2e2e2]"
                />
                <div>
                  <p className="font-sans font-bold text-xs text-black">{kingsbury.author}</p>
                  <p className="text-[10px] text-[#727272] uppercase tracking-wider">The Editorial Board</p>
                </div>
              </div>
              <h4
                onClick={() => onOpenArticle(kingsbury.id)}
                className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] cursor-pointer leading-snug"
              >
                {kingsbury.title}
              </h4>
            </article>
          )}

          {/* Opinion Item 3: David Broder */}
          {broder && (
            <article className="space-y-1.5 border-b border-[#e2e2e2] pb-4 group">
              <span className="font-sans font-bold text-[11px] text-black">{broder.author}</span>
              <h4
                onClick={() => onOpenArticle(broder.id)}
                className="headline-editorial text-sm font-semibold text-[#121212] group-hover:text-[#00628e] cursor-pointer leading-snug"
              >
                {broder.title}
              </h4>
            </article>
          )}

          {/* Interactive Games Showcase Box */}
          <div className="border border-[#e2e2e2] p-3.5 bg-[#fbfbfb] rounded-sm space-y-3" data-purpose="nyt-games-widget">
            <div className="flex items-center justify-between">
              <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-black">
                Play NYT Games
              </span>
              <span className="text-[10px] text-[#727272]">Daily puzzles</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-sans">
              <button
                onClick={() => onOpenGame('wordle')}
                className="bg-white border border-[#e2e2e2] p-2 rounded hover:shadow-sm cursor-pointer transition-shadow text-left group"
              >
                <span className="block font-bold text-black group-hover:text-[#00628e]">Wordle</span>
                <span className="text-[10px] text-[#727272]">No. 1,214</span>
              </button>
              <button
                onClick={() => onOpenGame('connections')}
                className="bg-white border border-[#e2e2e2] p-2 rounded hover:shadow-sm cursor-pointer transition-shadow text-left group"
              >
                <span className="block font-bold text-black group-hover:text-[#00628e]">Connections</span>
                <span className="text-[10px] text-[#727272]">Group by 4</span>
              </button>
              <button
                onClick={() => onOpenGame('spellingbee')}
                className="bg-white border border-[#e2e2e2] p-2 rounded hover:shadow-sm cursor-pointer transition-shadow text-left group"
              >
                <span className="block font-bold text-black group-hover:text-[#00628e]">Spelling Bee</span>
                <span className="text-[10px] text-[#727272]">Rank: Genius</span>
              </button>
              <button
                onClick={() => onOpenGame('mini')}
                className="bg-white border border-[#e2e2e2] p-2 rounded hover:shadow-sm cursor-pointer transition-shadow text-left group"
              >
                <span className="block font-bold text-black group-hover:text-[#00628e]">The Mini</span>
                <span className="text-[10px] text-[#727272]">1m 12s avg</span>
              </button>
            </div>
          </div>

          {/* Wirecutter Mini Teaser */}
          <div className="pt-1 space-y-2">
            <div className="flex items-center justify-between border-b border-[#e2e2e2] pb-1">
              <span className="font-sans font-bold text-xs uppercase tracking-wider text-black">Wirecutter</span>
              <button
                onClick={onOpenWirecutter}
                className="text-[10px] text-[#00628e] hover:underline cursor-pointer"
              >
                Reviews & Picks
              </button>
            </div>
            <div
              onClick={() => onOpenArticle('wirecutter-headphones')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8--q_T7RBJ0xQ-ubXJJPQc5mDn3ybBzxpexpMoF8BKZQ9u6DvlnJzn0rxqUE5EtptNnh0C4sXfvWS9OLF72_k91ujuayMBXYwYhDIfr0rkGLz3KYDYpsNf8pH3G64Qr8ybIFN5e_sdLjSLqjPOdU9LOKCiYYV0bd04grKA3vQ1WBUJKOKOSelesgVk8Se2cuGOrolzY8KzuyTGgreWCyMOF4fy8Gv3HhoJO_Uh-jzBeo3jgmQcIyCUg"
                alt="Best noise canceling headphones tested in lab"
                className="w-16 h-12 object-cover border border-[#e2e2e2] flex-shrink-0"
              />
              <h5 className="font-sans text-xs font-medium text-black group-hover:underline leading-snug">
                {wirecutterAudio?.title || 'The 5 Best Noise-Canceling Headphones for Long-Haul Travel'}
              </h5>
            </div>
          </div>
        </aside>
      </div>

      {/* LOWER HORIZONTAL FEATURES SECTION */}
      <section className="mt-8 pt-4 border-t-2 border-black" data-purpose="lower-editorial-features">
        <div className="flex items-center justify-between pb-4">
          <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-black">
            Trending & In-Depth Journalism
          </h3>
          <span className="text-xs text-[#727272]">Curated for the International Edition</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Card 1: Architecture */}
          {arcticOcean && (
            <article
              onClick={() => onOpenArticle(arcticOcean.id)}
              className="space-y-2 cursor-pointer group"
            >
              <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden border border-[#e2e2e2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNeaMXZOQIAPeFtF9HEsqyTRY5hJoQ2BMX_stKv0KtXUZ1hokP0iV19nObVzqNWGoP_fTng-0E4CidzTFVGtGrGg1FlMoTLUIdRD5iJYW5fcsTnodnDADG-nS67p5o46b8MFoyQN7Uh_5OB7dQwaT_sX2Ui3LYOQhnnCIAFk9OC8gvudUAZ-JgZDMWwaNjYlEF4zunpzsxSXn9X_IT7gdbEbjtuhuO1L_ZmxkT5oPqVv9XFX4sIlTbvQ"
                  alt="Modern architectural house built on Norwegian fjord cliffs."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#727272] block pt-1">
                Architecture
              </span>
              <h4 className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] leading-snug">
                {arcticOcean.title}
              </h4>
              <p className="subheadline-editorial text-xs text-[#363636]">
                {arcticOcean.deck}
              </p>
            </article>
          )}

          {/* Feature Card 2: NYT Cooking */}
          {romanStew && (
            <article
              onClick={() => onOpenArticle(romanStew.id)}
              className="space-y-2 cursor-pointer group"
            >
              <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden border border-[#e2e2e2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzM78g5rCpnCcqtNlacGd-jw4qoAcrqPjFKl9xW4Si5IiaE2JgB0JP8ljQPaWmlLnkCu-y0thMwq1069YawOh5-7bHg8kaUj2uL6hORlAL7zDtSIId627byzmXvRtpItnQy_Z4rhGvBOK3Qmnww6LT-5kyg1EaPRHsnTI97DPC45ZpFse4yuEFGNqrsDVrOp7kyDQXRROeaP-zP9YOToiujHcfWwkoNQNd6Ohig2CN1D2rwUJBX8xt7A"
                  alt="A vibrant culinary dish with braised vegetables and spices."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#a81c1c] block pt-1">
                NYT Cooking
              </span>
              <h4 className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] leading-snug">
                {romanStew.title}
              </h4>
              <p className="subheadline-editorial text-xs text-[#363636]">
                {romanStew.deck}
              </p>
            </article>
          )}

          {/* Feature Card 3: The Athletic */}
          {soccerTactics && (
            <article
              onClick={() => onOpenArticle(soccerTactics.id)}
              className="space-y-2 cursor-pointer group"
            >
              <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden border border-[#e2e2e2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbwiB0C3XreKgq1LkUzdGleAefgZurCHYi-fxPxSFMHuunmxWaRocbpDKyh0AUamncPXxgdiHu7ctqp4q7Y-fSpuitZvyfdIImfyLgOIIkJWmt3veWkA28G_O_pvINgD3qzJF_5QLycNPu72eujLjmNXxhICVp4fS0-6dYmM6Of3A_B403MsC3n6NiXsC-SJ8R2dLN9YrMW60CB7uMcmeOcWEBwzw4vBEWzntmATXUSH6Knsyi9TlD1g"
                  alt="Soccer players competing under floodlights in London."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-black block pt-1">
                The Athletic
              </span>
              <h4 className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] leading-snug">
                {soccerTactics.title}
              </h4>
              <p className="subheadline-editorial text-xs text-[#363636]">
                {soccerTactics.deck}
              </p>
            </article>
          )}

          {/* Feature Card 4: Culture & Sound */}
          {berlinClubs && (
            <article
              onClick={() => onOpenArticle(berlinClubs.id)}
              className="space-y-2 cursor-pointer group"
            >
              <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden border border-[#e2e2e2]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ87BZtNdRCROuMcwfNCDv69NXJI0yDUCnaVoEfsaFryNZG9uGnCbJGtbmRuMmjYs_-Lbk77kMo7sFFTpf09Lj4XBRvQZqzGq2vXUfer4KmtY_NLZNQRAcOisPXGRJ13CMa2bBT4U8IH6-iu4zF7tc6SrFqgvfGh5VOs2U4IS6FRQqSeux4IoOCRWnG9taizCX5vtQ3zVj26HcCBnd6vq7kqRuqrR8ioJa0JjUntDbxlCEDVYCQHGG-g"
                  alt="Silhouetted concertgoers at an electronic music amphitheater."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#727272] block pt-1">
                Culture & Sound
              </span>
              <h4 className="headline-editorial font-bold text-base text-[#121212] group-hover:text-[#00628e] leading-snug">
                {berlinClubs.title}
              </h4>
              <p className="subheadline-editorial text-xs text-[#363636]">
                {berlinClubs.deck}
              </p>
            </article>
          )}
        </div>
      </section>
    </main>
  );
};
