export interface Project {
  id: string | number;
  number?: string;
  title: string;
  category: string;
  shortDescription?: string;
  image?: string;
  slideshowImages?: string[];
  thumbnail?: string;
  heroImage?: string;
  overview: {
    description: string;
    objective: string;
    challenges: string;
    role?: string;
    timeline?: string;
    tools?: string[];
  };
  problemStatement?: string;
  userResearch?: {
    description: string;
    insights: string[];
  };
  userFlow?: {
    description: string;
    image: string;
  };
  wireframes?: {
    description: string;
    images: string[];
  };
  uiDesign?: {
    description: string;
    images: string[];
  };
  designDecisions?: {
    title: string;
    description: string;
  }[];
  prototype?: {
    description: string;
    videoUrl?: string;
    embedUrl?: string;
  };
  gridImages?: string[];
  media?: { type: 'image' | 'video'; src: string; label?: string }[];
  process: string[];
  outcome: string;
  achievements: string[];
  learnings?: string[];
}

export interface PhotographyItem {
  id: string;
  url: string;
  title: string;
  category: string;
  caption?: string;
}

export interface MotionItem {
  id: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
  category: string;
  description?: string;
  aspectRatio?: '9/16' | '16/9';
}
