import React, { useState } from 'react';
import { X, RotateCcw } from 'lucide-react';
import { CONNECTIONS_DATA, ConnectionsGroup } from '../data/games';

interface ConnectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectionsModal: React.FC<ConnectionsModalProps> = ({ isOpen, onClose }) => {
  const [solvedGroups, setSolvedGroups] = useState<ConnectionsGroup[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [mistakesLeft, setMistakesLeft] = useState<number>(4);
  const [message, setMessage] = useState<string>('');

  if (!isOpen) return null;

  // Flatten all words not yet solved
  const solvedWordSet = new Set(solvedGroups.flatMap(g => g.words));
  const remainingWords = CONNECTIONS_DATA.flatMap(g => g.words).filter(w => !solvedWordSet.has(w));

  const toggleWord = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else {
      if (selectedWords.length < 4) {
        setSelectedWords([...selectedWords, word]);
      }
    }
  };

  const handleDeselectAll = () => {
    setSelectedWords([]);
  };

  const handleShuffle = () => {
    // Visual shuffle
    setSelectedWords([]);
  };

  const handleSubmit = () => {
    if (selectedWords.length !== 4) return;

    // Check if selectedWords match any group exactly
    const matchedGroup = CONNECTIONS_DATA.find(group => {
      const gSet = new Set(group.words);
      return selectedWords.every(w => gSet.has(w));
    });

    if (matchedGroup) {
      setSolvedGroups([...solvedGroups, matchedGroup]);
      setSelectedWords([]);
      setMessage('Category Solved!');
      setTimeout(() => setMessage(''), 1500);
    } else {
      const newMistakes = mistakesLeft - 1;
      setMistakesLeft(newMistakes);
      setMessage(newMistakes > 0 ? 'Not quite right!' : 'Out of attempts!');
      setTimeout(() => setMessage(''), 1500);
      setSelectedWords([]);
    }
  };

  const handleReset = () => {
    setSolvedGroups([]);
    setSelectedWords([]);
    setMistakesLeft(4);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200">
          <div>
            <h3 className="font-bold text-lg text-black tracking-tight">Connections</h3>
            <span className="text-[11px] text-neutral-500 font-sans">Group words that share a common thread</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              title="Reset Puzzle"
              className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-neutral-100 rounded text-neutral-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
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

        {/* Solved Groups Banners */}
        <div className="px-5 pt-3 space-y-2">
          {solvedGroups.map(group => (
            <div
              key={group.category}
              style={{ backgroundColor: group.color }}
              className="p-3 rounded text-center text-neutral-900 transition-all shadow-xs"
            >
              <div className="font-bold uppercase text-xs tracking-wider">{group.category}</div>
              <div className="text-xs font-medium mt-0.5">{group.words.join(', ')}</div>
            </div>
          ))}
        </div>

        {/* Grid of Remaining Words */}
        {remainingWords.length > 0 && (
          <div className="p-5 grid grid-cols-4 gap-2">
            {remainingWords.map(word => {
              const isSelected = selectedWords.includes(word);
              return (
                <button
                  key={word}
                  onClick={() => toggleWord(word)}
                  className={`h-16 rounded font-bold text-xs uppercase flex items-center justify-center p-1 text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#5a594e] text-white'
                      : 'bg-[#efefe6] hover:bg-[#e6e6dc] text-neutral-900'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom controls & Mistakes */}
        <div className="px-5 pb-5 pt-1 flex flex-col items-center gap-3">
          {remainingWords.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-sans">
              <span>Mistakes remaining:</span>
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full ${
                      idx < mistakesLeft ? 'bg-neutral-800' : 'bg-neutral-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffle}
              className="px-3.5 py-1.5 border border-neutral-300 rounded-full text-xs font-semibold hover:bg-neutral-100 transition-colors"
            >
              Shuffle
            </button>
            <button
              onClick={handleDeselectAll}
              className="px-3.5 py-1.5 border border-neutral-300 rounded-full text-xs font-semibold hover:bg-neutral-100 transition-colors"
            >
              Deselect All
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedWords.length !== 4}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                selectedWords.length === 4
                  ? 'bg-black text-white cursor-pointer hover:bg-neutral-800'
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
