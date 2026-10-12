import React, { useState } from 'react';
import {
  ArrowLeft,
  Volume2,
  Bookmark,
  Share2,
  MessageSquare,
  Gift,
  Check,
  ThumbsUp,
  Send
} from 'lucide-react';
import { Article, Comment } from '../types';
import { SAMPLE_COMMENTS } from '../data/articles';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onOpenArticle: (id: string) => void;
  allArticles: Article[];
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onPlayAudio: (article: Article) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onOpenArticle,
  allArticles,
  isSaved,
  onToggleSave,
  onPlayAudio
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copied, setCopied] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>(SAMPLE_COMMENTS);
  const [newComment, setNewComment] = useState<string>('');
  const [commentAuthor, setCommentAuthor] = useState<string>('');
  const [showComments, setShowComments] = useState<boolean>(false);

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.section === article.section || a.kicker === article.kicker))
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const created: Comment = {
      id: `c-${Date.now()}`,
      author: commentAuthor.trim() || 'Reader from New York',
      location: 'New York, NY',
      timestamp: 'Just now',
      content: newComment.trim(),
      likes: 1
    };

    setComments([created, ...comments]);
    setNewComment('');
  };

  const handleLikeComment = (commentId: string) => {
    setComments(
      comments.map(c => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-[18px] leading-[1.8]';
    if (fontSize === 'xlarge') return 'text-[20px] leading-[1.85]';
    return 'text-[16px] leading-[1.7]';
  };

  return (
    <article className="min-h-screen bg-white text-[#121212]">
      {/* Sticky Reader Utility Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e2e2] px-4 py-2.5 transition-all">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between text-xs">
          {/* Back button & Section indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 font-semibold text-black hover:text-[#567b95] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Front Page</span>
            </button>
            <span className="text-[#e2e2e2]">|</span>
            <span className="text-[#727272] uppercase tracking-wider text-[11px] font-semibold">
              {article.section}
            </span>
          </div>

          {/* Controls: Audio, Font Size, Bookmark, Share, Gift */}
          <div className="flex items-center gap-2 sm:gap-4">
            {article.hasAudio && (
              <button
                onClick={() => onPlayAudio(article)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-300 hover:border-black text-black font-medium transition-colors cursor-pointer"
                title="Listen to audio narration"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden sm:inline">Listen ({article.audioDuration})</span>
              </button>
            )}

            {/* Font size toggles */}
            <div className="hidden sm:flex items-center border border-neutral-300 rounded px-1.5 py-0.5 gap-1 text-[11px] text-neutral-700">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1 font-serif ${fontSize === 'normal' ? 'font-bold text-black underline' : ''}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1 font-serif text-xs ${fontSize === 'large' ? 'font-bold text-black underline' : ''}`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1 font-serif text-sm ${fontSize === 'xlarge' ? 'font-bold text-black underline' : ''}`}
              >
                A++
              </button>
            </div>

            {/* Save Bookmark */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                isSaved ? 'text-black bg-neutral-100' : 'text-[#727272] hover:text-black'
              }`}
              title={isSaved ? 'Saved to bookmarks' : 'Save article'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-black' : ''}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1 p-1.5 text-[#727272] hover:text-black rounded transition-colors cursor-pointer"
              title="Share article link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              {copied && <span className="text-[10px] text-emerald-600 font-semibold">Copied!</span>}
            </button>

            {/* Gift article button */}
            <button
              onClick={() => {
                alert('Gift link created! Anyone with the link can read this article for free without a subscription.');
              }}
              className="hidden md:flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-neutral-700 hover:text-black border border-neutral-300 rounded transition-colors"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Gift Article</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="max-w-[780px] mx-auto px-4 py-8">
        {/* Kicker */}
        {article.kicker && (
          <div className="mb-2">
            <span
              style={{ color: article.kickerColor || '#727272' }}
              className="text-xs uppercase font-bold tracking-widest"
            >
              {article.kicker}
            </span>
          </div>
        )}

        {/* Main Headline */}
        <h1 className="headline-editorial font-bold text-3xl sm:text-4xl md:text-5xl text-[#121212] leading-[1.1] mb-4">
          {article.title}
        </h1>

        {/* Deck */}
        <p className="subheadline-editorial text-lg sm:text-xl text-[#363636] leading-relaxed mb-6 font-serif">
          {article.deck}
        </p>

        {/* Byline and Dateline */}
        <div className="border-t border-b border-[#e2e2e2] py-3.5 mb-6 flex flex-col sm:flex-row justify-between sm:items-center text-xs text-[#727272] gap-2">
          <div className="flex items-center gap-3">
            {article.authorAvatar && (
              <img
                src={article.authorAvatar}
                alt={article.author}
                className="w-10 h-10 rounded-full object-cover border border-[#e2e2e2]"
              />
            )}
            <div>
              <p className="font-sans font-bold text-sm text-black">By {article.author}</p>
              {article.authorRole && (
                <p className="text-[11px] text-[#727272]">{article.authorRole}</p>
              )}
            </div>
          </div>

          <div className="text-left sm:text-right font-sans">
            <p className="text-neutral-800 font-medium">{article.publishedAt}</p>
            <p className="text-[11px] text-[#727272]">{article.readTime}</p>
          </div>
        </div>

        {/* Lead Image if available */}
        {article.imageUrl && (
          <figure className="mb-8">
            <div className="overflow-hidden border border-[#e2e2e2] bg-neutral-100">
              <img
                src={article.imageUrl}
                alt={article.imageCaption || article.title}
                className="w-full h-auto object-cover max-h-[520px]"
              />
            </div>
            {(article.imageCaption || article.imageCredit) && (
              <figcaption className="text-xs text-[#727272] font-sans mt-2 flex flex-col sm:flex-row justify-between leading-snug">
                <span>{article.imageCaption}</span>
                {article.imageCredit && (
                  <span className="uppercase tracking-tight text-[10px] text-neutral-800 pt-1 sm:pt-0">
                    {article.imageCredit}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        )}

        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="my-6 p-4 bg-[#f9f9f9] border-y sm:border border-[#e2e2e2] sm:rounded-sm">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-black mb-2">
              Key Takeaways
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm font-serif text-[#222]">
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-neutral-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Journalistic Body Paragraphs */}
        <div className={`space-y-6 font-serif text-[#222222] ${getFontSizeClass()}`}>
          {article.content.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-black leading-relaxed'
                  : 'leading-relaxed'
              }
            >
              {idx === 0 && article.dateline && (
                <strong className="font-sans font-semibold tracking-wider text-xs uppercase mr-2 text-black">
                  {article.dateline} —
                </strong>
              )}
              {paragraph}
            </p>
          ))}
        </div>

        {/* Editorial Pull Quote */}
        {article.pullQuote && (
          <blockquote className="my-10 py-6 border-y-2 border-black text-center px-4 sm:px-8">
            <p className="headline-editorial italic text-xl sm:text-2xl md:text-3xl text-neutral-900 leading-snug mb-3">
              “{article.pullQuote.quote}”
            </p>
            <cite className="font-sans font-semibold text-xs uppercase tracking-wider text-[#727272] not-italic block">
              — {article.pullQuote.attribution}
            </cite>
          </blockquote>
        )}

        {/* Bottom Editorial Actions & Comments Bar */}
        <div className="mt-12 pt-6 border-t border-[#e2e2e2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1.5 text-xs font-semibold text-black hover:text-[#567b95] transition-colors px-3 py-1.5 rounded border border-neutral-300 hover:border-black cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{comments.length} Reader Comments</span>
            </button>
            <button
              onClick={() => onToggleSave(article.id)}
              className="flex items-center gap-1 text-xs text-neutral-700 hover:text-black px-2 py-1 rounded"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-black' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          <button
            onClick={onBack}
            className="text-xs font-semibold text-[#00628e] hover:underline"
          >
            ← Return to Front Page
          </button>
        </div>

        {/* Reader Comments Drawer/Section */}
        {showComments && (
          <section className="mt-8 pt-6 border-t-2 border-black bg-neutral-50/70 p-4 sm:p-6 rounded-xs">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-black">
                Reader Comments ({comments.length})
              </h3>
              <span className="text-xs text-[#727272]">Moderated by NYT editors</span>
            </div>

            {/* Post a Comment Form */}
            <form onSubmit={handleAddComment} className="mb-8 space-y-3 bg-white p-4 rounded border border-neutral-200 shadow-2xs">
              <input
                type="text"
                placeholder="Your name or pen name (e.g., Alexandra, London)"
                value={commentAuthor}
                onChange={e => setCommentAuthor(e.target.value)}
                className="w-full text-xs p-2 border border-neutral-300 rounded focus:border-black focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Share your perspective on this report..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                className="w-full text-xs p-2 border border-neutral-300 rounded focus:border-black focus:outline-none"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-1.5 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Comment</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map(c => (
                <div key={c.id} className="p-4 bg-white border border-[#e2e2e2] rounded-sm space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-bold text-black">{c.author}</span>
                      <span className="text-[#727272]">· {c.location}</span>
                      {c.isNytPick && (
                        <span className="bg-amber-100 text-amber-900 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-wider">
                          NYT Pick
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#727272]">{c.timestamp}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif text-[#333] leading-relaxed">
                    {c.content}
                  </p>
                  <div className="pt-1 flex items-center gap-4 text-xs text-[#727272]">
                    <button
                      onClick={() => handleLikeComment(c.id)}
                      className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{c.likes}</span>
                    </button>
                    <button className="hover:text-black cursor-pointer">Reply</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Stories */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 pt-6 border-t-2 border-black">
            <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-black mb-4">
              Related Coverage
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onOpenArticle(rel.id)}
                  className="p-3 border border-[#e2e2e2] rounded-sm hover:border-black cursor-pointer transition-all space-y-1.5 group"
                >
                  <span className="text-[10px] uppercase font-bold text-[#727272] tracking-wider block">
                    {rel.section}
                  </span>
                  <h4 className="headline-editorial font-bold text-sm text-[#121212] group-hover:text-[#00628e] leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-[#727272] font-sans">By {rel.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
