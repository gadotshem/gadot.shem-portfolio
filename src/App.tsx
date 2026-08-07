import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { VfxComparison } from './components/VfxComparison';
import { ContactCTA } from './components/ContactCTA';
import { Experience } from './components/Experience';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import { Project } from './types';
import { downloadResumePdf } from './utils/downloadResume';

import { PROJECTS } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Initialize Lenis Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'vfx-breakdown', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -90, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = 'mailto:gadot.shem@gmail.com';
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#f8f9fa] text-[#212529] selection:bg-[#ced4da] selection:text-[#212529]">
      {/* Glassmorphic Navbar */}
      <Navbar
        onContact={handleContact}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main>
        <Hero
          onContact={handleContact}
          onViewResume={downloadResumePdf}
        />

        {/* Project Gallery with Autoplay Hover & Frame Scrubber */}
        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* VFX Color Grade Split Comparison */}
        <VfxComparison />

        {/* Experience & Skills */}
        <Experience
          onViewResume={downloadResumePdf}
        />

        {/* Contact CTA Section */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContact={handleContact}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </div>
  );
}
