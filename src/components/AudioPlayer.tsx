import React, { useState, useEffect } from 'react';
import { Play, Pause, X, RotateCcw, Volume2, FastForward } from 'lucide-react';
import { Article } from '../types';

interface AudioPlayerProps {
  article: Article | null;
  onClose: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ article, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(15);
  const [speed, setSpeed] = useState<'1x' | '1.25x' | '1.5x'>('1x');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!article) return null;

  const toggleSpeed = () => {
    if (speed === '1x') setSpeed('1.25x');
    else if (speed === '1.25x') setSpeed('1.5x');
    else setSpeed('1x');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#121212] text-white border-t border-neutral-800 px-4 py-3 shadow-2xl transition-all">
      <div className="max-w-[1340px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Track info */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors flex-shrink-0 cursor-pointer shadow-md"
            aria-label={isPlaying ? 'Pause narration' : 'Play narration'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
          </button>
          <div className="overflow-hidden">
            <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
              NYT Audio Narrated Article
            </span>
            <p className="text-xs font-serif font-bold text-white truncate max-w-xs sm:max-w-md">
              {article.title}
            </p>
            <span className="text-[10px] text-neutral-400 font-sans">
              Narrated for The New York Times · {article.audioDuration || '6 min'}
            </span>
          </div>
        </div>

        {/* Scrub bar */}
        <div className="w-full sm:w-1/3 flex items-center gap-3 text-xs text-neutral-400 font-sans">
          <span>0:{progress < 10 ? `0${progress}` : progress}</span>
          <div className="flex-1 bg-neutral-700 h-1.5 rounded-full overflow-hidden relative cursor-pointer">
            <div
              className="bg-white h-full transition-all rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>{article.audioDuration || '5:00'}</span>
        </div>

        {/* Speed, volume, close */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSpeed}
            className="text-[11px] font-bold px-2 py-0.5 rounded border border-neutral-700 hover:border-white text-neutral-300 hover:text-white cursor-pointer"
          >
            {speed}
          </button>
          <Volume2 className="w-4 h-4 text-neutral-400" />
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
