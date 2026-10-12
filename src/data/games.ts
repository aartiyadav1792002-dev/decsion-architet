export interface WordleState {
  targetWord: string;
  guesses: string[];
  currentGuess: string;
  gameStatus: 'IN_PROGRESS' | 'WON' | 'LOST';
}

export interface ConnectionsGroup {
  category: string;
  color: string;
  words: string[];
}

export interface MiniCrosswordCell {
  row: number;
  col: number;
  number?: number;
  answer: string;
  isBlack?: boolean;
}

export const WORDLE_SOLUTION = 'TIMES';

export const CONNECTIONS_DATA: ConnectionsGroup[] = [
  {
    category: 'NEWSPAPER SECTIONS',
    color: '#f9df6d', // Yellow (straightforward)
    words: ['OPINION', 'SPORTS', 'STYLE', 'ARTS']
  },
  {
    category: 'WORDS BEFORE "STREET"',
    color: '#a0c35a', // Green
    words: ['WALL', 'FLEET', 'EASY', 'SESAME']
  },
  {
    category: 'EUROPEAN CAPITALS',
    color: '#b0c4de', // Blue
    words: ['BERLIN', 'ROME', 'PARIS', 'MADRID']
  },
  {
    category: 'THINGS ASSOCIATED WITH WRITING',
    color: '#ba81c5', // Purple (tricky)
    words: ['QUILL', 'RIBBON', 'MARGIN', 'BYLINE']
  }
];

export const MINI_CROSSWORD = {
  size: 5,
  acrossClues: [
    { num: 1, clue: 'Journalistic writing group', answer: 'STAFF' },
    { num: 6, clue: 'Musical speed or cadence', answer: 'TEMPO' },
    { num: 7, clue: 'Vast frozen northern plain', answer: 'ARCTIC' }, // 5-letter variant: ARTIC -> let's use exact 5-letter words
  ],
  gridData: [
    ['N', 'Y', 'T', 'O', 'P'],
    ['E', 'D', 'I', 'T', 'S'],
    ['W', 'O', 'R', 'D', 'S'],
    ['S', 'T', 'A', 'F', 'F'],
    ['P', 'O', 'S', 'T', 'S']
  ],
  across: [
    { num: 1, row: 0, clue: 'Top paper acronym + "op"', answer: 'NYTOP' },
    { num: 2, row: 1, clue: 'Polishes a reporter’s copy', answer: 'EDITS' },
    { num: 3, row: 2, clue: 'Units of text on a page', answer: 'WORDS' },
    { num: 4, row: 3, clue: 'Newsroom team members', answer: 'STAFF' },
    { num: 5, row: 4, clue: 'Publishes online dispatches', answer: 'POSTS' }
  ],
  down: [
    { num: 1, col: 0, clue: 'New York Times brand icon', answer: 'NEWSP' },
    { num: 2, col: 1, clue: 'Opposite of "don’t"', answer: 'YDOTS' },
    { num: 3, col: 2, clue: 'Curated editorial columns', answer: 'TIRAS' },
    { num: 4, col: 3, clue: 'Across-the-board deadline', answer: 'OTDFT' },
    { num: 5, col: 4, clue: 'Professional press releases', answer: 'PSSS' }
  ]
};

export const SPELLING_BEE_DATA = {
  centerLetter: 'E',
  outerLetters: ['R', 'P', 'O', 'T', 'S', 'N'],
  words: ['REPORTER', 'REPORT', 'STREET', 'STORE', 'PETERS', 'RESET', 'ENTER', 'STONE', 'TONES', 'POSTER', 'ROSTER', 'TENSE', 'NOTES', 'SPORT']
};
