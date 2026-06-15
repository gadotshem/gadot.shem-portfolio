import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Play,
  Linkedin,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Youtube,
  Download,
} from "lucide-react";
// @ts-expect-error - Vite handles jpg asset loading natively
import profilePic from "./profile.jpg";
// @ts-expect-error - Vite handles jpg asset loading natively
import islaThumbnail from "./isla_thumbnail.jpg";
// @ts-expect-error - Vite handles pdf asset loading natively
import resumeUrl from "./Shem_Gadot_Resume.pdf";

// Define TS Interfaces for Projects and Experience
interface Project {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  link: string;
  type?: "youtube" | "instagram" | "drive";
  thumbnailUrl?: string;
  subVideos?: {
    title: string;
    link: string;
    desc?: string;
    tags?: string[];
    type?: "youtube" | "instagram" | "drive";
    thumbnailUrl?: string;
  }[];
}

interface Experience {
  id: number;
  date: string;
  company: string;
  role: string;
  bullets: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cinematic Travel Vlog: Siquijor Island",
    desc: "A personal project of mine. Trendy, cinematic style video with flash transitions, sound effects, and vibrant color grading with soft glows. First time practicing cinematography. Shot on my iPhone 15",
    tags: ["Cinematic", "Vlog", "Videography"],
    link: "https://youtu.be/FBrK0OMIazk",
    thumbnailUrl: islaThumbnail,
  },
  {
    id: 2,
    title: "WAWN University: Hub and Spoke Presentation",
    desc: "A 15-minute video explaining the Hub and Spoke model used by WAWN. Purely motion design and kinetic typography, converted powerpoint slides into a cohesive video presentation.",
    tags: ["Motion Design", "Kinetic Typography", "Infographic"],
    link: "https://www.youtube.com/watch?v=YamQ7MIYJwc",
  },
  {
    id: 3,
    title: "WAWN University: 80-video series",
    desc: "Video series for franchisees and upcoming employees containing 8 chapters, 80 videos total. Educational content focusing on Business Practices, Accounting, and Restaurant Management. Standard long-form editing and ocassional kinetic typography for certain parts.",
    tags: ["Educational", "Kinetic Typography", "Video Series"],
    link: "https://youtu.be/esI8hkstzBc",
  },
  {
    id: 4,
    title: "E-commerce/Business promotion ads",
    desc: "Retention ad sequence for instagram influencer Maggie Hu Ling and Houston-based business Continuum Home Health",
    tags: ["Retention Ads", "E-commerce", "Short-form"],
    link: "https://www.youtube.com/shorts/Cixras9eE1s?feature=share",
    subVideos: [
      {
        title: "@maggiegiehu",
        link: "https://www.youtube.com/shorts/Cixras9eE1s?feature=share",
        desc: "Retention ad sequence for instagram influencer Maggie Hu Ling and Houston-based business Continuum Home Health",
        tags: ["Retention Ads", "E-commerce", "Short-form"],
      },
      {
        title: "@maggiegiehu",
        link: "https://www.youtube.com/shorts/qrpQkiRE-58?feature=share",
        desc: "Retention ad sequence for instagram influencer Maggie Hu Ling and Houston-based business Continuum Home Health",
        tags: ["Retention Ads", "E-commerce", "Short-form"],
      },
      {
        title: "Continuum Home Health",
        link: "https://www.youtube.com/shorts/S-jUNRPd7WY?feature=share",
        desc: "Retention ad sequence for instagram influencer Maggie Hu Ling and Houston-based business Continuum Home Health",
        tags: ["Retention Ads", "E-commerce", "Short-form"],
      },
    ],
  },
  {
    id: 5,
    title: "CANINESCIENCE: Pawflix Video Series",
    desc: "A mini-series with 4 episodes, with a playful, yet professional theme for educating pet-owners on certain topics on being a fur parent. Focused on educating and information retention.",
    tags: ["Educational", "Short-form", "Mini-Series"],
    link: "https://www.youtube.com/shorts/OgBuNP50oI4",
    subVideos: [
      {
        title: "Episode 1",
        link: "https://www.youtube.com/shorts/OgBuNP50oI4",
        desc: "A mini-series with 4 episodes, with a playful, yet professional theme for educating pet-owners on certain topics on being a fur parent. Focused on educating and information retention.",
        tags: ["Educational", "Short-form", "Mini-Series"],
      },
      {
        title: "Episode 2",
        link: "https://www.youtube.com/shorts/_lJbmNFg9Qw",
        desc: "A mini-series with 4 episodes, with a playful, yet professional theme for educating pet-owners on certain topics on being a fur parent. Focused on educating and information retention.",
        tags: ["Educational", "Short-form", "Mini-Series"],
      },
      {
        title: "Episode 3",
        link: "https://www.youtube.com/shorts/7VMIgoBpuzY?feature=share",
        desc: "A mini-series with 4 episodes, with a playful, yet professional theme for educating pet-owners on certain topics on being a fur parent. Focused on educating and information retention.",
        tags: ["Educational", "Short-form", "Mini-Series"],
      },
    ],
  },
  {
    id: 6,
    title: "Assorted Video Projects at Vonubaby",
    desc: "Collection of project I made at my time on @vonuofficial, An educational type content, A founder story format for landing pages, and An E-commerce content used for Meta ads.",
    tags: ["E-commerce", "Educational", "Founder story"],
    link: "https://www.youtube.com/shorts/mx0gsqA_AlQ",
    subVideos: [
      {
        title: "Educational Content",
        link: "https://www.youtube.com/shorts/mx0gsqA_AlQ",
        desc: "Collection of project I made at my time on @vonuofficial, An educational type content, A founder story format for landing pages, and An E-commerce content used for Meta ads.",
        tags: ["E-commerce", "Educational", "Founder story"],
      },
      {
        title: "Founder Story format",
        link: "https://www.youtube.com/shorts/pbAldc5kKA8",
        desc: "Collection of project I made at my time on @vonuofficial, An educational type content, A founder story format for landing pages, and An E-commerce content used for Meta ads.",
        tags: ["E-commerce", "Educational", "Founder story"],
      },
      {
        title: "E-commerce Content",
        link: "https://www.youtube.com/shorts/j13fp7sVQso?feature=share",
        desc: "Collection of project I made at my time on @vonuofficial, An educational type content, A founder story format for landing pages, and An E-commerce content used for Meta ads.",
        tags: ["E-commerce", "Educational", "Founder story"],
      },
    ],
  },
];

