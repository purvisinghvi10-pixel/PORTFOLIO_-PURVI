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
    responsibilities?: string[];
    timeline?: string;
    duration?: string;
    tools?: string[];
  };
  problemDefinition?: string;
  problemStatement?: string;
  existingExperienceAnalysis?: {
    description: string;
    images: string[];
  };
  uxStrategy?: {
    description: string;
    points: string[];
  };
  userResearch?: {
    description: string;
    insights: string[];
  };
  painPoints?: string[];
  userPersona?: {
    name: string;
    basicInfo?: string;
    about?: string;
    goal: string;
    needs?: string[];
    painPoints: string[];
    frustrations?: string[];
    motivations?: string[];
    deviceUsage?: string[];
    image?: string;
  };
  journeyMapping?: {
    description: string;
    image: string;
  };
  appMap?: {
    description: string;
    image: string;
  };
  userFlow?: {
    description: string;
    image: string;
  };
  wireframes?: {
    description: string;
    images?: string[];
    sections?: { title: string; description: string; images: string[] }[];
  };
  usabilityThinking?: string;
  refiningDesign?: {
    description: string;
    images: string[];
  };
  designSystem?: {
    colors: { hex: string; label: string }[];
    typography: {
      type: string;
      fontFamily: string;
      usage: string;
      hierarchy: {
        level: string;
        size: string;
        weight: string;
      }[];
    }[];
    components: string[];
  };
  uiDesign?: {
    description: string;
    images: string[];
  };
  highFidelityUI?: {
    description: string;
    images: string[];
  };
  finalUI?: {
    exploration?: { description: string; images: string[] };
    coreExperience?: { description: string; images: string[] };
    keyActions?: { description: string; images: string[] };
  };
  interactionThinking?: string;
  mockups?: {
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
  imageShowcase?: {
    fullWidth?: string;
    grid?: string[];
  };
  showcaseVideo?: string;
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
