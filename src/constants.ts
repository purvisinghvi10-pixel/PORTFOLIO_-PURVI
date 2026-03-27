import { Project, PhotographyItem, MotionItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'silver-leaf-identity',
    number: '01',
    title: 'Silver Leaf Identity',
    category: 'Branding',
    thumbnail: 'https://picsum.photos/seed/silverleaf/1200/1600',
    heroImage: 'https://picsum.photos/seed/silverleaf-hero/1920/1080',
    overview: {
      description: 'Silver Leaf is a premium lifestyle brand focused on sustainable luxury. The identity was designed to reflect elegance and environmental consciousness.',
      objective: 'Create a visual identity that appeals to high-end consumers while maintaining a minimal and organic feel.',
      challenges: 'Balancing the "luxury" aspect with "sustainability" without falling into clichés like green leaves or overly ornate gold foils.'
    },
    gridImages: [
      'https://picsum.photos/seed/silver-grid-1/800/800',
      'https://picsum.photos/seed/silver-grid-2/800/800'
    ],
    process: {
      research: 'Studied luxury sustainable brands and consumer psychology regarding "quiet luxury".',
      concept: 'Developed a concept around the "Silver Leaf" – a symbol of resilience and timeless value.',
      wireframing: 'Explored various logo marks and typography pairings.',
      visualDesign: 'Selected a palette of muted silvers, deep charcoals, and off-whites.',
      development: 'Created a comprehensive brand guideline and digital assets.'
    },
    outcome: 'A cohesive brand identity that increased perceived value by 40% and successfully launched in three major cities.',
    achievements: [
      'Improved visual consistency across all touchpoints',
      'Successful launch in premium retail spaces',
      'Positive feedback from target demographic'
    ]
  },
  {
    id: 'wedding-invitation-design',
    number: '02',
    title: 'Wedding Invitation Design',
    category: 'Print + Branding',
    thumbnail: 'https://picsum.photos/seed/wedding/1200/1600',
    heroImage: 'https://picsum.photos/seed/wedding-hero/1920/1080',
    overview: {
      description: 'A bespoke wedding invitation suite for a high-profile destination wedding in Tuscany. The design focused on tactile experiences and storytelling.',
      objective: 'Design a multi-piece invitation set that conveys the romantic and exclusive nature of the event.',
      challenges: 'Coordinating complex print techniques including letterpress, foil stamping, and custom wax seals.'
    },
    gridImages: [
      'https://picsum.photos/seed/wedding-grid-1/800/800',
      'https://picsum.photos/seed/wedding-grid-2/800/800'
    ],
    process: {
      research: 'Explored traditional Italian calligraphy and botanical illustrations of the Tuscany region.',
      concept: 'The "Enchanted Garden" – using layered vellum and floral motifs.',
      wireframing: 'Mapped out the information hierarchy for the main invite, RSVP, and details card.',
      visualDesign: 'Used handmade paper, sage green ink, and champagne gold foil.',
      development: 'Managed the production process with specialized print houses.'
    },
    outcome: 'A stunning invitation suite that set the tone for the wedding and became a keepsake for the guests.',
    achievements: [
      'High guest engagement and early RSVP returns',
      'Featured in a leading wedding design blog',
      'Seamless integration of print and digital RSVP systems'
    ]
  },
  {
    id: 'fhrai-event-visuals',
    number: '03',
    title: 'FHRAI Event Visuals',
    category: 'Graphic Design',
    thumbnail: 'https://picsum.photos/seed/fhrai/1200/1600',
    heroImage: 'https://picsum.photos/seed/fhrai-hero/1920/1080',
    overview: {
      description: 'Comprehensive visual design for the FHRAI Annual Convention, one of the largest hospitality events in the country.',
      objective: 'Create a dynamic and professional visual language that works across large-scale environmental graphics and digital screens.',
      challenges: 'Maintaining brand consistency across a vast array of physical and digital formats under tight deadlines.'
    },
    gridImages: [
      'https://picsum.photos/seed/fhrai-grid-1/800/800',
      'https://picsum.photos/seed/fhrai-grid-2/800/800'
    ],
    process: {
      research: 'Analyzed previous convention visuals and current trends in hospitality branding.',
      concept: 'The "Future of Hospitality" – using geometric patterns and bold typography.',
      wireframing: 'Designed layouts for stage backdrops, directional signage, and social media templates.',
      visualDesign: 'A vibrant palette of deep blues and energetic oranges to signify innovation.',
      development: 'Produced over 200 individual assets for the 3-day event.'
    },
    outcome: 'A highly successful event with a unified visual identity that enhanced the attendee experience and sponsor visibility.',
    achievements: [
      'Zero production errors across all 200+ assets',
      'Enhanced sponsor recognition through strategic placement',
      'Modernized the convention\'s visual legacy'
    ]
  },
  {
    id: 'ui-ux-case-study',
    number: '04',
    title: 'UI/UX Case Study',
    category: 'App Design',
    thumbnail: 'https://picsum.photos/seed/uiux/1200/1600',
    heroImage: 'https://picsum.photos/seed/uiux-hero/1920/1080',
    overview: {
      description: 'A comprehensive UI/UX redesign for a fitness tracking app aimed at making wellness more accessible and less intimidating.',
      objective: 'Simplify the user journey and create a more motivating and inclusive interface.',
      challenges: 'Reducing cognitive load while displaying complex health data and workout metrics.'
    },
    gridImages: [
      'https://picsum.photos/seed/uiux-grid-1/800/800',
      'https://picsum.photos/seed/uiux-grid-2/800/800'
    ],
    process: {
      research: 'Conducted user interviews and competitive analysis of existing fitness apps.',
      concept: 'The "Gentle Guide" – using soft gradients and encouraging micro-copy.',
      wireframing: 'Iterated through low-fidelity sketches to high-fidelity interactive prototypes.',
      visualDesign: 'Focused on accessibility with high-contrast text and a calming color palette.',
      development: 'Created a detailed design system for handoff to the engineering team.'
    },
    outcome: 'A 25% increase in daily active users and a significant improvement in user satisfaction scores during beta testing.',
    achievements: [
      'Improved user engagement through gamification',
      'Better visual consistency across 50+ screens',
      'Fully responsive design across mobile and tablet'
    ]
  }
];