const experience: Experience[] = [
  {
    id: 1,
    date: "March 2026 - May 2026",
    company: "WAFFLES AND WHATNOT",
    role: "Project Based Video Editor",
    bullets: [
      "Part of a team creating an 8-chapter course, editing over 80 long-form videos for WAWN University.",
      "Utilized state-of-the-art AI tools for fast asset generation, voiceover integration, and cinematic b-rolls.",
      "Created bespoke system animations and premium typography presets for formulas and educational scenes.",
    ],
  },
  {
    id: 2,
    date: "November 2025 - January 2026",
    company: "VONUBABY",
    role: "Video Editor / Graphic Designer",
    bullets: [
      "Edited high-performing Facebook and Instagram advertisements for Meta optimized for customer retention & site-conversion.",
      "Designed high-fidelity product graphics and images for Google PMAX networks and Amazon store listings.",
      "Integrated emerging AI tools such as Sora 2 and Nanobanana to produce surreal 3D visual mockups.",
    ],
  },
  {
    id: 3,
    date: "July 2025 - October 2025",
    company: "BRANDED AND BUILT",
    role: "Motion Graphics Designer",
    bullets: [
      "Boosted viewer retention by 20% on YouTube by scripting and animating explanation videos that grip audience focus.",
      "Engineered stylized social media lower thirds and interactive pointers that boosted video subscriber metrics by 10%.",
      "Designed endcard cards and animated YouTube outros that drove a 15% surge in playlist engagement across channels.",
    ],
  },
  {
    id: 4,
    date: "July 2025 - September 2025",
    company: "CANINESCIENCE.CO",
    role: "Video Editor Contractor",
    bullets: [
      "Managed video output for a 4-part series major brand relaunch campaign.",
      "Crafted custom kinetic typography overlay setups to maximize mobile accessibility.",
      "Successfully delivered color-graded, sound-mixed masters optimized for multi-device viewers.",
    ],
  },
];

// Falling back to a high-quality professional Southeast Asian male portrait that matches Shem's likeness
const defaultProfilePic =
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400&h=400";

