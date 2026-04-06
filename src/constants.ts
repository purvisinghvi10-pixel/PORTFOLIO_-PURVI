import { Project, PhotographyItem, MotionItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    number: '01',
    title: "Weddings by Event Crafter — Website UX Planning",
    category: "UI/UX Design",
    shortDescription: "Designed low-fidelity wireframes to structure the first website for a luxury wedding planning brand.",
    image: "https://i.ibb.co/JRsYpWtC/cover-3.png",
    thumbnail: "https://i.ibb.co/pBRMp7yY/MOCK-UP.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/JRsYpWtC/cover-3.png", label: "Desktop Interface" },
      { type: 'video', src: "https://video.wixstatic.com/video/bc81e6_a8de38de8a3347fd844ec24140394a3d/1080p/mp4/file.mp4", label: "UI Interaction" },
      { type: 'image', src: "https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png", label: "Low Fertility" }
    ],
    overview: {
      objective: "Designed low-fidelity wireframes to structure the first website for a luxury wedding planning brand, focusing on clarity, navigation, and conversion flow.",
      challenges: "The challenge was to design a structure for a content-heavy luxury brand with no existing website structure and multiple services.",
      description: "This was the brand’s first website, and the goal was to define a clear structure before development. The focus was not visual design, but planning the experience and layout through wireframes.",
      role: "UI/UX Intern",
      responsibilities: ["Information Architecture", "User Flow", "Wireframing"],
      duration: "4 Weeks",
      tools: ["Figma"]
    },
    problemStatement: "The challenge was to design a structure for a content-heavy luxury brand: No existing website structure, Multiple services and offerings, Need to balance inspiration with clarity, No defined user journey. Risk: Users could feel overwhelmed and drop off before inquiry.",
    userResearch: {
      description: "Target Users: Couples planning premium weddings, Families exploring full-service planners. Key Insight: Users browse first → then decide → then inquire.",
      insights: [
        "Explore past weddings (visual trust)",
        "Understand services clearly",
        "Feel guided, not overwhelmed",
        "Easy inquiry process"
      ]
    },
    userPersona: {
      name: "Aayushi, The Bride-to-be",
      profile: "28 Years Old • Marketing Manager • Mumbai. Aayushi is planning her dream wedding and wants everything to be perfect but is overwhelmed by the number of choices and lack of clear information.",
      goals: ["Find a reliable wedding planner", "Understand services clearly", "See real examples of past weddings"],
      needs: ["Clear navigation", "Visual portfolio", "Easy inquiry process", "Transparent service details"],
      painPoints: ["Overwhelmed by content-heavy websites", "Difficulty finding specific service info", "Lack of trust in new brands"],
      behavior: ["Researches on mobile during breaks", "Saves references on Instagram", "Prefers quick, direct communication"],
      image: "https://i.ibb.co/DdZG6By/Whats-App-Image-2026-04-02-at-10-05-36-AM.jpg"
    },
    appMap: {
      description: "Designed a simple and clear structure: Home, WEC Story, Services, Spotlight, Portfolio, Contact / Start Planning. Goal: Reduce complexity and create clear navigation paths.",
      image: "https://i.ibb.co/gFmR7YrM/Gemini-Generated-Image-srlg9tsrlg9tsrlg.png"
    },
    userFlow: {
      description: "Defined a linear journey: Landing → Explore → View Portfolio → Select Service → Inquiry → Submit. Focus: Guide users step-by-step, Reduce confusion, Encourage conversion.",
      image: "https://i.ibb.co/XZMJBd9c/Chat-GPT-Image-Apr-1-2026-05-29-35-PM.png"
    },
    wireframes: {
      description: "Created low-fidelity wireframes to structure content hierarchy, define section flow, and place key CTAs strategically. Approach: Started with rough layouts, simplified content blocks, and prioritized clarity over visuals.",
      images: ["https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png"]
    },
    designDecisions: [
      {
        title: "Portfolio Early",
        description: "Highlight portfolio early for trust"
      },
      {
        title: "Minimal Navigation",
        description: "Keep navigation minimal"
      },
      {
        title: "Clear Sections",
        description: "Break content into clear sections"
      },
      {
        title: "Strong CTA",
        description: "Add strong “Start Planning” CTA"
      }
    ],
    process: ["Concept Development", "Information Architecture", "User Flow", "Wireframing", "Final Review"],
    outcome: "Clear website structure ready for design & development, improved content organization, and a defined user journey from exploration to inquiry.",
    achievements: [
      "Clear website structure ready for design & development",
      "Improved content organization",
      "Defined user journey from exploration to inquiry"
    ],
    learnings: [
      "Importance of structure before visuals",
      "How to simplify complex content",
      "Designing user flows for conversion"
    ]
  },
  {
    id: '02',
    number: '02',
    title: "CareHub — Animal Care & Recovery Platform",
    category: "UI/UX Design",
    shortDescription: "An all-in-one digital platform designed to simplify animal care by integrating emergency support, nearby hospitals, and community-driven recovery.",
    image: "https://i.ibb.co/rGmM0Vz9/Untitled-design.png",
    thumbnail: "https://i.ibb.co/rGmM0Vz9/Untitled-design.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png", label: "App Interface" },
      { type: 'image', src: "https://picsum.photos/seed/pet-1/1920/1080", label: "User Experience" },
      { type: 'image', src: "https://picsum.photos/seed/pet-2/1920/1080", label: "Interface Design" }
    ],
    overview: {
      objective: "To design a centralized platform that simplifies access to animal care services, enables quick response during emergencies, and reduces confusion caused by scattered information.",
      challenges: "Services scattered across multiple platforms, users rely on Google/contacts/word-of-mouth, high stress during emergencies, and no structured system for decision-making.",
      description: "CareHub is an all-in-one digital platform designed to simplify animal care by integrating emergency support, nearby hospitals, vet & NGO contacts, lost & found reporting, feeding guidance, product access, and events into a single structured system. The platform focuses on reducing fragmentation and helping users take quick, informed actions — especially during urgent situations.",
      role: "UI/UX Designer",
      responsibilities: ["Product Strategy", "User Interviews", "Interaction Design", "Visual Identity"],
      duration: "3 Weeks",
      tools: ["Figma", "After Effects"]
    },
    context: "Animal care today is highly fragmented. Users often switch between multiple apps, contacts, and search results just to solve a single problem. This leads to delays in emergencies, uncertainty in decision-making, and increased stress for users. CareHub was designed to bring clarity, structure, and speed into this process.",
    contextImage: "https://i.ibb.co/h1ZVyKYW/Screenshot-2026-04-06-at-2-44-40-PM.png",
    problemStatement: "Animal care services are fragmented across multiple platforms, making it difficult for users to quickly find reliable feeding guidance, medical help, adoption support, or emergency assistance. Result: Time is lost during critical situations, users feel confused and overwhelmed, and no single reliable source exists.",
    userResearch: {
      description: "To understand real behavior, I conducted primary research using a structured Google Form with 60 responses across 17 questions, focusing on real-life animal care challenges.",
      insights: [
        "Users switch between Google, apps, and contacts for one task",
        "Emergency situations create panic and uncertainty",
        "New pet owners lack feeding and care guidance",
        "People struggle because services are unstructured and scattered"
      ]
    },
    userPersona: {
      name: "Yuvraj, Marketing Executive",
      profile: "26 Years Old • Pune. Yuvraj regularly feeds stray dogs. During an emergency, he struggles to find the right hospital or NGO quickly, leading to panic and delayed action.",
      goals: ["Get immediate help", "Find nearest available hospital", "Contact reliable NGOs quickly", "Avoid wasting time"],
      needs: ["One-tap SOS", "Verified contacts", "Nearby service detection", "Guided emergency flow"],
      painPoints: ["Searching during panic", "Calling multiple unresponsive numbers", "Not knowing which services are active", "Feeling helpless"],
      behavior: ["Regularly feeds stray dogs", "Struggles to find help quickly during emergencies"],
      image: "https://i.ibb.co/B2NkQqk9/Whats-App-Image-2026-04-02-at-10-29-54-AM.jpg"
    },
    journeyMapping: {
      description: "A professional, portfolio-ready journey map focused on user actions and touchpoints across the Care Hub experience.",
      steps: [
        { stage: "Discover", actions: ["Finds the app"], touchpoints: ["App store / social media"] },
        { stage: "Explore Services", actions: ["Browses features"], touchpoints: ["Home screen, service categories"] },
        { stage: "Choose Service", actions: ["Selects a service"], touchpoints: ["Service detail pages"] },
        { stage: "Book / Order", actions: ["Books or orders"], touchpoints: ["Booking / checkout screen"] },
        { stage: "Track & Manage", actions: ["Tracks order or appointment"], touchpoints: ["Dashboard / notifications"] },
        { stage: "Repeat / Review", actions: ["Uses again or leaves feedback"], touchpoints: ["History / reminders"] }
      ]
    },
    appMap: {
      description: "A professional, portfolio-ready Information Architecture diagram that clearly shows the app structure, prioritizing ease of navigation and logical grouping of services.",
      image: "https://i.ibb.co/hJN2QzsL/Screenshot-2026-04-06-214739.png"
    },
    wireframes: {
      description: "Wireframes focused on clear content hierarchy, large touch targets, minimal cognitive load, and fast scanning. Key sections designed: Dashboard (overview + alerts), Lost & Found reporting flow, Emergency access (SOS), and Service categories.",
      sections: [
        {
          title: "Main Dashboard",
          description: "A centralized hub for pet health tracking and community alerts, designed for quick scanning.",
          images: ["https://i.ibb.co/DTygFg0/Shot.png"]
        },
        {
          title: "Reporting Flow",
          description: "A step-by-step wizard that guides users through reporting a lost pet in under 60 seconds.",
          images: ["https://i.ibb.co/5hK2qnBv/Shot-2.png"]
        }
      ]
    },
    designDecisions: [
      {
        title: "One-tap emergency access",
        description: "Immediate access to SOS features from any screen."
      },
      {
        title: "Location-based suggestions",
        description: "Suggesting nearby services based on real-time location."
      },
      {
        title: "Structured categories",
        description: "Organizing services into clear, animal-based categories."
      },
      {
        title: "Simplified reporting",
        description: "Reducing steps in the lost and found reporting flow."
      },
      {
        title: "Minimal UI",
        description: "Reducing visual noise to focus on critical actions."
      }
    ],
    process: ["User Research", "Information Architecture", "User Flow", "Wireframing", "UI Design", "Prototyping"],
    finalUI: {
      exploration: {
        description: "The main dashboard provides quick access to essential actions and a clear overview of animal care services.",
        images: ["https://i.ibb.co/C3jNNMmM/Shot-1.png"]
      },
      coreExperience: {
        description: "Service categories and feeding guidance screens provide structured information for daily care.",
        images: ["https://i.ibb.co/q321XGJg/Scene.png"]
      },
      keyActions: {
        description: "The emergency SOS and reporting flows are designed for maximum speed and reduced decision complexity.",
        images: ["https://i.ibb.co/HL6mM9FK/Shot-6.png"]
      }
    },
    outcome: "CareHub successfully reduced dependency on multiple platforms and improved clarity in user decision-making, providing a structured and reliable user experience for faster access to emergency services.",
    achievements: [
      "Reduced dependency on multiple platforms",
      "Faster access to emergency services",
      "Improved clarity in user decision-making",
      "Structured and reliable user experience"
    ],
    learnings: [
      "Structure is more important than adding features",
      "Users need guidance, not just options",
      "Speed and clarity are critical in emergency design",
      "Centralization significantly reduces stress"
    ]
  },
  {
    id: '03',
    number: '03',
    title: "Silver Leaf Identity",
    category: "Branding",
    shortDescription: "Minimal and timeless brand identity for luxury silver jewelry.",
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
      objective: "To create a premium and minimal brand identity for a luxury silver jewelry brand.",
      challenges: "Balancing traditional elegance with modern minimalism while maintaining brand recognition.",
      description: "Silver Leaf reflects refined elegance through clean forms, a muted color palette, and high-contrast typography, creating a timeless and sophisticated brand presence.",
      role: "Brand Designer",
      duration: "3 Weeks",
      tools: ["Adobe Illustrator", "Photoshop", "After Effects"]
    },
    process: ["Discovery", "Brand Strategy", "Logo Design", "Brand Identity", "Brand Applications"],
    designSystem: {
      colors: [
        { hex: "#C9C9C9", label: "Silver Grey" },
        { hex: "#2B2B2B", label: "Charcoal" },
        { hex: "#F5F5F5", label: "Off White" },
        { hex: "#D8CFC4", label: "Warm Beige" }
      ],
      components: []
    },
    outcome: "A refined and cohesive brand identity that balances minimalism with luxury, establishing Silver Leaf as a premium jewelry brand.",
    achievements: [
      "Created a distinct and elegant visual system",
      "Ensured consistency across packaging and brand assets",
      "Strengthened brand storytelling through motion and application"
    ],
    imageShowcase: {
      fullWidth: { src: "https://i.ibb.co/qYT6TVKn/Artboard-2-4x.png", label: "Brand Identity" },
      grid: [
        { src: "https://i.ibb.co/v44x0J4t/10pcs-Portable-Frosted-Zipper-Closure-Jewel.png", label: "Packaging Design" },
        { src: "https://i.ibb.co/0p3XbKHD/Burlap-Bag-Mockup.png", label: "Packaging Design" },
        { src: "https://i.ibb.co/4Bjb116/0dcc96221124143-67cf465dd1bc5.png", label: "Logo Exploration" },
        { src: "https://i.ibb.co/wN0QJ4wv/c23cfd221124143-67cf465dd2226.jpg", label: "Visual Language" }
      ]
    }
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
    ],
    showcaseVideo: "https://video.wixstatic.com/video/bc81e6_fbee3f71812a4fd189e5cc4e8b411de6/1080p/mp4/file.mp4",
    imageShowcase: {
      fullWidth: { src: "https://i.ibb.co/RT2r22Wb/Chat-GPT-Image-Feb-21-2026-05-58-55-AM.png", label: "Cover Design" },
      grid: [
        { src: "https://i.ibb.co/pjn6dPRD/usiness.jpg", label: "Illustration Layout" },
        { src: "https://i.ibb.co/jkNCxn9N/usiness-1.jpg", label: "Concept Artwork" },
        { src: "https://i.ibb.co/4w3zVR7s/Artboard-1-3x-100.jpg", label: "Typography Detail" },
        { src: "https://i.ibb.co/yc1pHs8Y/Artboard-2-3x-100.jpg", label: "Illustration Layout" }
      ]
    }
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
    ],
    showcaseVideo: "https://video.wixstatic.com/video/bc81e6_611113969af14783bdb201b3d82788e5/1080p/mp4/file.mp4",
    imageShowcase: {
      fullWidth: { src: "https://i.ibb.co/0jTZLFC2/Free-A4-Brochure-Mockup-6.png", label: "Brochure Layout" },
      grid: [
        { src: "https://picsum.photos/seed/brochure1/1200/800", label: "Print Spread" },
        { src: "https://picsum.photos/seed/brochure2/1200/800", label: "Grid System" },
        { src: "https://picsum.photos/seed/brochure3/1200/800", label: "Visual Composition" }
      ]
    }
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
    ],
    imageShowcase: {
      fullWidth: { src: "https://i.ibb.co/bMmtBQsh/A-5-vertical-1.png", label: "Story Frame" },
      grid: [
        { src: "https://picsum.photos/seed/lego1/1200/800", label: "3D Composition" },
        { src: "https://picsum.photos/seed/lego2/1200/800", label: "Character Scene" },
        { src: "https://picsum.photos/seed/lego3/1200/800", label: "Narrative Moment" }
      ]
    }
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
