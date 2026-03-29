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
  };
  gridImages?: string[];
  media?: { type: 'image' | 'video'; src: string; label?: string }[];
  process: string[];
  outcome: string;
  achievements: string[];
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
  aspectRatio?: '9/16' | '16/9';
}
