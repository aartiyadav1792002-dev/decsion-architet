import React, { useState, useEffect } from 'react';
import { X, RotateCcw } from 'lucide-react';
import { WORDLE_SOLUTION } from '../data/games';

interface WordleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordleModal: React.FC<WordleModalProps> = ({ isOpen, onClose }) => {
  const [targetWord] = useState<string>(WORDLE_SOLUTION);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [gameStatus, setGameStatus] = useState<'IN_PROGRESS' | 'WON' | 'LOST'>('IN_PROGRESS');
  const [message, setMessage] = useState<string>('');

  const maxGuesses = 6;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStatus !== 'IN_PROGRESS') return;

      if (e.key === 'Enter') {
        handleSubmitGuess();
      } else if (e.key === 'Backspace') {
        setCurrentGuess(prev => prev.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < 5) {
        setCurrentGuess(prev => (prev + e.key.toUpperCase()).slice(0, 5));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentGuess, gameStatus, guesses]);

  if (!isOpen) return null;

  const handleSubmitGuess = () => {
    if (currentGuess.length !== 5) {
      setMessage('Not enough letters');
      setTimeout(() => setMessage(''), 1500);
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === targetWord) {
      setGameStatus('WON');
      setMessage('Splendid! You solved today’s Wordle!');
    } else if (newGuesses.length >= maxGuesses) {
      setGameStatus('LOST');
      setMessage(`The word was ${targetWord}`);
    }
  };

  const handleKeyClick = (letter: string) => {
    if (gameStatus !== 'IN_PROGRESS') return;
    if (letter === 'ENTER') {
      handleSubmitGuess();
    } else if (letter === '⌫') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess(prev => prev + letter);
    }
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('IN_PROGRESS');
    setMessage('');
  };

  const getLetterStatus = (letter: string, index: number, guess: string) => {
    if (guess[index] === targetWord[index]) {
      return 'bg-[#6aaa64] text-white border-[#6aaa64]'; // green
    }
    if (targetWord.includes(letter)) {
      return 'bg-[#c9b458] text-white border-[#c9b458]'; // yellow
    }
    return 'bg-[#787c7e] text-white border-[#787c7e]'; // gray
  };

  const KEYBOARD_ROWS = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
          <div>
            <h3 className="font-bold text-lg text-black tracking-tight">Wordle</h3>
            <span className="text-[11px] text-neutral-500 font-sans">No. 1,214 · October 12, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetGame}
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
        <div className="h-6 text-center pt-1">
          {message && (
            <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded font-semibold animate-bounce">
              {message}
            </span>
          )}
        </div>

        {/* 6x5 Grid */}
        <div className="p-4 flex flex-col items-center gap-1.5">
          {Array.from({ length: maxGuesses }).map((_, rowIndex) => {
            const guess = guesses[rowIndex];
            const isCurrent = rowIndex === guesses.length;

            return (
              <div key={rowIndex} className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, colIndex) => {
                  let letter = '';
                  let cellClasses = 'border-2 border-neutral-300 text-black';

                  if (guess) {
                    letter = guess[colIndex];
                    cellClasses = getLetterStatus(letter, colIndex, guess);
                  } else if (isCurrent && currentGuess[colIndex]) {
                    letter = currentGuess[colIndex];
                    cellClasses = 'border-2 border-black text-black';
                  }

                  return (
                    <div
                      key={colIndex}
                      className={`w-12 h-12 sm:w-13 sm:h-13 flex items-center justify-center font-bold text-xl uppercase transition-colors rounded-xs ${cellClasses}`}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Virtual Keyboard */}
        <div className="px-2 pb-4 pt-1 bg-neutral-50 border-t border-neutral-100">
          {KEYBOARD_ROWS.map((row, rIdx) => (
            <div key={rIdx} className="flex justify-center gap-1 my-1">
              {row.map(key => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className={`py-3 rounded font-bold uppercase transition-colors text-xs ${
                    key === 'ENTER' || key === '⌫'
                      ? 'px-2.5 bg-neutral-300 text-neutral-900 text-[10px]'
                      : 'w-8 sm:w-9 bg-neutral-200 hover:bg-neutral-300 text-neutral-900'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
