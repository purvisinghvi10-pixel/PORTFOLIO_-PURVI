import { Project, PhotographyItem, MotionItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    number: '01',
    title: "Wedding Experience Interface",
    category: "UI/UX Design",
    shortDescription: "UI/UX Design for Weddings by Event Crafters",
    image: "https://i.ibb.co/pBRMp7yY/MOCK-UP.png",
    thumbnail: "https://i.ibb.co/pBRMp7yY/MOCK-UP.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/pBRMp7yY/MOCK-UP.png", label: "Desktop Interface" },
      { type: 'video', src: "https://video.wixstatic.com/video/bc81e6_a8de38de8a3347fd844ec24140394a3d/1080p/mp4/file.mp4", label: "UI Interaction" },
      { type: 'image', src: "https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png", label: "Low Fertility" }
    ],
    overview: {
      objective: "Design a clean and structured web experience for Weddings by Event Crafters that showcases services while maintaining an elegant and premium feel.",
      challenges: "Organizing diverse wedding services into a clear, intuitive layout while balancing visual richness with usability.",
      description: "This project involved creating low-fidelity wireframes and layout structures for the Weddings by Event Crafters website. The focus was on simplifying content, improving navigation, and delivering a seamless user experience."
    },
    process: ["User Research", "Wireframing", "Layout Structuring", "Visual Design", "Final Interface"],
    outcome: "A minimal and intuitive interface that enhances content clarity and delivers a smooth browsing experience aligned with the brand’s premium positioning.",
    achievements: [
      "Developed structured low-fidelity wireframes to define user flow and layout.",
      "Improved content organization for better readability and navigation.",
      "Created a consistent and refined interface for the wedding platform."
    ]
  },
  {
    id: '02',
    number: '02',
    title: "CareHub",
    category: "UI/UX Design",
    shortDescription: "Animal Care & Lost Pet Assistance Platform",
    image: "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png",
    thumbnail: "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png", label: "App Interface" },
      { type: 'image', src: "https://picsum.photos/seed/pet-1/1920/1080", label: "User Experience" },
      { type: 'image', src: "https://picsum.photos/seed/pet-2/1920/1080", label: "Interface Design" }
    ],
    overview: {
      objective: "To design an intuitive platform that helps users manage pet care while also enabling quick reporting and tracking of lost and found pets.",
      challenges: "Simplifying complex interactions like reporting, searching, and contacting while ensuring emotional sensitivity for users dealing with lost pets.",
      description: "CareHub is designed as a unified solution for pet owners to manage care, find nearby services, and respond quickly in situations like lost pets. The focus was on creating a seamless, user-friendly experience that balances functionality with empathy."
    },
    process: ["User Research", "User Flow Mapping", "Wireframing", "UI Design", "Prototyping"],
    outcome: "A clean and accessible interface that enables users to quickly report, search, and connect—making pet care and recovery faster and more efficient.",
    achievements: [
      "Simplified reporting and discovery flow for lost & found pets",
      "Improved accessibility and clarity across user journeys",
      "Designed a scalable system for future feature expansion"
    ]
  },
  {
    id: '03',
    number: '03',
    title: "Silver Leaf Identity",
    category: "Branding",
    shortDescription: "Luxury silver jewelry branding",
    image: "https://i.ibb.co/qYT6TVKn/Artboard-2-4x.png",
    thumbnail: "https://i.ibb.co/qYT6TVKn/Artboard-2-4x.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/qYT6TVKn/Artboard-2-4x.png", label: "Brand Identity" },
      { type: 'video', src: "https://video.wixstatic.com/video/bc81e6_788e222cc62e4a85936d4da9b1c1f714/1080p/mp4/file.mp4", label: "Logo Animation" },
      { type: 'image', src: "https://i.ibb.co/wrLZ0BG8/logo.png", label: "Logo Design ideation" },
      { type: 'image', src: "https://i.ibb.co/v44x0J4t/10pcs-Portable-Frosted-Zipper-Closure-Jewel.png", label: "Packaging" },
      { type: 'image', src: "https://i.ibb.co/0p3XbKHD/Burlap-Bag-Mockup.png", label: "Packaging" },
      { type: 'image', src: "https://i.ibb.co/4Bjb116/0dcc96221124143-67cf465dd1bc5.png", label: "Packaging" }, 
      { type: 'image', src: "https://i.ibb.co/wN0QJ4wv/c23cfd221124143-67cf465dd2226.jpg", label: "Thank You Card" },
      { type: 'image', src: "https://i.ibb.co/ynX1WGXK/fa0b3e221124143-67cf465dd2c8b.png", label: "Visting Card" } ],
    overview: {
      objective: "To create a premium and minimal brand identity that resonates with luxury jewelry enthusiasts.",
      challenges: "Balancing traditional elegance with modern minimalism while maintaining brand recognition.",
      description: "Silver Leaf required a visual language that felt both timeless and contemporary. We focused on clean lines, a sophisticated color palette, and high-end typography to elevate the brand's presence in the market."
    },
    process: ["Research", "Concept Development", "Wireframing", "Visual Design", "Brand Application"],
    outcome: "A refined and cohesive brand identity that elevated Silver Leaf’s visual presence and established it as a minimal, premium jewelry brand across all touchpoints.",
    achievements: [
      "Developed a distinctive and elegant visual system aligned with a minimal luxury aesthetic.",
      "Created consistent branding across logo, packaging, visiting cards, and digital assets.",
      "Designed a smooth logo animation to enhance brand storytelling and digital presence."
    ]
  },
  {
    id: '04',
    number: '04',
    title: "Aalas Ka Pedh",
    category: "Lyric Book Design",
    shortDescription: "Lyric Book Design for The Local Train",
    image: "https://i.ibb.co/RT2r22Wb/Chat-GPT-Image-Feb-21-2026-05-58-55-AM.png",
    thumbnail: "https://i.ibb.co/RT2r22Wb/Chat-GPT-Image-Feb-21-2026-05-58-55-AM.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/RT2r22Wb/Chat-GPT-Image-Feb-21-2026-05-58-55-AM.png", label: "Lyric Book Cover" },
      { type: 'image', src: "https://i.ibb.co/pjn6dPRD/usiness.jpg", label: "From Inspiration to Final Cover" },
      { type: 'image', src: "https://i.ibb.co/jkNCxn9N/usiness-1.jpg", label: "Moodboard" },
      { type: 'image', src: "https://i.ibb.co/4w3zVR7s/Artboard-1-3x-100.jpg", label: "Visual Language" },
      { type: 'image', src: "https://i.ibb.co/yc1pHs8Y/Artboard-2-3x-100.jpg", label: "Moodboard" }
    ],
    overview: {
      objective: "To design a visually immersive lyric book inspired by the mood, themes, and storytelling style of Aalas Ka Pedh.",
      challenges: "Balancing artistic expression with readability while maintaining a strong visual identity that reflects the band’s indie aesthetic.",
      description: "This project focuses on translating music into a visual experience. The design explores textures, typography, and composition to reflect the emotional depth and raw storytelling of The Local Train. The goal was to create a cohesive visual narrative that enhances the lyrical journey."
    },
    process: ["Concept Development", "Visual Exploration", "Typography Design", "Layout & Composition", "Final Production"],
    outcome: "A visually rich lyric book that captures the essence of the album while providing an engaging and immersive reading experience.",
    achievements: [
      "Strong visual storytelling aligned with music",
      "Balanced typography and readability",
      "Cohesive and consistent design language"
    ]
  },
  {
    id: '05',
    number: '05',
    title: "FHRAI Brochure Design",
    category: "Print & Graphic Design",
    shortDescription: "Print & Graphic Design",
    image: "https://i.ibb.co/0jTZLFC2/Free-A4-Brochure-Mockup-6.png",
    thumbnail: "https://i.ibb.co/0jTZLFC2/Free-A4-Brochure-Mockup-6.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/0jTZLFC2/Free-A4-Brochure-Mockup-6.png", label: "Brochure Mockup" },
      { type: 'image', src: "", label: "Design Detail" },
      { type: 'video', src: "https://video.wixstatic.com/video/11062b_1639f75869404c009951307b2786a345/1080p/mp4/file.mp4", label: "Event Motion" }
    ],
    overview: {
      objective: "Design a professional and visually engaging brochure for FHRAI that clearly communicates event information while maintaining a clean and structured layout.",
      challenges: "Presenting detailed content in a readable and visually appealing format while balancing design aesthetics with clarity.",
      description: "This project involved designing a brochure for FHRAI, focusing on layout structure, typography, and visual hierarchy. The goal was to ensure clear communication of information while maintaining a polished and professional look."
    },
    process: ["Content Understanding", "Layout Planning", "Typography Exploration", "Visual Design", "Final Output"],
    outcome: "A clean and well-structured brochure design that improved information clarity and delivered a professional visual presentation.",
    achievements: [
      "Designed a clear and organized layout for effective information flow.",
      "Applied strong typography to enhance readability and hierarchy.",
      "Delivered a polished and professional brochure aligned with the event’s requirements."
    ]
  },
  {
    id: '06',
    number: '06',
    title: "My LEGO Journey",
    category: "3D Pop-Up Storytelling Experience for Kids",
    shortDescription: "Immersive brand storytelling for children",
    image: "https://i.ibb.co/bMmtBQsh/A-5-vertical-1.png",
    thumbnail: "https://i.ibb.co/bMmtBQsh/A-5-vertical-1.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/bMmtBQsh/A-5-vertical-1.png", label: "Story Scene" }
    ],
    overview: {
      objective: "To reimagine LEGO’s brand journey through an immersive storytelling experience designed for children, where the narrative is told from the perspective of becoming a LEGO character.",
      challenges: "Translating a brand story into a playful, engaging format that resonates with kids while maintaining clarity, imagination, and visual storytelling consistency.",
      description: "This project explores LEGO’s brand journey through a unique narrative approach. The concept imagines myself as a LEGO character, guiding children through a playful and imaginative world. Designed as a 3D pop-up style experience, the visuals bring the story to life through depth, movement, and vibrant compositions. The goal was to create an engaging and memorable storytelling experience that aligns with LEGO’s core values of creativity and play."
    },
    process: ["Brand Research", "Concept Development", "Storyboarding", "3D Visual Exploration", "Final Composition & Rendering"],
    outcome: "A fun and immersive 3D storytelling experience that transforms LEGO’s brand journey into an engaging narrative for children.",
    achievements: [
      "Created a character-driven storytelling concept",
      "Translated brand journey into a kid-friendly narrative",
      "Designed a visually engaging 3D pop-up experience"
    ]
  }
];

