export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  thumbnail: string;
  heroImage: string;
  overview: {
    description: string;
    objective: string;
    challenges: string;
  };
  gridImages: string[];
  process: {
    research: string;
    concept: string;
    wireframing: string;
    visualDesign: string;
    development: string;
  };
  outcome: string;
  achievements: string[];
}

export interface PhotographyItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface MotionItem {
  id: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
  category: string;
  aspectRatio?: '9/16' | '16/9';
}
