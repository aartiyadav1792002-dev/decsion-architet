import React, { useState } from 'react';
import { X, RotateCcw, Shuffle, Delete } from 'lucide-react';
import { SPELLING_BEE_DATA } from '../data/games';

interface SpellingBeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpellingBeeModal: React.FC<SpellingBeeModalProps> = ({ isOpen, onClose }) => {
  const [currentInput, setCurrentInput] = useState<string>('');
  const [foundWords, setFoundWords] = useState<string[]>(['REPORT', 'STREET']);
  const [message, setMessage] = useState<string>('');
  const [outerLetters, setOuterLetters] = useState<string[]>(SPELLING_BEE_DATA.outerLetters);

  if (!isOpen) return null;

  const score = foundWords.reduce((acc, word) => acc + (word.length === 4 ? 1 : word.length), 0);

  const handleLetterClick = (letter: string) => {
    setCurrentInput(prev => prev + letter);
  };

  const handleDelete = () => {
    setCurrentInput(prev => prev.slice(0, -1));
  };

  const handleShuffle = () => {
    setOuterLetters([...outerLetters].sort(() => Math.random() - 0.5));
  };

  const handleEnter = () => {
    if (currentInput.length < 4) {
      setMessage('Too short');
      setTimeout(() => setMessage(''), 1500);
      return;
    }

    if (!currentInput.includes(SPELLING_BEE_DATA.centerLetter)) {
      setMessage(`Missing center letter (${SPELLING_BEE_DATA.centerLetter})`);
      setTimeout(() => setMessage(''), 1500);
      return;
    }

    if (foundWords.includes(currentInput)) {
      setMessage('Already found');
      setTimeout(() => setMessage(''), 1500);
      return;
    }

    if (SPELLING_BEE_DATA.words.includes(currentInput)) {
      setFoundWords([...foundWords, currentInput]);
      setMessage('Nice!');
      setCurrentInput('');
      setTimeout(() => setMessage(''), 1500);
    } else {
      setMessage('Not in word list');
      setTimeout(() => setMessage(''), 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200">
          <div>
            <h3 className="font-bold text-lg text-black tracking-tight">Spelling Bee</h3>
            <span className="text-[11px] text-neutral-500 font-sans">Rank: Genius ({score} pts)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-5 pt-3">
          <div className="flex justify-between text-[11px] text-neutral-600 font-medium pb-1">
            <span>Beginner</span>
            <span>Solid</span>
            <span>Great</span>
            <span className="font-bold text-amber-600">Genius</span>
          </div>
          <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full w-[85%] rounded-full" />
          </div>
        </div>

        {/* Message notification */}
        <div className="h-6 text-center pt-2">
          {message && (
            <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded font-semibold animate-pulse">
              {message}
            </span>
          )}
        </div>

        {/* Word Input Display */}
        <div className="h-12 flex items-center justify-center text-2xl font-bold tracking-wider text-black">
          {currentInput ? (
            <span>
              {currentInput.split('').map((char, i) => (
                <span
                  key={i}
                  className={char === SPELLING_BEE_DATA.centerLetter ? 'text-amber-500' : 'text-black'}
                >
                  {char}
                </span>
              ))}
            </span>
          ) : (
            <span className="text-neutral-300 font-normal text-sm">Type or click letters</span>
          )}
        </div>

        {/* Bee Honeycomb Hive */}
        <div className="py-4 flex flex-col items-center justify-center select-none">
          {/* Top row: 2 letters */}
          <div className="flex gap-2">
            <button
              onClick={() => handleLetterClick(outerLetters[0])}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-neutral-200 font-bold text-xl text-neutral-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              {outerLetters[0]}
            </button>
            <button
              onClick={() => handleLetterClick(outerLetters[1])}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-neutral-200 font-bold text-xl text-neutral-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              {outerLetters[1]}
            </button>
          </div>

          {/* Middle row: outer, center, outer */}
          <div className="flex gap-2 my-1.5 items-center">
            <button
              onClick={() => handleLetterClick(outerLetters[2])}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-neutral-200 font-bold text-xl text-neutral-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              {outerLetters[2]}
            </button>
            <button
              onClick={() => handleLetterClick(SPELLING_BEE_DATA.centerLetter)}
              className="w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-500 font-extrabold text-2xl text-black flex items-center justify-center shadow-md transition-colors cursor-pointer ring-2 ring-amber-300"
            >
              {SPELLING_BEE_DATA.centerLetter}
            </button>
            <button
              onClick={() => handleLetterClick(outerLetters[3])}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-neutral-200 font-bold text-xl text-neutral-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              {outerLetters[3]}
            </button>
          </div>

          {/* Bottom row: 2 letters */}
          <div className="flex gap-2">
            <button
              onClick={() => handleLetterClick(outerLetters[4])}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-neutral-200 font-bold text-xl text-neutral-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              {outerLetters[4]}
            </button>
            <button
              onClick={() => handleLetterClick(outerLetters[5])}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-neutral-200 font-bold text-xl text-neutral-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              {outerLetters[5]}
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-5 pb-4 flex justify-center gap-3">
          <button
            onClick={handleDelete}
            className="px-4 py-2 border border-neutral-300 rounded-full text-xs font-semibold hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={handleShuffle}
            className="p-2 border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <Shuffle className="w-4 h-4 text-neutral-700" />
          </button>
          <button
            onClick={handleEnter}
            className="px-5 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Enter
          </button>
        </div>

        {/* Words Found List */}
        <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-200 text-xs">
          <span className="font-semibold text-neutral-700 block mb-1">
            Found {foundWords.length} words:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {foundWords.map(w => (
              <span key={w} className="bg-white border border-neutral-200 px-2 py-0.5 rounded text-[11px] font-medium text-neutral-800">
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