export const PHOTOGRAPHY: PhotographyItem[] = [
  {
    id: 'photo-1',
    url: 'https://i.ibb.co/Hf3ZHTYs/IMG-3203.jpg',
    title: 'Hands of Craft',
    category: 'Photography',
    caption: 'Hands that shape stories in silence.'
  },
  {
    id: 'photo-2',
    url: 'https://i.ibb.co/bg2MqpBC/IMG-3313.jpg',
    title: 'Quiet Strength',
    category: 'Photography',
    caption: 'Stillness carries its own strength.'
  },
  {
    id: 'photo-3',
    url: 'https://i.ibb.co/Swx96vqW/IMG-2959.jpg',
    title: 'Unspoken Bonds',
    category: 'Photography',
    caption: 'In chaos, we still find comfort in each other.'
  },
  {
    id: 'photo-4',
    url: 'https://i.ibb.co/Gf2TkcGF/IMG-3058.jpg',
    title: 'Veiled Moments',
    category: 'Photography',
    caption: 'Moments seen, yet softly hidden.'
  },
  {
    id: 'photo-5',
    url: 'https://i.ibb.co/1tc5nMdR/purviiiiiiiiiiii.jpg',
    title: 'Effortless Grace',
    category: 'Photography',
    caption: 'Grace lives in the simplest expressions.'
  },
  {
    id: 'photo-6',
    url: 'https://i.ibb.co/RkFDgDsb/iiiii.jpg',
    title: 'Fragments of Life',
    category: 'Photography',
    caption: 'Life, in motion and in fragments.'
  },
  {
    id: 'photo-7',
    url: 'https://i.ibb.co/7JgnTh8M/IMG-3560.jpg',
    title: 'Silent Rituals',
    category: 'Photography',
    caption: 'Even the quiet burns beautifully.'
  }
];

