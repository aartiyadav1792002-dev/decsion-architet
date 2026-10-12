export interface Article {
  id: string;
  title: string;
  deck: string;
  kicker?: string;
  kickerColor?: string;
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  readTime: string;
  publishedAt: string;
  dateline?: string;
  section: string;
  imageUrl?: string;
  imageCaption?: string;
  imageCredit?: string;
  content: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  keyTakeaways?: string[];
  commentsCount: number;
  hasAudio?: boolean;
  audioDuration?: string;
}

export type Edition = 'U.S.' | 'INTERNATIONAL' | 'CANADA' | 'ESPAÑOL' | '中文';

export interface Comment {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  content: string;
  likes: number;
  isNytPick?: boolean;
}

export interface AudioTrack {
  id: string;
  title: string;
  show: string;
  duration: string;
  date: string;
  audioUrl?: string;
}
