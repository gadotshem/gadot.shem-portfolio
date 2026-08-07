export type Category = 
  | 'all'
  | 'personal-projects'
  | 'motion-graphics'
  | 'commercial-ads'
  | '3d-kinetic'
  | 'vfx-color'
  | 'music-videos';

export interface Project {
  id: string;
  title: string;
  category: Category;
  client: string;
  year: string;
  duration: string;
  resolution: string;
  fps: number;
  software: string[];
  thumbnailUrl: string;
  videoUrl: string; // MP4 stream URL
  vfxBeforeUrl?: string; // For before/after color grading/VFX comparison
  vfxAfterUrl?: string;
  description: string;
  role: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  aspectRatio?: '9:16' | '16:9';
  videos?: {
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl?: string;
    duration?: string;
  }[];
  storyboardImages: string[];
  featured?: boolean;
  views: string;
  likes: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  projectTitle: string;
  rating: number;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: number; // 0-100
    experience: string;
    icon: string;
    primarySoftware: string;
  }[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface BriefFormData {
  projectType: string;
  deliverables: string[];
  budgetRange: string;
  turnaround: string;
  targetPlatform: string[];
  clientName: string;
  clientEmail: string;
  notes: string;
}
