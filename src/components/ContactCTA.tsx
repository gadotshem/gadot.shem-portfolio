import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { playClickSound, playHoverSound } from '../utils/audio';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'gadot.shem@gmail.com';

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-[#212529]">
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-display leading-tight text-[#212529]">
          Let's Create Something <span className="italic text-[#6c757d]">Cinematic</span> Together
        </h2>

        <p className="text-base sm:text-lg text-[#495057] max-w-2xl mx-auto leading-relaxed">
          Whether you need commercial video editing, 3D titles, motion graphics, or DaVinci color grading — let's turn your vision into high-impact visuals.
        </p>

        {/* Main Contact Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Direct Mail Button */}
          <a
            href={`mailto:${email}`}
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            id="cta-email-primary-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#212529] hover:bg-[#343a40] text-[#f8f9fa] text-sm font-semibold tracking-wide uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Send an Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            onMouseEnter={playHoverSound}
            id="cta-copy-email-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#212529] text-sm font-semibold border border-[#dee2e6] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied Email!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#6c757d]" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Social Contact Links */}
        <div className="pt-10 border-t border-[#dee2e6] mt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6c757d] mb-4">
            DIRECT SOCIAL LINKS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium">
            {[
              { name: 'WhatsApp', label: 'WhatsApp (+63 935 028 2793)', url: 'https://wa.me/639350282793' },
              { name: 'LinkedIn', label: 'LinkedIn', url: 'https://www.linkedin.com/in/shem-andre-gadot-693207294/' },
              { name: 'Instagram', label: 'Instagram', url: 'https://www.instagram.com/shem.andre/' }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                onMouseEnter={playHoverSound}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e9ecef] hover:bg-[#212529] text-[#212529] hover:text-[#f8f9fa] border border-[#dee2e6] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>{platform.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