export default function App() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [profileImg, setProfileImg] = useState<string>(profilePic);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSubIndices, setActiveSubIndices] = useState<
    Record<number, number>
  >({});
  const [modalSubIdx, setModalSubIdx] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const mainWidescreen = projects.slice(0, 3);
  const hiddenShortform = projects.slice(3, 6);
  const visibleExperience = showAllExperience
    ? experience
    : experience.slice(0, 2);

  const getSubIndexForProject = (projectId: number) => {
    return activeSubIndices[projectId] || 0;
  };

  const handleCardClick = (project: Project) => {
    const currentSub = activeSubIndices[project.id] || 0;
    setModalSubIdx(currentSub);
    setActiveProject(project);
  };

  const handleNextProject = useCallback(() => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    if (currentIndex < projects.length - 1) {
      handleCardClick(projects[currentIndex + 1]);
    }
  }, [activeProject, activeSubIndices]);

  const handlePrevProject = useCallback(() => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    if (currentIndex > 0) {
      handleCardClick(projects[currentIndex - 1]);
    }
  }, [activeProject, activeSubIndices]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === "Escape") setActiveProject(null);
      if (e.key === "ArrowRight") handleNextProject();
      if (e.key === "ArrowLeft") handlePrevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, handleNextProject, handlePrevProject]);

  const getVideoId = (link: string) => {
    const cleanUrl = link.split("?")[0];
    const trimmed = cleanUrl.endsWith("/") ? cleanUrl.slice(0, -1) : cleanUrl;
    return trimmed.split("/").pop() || "";
  };

  const getYoutubeId = (link: string) => {
    try {
      const url = new URL(link);
      if (url.hostname.includes("youtube.com")) {
        if (url.pathname.includes("/watch")) {
          return url.searchParams.get("v") || "";
        }
        if (url.pathname.startsWith("/embed/")) {
          return url.pathname.split("/embed/")[1].split("/")[0];
        }
        if (url.pathname.startsWith("/shorts/")) {
          return url.pathname.split("/shorts/")[1].split("/")[0];
        }
      } else if (url.hostname.includes("youtu.be")) {
        return url.pathname.slice(1).split("/")[0];
      }
    } catch (e) {
      // fallback
    }
    return getVideoId(link);
  };

  const getDriveId = (link: string) => {
    const matches = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return matches ? matches[1] : "";
  };

  const getYoutubeWatchUrl = (link: string) => {
    const id = getYoutubeId(link);
    return `https://www.youtube.com/watch?v=${id}`;
  };

  return (
    <>
      {/* Background Liquid Mesh Layer */}
      <div className="liquid-bg" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Cursor Reactive Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.07), transparent 40%)`
        }}
      />

      {/* Fluid Bar Navigation Layout */}
      <nav id="nav-header" className="full-width-nav glass-panel-nav">
        <div className="logo text-gradient">GADOT.SHEM</div>
        <div className="nav-links">
          <a href="#hero">About</a>
          <a href="#work">Featured Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills and Education</a>
        </div>
        <a href="mailto:gadot.shem@gmail.com" className="nav-contact-btn">
          Get in touch
        </a>
      </nav>

      {/* Primary Layout Container Grid */}
      <div className="container">
        {/* Hero Section */}
        <header id="hero" className="hero">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>
              <span className="ios-selection">
                <span className="ios-handle-start"></span>
                Hey, I'm Shem!
                <span className="ios-handle-end"></span>
              </span>{" "}
              Video Editor & Motion Designer
            </h1>
            <p>
              Specializing in digital short narratives for UGC ads, clean
              graphic animations and typography specialized for infographics
              and SaaS platforms, and retention-based editing for educational courses.
            </p>
            <div className="hero-actions">
              <a href="#work" className="cta-btn">
                View Projects
              </a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="cta-btn !bg-white/10 hover:!bg-white/20 transition-colors">
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-profile-stack"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg) scale3d(1.02, 1.02, 1.02)`;
              const glow = e.currentTarget.querySelector('.avatar-glow') as HTMLElement;
              if(glow) {
                glow.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              e.currentTarget.style.transition = 'transform 0.5s ease-out';
              const glow = e.currentTarget.querySelector('.avatar-glow') as HTMLElement;
              if(glow) {
                glow.style.transform = `translate(0px, 0px)`;
                glow.style.transition = 'transform 0.5s ease-out';
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transition = 'transform 0.1s ease-out';
              const glow = e.currentTarget.querySelector('.avatar-glow') as HTMLElement;
              if(glow) glow.style.transition = 'transform 0.1s ease-out';
            }}
          >
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-glass-frame">
                <img
                  src={profileImg}
                  onError={() => {
                    if (profileImg !== defaultProfilePic) {
                      setProfileImg(defaultProfilePic);
                    }
                  }}
                  alt="Shem Andre I. Gadot"
                  className="avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="social-links">
              <a
                href="mailto:gadot.shem@gmail.com"
                className="social-icon-btn"
                aria-label="Email Shem"
              >
                <Mail className="w-5 h-5 text-white/90" />
              </a>
              <a
                href="https://wa.me/639350282793"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="WhatsApp Chat"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white/90"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.35-.272.277-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/shem-andre-gadot-693207294/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-white/90" />
              </a>
            </div>
          </motion.div>
        </header>

        {/* Dynamic Highlight Metrics Row */}
        <section id="metrics" className="py-16 md:py-24 !border-t-0">
          <div className="grid grid-cols-1 md:grid-cols-4 bg-[#0a0814]/30 border border-white/5 rounded-[28px] backdrop-blur-xl divide-y divide-white/5 md:divide-y-0 md:divide-x md:divide-white/10 shadow-xl overflow-hidden">
            <div className="flex flex-col items-center justify-center h-[75px] px-10 text-center animate-fade-in">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent font-display">
                5+
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-slate-400 font-medium font-display mt-5 block leading-relaxed">
                Years Experience
              </span>
            </div>

            <div
              className="flex flex-col items-center justify-center h-[75px] px-10 text-center animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent font-display">
                209+
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-slate-400 font-medium font-display mt-5 block leading-relaxed">
                Projects Delivered
              </span>
            </div>

            <div
              className="flex flex-col items-center justify-center h-[75px] px-10 text-center animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent font-display">
                32+
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-slate-400 font-medium font-display mt-5 block leading-relaxed">
                Clients Partnered
              </span>
            </div>

            <div
              className="flex flex-col items-center justify-center h-[75px] px-10 text-center animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent font-display">
                1M+
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-slate-400 font-medium font-display mt-5 block leading-relaxed">
                Views Total
              </span>
            </div>
          </div>
        </section>

        {/* Selected Portfolio Projects Section */}
        <motion.section 
          id="work"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>

          {/* Main Selected Widescreen (16:9 Format Grid) */}
          <div className="main-widescreen-grid">
            {mainWidescreen.map((project, index) => {
              const hasSubVideos =
                !!project.subVideos && project.subVideos.length > 0;
              const subIndex = hasSubVideos
                ? getSubIndexForProject(project.id)
                : 0;
              const currentVideoLink = hasSubVideos
                ? project.subVideos[subIndex].link
                : project.link;
              const currentTitle = project.title;
              const currentDesc = hasSubVideos
                ? project.subVideos[subIndex].desc || project.desc
                : project.desc;
              const currentTags = hasSubVideos
                ? project.subVideos[subIndex].tags || project.tags
                : project.tags;
              const currentType = hasSubVideos
                ? project.subVideos[subIndex].type || project.type
                : project.type;
              const currentThumbnailUrl = hasSubVideos
                ? project.subVideos[subIndex].thumbnailUrl ||
                  project.thumbnailUrl
                : project.thumbnailUrl;

              return (
                <motion.div
                  key={project.id}
                  className="project-card glass-panel cursor-pointer group relative"
                  id={`project-${project.id}`}
                  onClick={() => handleCardClick(project)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                >
                  <div className="video-container widescreen">
                    {/* Carousel Badge */}
                    {hasSubVideos && (
                      <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        Carousel ({subIndex + 1}/{project.subVideos!.length})
                      </div>
                    )}

                    {/* Carousel Arrow Hooks */}
                    {hasSubVideos && (
                      <>
                        <button
                          type="button"
                          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#04030a]/75 hover:bg-white/20 text-white border border-white/10 shadow-lg scale-90 group-hover:scale-100 opacity-80 group-hover:opacity-100 transition-all duration-200 active:scale-95"
                          onClick={(e) => {
                            e.stopPropagation();
                            const prevIndex =
                              (subIndex - 1 + project.subVideos!.length) %
                              project.subVideos!.length;
                            setActiveSubIndices((prev) => ({
                              ...prev,
                              [project.id]: prevIndex,
                            }));
                          }}
                          aria-label="Previous version"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#04030a]/75 hover:bg-white/20 text-white border border-white/10 shadow-lg scale-90 group-hover:scale-100 opacity-80 group-hover:opacity-100 transition-all duration-200 active:scale-95"
                          onClick={(e) => {
                            e.stopPropagation();
                            const nextIndex =
                              (subIndex + 1) % project.subVideos!.length;
                            setActiveSubIndices((prev) => ({
                              ...prev,
                              [project.id]: nextIndex,
                            }));
                          }}
                          aria-label="Next version"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Dot Navigation */}
                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-sm">
                          {project.subVideos!.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              type="button"
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotIdx === subIndex ? "bg-white w-3 shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-white/40 hover:bg-white/70"}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubIndices((prev) => ({
                                  ...prev,
                                  [project.id]: dotIdx,
                                }));
                              }}
                              aria-label={`Go to slide ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    <img
                      src={
                        currentThumbnailUrl ||
                        (currentType === "instagram" || currentType === "drive"
                          ? "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=600&h=400"
                          : `https://img.youtube.com/vi/${getYoutubeId(currentVideoLink)}/maxresdefault.jpg`)
                      }
                      onError={(e) => {
                        if (
                          !currentThumbnailUrl &&
                          currentType !== "instagram" &&
                          currentType !== "drive"
                        ) {
                          (e.currentTarget as HTMLImageElement).src =
                            `https://img.youtube.com/vi/${getYoutubeId(currentVideoLink)}/hqdefault.jpg`;
                        }
                      }}
                      alt={currentTitle}
                      className="thumbnail-img w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="play-overlay-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="play-circle">
                        <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="group-hover:text-blue-300 transition-colors duration-200">
                      {currentTitle}
                    </h3>
                    <p>{currentDesc}</p>
                    <div className="tags">
                      {currentTags.map((tag, idx) => (
                        <span key={idx} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Shortform Grid (9:16 Format Grid) */}
          <div
            className="expanded-shortform-grid animate-fade-in"
            id="expanded-projects-section"
          >
              {hiddenShortform.map((project, index) => {
                const hasSubVideos =
                  !!project.subVideos && project.subVideos.length > 0;
                const subIndex = hasSubVideos
                  ? getSubIndexForProject(project.id)
                  : 0;
                const currentVideoLink = hasSubVideos
                  ? project.subVideos[subIndex].link
                  : project.link;
                const currentTitle = project.title;
                const currentDesc = hasSubVideos
                  ? project.subVideos[subIndex].desc || project.desc
                  : project.desc;
                const currentTags = hasSubVideos
                  ? project.subVideos[subIndex].tags || project.tags
                  : project.tags;
                const currentType = hasSubVideos
                  ? project.subVideos[subIndex].type || project.type
                  : project.type;
                const currentThumbnailUrl = hasSubVideos
                  ? project.subVideos[subIndex].thumbnailUrl ||
                    project.thumbnailUrl
                  : project.thumbnailUrl;

                return (
                  <motion.div
                    key={project.id}
                    className="project-card glass-panel cursor-pointer group relative"
                    id={`project-${project.id}`}
                    onClick={() => handleCardClick(project)}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  >
                    <div className="video-container short-form">
                      {/* Carousel Badge */}
                      {hasSubVideos && (
                        <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                          Carousel ({subIndex + 1}/{project.subVideos!.length})
                        </div>
                      )}

                      {/* Carousel Arrow Hooks */}
                      {hasSubVideos && (
                        <>
                          <button
                            type="button"
                            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#04030a]/75 hover:bg-white/20 text-white border border-white/10 shadow-lg scale-90 group-hover:scale-100 opacity-80 group-hover:opacity-100 transition-all duration-200 active:scale-95"
                            onClick={(e) => {
                              e.stopPropagation();
                              const prevIndex =
                                (subIndex - 1 + project.subVideos!.length) %
                                project.subVideos!.length;
                              setActiveSubIndices((prev) => ({
                                ...prev,
                                [project.id]: prevIndex,
                              }));
                            }}
                            aria-label="Previous version"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-[#04030a]/75 hover:bg-white/20 text-white border border-white/10 shadow-lg scale-90 group-hover:scale-100 opacity-80 group-hover:opacity-100 transition-all duration-200 active:scale-95"
                            onClick={(e) => {
                              e.stopPropagation();
                              const nextIndex =
                                (subIndex + 1) % project.subVideos!.length;
                              setActiveSubIndices((prev) => ({
                                ...prev,
                                [project.id]: nextIndex,
                              }));
                            }}
                            aria-label="Next version"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          {/* Dot Navigation */}
                          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-sm">
                            {project.subVideos!.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                type="button"
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${dotIdx === subIndex ? "bg-white w-3 shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-white/40 hover:bg-white/70"}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveSubIndices((prev) => ({
                                    ...prev,
                                    [project.id]: dotIdx,
                                  }));
                                }}
                                aria-label={`Go to slide ${dotIdx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      <img
                        src={
                          currentType === "instagram" || currentType === "drive"
                            ? currentThumbnailUrl ||
                              "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=600&h=400"
                            : `https://img.youtube.com/vi/${getYoutubeId(currentVideoLink)}/maxresdefault.jpg`
                        }
                        onError={(e) => {
                          if (
                            currentType !== "instagram" &&
                            currentType !== "drive"
                          ) {
                            (e.currentTarget as HTMLImageElement).src =
                              `https://img.youtube.com/vi/${getYoutubeId(currentVideoLink)}/hqdefault.jpg`;
                          }
                        }}
                        alt={currentTitle}
                        className="thumbnail-img w-full h-full"
                        referrerPolicy="no-referrer"
                      />
                      <div className="play-overlay-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="play-circle">
                          <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3 className="group-hover:text-blue-300 transition-colors duration-200">
                        {currentTitle}
                      </h3>
                      <p>{currentDesc}</p>
                      <div className="tags">
                        {currentTags.map((tag, idx) => (
                          <span key={idx} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          {/* Load Toggle Controllers */}
          <div className="load-more-container flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://shemgadotportfolio.my.canva.site"
              target="_blank"
              rel="noreferrer"
              className="toggle-btn inline-block text-center"
            >
              Show All Projects
            </a>
          </div>
        </motion.section>

        {/* Professional Experience Timeline Section */}
        <motion.section 
          id="experience"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Employment Experience</h2>

          <div className="experience-timeline">
            {visibleExperience.map((exp) => (
              <div
                key={exp.id}
                className="experience-item glass-panel animate-fade-in"
                id={`exp-item-${exp.id}`}
              >
                <div className="exp-date">{exp.date}</div>
                <div className="exp-details">
                  <h4>{exp.company}</h4>
                  <div className="exp-role">{exp.role}</div>
                  <ul>
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Experience History Load toggler */}
          <div className="load-more-container flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="toggle-btn"
              id="toggle-experience-btn"
            >
              {showAllExperience
                ? "Hide History Ledger"
                : "Show More Employment History"}
            </button>
            <a
              href={resumeUrl}
              download="Shem_Gadot_Resume.pdf"
              className="toggle-btn inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.section>

        {/* Dynamic Skill matrix & Linguistic capabilities cards */}
        <motion.section 
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills and Education</h2>

          <div className="grid-2">
            {/* Competency Card Column */}
            <div className="card glass-panel" id="skills-competencies-card">
              <h5>Core Competencies</h5>
              <div className="skill-tags" style={{ marginBottom: "2.5rem" }}>
                {[
                  "Sound Design",
                  "Color Grading",
                  "Kinetic Typography",
                  "Cinematic Direction",
                  "Motion Graphics",
                  "Retention Optimization",
                ].map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <h5>Post-Production Software Stack</h5>
              <div className="software-icons">
                <div className="software-icon pr" title="Adobe Premiere Pro">
                  Pr
                </div>
                <div className="software-icon ae" title="Adobe After Effects">
                  Ae
                </div>
                <div className="software-icon ps" title="Adobe Photoshop">
                  Ps
                </div>
                <div className="software-icon figma" title="Figma">
                  <svg
                    viewBox="0 0 38 57"
                    width="15"
                    height="22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fill="#F24E1E"
                      d="M19 28.5c0 5.247-4.253 9.5-9.5 9.5S0 33.747 0 28.5s4.253-9.5 9.5-9.5 9.5 4.253 9.5 9.5z"
                    />
                    <path
                      fill="#A259FF"
                      d="M0 47.5C0 42.253 4.253 38 9.5 38H19v19H9.5A9.5 9.5 0 0 1 0 47.5z"
                    />
                    <path
                      fill="#1ABCFE"
                      d="M19 47.5C19 42.253 23.253 38 28.5 38H19v19z"
                    />
                    <path
                      fill="#0ACF83"
                      d="M0 28.5C0 23.253 4.253 19 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"
                    />
                    <path
                      fill="#FF7262"
                      d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"
                    />
                    <path
                      fill="#F24E1E"
                      d="M19 0h9.5A9.5 9.5 0 0 1 38 9.5c0 5.247-4.253 9.5-9.5 9.5H19V0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Academic profile column */}
            <div className="card glass-panel" id="skills-education-card">
              <h5>Education</h5>
              <div className="edu-school">
                Mindanao State University - Iligan Institute of Technology
              </div>
              <div className="edu-meta">
                Undergraduate Civil Engineering (2021)
              </div>

              <h5 style={{ marginTop: "2.5rem" }}>Linguistic Capabilities</h5>
              <div className="skill-tags">
                <span className="lang-tag">English (C2 Professional)</span>
                <span className="lang-tag">Filipino (Native)</span>
                <span className="lang-tag">Cebuano (Native)</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Dynamic Static Footer Section */}
        <footer
          id="footer"
          className="mt-16 pt-12 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-slate-400 text-sm"
        >
          <div className="flex flex-col gap-2">
            <h4 className="logo text-gradient font-extrabold text-lg">
              GADOT.SHEM
            </h4>
            <p className="opacity-70">
              Professional Video Editor & Motion Designer
            </p>
            <p className="text-xs opacity-50 mt-1">
              &copy; 2026 Shem Andre I. Gadot. All Rights Reserved.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Contact Info
              </span>
              <p className="hover:text-white transition-colors">
                <strong>Primary Line:</strong>{" "}
                <a
                  href="tel:+639350282793"
                  className="hover:underline text-white/95 font-medium"
                >
                  +63 935 028 2793
                </a>
              </p>
              <p className="hover:text-white transition-colors">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:gadot.shem@gmail.com"
                  className="hover:underline text-white/95 font-medium"
                >
                  gadot.shem@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Social Channels
              </span>
              <p className="hover:text-white transition-colors">
                <a
                  href="https://www.linkedin.com/in/shem-andre-gadot-693207294/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline inline-flex items-center gap-1.5 text-white/95 font-medium"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" /> LinkedIn
                  Profile
                </a>
              </p>
              <p className="hover:text-white transition-colors">
                <a
                  href="https://wa.me/639350282793"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline inline-flex items-center gap-1.5 text-white/95 font-medium"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-slate-400"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.35-.272.277-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>{" "}
                  WhatsApp Chat
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Quick Navigation
              </span>
              <div className="flex flex-col gap-1 text-xs">
                <a href="#hero" className="hover:text-white transition-colors">
                  About
                </a>
                <a href="#work" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
                <a
                  href="#experience"
                  className="hover:text-white transition-colors"
                >
                  Employment Experience
                </a>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills and Education
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Dynamic Lightbox Modal */}
      {activeProject &&
        (() => {
          const hasModalSubs =
            !!activeProject.subVideos && activeProject.subVideos.length > 0;
          const currentModalVideo = hasModalSubs
            ? activeProject.subVideos![modalSubIdx]
            : activeProject;
          const currentModalLink = currentModalVideo.link;
          const currentModalTitle = activeProject.title; // Always show main title
          const variationTitle = hasModalSubs ? currentModalVideo.title : null;
          const currentModalDesc = currentModalVideo.desc || activeProject.desc;
          const currentModalTags = currentModalVideo.tags || activeProject.tags;
          const currentModalType = currentModalVideo.type || activeProject.type;

          const isShortForm =
            activeProject.id > 3 || currentModalType === "instagram";
          const currentIndex = projects.findIndex(
            (p) => p.id === activeProject.id,
          );
          const hasPrev = currentIndex > 0;
          const hasNext = currentIndex < projects.length - 1;

          return (
            <div
              className="fixed inset-0 z-[1000] overflow-y-auto p-4 md:p-10 backdrop-blur-xl bg-black/90 animate-fade-in flex justify-center items-start md:items-center"
              onClick={() => setActiveProject(null)}
            >
              <div
                className="w-[96vw] max-w-[1200px] glass-panel relative p-6 md:p-8 xl:p-10 my-auto bg-[#0a0814]/98 border border-white/10 rounded-[38px] shadow-2xl animate-scale-up z-[1005]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Previous Button - Pinned outside left */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevProject();
                  }}
                  disabled={!hasPrev}
                  className={`hidden md:flex absolute top-1/2 -left-6 md:-left-16 xl:-left-24 -translate-y-1/2 z-[1010] p-4 rounded-full border transition-all duration-300 ${
                    hasPrev
                      ? "bg-black/50 hover:bg-white/20 border-white/10 text-white shadow-2xl hover:scale-110 cursor-pointer backdrop-blur-md"
                      : "bg-transparent border-transparent text-white/5 cursor-not-allowed"
                  }`}
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Next Button - Pinned outside right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextProject();
                  }}
                  disabled={!hasNext}
                  className={`hidden md:flex absolute top-1/2 -right-6 md:-right-16 xl:-right-24 -translate-y-1/2 z-[1010] p-4 rounded-full border transition-all duration-300 ${
                    hasNext
                      ? "bg-black/50 hover:bg-white/20 border-white/10 text-white shadow-2xl hover:scale-110 cursor-pointer backdrop-blur-md"
                      : "bg-transparent border-transparent text-white/5 cursor-not-allowed"
                  }`}
                  aria-label="Next project"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Floating Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-200 border border-white/5"
                  aria-label="Close modal"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-10 items-center min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[700px] w-full max-w-[1200px] mx-auto">
                  {/* Left Panel: Video Display Section */}
                  <div className="col-span-1 flex flex-row items-center justify-center lg:col-span-6 2xl:col-span-7 gap-4 md:gap-6 lg:gap-8 relative">
                    <div
                      className={`video-container w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black ${isShortForm ? "short-form max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[360px]" : "widescreen max-w-[640px] xl:max-w-[760px] 2xl:max-w-[854px] mx-auto"}`}
                    >
                      {currentModalType === "instagram" ? (
                        <iframe
                          src={`https://www.instagram.com/reel/${getVideoId(currentModalLink)}/embed/`}
                          title={currentModalTitle}
                          allowFullScreen
                          scrolling="no"
                          className="absolute inset-0 w-full h-full border-none rounded-xl"
                        ></iframe>
                      ) : currentModalType === "drive" ? (
                        <iframe
                          src={`https://drive.google.com/file/d/${getDriveId(currentModalLink)}/preview`}
                          title={currentModalTitle}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-none rounded-xl bg-black"
                        ></iframe>
                      ) : (
                        <iframe
                          src={`https://www.youtube.com/embed/${getYoutubeId(currentModalLink)}?autoplay=1&rel=0`}
                          title={currentModalTitle}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-none"
                        ></iframe>
                      )}
                    </div>

                    {/* Short Form Version Selection Thumbnails */}
                    {isShortForm && hasModalSubs && (
                      <div className="flex flex-col gap-3 md:gap-4 shrink-0">
                        {activeProject.subVideos!.map((sub, idx) => {
                          const ytId =
                            sub.type !== "instagram" && sub.type !== "drive"
                              ? getYoutubeId(sub.link)
                              : null;
                          const thumbUrl =
                            sub.thumbnailUrl ||
                            (ytId
                              ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
                              : "");

                          return (
                            <button
                              key={idx}
                              onClick={() => setModalSubIdx(idx)}
                              className={`w-14 h-24 md:w-16 md:h-28 lg:w-20 lg:h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-xl relative group ${
                                idx === modalSubIdx
                                  ? "border-violet-500 scale-110 z-10"
                                  : "border-white/10 hover:border-violet-400 hover:scale-105"
                              }`}
                              title={sub.title}
                            >
                              {thumbUrl ? (
                                <img
                                  src={thumbUrl}
                                  alt={sub.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-[10px] text-white">
                                  V{idx + 1}
                                </div>
                              )}
                              {idx === modalSubIdx && (
                                <div className="absolute inset-0 border-[3px] border-violet-500 rounded-xl pointer-events-none"></div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Right Panel: Project Details & Metadata Info Sidebar */}
                  <div className="col-span-1 lg:col-span-6 2xl:col-span-5 flex flex-col items-start justify-center text-left py-2 h-[500px] overflow-y-auto w-full space-y-10">
                    {/* Group 1: Title and Tags */}
                    <div className="flex flex-col items-start w-full gap-3">
                      {/* Title Block */}
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-[9px] sm:text-[10px] font-bold text-violet-400 uppercase tracking-[0.2em] block">
                          Project {currentIndex + 1} of {projects.length}
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.05]">
                          {currentModalTitle}
                        </h3>
                        {variationTitle && (
                          <span className="text-lg md:text-xl font-bold text-violet-300 mt-1">
                            {variationTitle}
                          </span>
                        )}
                      </div>

                      {/* Metadata Tags List */}
                      <div className="flex flex-wrap gap-2 mt-2 mb-1">
                        {currentModalTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="tag"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Group 2: Description Paragraph */}
                    <div className="flex flex-col items-start w-full gap-2">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block font-display">
                        Project Overview
                      </span>
                      <p className="text-[13px] md:text-sm text-slate-300 leading-relaxed font-sans max-w-[480px]">
                        {currentModalDesc}
                      </p>
                    </div>

                    {/* Group 4: Timeline Versions Switcher Stack (Playlist Style) */}
                    {hasModalSubs && !isShortForm && (
                      <div className="flex flex-col items-start w-full gap-3">
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block font-display">
                          Hook Editions & Variations
                        </span>
                        <div className="flex flex-col gap-1.5 w-full max-h-[140px] overflow-y-auto pr-1">
                          {activeProject.subVideos!.map((sub, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className={`w-full text-left p-2.5 rounded-xl border-none transition-all duration-200 flex items-center justify-between group ${
                                idx === modalSubIdx
                                  ? "bg-white/20 text-white font-semibold"
                                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                              }`}
                              onClick={() => setModalSubIdx(idx)}
                            >
                              <div className="flex items-center gap-2">
                                <span className="truncate max-w-[200px] text-[13px]">
                                  {sub.title || `Version ${idx + 1}`}
                                </span>
                              </div>
                              {idx === modalSubIdx && (
                                <span className="text-[9px] uppercase tracking-wider font-bold text-white bg-black/40 px-1.5 py-0.5 rounded-sm shrink-0">
                                  Playing
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Group 5: Watch CTA Action Button */}
                    <div className="w-full flex justify-start pt-2">
                      {currentModalType === "instagram" ? (
                        <a
                          href={currentModalLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold text-xs uppercase tracking-wider text-white gap-2 transition-all shadow-lg active:scale-95 focus:outline-none"
                        >
                          <Instagram className="w-4 h-4 text-white" /> Open
                          Instagram Reel{" "}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : currentModalType === "drive" ? (
                        <a
                          href={currentModalLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-bold text-xs uppercase tracking-wider text-white gap-2 transition-all shadow-lg active:scale-95 focus:outline-none"
                        >
                          <Play className="w-4 h-4 fill-white text-white" />{" "}
                          View Google Drive Master{" "}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <a
                          href={getYoutubeWatchUrl(currentModalLink)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 font-bold text-xs uppercase tracking-wider text-white gap-2 transition-all shadow-lg active:scale-95 focus:outline-none"
                        >
                          <Youtube className="w-5 h-5 text-white" /> Watch on
                          YouTube{" "}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Project Navigation Counter (Mobile Fallbacks) */}
                    <div className="pt-4 w-full max-w-md flex md:hidden justify-between items-center text-slate-400">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevProject();
                        }}
                        disabled={!hasPrev}
                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${hasPrev ? "hover:text-white cursor-pointer" : "opacity-30 cursor-not-allowed"}`}
                      >
                        <ChevronLeft className="w-4 h-4" /> Prev
                      </button>
                      <span className="text-[10px] font-mono opacity-50">
                        {currentIndex + 1} / {projects.length}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextProject();
                        }}
                        disabled={!hasNext}
                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${hasNext ? "hover:text-white cursor-pointer" : "opacity-30 cursor-not-allowed"}`}
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
    </>
  );
}
