import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_METRICS } from '../data/projectsData';
import { playClickSound, playHoverSound } from '../utils/audio';

interface HeroProps {
  onContact: () => void;
  onViewResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContact, onViewResume }) => {
  const scrollToProjects = () => {
    playClickSound();
    const el = document.getElementById('projects');
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -90, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-between min-h-[85vh]">
      {/* Subtle background radial dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      {/* Main Massive Editorial Title - Left Aligned */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 max-w-6xl"
      >
        <p className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#6c757d]">
          SHEM ANDRE GADOT - MOTION DESIGNER AND VIDEO EDITOR
        </p>
        <h1 className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-[92px] leading-[1.05] tracking-tight text-[#212529] font-normal">
          Motion that <span className="italic text-[#6c757d]">Captivates.</span>
          <br />
          <span className="relative inline-block px-2.5 sm:px-3 pt-1 pb-2 sm:pb-3 lg:pb-3.5 mt-3 sm:mt-4 bg-[#212529]/15 text-[#212529] rounded-none select-none">
            Sequences that Connect.
            
            {/* iOS Style Text Selection Handles */}
            {/* Left Selection Bar + Top Handle Dot */}
            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#212529] pointer-events-none">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#212529]" />
            </span>

            {/* Right Selection Bar + Bottom Handle Dot */}
            <span className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#212529] pointer-events-none">
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#212529]" />
            </span>
          </span>
        </h1>
      </motion.div>

      {/* Bottom Row - Left Subtext + Right Circle CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pt-16 sm:pt-24 flex flex-col md:flex-row md:items-end justify-between gap-10"
      >
        {/* Left Subtext */}
        <div className="max-w-md space-y-3">
          <p className="text-base sm:text-lg leading-relaxed text-[#495057] font-normal">
            Senior Motion Designer & Video Editor specializing in high-quality animations and typography for SaaS platforms, UGC ads, Infographics, and Educational courses.
          </p>
        </div>

        {/* Right CTA Suite: Cohesive Styled Pill Buttons */}
        <div className="flex flex-wrap items-center gap-4 self-start md:self-end">
          {/* Primary View Work Pill Button */}
          <button
            onClick={scrollToProjects}
            onMouseEnter={playHoverSound}
            id="hero-view-work-btn"
            className="group px-7 py-4 rounded-full bg-[#212529] hover:bg-[#343a40] text-[#f8f9fa] font-normal text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-4 h-4 text-[#adb5bd] group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary View Resume Pill Button */}
          <button
            onClick={() => {
              playClickSound();
              onViewResume();
            }}
            onMouseEnter={playHoverSound}
            id="hero-view-resume-btn"
            className="group px-7 py-4 rounded-full bg-[#f8f9fa] hover:bg-[#e9ecef] border border-[#dee2e6] text-[#212529] font-normal text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>VIEW RESUME</span>
          </button>
        </div>
      </motion.div>

      {/* Metrics Bar at Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 sm:mt-20 pt-8 border-t border-[#dee2e6] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {PORTFOLIO_METRICS.map((metric, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 flex flex-col items-center justify-center"
          >
            <span className="text-2xl sm:text-3xl font-extrabold text-[#212529] block">
              {metric.value}
            </span>
            <span className="text-[11px] font-semibold text-[#6c757d] uppercase tracking-wider block">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};


