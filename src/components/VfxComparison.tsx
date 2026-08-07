import React, { useState, useRef } from 'react';
import { Sliders } from 'lucide-react';
import { motion } from 'motion/react';

export const VfxComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const samples = [
    {
      title: 'BEFORE/AFTER — Forest Path Color Grade',
      rawUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
      gradedUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
      creator: 'Aziz Ben Amara',
      camera: 'Lumix GH5 II 4k– 10 bit',
      details: 'Footage from: Aziz Ben Amara | Lumix GH5 II 4k– 10 bit V-Log L'
    }
  ];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="vfx-breakdown" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 mb-12"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#212529] font-serif-display">
          Interactive <span className="italic text-[#6c757d]">Color Grade</span> Split
        </h2>
        <p className="text-sm sm:text-base text-[#495057] max-w-3xl">
          Drag the handle left or right to compare raw flat camera footage versus finished Premiere Pro color grade.
        </p>
      </motion.div>

      {/* Split Comparison Slider & Footnote Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Split Comparison Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-video rounded-3xl overflow-hidden border border-[#dee2e6] shadow-2xl select-none cursor-ew-resize group bg-black"
        >
          {/* Base Layer: AFTER / GRADED */}
          <img
            src={samples[0].gradedUrl}
            alt="After Color Grade"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Clipped Top Layer: BEFORE / RAW FLAT LOG */}
          <div
            className="absolute inset-0 z-1"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          >
            <img
              src={samples[0].rawUrl}
              alt="Before Color Grade Raw LOG"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                filter: 'contrast(0.72) saturate(0.2) brightness(1.22) sepia(0.06)'
              }}
            />
          </div>

          {/* Vertical Divider Handle Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#f8f9fa] shadow-[0_0_20px_rgba(248,249,250,0.8)] z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#212529] text-[#f8f9fa] flex items-center justify-center shadow-2xl border-2 border-[#ced4da] hover:scale-110 transition-transform">
              <Sliders className="w-5 h-5 text-[#f8f9fa]" />
            </div>
          </div>
        </div>

        {/* Info Footnote */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6c757d] px-1">
          <span className="text-[#212529] font-bold">{samples[0].title}</span>
          <span>{samples[0].details}</span>
        </div>
      </motion.div>
    </section>
  );
};
