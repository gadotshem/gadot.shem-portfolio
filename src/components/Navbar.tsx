import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { toggleAudioMute, isAudioEnabled, playClickSound, playHoverSound } from '../utils/audio';

interface NavbarProps {
  onContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onContact,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(isAudioEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = toggleAudioMute();
    setAudioActive(newState);
    if (newState) playClickSound();
  };

  const scrollTo = (id: string) => {
    playClickSound();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -90, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'projects', label: 'Work' },
    { id: 'vfx-breakdown', label: 'Playground' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      {/* Single Consolidated Navigation Bar */}
      <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-full backdrop-blur-2xl bg-[#e9ecef]/90 border border-[#dee2e6] shadow-md shadow-[#212529]/5 px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all">
        {/* Brand Name */}
        <button
          onClick={() => scrollTo('hero')}
          onMouseEnter={playHoverSound}
          id="nav-logo-btn"
          className="group flex items-center text-[#212529] transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <span className="text-base sm:text-lg font-semibold tracking-wide text-[#212529] leading-tight font-serif-display italic">
            Gadot.Shem
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav
          id="nav-desktop-menu"
          className="hidden md:flex items-center gap-1"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={playHoverSound}
                id={`nav-item-${item.id}`}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:scale-95 cursor-pointer ${
                  isActive
                    ? 'text-[#f8f9fa]'
                    : 'text-[#495057] hover:text-[#212529] hover:bg-[#dee2e6]/80'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#212529] rounded-full -z-10 shadow-sm" />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={playHoverSound}
            id="nav-audio-toggle"
            title={audioActive ? 'Disable UI Sound Effects' : 'Enable UI Sound Effects'}
            className="p-2 rounded-full transition-all duration-300 hover:bg-[#dee2e6]/80 hover:scale-110 text-[#212529] cursor-pointer"
          >
            {audioActive ? (
              <Volume2 className="w-4 h-4 text-[#212529] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#adb5bd]" />
            )}
          </button>

          {/* Contact CTA Button */}
          <button
            onClick={() => {
              playClickSound();
              onContact();
            }}
            onMouseEnter={playHoverSound}
            id="nav-contact-btn"
            className="px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md bg-[#212529] hover:bg-[#343a40] text-[#f8f9fa] hover:-translate-y-0.5 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Contact
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            id="nav-mobile-menu-toggle"
            className="md:hidden p-2 rounded-full transition-colors hover:bg-[#dee2e6]/60 text-[#212529]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden max-w-7xl mx-auto mt-2 p-4 rounded-2xl backdrop-blur-2xl transition-all duration-300 border shadow-xl bg-[#e9ecef]/95 border-[#dee2e6] text-[#212529]"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                id={`mobile-nav-item-${item.id}`}
                className={`text-left px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#212529] text-[#f8f9fa] font-semibold'
                    : 'hover:bg-[#dee2e6]/60 text-[#212529]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