export const MOTION: MotionItem[] = [
  {
    id: 'motion-1',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_31aa0c702855472b8ee9a44691856a57/1080p/mp4/file.mp4',
    title: 'Festive Storytelling Ad',
    category: 'Motion',
    description: 'Cultural narrative motion design'
  },
  {
    id: 'motion-2',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_23d2e37412a7491193b9c804ab4ef91a/1080p/mp4/file.mp4',
    title: 'Product Highlight Animation',
    category: 'Motion',
    description: 'Premium ghee branding visual'
  },
  {
    id: 'motion-3',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_0963dd42115b4f94ad28eca8fdb5ec8a/1080p/mp4/file.mp4',
    title: 'Festive Visual Campaign',
    category: 'Motion',
    description: 'Traditional celebration theme'
  },
  {
    id: 'motion-4',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_89892cdea6444a3abf823e73c6c90378/1080p/mp4/file.mp4',
    title: 'Brand Identity Animation',
    category: 'Motion',
    description: 'Logo reveal & packaging'
  },
  {
    id: 'motion-5',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_39b13e9fab3c4bcbbb5bbcbf30841514/1080p/mp4/file.mp4',
    title: 'Krishna Festival Campaign',
    category: 'Motion',
    description: 'Seasonal marketing visual'
  },
  {
    id: 'motion-6',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_c0b9d61810c044ca864db9881f11fa56/1080p/mp4/file.mp4',
    title: '3D Character Scene',
    category: 'Motion',
    description: 'Cinematic motion experiment'
  },
  {
    id: 'motion-7',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_d4829166d98844cd8f8dc88fc1a06c69/1080p/mp4/file.mp4',
    title: 'Ahmedabad Map Animation',
    category: 'Motion',
    description: 'Location storytelling visual'
  },
  {
    id: 'motion-8',
    thumbnail: '',
    videoUrl: 'https://video.wixstatic.com/video/bc81e6_9fcce2d0f7f749868db57b8dd8a15928/720p/mp4/file.mp4',
    title: 'Craft Process Reel',
    category: 'Motion',
    description: 'Handmade texture storytelling'
  }
];
