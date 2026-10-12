import React from 'react';

interface LeMondeFooterProps {
  onSelectSection: (section: string) => void;
  onOpenSubscribe: () => void;
  onOpenNewsletter: () => void;
  onGoHome: () => void;
}

export const LeMondeFooter: React.FC<LeMondeFooterProps> = ({
  onSelectSection,
  onOpenSubscribe,
  onOpenNewsletter,
  onGoHome
}) => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white pt-12 pb-16 px-4 font-sans text-xs mt-16" data-purpose="lemonde-footer">
      <div className="max-w-[1360px] mx-auto space-y-10">
        
        {/* Top Header Row in Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-neutral-700 gap-4">
          <div className="flex items-baseline gap-3">
            <button
              onClick={onGoHome}
              className="font-lemonde-logo text-3xl font-bold text-white hover:text-[#FFE000] transition-colors cursor-pointer"
            >
              Le Monde
            </button>
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-widest">
              in English
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenSubscribe}
              className="bg-[#FFE000] hover:bg-[#e6ca00] text-black px-4 py-2 font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              Subscribe
            </button>
            <button
              onClick={onOpenNewsletter}
              className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              Newsletter
            </button>
          </div>
        </div>

        {/* Multi-Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-[11px] text-neutral-300 leading-relaxed border-b border-neutral-800 pb-10">
          <div>
            <h5 className="font-bold uppercase text-white mb-3 text-xs tracking-wider">News</h5>
            <ul className="space-y-1.5">
              <li><button onClick={() => onSelectSection('World')} className="hover:text-white cursor-pointer">World</button></li>
              <li><button onClick={() => onSelectSection('French politics')} className="hover:text-white cursor-pointer">French politics</button></li>
              <li><button onClick={() => onSelectSection('France')} className="hover:text-white cursor-pointer">France</button></li>
              <li><button onClick={() => onSelectSection('Economy')} className="hover:text-white cursor-pointer">Economy</button></li>
              <li><button onClick={() => onSelectSection('Environment')} className="hover:text-white cursor-pointer">Environment</button></li>
              <li><button onClick={() => onSelectSection('Science')} className="hover:text-white cursor-pointer">Science</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase text-white mb-3 text-xs tracking-wider">Analysis & Opinion</h5>
            <ul className="space-y-1.5">
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:text-white cursor-pointer">Editorials</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:text-white cursor-pointer">Columns</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:text-white cursor-pointer">Guest Essays</button></li>
              <li><button onClick={() => onSelectSection('Investigation')} className="hover:text-white cursor-pointer">Investigations</button></li>
              <li><button onClick={() => onSelectSection('Les Décodeurs')} className="hover:text-white cursor-pointer">Les Décodeurs (Fact Checks)</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase text-white mb-3 text-xs tracking-wider">Culture & Living</h5>
            <ul className="space-y-1.5">
              <li><button onClick={() => onSelectSection('Culture')} className="hover:text-white cursor-pointer">Culture</button></li>
              <li><button onClick={() => onSelectSection('M International')} className="hover:text-white cursor-pointer">M Le Magazine du Monde</button></li>
              <li><button onClick={() => onSelectSection('Culture')} className="hover:text-white cursor-pointer">Cinema & Books</button></li>
              <li><button onClick={() => onSelectSection('Sports')} className="hover:text-white cursor-pointer">Sports</button></li>
              <li><button onClick={() => onSelectSection('Culture')} className="hover:text-white cursor-pointer">L'Époque</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase text-white mb-3 text-xs tracking-wider">Subscriptions</h5>
            <ul className="space-y-1.5">
              <li><button onClick={onOpenSubscribe} className="text-[#FFE000] font-bold hover:underline cursor-pointer">Sign up (from €2.99/mo)</button></li>
              <li><button onClick={onOpenSubscribe} className="hover:text-white cursor-pointer">Student Offer</button></li>
              <li><button onClick={onOpenSubscribe} className="hover:text-white cursor-pointer">Corporate Subscriptions</button></li>
              <li><button onClick={onOpenSubscribe} className="hover:text-white cursor-pointer">FAQ & Help Desk</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase text-white mb-3 text-xs tracking-wider">Follow Le Monde</h5>
            <ul className="space-y-1.5 text-neutral-400">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">TikTok</a></li>
              <li><a href="#" className="hover:text-white">Reddit</a></li>
              <li><a href="#" className="hover:text-white">RSS feed</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>© 2026 Le Monde.fr</span>
            <a href="#" className="hover:underline">Legal Information</a>
            <a href="#" className="hover:underline">Group Policy</a>
            <a href="#" className="hover:underline">Charte d'éthique</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
          <div>
            <span>Paris, France · All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
