import React from 'react';
import { X, Clock, ExternalLink } from 'lucide-react';

interface LiveUpdatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenArticle: (articleId: string) => void;
}

const TIMELINE = [
  {
    time: '4:42 AM ET',
    title: 'Commercial Airlines Reroute Gulf Transit Paths',
    summary: 'European and Asian air carriers announce temporary south-polar detours away from Arabian airspace as regional defenses remain on alert.'
  },
  {
    time: '4:18 AM ET',
    title: 'Strikes Reported at Riyadh and Sanaa Air Hubs',
    summary: 'Saudi authorities confirm damage near terminal perimeter; Yemen airport facilities struck in retaliatory sorties.'
  },
  {
    time: '3:30 AM ET',
    title: 'United Nations Urges De-escalation',
    summary: 'UN special envoy convenes emergency consultations with regional mediators in Muscat, Oman.'
  },
  {
    time: '2:15 AM ET',
    title: 'Maritime Security Center Warns Commercial Vessels',
    summary: 'Naval coordination offices issue heightened threat advisory across southern Red Sea transit corridors.'
  }
];

export const LiveUpdatesModal: React.FC<LiveUpdatesModalProps> = ({
  isOpen,
  onClose,
  onOpenArticle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-xl w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#e2e2e2]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <h3 className="font-bold text-base text-black tracking-tight">
              Live Updates: Red Sea & Gulf Security Crisis
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[70vh] overflow-y-auto space-y-6">
          <div className="bg-amber-50 border border-amber-200 p-3 rounded text-xs text-amber-900 leading-relaxed font-serif">
            The New York Times is actively tracking developments following strikes targeting Riyadh and Sanaa airports. This stream is updated as correspondents verify dispatches on the ground.
          </div>

          <div className="relative pl-6 border-l-2 border-neutral-300 space-y-6">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-black border-2 border-white" />
                <div className="flex items-center gap-2 text-[11px] text-[#727272] font-sans">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-semibold text-black">{item.time}</span>
                </div>
                <h4 className="font-serif font-bold text-base text-black mt-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#444] mt-1 font-serif leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-neutral-50 border-t border-[#e2e2e2] flex justify-between items-center text-xs">
          <span className="text-[#727272]">Latest verification 14m ago</span>
          <button
            onClick={() => {
              onClose();
              onOpenArticle('saudi-yemeni-airports');
            }}
            className="flex items-center gap-1 font-semibold text-[#00628e] hover:underline"
          >
            <span>Read Full Lead Report</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
