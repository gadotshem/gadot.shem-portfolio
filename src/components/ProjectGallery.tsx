import React, { useState, useRef } from 'react';
import { Category, Project } from '../types';
import { PROJECTS } from '../data/projectsData';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { playClickSound, playHoverSound } from '../utils/audio';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [cardAudioMuted, setCardAudioMuted] = useState(true);
  const [failedVideos, setFailedVideos] = useState<{ [key: string]: boolean }>({});
  
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

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

  const categories: { id: Category; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'personal-projects', label: 'Personal Projects', count: PROJECTS.filter(p => p.category === 'personal-projects').length },
    { id: 'motion-graphics', label: 'Motion Graphics', count: PROJECTS.filter(p => p.category === 'motion-graphics').length },
    { id: 'commercial-ads', label: 'Commercial Ads', count: PROJECTS.filter(p => p.category === 'commercial-ads').length },
    { id: '3d-kinetic', label: '3D & Kinetic Typo', count: PROJECTS.filter(p => p.category === '3d-kinetic').length },
    { id: 'vfx-color', label: 'VFX & Color Grade', count: PROJECTS.filter(p => p.category === 'vfx-color').length },
    { id: 'music-videos', label: 'Music Videos', count: PROJECTS.filter(p => p.category === 'music-videos').length },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.software.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleMouseEnterCard = (projectId: string) => {
    playHoverSound();
    setHoveredProjectId(projectId);
    const videoEl = videoRefs.current[projectId];
    if (videoEl) {
      videoEl.play().catch(() => {});
    }
  };

  const handleMouseLeaveCard = (projectId: string) => {
    setHoveredProjectId(null);
    const videoEl = videoRefs.current[projectId];
    if (videoEl) {
      videoEl.pause();
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#212529] font-serif-display">
          Featured <span className="italic text-[#6c757d]">Motion & Video</span> Works
        </h2>
      </motion.div>

      {/* Grid Layout View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  playClickSound();
                  onSelectProject(project);
                }}
                onMouseEnter={() => handleMouseEnterCard(project.id)}
                onMouseLeave={() => handleMouseLeaveCard(project.id)}
                id={`project-card-${project.id}`}
                className="group relative rounded-3xl overflow-hidden border border-[#dee2e6] bg-[#e9ecef]/80 backdrop-blur-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-[#212529] shadow-md shadow-[#212529]/5"
              >
                {/* Card Media Container */}
                <div className={`relative bg-[#212529] overflow-hidden ${project.aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  {/* Multi-Clip Carousel Badge */}
                  {project.videos && project.videos.length > 0 && (
                    <div className="absolute top-3 left-3 z-20 flex items-center px-2 py-0.5 rounded bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] text-[10px] font-semibold tracking-wide shadow-sm">
                      <span>Carousel</span>
                    </div>
                  )}

                  {/* Poster Thumbnail Image */}
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImgError(e, project.videoUrl)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* HTML5 Autoplay Video Stream on Hover (for direct video files only) */}
                  {project.videoUrl && (project.videoUrl.endsWith('.mp4') || project.videoUrl.includes('mixkit.co')) && !failedVideos[project.id] && (
                    <video
                      ref={(el) => { videoRefs.current[project.id] = el; }}
                      src={project.videoUrl}
                      poster={project.thumbnailUrl}
                      loop
                      muted={cardAudioMuted}
                      playsInline
                      onError={() => setFailedVideos(prev => ({ ...prev, [project.id]: true }))}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Center Play Indicator on Hover */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100 pointer-events-none' : 'opacity-0'
                  }`}>
                    <div className="w-12 h-12 rounded-full bg-[#f8f9fa] text-[#212529] flex items-center justify-center shadow-xl">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-semibold text-[#6c757d] uppercase tracking-wider">
                        {project.client}
                      </p>
                      <h3 className="text-lg font-bold transition-colors group-hover:text-[#212529] text-[#212529]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="p-2 rounded-full border border-[#ced4da] text-[#212529] group-hover:bg-[#212529] group-hover:text-[#f8f9fa] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs line-clamp-2 leading-relaxed text-[#495057]">
                    {project.description}
                  </p>

                  {/* Software Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.software.map((sw, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded border bg-[#f8f9fa] border-[#dee2e6] text-[#212529]"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* List Layout View */
        <div className="space-y-4">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                playClickSound();
                onSelectProject(project);
              }}
              onMouseEnter={() => handleMouseEnterCard(project.id)}
              onMouseLeave={() => handleMouseLeaveCard(project.id)}
              id={`project-list-item-${project.id}`}
              className="group rounded-2xl p-4 border border-[#dee2e6] bg-[#e9ecef]/80 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#212529]"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className={`relative ${project.aspectRatio === '9:16' ? 'w-20 h-28' : 'w-28 h-18'} rounded-xl overflow-hidden bg-[#212529] flex-shrink-0`}>
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImgError(e, project.videoUrl)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#212529]/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-[#f8f9fa] fill-current" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-[#6c757d] uppercase tracking-wider font-semibold">
                    {project.client} • {project.year}
                  </span>
                  <h3 className="text-base font-bold transition-colors group-hover:text-[#212529] text-[#212529]">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.software.slice(0, 3).map((sw, idx) => (
                      <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] font-medium">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end w-full md:w-auto">
                <button className="p-2 rounded-full bg-[#212529] text-[#f8f9fa] hover:bg-[#343a40] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {/* View All Projects External Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 text-center"
      >
        <a
          href="https://shemgadotportfolio.my.canva.site"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClickSound}
          onMouseEnter={playHoverSound}
          id="view-all-projects-btn"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#212529] hover:bg-[#343a40] text-[#f8f9fa] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer border border-[#495057]"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4 text-[#ced4da]" />
        </a>
      </motion.div>
    </section>
  );
};