export const PHOTOGRAPHY: PhotographyItem[] = [
  {
    id: 'photo-1',
    url: 'https://picsum.photos/seed/photo1/1200/1600',
    title: 'Urban Solitude',
    category: 'Street'
  },
  {
    id: 'photo-2',
    url: 'https://picsum.photos/seed/photo2/1600/1200',
    title: 'Golden Hour',
    category: 'Nature'
  },
  {
    id: 'photo-3',
    url: 'https://picsum.photos/seed/photo3/1200/1600',
    title: 'Minimalist Architecture',
    category: 'Architecture'
  },
  {
    id: 'photo-4',
    url: 'https://picsum.photos/seed/photo4/1600/1200',
    title: 'The Silent Forest',
    category: 'Landscape'
  },
  {
    id: 'photo-5',
    url: 'https://picsum.photos/seed/photo5/1200/1600',
    title: 'Abstract Reflections',
    category: 'Abstract'
  },
  {
    id: 'photo-6',
    url: 'https://picsum.photos/seed/photo6/1600/1200',
    title: 'Portrait of a Stranger',
    category: 'Portrait'
  }
];

export const MOTION: MotionItem[] = [
  {
    id: 'motion-1',
    thumbnail: 'https://picsum.photos/seed/motion1/1200/800',
    videoUrl: 'https://video.wixstatic.com/video/11062b_1639f75869404c009951307b2786a345/1080p/mp4/file.mp4',
    title: 'Brand Story Reel',
    category: 'Motion Graphics'
  },
  {
    id: 'motion-2',
    thumbnail: 'https://picsum.photos/seed/motion2/1200/800',
    videoUrl: 'https://video.wixstatic.com/video/11062b_1639f75869404c009951307b2786a345/1080p/mp4/file.mp4',
    title: 'Product Launch Teaser',
    category: 'Commercial'
  },
  {
    id: 'motion-3',
    thumbnail: 'https://picsum.photos/seed/motion3/1200/800',
    videoUrl: 'https://video.wixstatic.com/video/11062b_1639f75869404c009951307b2786a345/1080p/mp4/file.mp4',
    title: 'Abstract Motion Study',
    category: 'Experimental'
  }
];
