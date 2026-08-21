import React, { useState } from 'react';
import { Film, Mail, Check, Copy, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'gadot.shem@gmail.com';

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="border-t bg-[#e9ecef]/80 border-[#dee2e6] text-[#212529]">
      {/* SEO Schema Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shem Andre Gadot",
            "jobTitle": "Senior Motion Designer & Video Editor",
            "url": "https://www.shemandregadot.com",
            "sameAs": [
              "https://behance.net/shemandregadot",
              "https://youtube.com/@shemandregadot",
              "https://instagram.com/gadot.shem"
            ],
            "knowsAbout": [
              "Motion Graphics",
              "Video Editing",
              "3D Title Design",
              "DaVinci Resolve Color Grading",
              "After Effects Composition",
              "Cinema 4D"
            ]
          })
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#212529] flex items-center justify-center text-[#f8f9fa] font-bold">
                <Film className="w-4 h-4 text-[#adb5bd]" />
              </div>
              <span className="text-lg font-bold text-[#212529] tracking-wider">
                SHEM ANDRE GADOT
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-[#495057]">
              Senior Motion Designer & Video Editor specializing in commercial cuts, 3D titles, speed ramping, and DaVinci color grading.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                onMouseEnter={playHoverSound}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f9fa] hover:bg-[#f8f9fa]/80 text-[#212529] text-xs font-medium border border-[#dee2e6] transition-all shadow-sm cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#212529]" />
                <span>{copied ? 'Copied Email!' : email}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-[#adb5bd]" />}
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#212529] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#projects" className="text-[#495057] hover:text-[#212529] transition-colors">Project Gallery</a></li>
              <li><a href="#experience" className="text-[#495057] hover:text-[#212529] transition-colors">Career Timeline & Skills</a></li>
              <li><a href="#vfx-breakdown" className="text-[#495057] hover:text-[#212529] transition-colors">Playground (Color Grade Split)</a></li>
              <li><a href="#contact" className="text-[#495057] hover:text-[#212529] transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Col 3: Social Links & Back to Top */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#212529] uppercase tracking-wider">
              Social Platforms
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { name: 'WhatsApp', url: 'https://wa.me/639350282793' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shem-andre-gadot-693207294/' },
                { name: 'Instagram', url: 'https://www.instagram.com/shem.andre/' },
                { name: 'YouTube', url: 'https://youtube.com/@shemandregadot' },
                { name: 'Behance', url: 'https://behance.net/shemandregadot' }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className="px-3 py-1 rounded-full bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] hover:border-[#212529] transition-colors font-medium cursor-pointer"
                >
                  {platform.name}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                onMouseEnter={playHoverSound}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#212529] hover:text-[#343a40] transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-[#dee2e6] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6c757d] gap-4">
          <p>© 2026 SHEM ANDRE GADOT. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>4K ProRes 4444 HQ Masters</span>
            <span>•</span>
            <span>DaVinci Resolve Studio</span>
            <span>•</span>
            <span>Cinema 4D</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
