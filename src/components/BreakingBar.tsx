import React from 'react';

interface BreakingBarProps {
  onOpenLiveUpdates: () => void;
}

export const BreakingBar: React.FC<BreakingBarProps> = ({ onOpenLiveUpdates }) => {
  return (
    <div
      onClick={onOpenLiveUpdates}
      className="pb-2.5 mb-4 border-b border-[#e2e2e2] flex items-center justify-between text-xs text-[#727272] cursor-pointer hover:bg-neutral-50/70 px-1 py-1 -mx-1 rounded transition-colors group"
      data-purpose="breaking-news-tracker"
    >
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse flex-shrink-0" />
        <span className="font-bold uppercase tracking-wider text-[10px] text-[#121212]">
          Developing
        </span>
        <span className="text-[#121212] font-serif italic text-sm group-hover:text-neutral-700 transition-colors">
          Escalating security tensions across the Red Sea and Gulf region
        </span>
      </div>
      <span className="text-[11px] text-[#727272] whitespace-nowrap">Updated 14m ago</span>
    </div>
  );
};
