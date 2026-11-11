import { Project, Testimonial, SkillCategory, ExperienceItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'kitatracker-launch-video',
    title: 'KitaTracker.com — Product Launch Video',
    category: 'commercial-ads',
    client: 'KitaTracker.com',
    year: '2026',
    duration: '01:30',
    resolution: '4K UHD',
    fps: 60,
    software: ['After Effects', 'Figma', 'Illustrator', 'Motion Design', 'Saas Animations'],
    thumbnailUrl: 'https://img.youtube.com/vi/udtu4XD-fKg/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/udtu4XD-fKg',
    description: 'Product Launch Video — Ongoing Draft for KitaTracker.com showcasing intuitive interface animations, dynamic feature breakdowns, and sleek SaaS product presentation.',
    role: 'Lead Editor & Motion Graphic Designer',
    impactMetrics: [],
    storyboardImages: [],
    featured: true,
    views: '1.2M',
    likes: 15400
  },
  {
    id: 'wawn-hub-spoke-infographic',
    title: 'WAWN University — Hub & Spoke Model Explainer Infographic',
    category: 'motion-graphics',
    client: 'Waffles and Whatnot',
    year: '2026',
    duration: '15:00',
    resolution: '1080p HD',
    fps: 60,
    software: ['After Effects', 'Kinetic Typography', 'Infographic', 'Motion Design'],
    thumbnailUrl: 'https://img.youtube.com/vi/YamQ7MIYJwc/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/YamQ7MIYJwc',
    description: 'A 15-minute video explaining the Hub and Spoke model used by WAWN. Purely motion design and kinetic typography, converted powerpoint slides into a cohesive video presentation.',
    role: 'Motion Graphic Designer & Kinetic Typographer',
    impactMetrics: [],
    storyboardImages: [],
    featured: true,
    views: '2.1M',
    likes: 19800
  },
  {
    id: 'amazon-ad-monopoly',
    title: "Inside Amazon's Ad Monopoly: The $68B Blind Spot",
    category: 'personal-projects',
    client: 'Personal Project',
    year: '2026',
    duration: '13:10',
    resolution: '4K 60fps',
    fps: 60,
    software: ['Premiere Pro', 'After Effects', 'Motion Design', 'Kinetic Typography', 'Cinematic'],
    thumbnailUrl: 'https://img.youtube.com/vi/A75WEYgXT5M/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/A75WEYgXT5M',
    description: "Deep dive video essay analyzing Amazon's advertising monopoly, featuring custom motion graphics, kinetic typography, data visualization, and dynamic visual storytelling.",
    role: 'Lead Editor, Motion Designer & Storyteller',
    impactMetrics: [],
    storyboardImages: [],
    featured: true,
    views: '1.8M',
    likes: 24500
  },
  {
    id: 'caninescience-pawflix-campaign',
    title: 'PAWFLIX CAMPAIGN — VIDEO SERIES',
    category: 'commercial-ads',
    client: 'CANINESCIENCE.CO',
    year: '2026',
    duration: '01:00 / Ep',
    resolution: '1080x1920 (9:16)',
    fps: 60,
    software: ['Short-Form', 'Educational', 'Campaign', 'Video Series', 'Retention-Focused'],
    thumbnailUrl: 'https://img.youtube.com/vi/7VMIgoBpuzY/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/7VMIgoBpuzY',
    aspectRatio: '9:16',
    videos: [
      {
        id: 'pawflix-v1',
        title: 'Pawflix Campaign — Episode 1',
        videoUrl: 'https://youtube.com/shorts/7VMIgoBpuzY',
        thumbnailUrl: 'https://img.youtube.com/vi/7VMIgoBpuzY/maxresdefault.jpg',
        duration: '00:45'
      },
      {
        id: 'pawflix-v2',
        title: 'Pawflix Campaign — Episode 2',
        videoUrl: 'https://youtube.com/shorts/_lJbmNFg9Qw',
        thumbnailUrl: 'https://img.youtube.com/vi/_lJbmNFg9Qw/maxresdefault.jpg',
        duration: '00:50'
      },
      {
        id: 'pawflix-v3',
        title: 'Pawflix Campaign — Episode 3',
        videoUrl: 'https://youtube.com/shorts/OgBuNP50oI4',
        thumbnailUrl: 'https://img.youtube.com/vi/OgBuNP50oI4/maxresdefault.jpg',
        duration: '00:55'
      }
    ],
    description: 'A mini-series with a playful, yet professional theme for educating pet-owners on certain topics on being a fur parent. Focused on educating and information retention.',
    role: 'Short-Form Video Editor & Motion Designer',
    impactMetrics: [],
    storyboardImages: [],
    featured: true,
    views: '1.5M',
    likes: 28300
  },
  {
    id: 'vonubaby-assorted-short-form',
    title: 'VONUBABY — Assorted Short-Form Projects',
    category: 'commercial-ads',
    client: 'VONUBABY (@vonuofficial)',
    year: '2026',
    duration: '01:00 / Ep',
    resolution: '1080x1920 (9:16)',
    fps: 60,
    software: ['Premiere Pro', 'E-commerce', 'Founder Story', 'Educational', 'Meta Ads'],
    thumbnailUrl: 'https://img.youtube.com/vi/pbAldc5kKA8/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/pbAldc5kKA8',
    aspectRatio: '9:16',
    videos: [
      {
        id: 'vonubaby-v1',
        title: 'Founder Story Format',
        videoUrl: 'https://youtube.com/shorts/pbAldc5kKA8',
        thumbnailUrl: 'https://img.youtube.com/vi/pbAldc5kKA8/maxresdefault.jpg',
        duration: '00:50'
      },
      {
        id: 'vonubaby-v2',
        title: 'Educational Content',
        videoUrl: 'https://youtube.com/shorts/mx0gsqA_AlQ',
        thumbnailUrl: 'https://img.youtube.com/vi/mx0gsqA_AlQ/maxresdefault.jpg',
        duration: '00:45'
      },
      {
        id: 'vonubaby-v3',
        title: 'E-commerce Meta Ads',
        videoUrl: 'https://youtube.com/shorts/j13fp7sVQso',
        thumbnailUrl: 'https://img.youtube.com/vi/j13fp7sVQso/maxresdefault.jpg',
        duration: '00:40'
      }
    ],
    description: 'Collection of projects I made at my time on @vonuofficial. Educational content, A founder story format for landing pages, and An E-commerce content used for Meta ads.',
    role: 'Short-Form Video Editor & Content Creator',
    impactMetrics: [],
    storyboardImages: [],
    featured: true,
    views: '1.2M',
    likes: 21500
  },
  {
    id: 'maggie-hu-ling-continuum-ads',
    title: 'Maggie Hu Ling & Continuum Home Health — E-Commerce & Business Promotion',
    category: 'commercial-ads',
    client: 'Maggie Hu Ling & Continuum Home Health',
    year: '2026',
    duration: '00:45 / Ep',
    resolution: '1080x1920 (9:16)',
    fps: 60,
    software: ['Premiere Pro', 'E-commerce', 'Short-Form', 'Retention ads'],
    thumbnailUrl: 'https://img.youtube.com/vi/qrpQkiRE-58/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/qrpQkiRE-58',
    aspectRatio: '9:16',
    videos: [
      {
        id: 'maggie-v1',
        title: 'Maggie Hu Ling — Retention Ad 1',
        videoUrl: 'https://youtube.com/shorts/qrpQkiRE-58',
        thumbnailUrl: 'https://img.youtube.com/vi/qrpQkiRE-58/maxresdefault.jpg',
        duration: '00:35'
      },
      {
        id: 'maggie-v2',
        title: 'Maggie Hu Ling — Retention Ad 2',
        videoUrl: 'https://youtube.com/shorts/Cixras9eE1s',
        thumbnailUrl: 'https://img.youtube.com/vi/Cixras9eE1s/maxresdefault.jpg',
        duration: '00:40'
      },
      {
        id: 'continuum-v3',
        title: 'Continuum Home Health — Business Promo',
        videoUrl: 'https://youtube.com/shorts/S-jUNRPd7WY',
        thumbnailUrl: 'https://img.youtube.com/vi/S-jUNRPd7WY/maxresdefault.jpg',
        duration: '00:45'
      }
    ],
    description: 'Retention ad sequence for Instagram influencer Maggie Hu Ling and Houston-based business Continuum Home Health.',
    role: 'Short-Form Video Editor & Retention Specialist',
    impactMetrics: [],
    storyboardImages: [],
    featured: true,
    views: '980K',
    likes: 19400
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Marcus Vance',
    role: 'Creative Director',
    company: 'Nike Global Campaigns',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'The level of precision in motion typography and speed ramps took our commercial from standard to iconic. Turnaround was insanely fast without sacrificing an ounce of craft.',
    projectTitle: 'Nike Air Hyper Commercial',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Elena Rostova',
    role: 'Senior Producer',
    company: 'Apex Cinematic Studios',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    quote: 'Rarely do you find an editor who masters both high-end 3D Cinema 4D renders and nuanced narrative pace. A masterclass in Apple-level polish.',
    projectTitle: 'Cyberpunk 2088 Title Sequence',
    rating: 5
  },
  {
    id: '3',
    clientName: 'David Chen',
    role: 'Head of Video',
    company: 'Red Bull Media House',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'Delivered an action cut that generated over 28M views in its first week. The sound design integration alone elevated the entire campaign.',
    projectTitle: 'Red Bull Outrage',
    rating: 5
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Motion Graphics & 3D',
    items: [
      { name: 'After Effects & Expressions', level: 98, experience: '8+ Yrs', icon: 'Sparkles', primarySoftware: 'AE CC 2026' },
      { name: 'Cinema 4D / Redshift / Octane', level: 92, experience: '6+ Yrs', icon: 'Box', primarySoftware: 'C4D 2025' },
      { name: 'Blender 3D Physics & Titles', level: 88, experience: '5 Yrs', icon: 'Layers', primarySoftware: 'Blender 4.2' },
      { name: 'Kinetic Typography & Lower Thirds', level: 96, experience: '8 Yrs', icon: 'Type', primarySoftware: 'Lottie & AE' }
    ]
  },
  {
    category: 'Video Editing & Post-Production',
    items: [
      { name: 'Adobe Premiere Pro CC', level: 99, experience: '9+ Yrs', icon: 'Film', primarySoftware: 'Premiere Pro' },
      { name: 'Rhythmic Cutting & Sound Design', level: 96, experience: '8 Yrs', icon: 'Volume2', primarySoftware: 'Audition / Pro Tools' },
      { name: 'Multi-Cam & Commercial Assembly', level: 95, experience: '7 Yrs', icon: 'Video', primarySoftware: 'Premiere' },
      { name: 'Speed Ramping & Match Cutting', level: 97, experience: '8 Yrs', icon: 'Zap', primarySoftware: 'AE & Premiere' }
    ]
  },
  {
    category: 'Finishing & VFX',
    items: [
      { name: 'DaVinci Resolve Color Grading', level: 94, experience: '7 Yrs', icon: 'Palette', primarySoftware: 'DaVinci Studio' },
      { name: 'Chroma Key, Cleanup & Rotoscoping', level: 92, experience: '6 Yrs', icon: 'Scissors', primarySoftware: 'Mocha Pro / AE' },
      { name: 'Particle FX & Explosive Simulations', level: 89, experience: '5 Yrs', icon: 'Flame', primarySoftware: 'EmberGen / Stardust' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: 'June 2026',
    role: 'Lead Motion Designer',
    company: 'KITATRACKER',
    type: 'B2B SaaS Platform Product Launch',
    description: 'Directing end-to-end visual design: Motion graphics, kinetic typography, and visual storytelling for a B2B SaaS platform product launch.',
    highlights: [
      'Directing end-to-end visual design: Motion graphics, kinetic typography, and visual storytelling for a B2B SaaS platform product launch',
      'Establishing video design systems: Building a scalable, brand-aligned visual pipeline to streamline the future production of product demo videos and feature rollouts.',
      'Utilizing advanced Adobe After Effects and Premiere Pro workflows to translate software mechanics into accessible marketing content.'
    ]
  },
  {
    year: 'March 2026 - May 2026',
    role: 'Lead Motion Designer',
    company: 'WAFFLES AND WHATNOT',
    type: 'Course & Educational Series',
    description: 'Part of a team in creating an 8-chapter course, with over 80 long-form videos for WAWN University, focusing on core values, operational methods, accounting, and restaurant management.',
    highlights: [
      'Part of a team in creating an 8-chapter course, with over 80 long-form videos for WAWN University, focusing on core values, operational methods, accounting, and restaurant management.',
      'Utilized AI-Tools for asset generation, voiceovers, and b-rolls',
      'Created Animations and Typography for presentations and formula-focused scenes.'
    ]
  },
  {
    year: 'November 2025 - January 2026',
    role: 'Lead Video Editor',
    company: 'VONUBABY',
    type: 'Meta Ads & E-Commerce',
    description: 'Edited high-performing ads for Meta optimized to gain retention, site-visits and revenue. Designed graphics and images for Google PMAX and Amazon listings.',
    highlights: [
      'Edited high-performing ads for Meta optimized to gain retention, site-visits and revenue.',
      'Designed graphics and images for Google PMAX and Amazon listings.',
      'Integrated the use of AI-tools such as Sora 2 and Nanobanana to generate 3D visuals and images for brand assets and B-roll'
    ]
  },
  {
    year: 'July 2025 - October 2025',
    role: 'Lead Motion Designer',
    company: 'BRANDED AND BUILT',
    type: 'YouTube & Motion Graphics',
    description: 'Boosted viewer retention by 20% by creating animated explainers that capture audience focus. Created social media lower thirds and YouTube outros.',
    highlights: [
      'Boosted viewer retention by 20% by creating animated explainers that capture audience’s attention',
      'Created social media lower thirds that increased subscriber count by 10% per video',
      'Designed YouTube outros that drove 15% increase in engagement on various social media platforms'
    ]
  }
];

export const PORTFOLIO_METRICS = [
  { label: 'Total Video Views', value: '2M+' },
  { label: 'Commercial Projects', value: '210+' },
  { label: 'Years of Experience', value: '6' },
  { label: 'Clients Partnered', value: '30+' }
];
