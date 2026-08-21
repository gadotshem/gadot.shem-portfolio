import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/projectsData';
import { playHoverSound } from '../utils/audio';
import { downloadResumePdf } from '../utils/downloadResume';

interface ExperienceProps {
  onViewResume?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onViewResume }) => {
  const handleDownloadResume = () => {
    downloadResumePdf();
  };

  const coreCompetencies = [
    'Cinematic Direction',
    'Motion Design',
    'Sound Design',
    'Color Grading',
    'Kinetic Typography',
  ];

  const languages = [
    'English (C2)',
    'Filipino (Native)',
    'Cebuano (Native)',
  ];

  const softwareStack = [
    {
      id: 'premiere-pro',
      name: 'Adobe Premiere Pro',
      tag: 'Pr',
      icon: (
        <div className="group/item relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#00003b] border border-[#712284] flex items-center justify-center text-[#ea77ff] font-extrabold text-lg shadow-sm group-hover/item:scale-110 transition-transform cursor-pointer font-sans">
            Pr
          </div>
          <span className="absolute -bottom-7 opacity-0 group-hover/item:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow whitespace-nowrap pointer-events-none z-10">
            Premiere Pro
          </span>
        </div>
      ),
    },
    {
      id: 'after-effects',
      name: 'Adobe After Effects',
      tag: 'Ae',
      icon: (
        <div className="group/item relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#00003b] border border-[#392996] flex items-center justify-center text-[#9999ff] font-extrabold text-lg shadow-sm group-hover/item:scale-110 transition-transform cursor-pointer font-sans">
            Ae
          </div>
          <span className="absolute -bottom-7 opacity-0 group-hover/item:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow whitespace-nowrap pointer-events-none z-10">
            After Effects
          </span>
        </div>
      ),
    },
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      tag: 'Ps',
      icon: (
        <div className="group/item relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#001e36] border border-[#004e8a] flex items-center justify-center text-[#31a8ff] font-extrabold text-lg shadow-sm group-hover/item:scale-110 transition-transform cursor-pointer font-sans">
            Ps
          </div>
          <span className="absolute -bottom-7 opacity-0 group-hover/item:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow whitespace-nowrap pointer-events-none z-10">
            Photoshop
          </span>
        </div>
      ),
    },
    {
      id: 'figma',
      name: 'Figma',
      tag: 'Fig',
      icon: (
        <div className="group/item relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#1e1e1e] border border-stone-700 flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform cursor-pointer">
            <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
          </div>
          <span className="absolute -bottom-7 opacity-0 group-hover/item:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow whitespace-nowrap pointer-events-none z-10">
            Figma
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Experience Timeline */}
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#212529] font-serif-display">
            Professional <span className="italic text-[#6c757d]">Background</span>
          </h2>
        </motion.div>

        <div className="space-y-10 border-l-2 border-[#dee2e6] pl-6 sm:pl-8 ml-2 sm:ml-4">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative space-y-3"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#212529] border-2 border-[#f8f9fa]" />

              <div>
                <span className="text-xs font-bold text-[#6c757d] uppercase tracking-wider block">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold text-[#212529] mt-0.5">
                  {exp.role} <span className="text-[#6c757d] font-medium">at {exp.company}</span>
                </h3>
              </div>

              <ul className="space-y-2 text-sm text-[#343a40] list-disc pl-5">
                {exp.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="leading-relaxed">
                    {hl}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* View Resume Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center pt-2"
        >
          <button
            onClick={() => {
              if (onViewResume) {
                onViewResume();
              } else {
                downloadResumePdf();
              }
            }}
            onMouseEnter={playHoverSound}
            id="experience-view-resume-btn"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#212529] text-[#f8f9fa] font-bold text-sm hover:bg-[#343a40] transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer border border-[#495057]"
          >
            <FileText className="w-4 h-4 text-[#ced4da] group-hover:scale-110 transition-transform" />
            <span>View Resume</span>
          </button>
        </motion.div>
      </div>

      {/* SKILLS AND EDUCATION SECTION */}
      <div className="space-y-8 pt-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#212529] font-serif-display"
        >
          Skills and <span className="italic text-[#6c757d]">Education</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* LEFT CARD: Core Competencies & Software Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl border border-[#dee2e6] bg-[#e9ecef]/80 shadow-md flex flex-col justify-between space-y-10"
          >
            {/* Core Competencies */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-[#6c757d] uppercase">
                CORE COMPETENCIES
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {coreCompetencies.map((comp, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] text-xs sm:text-sm font-semibold shadow-xs"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Post-Production Software Stack */}
            <div className="space-y-4 pt-4 border-t border-[#dee2e6]">
              <h3 className="text-xs font-bold tracking-widest text-[#6c757d] uppercase">
                POST-PRODUCTION SOFTWARE STACK
              </h3>
              <div className="flex items-center gap-3 sm:gap-4 pt-1">
                {softwareStack.map((sw) => (
                  <React.Fragment key={sw.id}>
                    {sw.icon}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: Education & Linguistic Capabilities */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl border border-[#dee2e6] bg-[#e9ecef]/80 shadow-md flex flex-col justify-between space-y-10"
          >
            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-widest text-[#6c757d] uppercase">
                EDUCATION
              </h3>
              <div className="space-y-1">
                <h4 className="text-lg sm:text-xl font-bold text-[#212529] leading-snug">
                  Mindanao State University - Iligan Institute of Technology
                </h4>
                <p className="text-xs sm:text-sm font-medium text-[#495057]">
                  Undergraduate Civil Engineering (2021–2024) • Iligan City, Philippines
                </p>
              </div>
            </div>

            {/* Linguistic Capabilities */}
            <div className="space-y-4 pt-4 border-t border-[#dee2e6]">
              <h3 className="text-xs font-bold tracking-widest text-[#6c757d] uppercase">
                LINGUISTIC CAPABILITIES
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-[#f8f9fa] border border-[#dee2e6] text-[#212529] text-xs sm:text-sm font-semibold shadow-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};


