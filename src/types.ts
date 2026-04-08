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
  context?: string;
  contextImage?: string;
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
    profile: string;
    goals: string[];
    needs: string[];
    painPoints: string[];
    behavior: string[];
    image?: string;
  };
  journeyMapping?: {
    description: string;
    image?: string;
    steps?: {
      stage: string;
      actions: string[];
      touchpoints?: string[];
      thoughts?: string;
      emotion?: 'positive' | 'neutral' | 'negative';
    }[];
  };
  appMap?: {
    description: string;
    image?: string;
    nodes?: {
      id: string;
      label: string;
      children?: string[];
      type?: 'page' | 'feature' | 'action' | 'root' | 'category';
    }[];
  };
  userFlow?: {
    description: string;
    image?: string;
    steps?: {
      id: string;
      label: string;
      type: 'start' | 'process' | 'decision' | 'end';
      next?: string | { yes: string; no: string };
    }[];
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
    colors?: { hex: string; label: string }[];
    typography?: {
      type: string;
      fontFamily: string;
      usage: string;
      hierarchy: {
        level: string;
        size: string;
        weight: string;
      }[];
    }[];
    components?: string[];
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
    fullWidth?: string | { src: string; label?: string };
    grid?: (string | { src: string; label?: string })[];
  };
  showcaseVideo?: string;
  media?: { type: 'image' | 'video'; src: string; label?: string }[];
  process: string[];
  outcome?: string;
  achievements?: string[];
  learnings?: string[];
  customSections?: {
    id: string;
    title: string;
    label: string;
    description?: string;
    content?: string;
    image?: string;
    images?: string[];
    points?: string[];
    insights?: string[];
    decisions?: { title: string; description: string }[];
    labeledImages?: { src: string; label: string }[];
    fullWidth?: boolean;
    research?: {
      title: string;
      content: {
        heading: string;
        points: string[];
      }[];
    }[];
  }[];
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
