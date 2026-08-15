import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { playClickSound } from '../utils/audio';
import { VideoPlayer } from './VideoPlayer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContact: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev
}) => {
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, videoUrl?: string) => {
    const target = e.currentTarget;
    if (!videoUrl) return;
    const match = videoUrl.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/);
    const id = match && match[2].length === 11 ? match[2] : null;
    if (id) {
      if (target.src.includes('maxresdefault')) {
        target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      } else if (target.src.includes('hqdefault')) {
        target.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
      } else {
        target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      }
    }
  };

  // Reset video & carousel state when project changes
  useEffect(() => {
    setActiveClipIndex(0);
  }, [project?.id]);

  // Lock body scroll and set up keyboard listeners (Esc, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  const clips = project.videos && project.videos.length > 0 ? project.videos : null;
  const currentClip = clips ? clips[activeClipIndex] : null;
  const currentVideoUrl = currentClip ? currentClip.videoUrl : project.videoUrl;
  const currentThumbnailUrl = currentClip?.thumbnailUrl || project.thumbnailUrl;

  const handlePrevClip = () => {
    if (!clips) return;
    playClickSound();
    setActiveClipIndex((prev) => (prev - 1 + clips.length) % clips.length);
  };

  const handleNextClip = () => {
    if (!clips) return;
    playClickSound();
    setActiveClipIndex((prev) => (prev + 1) % clips.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#f8f9fa] text-[#212529] animate-fadeIn">
      {/* Top Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#f8f9fa]/95 backdrop-blur-md border-b border-[#dee2e6] px-4 sm:px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Project Title (Serif / Display Style) */}
          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-[#6c757d] uppercase tracking-widest block mb-0.5">
              CASE STUDY • {project.client} ({project.year})
            </span>
            <h1 className="text-xl sm:text-3xl font-serif-display font-medium tracking-tight text-[#212529] truncate">
              {project.title}
            </h1>
          </div>

          {/* Header Action Controls: Back, Next, Close */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {onPrev && (
              <button
                onClick={() => {
                  playClickSound();
                  onPrev();
                }}
                id="prev-project-modal-btn"
                aria-label="Previous Project"
                className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-xl bg-[#e9ecef] border border-[#dee2e6] text-[#212529] hover:bg-[#dee2e6] text-xs font-semibold tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4 text-[#212529]" />
                <span className="hidden sm:inline">BACK</span>
              </button>
            )}

            {onNext && (
              <button
                onClick={() => {
                  playClickSound();
                  onNext();
                }}
                id="next-project-modal-btn"
                aria-label="Next Project"
                className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-xl bg-[#e9ecef] border border-[#dee2e6] text-[#212529] hover:bg-[#dee2e6] text-xs font-semibold tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
                title="Next Project (Right Arrow)"
              >
                <span className="hidden sm:inline">NEXT</span>
                <ChevronRight className="w-4 h-4 text-[#212529]" />
              </button>
            )}

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              id="close-project-modal-btn"
              aria-label="Close Case Study"
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl bg-[#212529] text-[#f8f9fa] hover:bg-[#343a40] text-xs font-semibold tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer ml-1"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 text-[#f8f9fa]" />
            </button>
          </div>

        </div>
      </div>      {/* Scrollable Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-20">
        
        {project.aspectRatio === '9:16' ? (
          /* Split Layout for Vertical Videos: Video on Left, Details & Carousel on Right */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Vertical Video Player */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-[340px] sm:max-w-[380px] transition-all">
                <VideoPlayer
                  videoUrl={currentVideoUrl}
                  thumbnailUrl={currentThumbnailUrl}
                  title={project.title}
                  aspectRatio="9:16"
                  activeClipIndex={activeClipIndex}
                  totalClips={clips ? clips.length : 1}
                  currentClipTitle={currentClip?.title}
                  currentClipDuration={currentClip?.duration || project.duration}
                  onPrevClip={clips && clips.length > 1 ? handlePrevClip : undefined}
                  onNextClip={clips && clips.length > 1 ? handleNextClip : undefined}
                />
              </div>
            </div>

            {/* Right Column: Carousel Selector & Details */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-8">
              
              {/* Dedicated Carousel Clip Selector Bar */}
              {clips && clips.length > 0 && (
                <div className="bg-[#e9ecef]/80 p-4 rounded-3xl border border-[#dee2e6] shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {clips.map((clip, idx) => {
                      const isActive = idx === activeClipIndex;
                      return (
                        <button
                          key={clip.id}
                          onClick={() => {
                            playClickSound();
                            setActiveClipIndex(idx);
                          }}
                          className={`group flex items-center gap-3 p-3 rounded-2xl border text-left transition-all cursor-pointer active:scale-95 ${
                            isActive
                              ? 'bg-[#212529] text-[#f8f9fa] border-[#212529] shadow-md scale-[1.02]'
                              : 'bg-[#f8f9fa] text-[#212529] border-[#dee2e6] hover:bg-[#dee2e6]/50'
                          }`}
                        >
                          <div className="relative w-12 h-16 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/20">
                            <img
                              src={clip.thumbnailUrl || project.thumbnailUrl}
                              alt={clip.title}
                              onError={(e) => handleImgError(e, clip.videoUrl || project.videoUrl)}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            {isActive && (
                              <div className="absolute inset-0 bg-[#212529]/50 flex items-center justify-center">
                                <Play className="w-4 h-4 text-white fill-white animate-pulse" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className={`text-xs font-bold truncate ${isActive ? 'text-[#f8f9fa]' : 'text-[#212529]'}`}>
                              {clip.title}
                            </p>
                            <p className={`text-[11px] mt-0.5 font-semibold ${isActive ? 'text-[#adb5bd]' : 'text-[#6c757d]'}`}>
                              {clip.duration || '00:30'} • Ep {idx + 1}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Project Meta Bar */}
              <div className="p-6 rounded-3xl bg-[#e9ecef]/80 border border-[#dee2e6] shadow-sm flex flex-wrap items-center justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs text-[#6c757d] uppercase tracking-wider block font-semibold">Role</span>
                  <span className="text-sm font-semibold text-[#212529]">{project.role}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-[#6c757d] uppercase tracking-wider block font-semibold">Client / Company</span>
                  <span className="text-sm font-semibold text-[#212529]">{project.client}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-[#6c757d] uppercase tracking-wider block font-semibold">Format</span>
                  <span className="text-sm font-semibold text-[#212529]">{project.resolution}</span>
                </div>
              </div>

              {/* Project Creative Overview */}
              <div className="space-y-3">
                <h3 className="text-xs text-[#6c757d] uppercase tracking-widest font-bold">
                  CAMPAIGN OVERVIEW & CREATIVE DIRECTION
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-[#495057]">
                  {project.description}
                </p>
              </div>

              {/* Software & Toolset */}
              <div className="space-y-3">
                <h3 className="text-xs text-[#6c757d] uppercase tracking-widest font-bold">
                  TAGS & CATEGORIES
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.software.map((sw, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-xl bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] text-xs font-semibold shadow-sm">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Standard Horizontal Video Layout (Stacked) */
          <div className="space-y-10 max-w-6xl mx-auto">
            
            {/* Main Video Presentation Player */}
            <VideoPlayer
              videoUrl={currentVideoUrl}
              thumbnailUrl={currentThumbnailUrl}
              title={project.title}
              aspectRatio="16:9"
              activeClipIndex={activeClipIndex}
              totalClips={clips ? clips.length : 1}
              currentClipTitle={currentClip?.title}
              currentClipDuration={currentClip?.duration || project.duration}
              onPrevClip={clips && clips.length > 1 ? handlePrevClip : undefined}
              onNextClip={clips && clips.length > 1 ? handleNextClip : undefined}
            />

            {/* Dedicated Carousel Clip Selector Bar */}
            {clips && clips.length > 0 && (
              <div className="bg-[#e9ecef]/80 p-4 rounded-3xl border border-[#dee2e6] shadow-sm max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {clips.map((clip, idx) => {
                    const isActive = idx === activeClipIndex;
                    return (
                      <button
                        key={clip.id}
                        onClick={() => {
                          playClickSound();
                          setActiveClipIndex(idx);
                        }}
                        className={`group flex items-center gap-3 p-2.5 rounded-2xl border text-left transition-all cursor-pointer active:scale-95 ${
                          isActive
                            ? 'bg-[#212529] text-[#f8f9fa] border-[#212529] shadow-md scale-[1.02]'
                            : 'bg-[#f8f9fa] text-[#212529] border-[#dee2e6] hover:bg-[#dee2e6]/50'
                        }`}
                      >
                        <div className="relative w-12 h-16 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/20">
                          <img
                            src={clip.thumbnailUrl || project.thumbnailUrl}
                            alt={clip.title}
                            onError={(e) => handleImgError(e, clip.videoUrl || project.videoUrl)}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-[#212529]/50 flex items-center justify-center">
                              <Play className="w-4 h-4 text-white fill-white animate-pulse" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-bold truncate ${isActive ? 'text-[#f8f9fa]' : 'text-[#212529]'}`}>
                            {clip.title}
                          </p>
                          <p className={`text-[11px] mt-0.5 font-semibold ${isActive ? 'text-[#adb5bd]' : 'text-[#6c757d]'}`}>
                            {clip.duration || '00:30'} • Reel {idx + 1}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Project Meta Bar */}
            <div className="p-6 rounded-3xl bg-[#e9ecef]/80 border border-[#dee2e6] shadow-sm flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs text-[#6c757d] uppercase tracking-wider block font-semibold">Role</span>
                <span className="text-sm font-semibold text-[#212529]">{project.role}</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#6c757d] uppercase tracking-wider block font-semibold">Client / Agency</span>
                <span className="text-sm font-semibold text-[#212529]">{project.client}</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#6c757d] uppercase tracking-wider block font-semibold">Release Year</span>
                <span className="text-sm font-semibold text-[#212529]">{project.year}</span>
              </div>
            </div>

            {/* Project Creative Overview */}
            <div className="space-y-4">
              <h3 className="text-xs text-[#6c757d] uppercase tracking-widest font-bold">
                PROJECT OVERVIEW & CREATIVE DIRECTION
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[#495057]">
                {project.description}
              </p>
            </div>

            {/* Software & Toolset */}
            <div className="space-y-3">
              <h3 className="text-xs text-[#6c757d] uppercase tracking-widest font-bold">
                SOFTWARE & TOOLSET
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.software.map((sw, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] text-xs font-semibold shadow-sm">
                    {sw}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Bottom Project Navigation (Next / Back) */}
        <div className="pt-10 border-t border-[#dee2e6] flex flex-col sm:flex-row items-center justify-between gap-4">
          {onPrev && (
            <button
              onClick={() => {
                playClickSound();
                onPrev();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#e9ecef] hover:bg-[#dee2e6] text-[#212529] text-xs font-bold border border-[#dee2e6] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#212529]" />
              <span>PREVIOUS PROJECT</span>
            </button>
          )}

          {onNext && (
            <button
              onClick={() => {
                playClickSound();
                onNext();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#212529] hover:bg-[#343a40] text-[#f8f9fa] text-xs font-bold border border-[#212529] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer ml-auto"
            >
              <span>NEXT PROJECT</span>
              <ChevronRight className="w-4 h-4 text-[#f8f9fa]" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
