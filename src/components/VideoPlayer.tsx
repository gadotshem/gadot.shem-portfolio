import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const extractYouTubeId = (url?: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  aspectRatio?: '9:16' | '16:9';
  activeClipIndex?: number;
  totalClips?: number;
  currentClipTitle?: string;
  currentClipDuration?: string;
  onPrevClip?: () => void;
  onNextClip?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  thumbnailUrl,
  title,
  aspectRatio = '16:9',
  activeClipIndex = 0,
  totalClips = 1,
  currentClipTitle,
  onPrevClip,
  onNextClip,
}) => {
  const youtubeId = extractYouTubeId(videoUrl);
  const [videoError, setVideoError] = useState(false);

  return (
    <div
      className={`relative rounded-3xl bg-[#212529] overflow-hidden border border-[#dee2e6] shadow-2xl group w-full ${
        aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      {/* Video Content */}
      {youtubeId ? (
        <iframe
          key={youtubeId}
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&controls=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0 relative z-0"
        />
      ) : videoError ? (
        <img
          src={thumbnailUrl}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          key={videoUrl}
          src={videoUrl}
          poster={thumbnailUrl}
          controls
          autoPlay
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover"
        />
      )}

      {/* Side Overlay Navigation Arrows */}
      {totalClips > 1 && (
        <>
          {onPrevClip && (
            <button
              onClick={onPrevClip}
              aria-label="Previous Clip"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#212529]/80 backdrop-blur-md text-[#f8f9fa] border border-[#adb5bd]/40 hover:bg-[#212529] hover:scale-110 transition-all shadow-lg active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          )}
          {onNextClip && (
            <button
              onClick={onNextClip}
              aria-label="Next Clip"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#212529]/80 backdrop-blur-md text-[#f8f9fa] border border-[#adb5bd]/40 hover:bg-[#212529] hover:scale-110 transition-all shadow-lg active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}
        </>
      )}

      {/* External Link Pill for YouTube Videos */}
      {youtubeId && (
        <div className="absolute bottom-3 right-3 z-10 pointer-events-auto">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#212529]/90 backdrop-blur-md text-[#f8f9fa] border border-[#adb5bd]/40 hover:bg-[#343a40] text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Watch on YouTube</span>
          </a>
        </div>
      )}
    </div>
  );
};
