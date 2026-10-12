import React from 'react';

interface FooterProps {
  onSelectSection: (section: string) => void;
  onOpenSubscribe: () => void;
  onOpenGame: (game: 'wordle' | 'connections' | 'spellingbee' | 'mini') => void;
  onGoHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenSubscribe,
  onOpenGame,
  onGoHome
}) => {
  return (
    <footer
      className="max-w-[1340px] mx-auto px-4 mt-12 border-t-2 border-black pt-6 pb-16 text-[#363636] font-sans text-xs"
      data-purpose="site-footer"
    >
      {/* Footer Masthead Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-[#e2e2e2] gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onGoHome}
            className="font-masthead-title text-3xl text-black hover:opacity-80 transition-opacity cursor-pointer"
          >
            The New York Times
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] text-[#727272]">
          <button onClick={() => onSelectSection('World')} className="hover:underline cursor-pointer">News</button>
          <button onClick={() => onSelectSection('Opinion')} className="hover:underline cursor-pointer">Opinion</button>
          <button onClick={() => onSelectSection('Arts')} className="hover:underline cursor-pointer">Arts</button>
          <button onClick={() => onSelectSection('Food')} className="hover:underline cursor-pointer">Living</button>
          <button onClick={() => onSelectSection('Real Estate')} className="hover:underline cursor-pointer">Listing Directory</button>
          <button onClick={() => onSelectSection('Audio')} className="hover:underline cursor-pointer">Audio</button>
          <button onClick={() => onOpenGame('wordle')} className="hover:underline cursor-pointer">Games</button>
          <button onClick={() => onSelectSection('Food')} className="hover:underline cursor-pointer">Cooking</button>
          <button onClick={() => onSelectSection('Tech')} className="hover:underline cursor-pointer">Wirecutter</button>
          <button onClick={() => onSelectSection('Sports')} className="hover:underline cursor-pointer">The Athletic</button>
        </div>
      </div>

      {/* Multi-Column Site Directory */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 py-6 border-b border-[#e2e2e2] text-[11px] leading-relaxed">
        <div>
          <h5 className="font-bold uppercase text-black mb-2">News</h5>
          <ul className="space-y-1 text-[#363636]">
            <li><button onClick={onGoHome} className="hover:underline text-left cursor-pointer">Home Page</button></li>
            <li><button onClick={() => onSelectSection('World')} className="hover:underline text-left cursor-pointer">World News</button></li>
            <li><button onClick={() => onSelectSection('Health')} className="hover:underline text-left cursor-pointer">Coronavirus & Health</button></li>
            <li><button onClick={() => onSelectSection('Politics')} className="hover:underline text-left cursor-pointer">U.S. Politics</button></li>
            <li><button onClick={() => onSelectSection('Science')} className="hover:underline text-left cursor-pointer">Climate</button></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase text-black mb-2">Opinion</h5>
          <ul className="space-y-1 text-[#363636]">
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline text-left cursor-pointer">Today's Opinion</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline text-left cursor-pointer">Columnists</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline text-left cursor-pointer">Editorials</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline text-left cursor-pointer">Guest Essays</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline text-left cursor-pointer">Letters</button></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase text-black mb-2">Arts</h5>
          <ul className="space-y-1 text-[#363636]">
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline text-left cursor-pointer">Today's Arts</button></li>
            <li><button onClick={() => onSelectSection('Books')} className="hover:underline text-left cursor-pointer">Books</button></li>
            <li><button onClick={() => onSelectSection('Books')} className="hover:underline text-left cursor-pointer">Best Seller Lists</button></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline text-left cursor-pointer">Movies</button></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline text-left cursor-pointer">Music</button></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase text-black mb-2">Living</h5>
          <ul className="space-y-1 text-[#363636]">
            <li><button onClick={() => onSelectSection('Style')} className="hover:underline text-left cursor-pointer">Style</button></li>
            <li><button onClick={() => onSelectSection('Food')} className="hover:underline text-left cursor-pointer">Food</button></li>
            <li><button onClick={() => onSelectSection('Health')} className="hover:underline text-left cursor-pointer">Health</button></li>
            <li><button onClick={() => onSelectSection('Travel')} className="hover:underline text-left cursor-pointer">Travel</button></li>
            <li><button onClick={() => onSelectSection('Style')} className="hover:underline text-left cursor-pointer">Love</button></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase text-black mb-2">More</h5>
          <ul className="space-y-1 text-[#363636]">
            <li><button onClick={() => onSelectSection('World')} className="hover:underline text-left cursor-pointer">Reader Center</button></li>
            <li><button onClick={() => onSelectSection('Tech')} className="hover:underline text-left cursor-pointer">Wirecutter</button></li>
            <li><button onClick={() => onSelectSection('Food')} className="hover:underline text-left cursor-pointer">Cooking</button></li>
            <li><button onClick={() => onSelectSection('World')} className="hover:underline text-left cursor-pointer">Headway</button></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline text-left cursor-pointer">Live Events</button></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase text-black mb-2">Subscriptions</h5>
          <ul className="space-y-1 text-[#363636]">
            <li>
              <button onClick={onOpenSubscribe} className="hover:underline font-semibold text-[#00628e] text-left cursor-pointer">
                Home Delivery
              </button>
            </li>
            <li>
              <button onClick={onOpenSubscribe} className="hover:underline font-semibold text-[#00628e] text-left cursor-pointer">
                Digital Subscriptions
              </button>
            </li>
            <li>
              <button onClick={() => onOpenGame('wordle')} className="hover:underline text-left cursor-pointer">
                Games & Crosswords
              </button>
            </li>
            <li>
              <button onClick={onOpenSubscribe} className="hover:underline text-left cursor-pointer">
                Cooking Pass
              </button>
            </li>
            <li>
              <button onClick={onOpenSubscribe} className="hover:underline text-left cursor-pointer">
                Corporate Accounts
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Legal Compliance Links */}
      <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#727272] gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>© 2026 The New York Times Company</span>
          <a className="hover:underline" href="#">NYTCo</a>
          <a className="hover:underline" href="#">Contact Us</a>
          <a className="hover:underline" href="#">Accessibility</a>
          <a className="hover:underline" href="#">Work with us</a>
          <a className="hover:underline" href="#">Advertise</a>
          <a className="hover:underline" href="#">T Brand Studio</a>
          <a className="hover:underline" href="#">Your Ad Choices</a>
          <a className="hover:underline" href="#">Privacy Policy</a>
          <a className="hover:underline" href="#">Terms of Service</a>
          <a className="hover:underline" href="#">Site Map</a>
        </div>
        <div>
          <span>Help · Subscriptions</span>
        </div>
      </div>
    </footer>
  );
};
