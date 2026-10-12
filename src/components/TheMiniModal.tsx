import React, { useState } from 'react';
import { X, RotateCcw, CheckCircle2 } from 'lucide-react';
import { MINI_CROSSWORD } from '../data/games';

interface TheMiniModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TheMiniModal: React.FC<TheMiniModalProps> = ({ isOpen, onClose }) => {
  const [userGrid, setUserGrid] = useState<string[][]>(() =>
    Array(5).fill('').map(() => Array(5).fill(''))
  );
  const [selectedCell, setSelectedCell] = useState<{ r: number; c: number }>({ r: 0, c: 0 });
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState<string>('');

  if (!isOpen) return null;

  const handleCellClick = (r: number, c: number) => {
    if (selectedCell.r === r && selectedCell.c === c) {
      setDirection(direction === 'across' ? 'down' : 'across');
    } else {
      setSelectedCell({ r, c });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const { r, c } = selectedCell;

    if (e.key === 'Backspace') {
      const next = userGrid.map(row => [...row]);
      next[r][c] = '';
      setUserGrid(next);
      // Move backwards
      if (direction === 'across' && c > 0) setSelectedCell({ r, c: c - 1 });
      if (direction === 'down' && r > 0) setSelectedCell({ r: r - 1, c });
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      const char = e.key.toUpperCase();
      const next = userGrid.map(row => [...row]);
      next[r][c] = char;
      setUserGrid(next);

      // Move forward
      if (direction === 'across' && c < 4) setSelectedCell({ r, c: c + 1 });
      if (direction === 'down' && r < 4) setSelectedCell({ r: r + 1, c });

      // Check if complete
      checkCompletion(next);
    } else if (e.key === 'ArrowRight' && c < 4) {
      setSelectedCell({ r, c: c + 1 });
    } else if (e.key === 'ArrowLeft' && c > 0) {
      setSelectedCell({ r, c: c - 1 });
    } else if (e.key === 'ArrowDown' && r < 4) {
      setSelectedCell({ r: r + 1, c });
    } else if (e.key === 'ArrowUp' && r > 0) {
      setSelectedCell({ r: r - 1, c });
    }
  };

  const checkCompletion = (grid: string[][]) => {
    let allFilled = true;
    let allCorrect = true;

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (!grid[r][c]) allFilled = false;
        if (grid[r][c] !== MINI_CROSSWORD.gridData[r][c]) allCorrect = false;
      }
    }

    if (allFilled && allCorrect) {
      setIsCompleted(true);
      setShowStatus('Congratulations! Puzzle Solved in 0:48!');
    }
  };

  const handleRevealAll = () => {
    setUserGrid(MINI_CROSSWORD.gridData.map(row => [...row]));
    setIsCompleted(true);
    setShowStatus('Revealed Solution');
  };

  const handleReset = () => {
    setUserGrid(Array(5).fill('').map(() => Array(5).fill('')));
    setIsCompleted(false);
    setShowStatus('');
    setSelectedCell({ r: 0, c: 0 });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div
        className="bg-white max-w-lg w-full rounded-lg shadow-2xl overflow-hidden border border-neutral-200 outline-none"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200">
          <div>
            <h3 className="font-bold text-lg text-black tracking-tight">The Mini Crossword</h3>
            <span className="text-[11px] text-neutral-500 font-sans">October 12, 2026 · By Joel Fagliano</span>
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

        {/* Status banner */}
        {showStatus && (
          <div className="bg-emerald-50 text-emerald-800 text-xs px-4 py-2 border-b border-emerald-200 flex items-center justify-center gap-1.5 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{showStatus}</span>
          </div>
        )}

        <div className="p-5 flex flex-col md:flex-row gap-5 items-center md:items-start">
          {/* 5x5 Crossword Board */}
          <div className="grid grid-cols-5 gap-1 bg-black p-1 border-2 border-black rounded-xs shadow-inner">
            {userGrid.map((row, r) =>
              row.map((cellVal, c) => {
                const isSelected = selectedCell.r === r && selectedCell.c === c;
                const isHighlighted =
                  direction === 'across'
                    ? selectedCell.r === r
                    : selectedCell.c === c;

                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => handleCellClick(r, c)}
                    className={`w-11 h-11 sm:w-12 sm:h-12 relative flex items-center justify-center font-bold text-lg uppercase cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#ffda00] text-black ring-2 ring-black'
                        : isHighlighted
                        ? 'bg-[#a7d8ff] text-black'
                        : 'bg-white text-black hover:bg-neutral-100'
                    }`}
                  >
                    {/* Clue number in top left corner */}
                    {(c === 0 || r === 0) && (
                      <span className="absolute top-0.5 left-1 text-[9px] font-sans font-normal text-neutral-500">
                        {r === 0 ? c + 1 : r + 5}
                      </span>
                    )}
                    {cellVal}
                  </button>
                );
              })
            )}
          </div>

          {/* Clues Pane */}
          <div className="flex-1 space-y-3 text-xs w-full">
            <div>
              <span className="font-bold uppercase tracking-wider text-[11px] text-neutral-800 block pb-1 border-b border-neutral-200">
                Across
              </span>
              <ul className="space-y-1.5 pt-1.5">
                {MINI_CROSSWORD.across.map(clue => (
                  <li
                    key={clue.num}
                    onClick={() => {
                      setSelectedCell({ r: clue.row, c: 0 });
                      setDirection('across');
                    }}
                    className={`cursor-pointer p-1 rounded hover:bg-neutral-100 ${
                      direction === 'across' && selectedCell.r === clue.row
                        ? 'bg-amber-50 font-semibold'
                        : ''
                    }`}
                  >
                    <span className="font-bold mr-1">{clue.num}</span> {clue.clue}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-[11px] text-neutral-800 block pb-1 border-b border-neutral-200">
                Down
              </span>
              <ul className="space-y-1.5 pt-1.5">
                {MINI_CROSSWORD.down.slice(0, 3).map(clue => (
                  <li
                    key={clue.num}
                    onClick={() => {
                      setSelectedCell({ r: 0, c: clue.col });
                      setDirection('down');
                    }}
                    className={`cursor-pointer p-1 rounded hover:bg-neutral-100 ${
                      direction === 'down' && selectedCell.c === clue.col
                        ? 'bg-amber-50 font-semibold'
                        : ''
                    }`}
                  >
                    <span className="font-bold mr-1">{clue.num}</span> {clue.clue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-200 flex justify-between items-center text-xs">
          <span className="text-neutral-500 font-sans">Use keyboard or click to type</span>
          <div className="flex gap-2">
            <button
              onClick={handleRevealAll}
              className="px-3 py-1 border border-neutral-300 rounded text-neutral-700 hover:bg-neutral-100 font-medium cursor-pointer"
            >
              Reveal
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1 bg-black text-white rounded font-medium cursor-pointer hover:bg-neutral-800"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
