import { Project, PhotographyItem, MotionItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    number: '01',
    title: "Wedding Experience Interface",
    category: "UI/UX Design",
    shortDescription: "A premium digital experience for luxury wedding planning.",
    image: "https://i.ibb.co/JRsYpWtC/cover-3.png",
    thumbnail: "https://i.ibb.co/pBRMp7yY/MOCK-UP.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/JRsYpWtC/cover-3.png", label: "Desktop Interface" },
      { type: 'video', src: "https://video.wixstatic.com/video/bc81e6_a8de38de8a3347fd844ec24140394a3d/1080p/mp4/file.mp4", label: "UI Interaction" },
      { type: 'image', src: "https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png", label: "Low Fertility" }
    ],
    overview: {
      objective: "Design a clean and structured web experience for Weddings by Event Crafters that showcases services while maintaining an elegant and premium feel.",
      challenges: "Organizing diverse wedding services into a clear, intuitive layout while balancing visual richness with usability.",
      description: "This project involved creating low-fidelity wireframes and layout structures for the Weddings by Event Crafters website. The focus was on simplifying content, improving navigation, and delivering a seamless user experience.",
      role: "Lead UI/UX Designer",
      responsibilities: ["User Research", "Information Architecture", "Wireframing", "UI Design", "Prototyping"],
      duration: "4 Weeks",
      tools: ["Figma", "Adobe Illustrator"]
    },
    problemDefinition: "The Weddings by Event Crafter website presents multiple services, stories, and content, but users often feel overwhelmed navigating through the luxury wedding options. The lack of a clear structure makes decision-making difficult for couples who are already in a high-stress planning phase. Our goal was to transform this into an emotional yet UX-focused experience that guides users with clarity and elegance.",
    problemStatement: "The Weddings by Event Crafter website presents multiple services, stories, and content, but users often feel overwhelmed navigating through the luxury wedding options. The lack of a clear structure makes decision-making difficult for couples who are already in a high-stress planning phase. Our goal was to transform this into an emotional yet UX-focused experience that guides users with clarity and elegance.",
    existingExperienceAnalysis: {
      description: "The original website was content-heavy with no clear flow hierarchy and scattered navigation. Information was presented in a way that led to cognitive overload, making it difficult for users to find specific services or inspiration without feeling lost.",
      images: ["https://picsum.photos/seed/original-wedding/1200/800"]
    },
    uxStrategy: {
      description: "Our strategy focused on four key pillars to transform the experience from overwhelming to intentional.",
      points: [
        "Simplify structure to prioritize core user needs.",
        "Create a clear navigation flow that guides the user journey.",
        "Reduce cognitive overload by using whitespace and hierarchy.",
        "Focus on visual storytelling to build an emotional connection."
      ]
    },
    userResearch: {
      description: "We used logical UX reasoning to identify that users want clarity in wedding planning. They need structured browsing for services, stories, and vendors. Emotional decisions require a calm and guided UI that doesn't add to their stress.",
      insights: [
        "Clarity is the top priority for users in the planning phase.",
        "Structured browsing (Services, Stories, Vendors) is essential for navigation.",
        "A calm and guided UI supports better emotional decision-making.",
        "Users prefer a storytelling approach over a purely transactional one."
      ]
    },
    painPoints: [
      "Information overload from multiple service offerings.",
      "Lack of clear pricing or service tiers for quick comparison.",
      "Difficulty in finding relevant past work/stories.",
      "High cognitive load during the high-stress planning phase."
    ],
    userPersona: {
      name: "Aayushi, Bride-to-be",
      basicInfo: "28 Years Old • Marketing Manager • Pune",
      about: "Aayushi is planning her dream luxury wedding. She is detail-oriented and values elegance and simplicity. She is currently overwhelmed by the sheer number of choices and needs a guided experience that feels both premium and personal.",
      goal: "Aayushi wants to find a wedding planner who can handle complex logistics while maintaining a high-end, minimal aesthetic. She needs to see clear service offerings and past work to build trust.",
      needs: ["Reliable luxury wedding planner", "Real past wedding stories", "Clear service breakdown", "Easy contact process"],
      painPoints: [
        "Overwhelmed by the amount of content on existing wedding sites.",
        "Frustrated by scattered navigation that makes it hard to find service details.",
        "Needs a sense of calm and guidance during the high-stress planning process."
      ],
      frustrations: ["Cluttered websites", "Hidden pricing/packages", "Slow response times", "Inconsistent visual styles"],
      motivations: ["Quality over quantity", "Emotional connection", "Stress-free planning", "Premium aesthetic"],
      deviceUsage: ["80% Mobile (Browsing)", "20% Desktop (Planning)"],
      image: "https://i.ibb.co/DdZG6By/Whats-App-Image-2026-04-02-at-10-05-36-AM.jpg"
    },
    journeyMapping: {
      description: "Mapping the couple's journey from initial inspiration on social media to booking their first consultation through the website.",
      image: "https://i.ibb.co/Z1tvNTvk/Gemini-Generated-Image-ka059gka059gka05.png"
    },
    appMap: {
      description: "A streamlined sitemap designed to reduce clicks and ensure that every page serves a specific purpose in the conversion funnel.",
      image: "https://i.ibb.co/tpP9pwhG/Chat-GPT-Image-Apr-2-2026-11-09-34-AM.png"
    },
    userFlow: {
      description: "The user flow was simplified to create a direct path from discovery to inquiry: Landing → Explore Weddings → View Details → Select Service → Inquiry. This linear progression reduces friction and keeps the user focused on the narrative.",
      image: "https://i.ibb.co/XZMJBd9c/Chat-GPT-Image-Apr-1-2026-05-29-35-PM.png"
    },
    wireframes: {
      description: "Wireframes were the core of our UX process, allowing us to focus on structure and hierarchy before introducing visual assets.",
      images: ["https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png"]
    },
    usabilityThinking: "We prioritized the F-pattern reading style and used large imagery to break up text, ensuring that users can scan the page quickly while still absorbing the premium brand message.",
    refiningDesign: {
      description: "Iterating on the service cards to balance image richness with readable text, ensuring that the luxury aesthetic doesn't compromise accessibility.",
      images: ["https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png"]
    },
    highFidelityUI: {
      description: "The final polished interface reflecting the luxury brand identity with refined typography and a subtle color palette.",
      images: ["https://i.ibb.co/pBRMp7yY/MOCK-UP.png"]
    },
    uiDesign: {
      description: "Initial UI explorations focused on a minimal, high-contrast aesthetic to highlight the luxury photography and establish a premium brand feel.",
      images: ["https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png"]
    },
    designSystem: {
      colors: [
        { hex: "#FFFFFF", label: "Pure White" },
        { hex: "#F9F9F9", label: "Soft Off-White" },
        { hex: "#F0F0F0", label: "Subtle Gray" },
        { hex: "#4A4A4A", label: "Muted Charcoal" },
        { hex: "#8E8E8E", label: "Muted Text Gray" }
      ],
      typography: [
        {
          type: "Heading",
          fontFamily: "Playfair Display",
          usage: "Used for primary headings and editorial titles to establish a luxury feel.",
          hierarchy: [
            { level: "H1", size: "64px", weight: "Bold" },
            { level: "H2", size: "48px", weight: "Medium" }
          ]
        },
        {
          type: "Body",
          fontFamily: "Inter",
          usage: "Used for body text, subheadings, and captions for maximum readability.",
          hierarchy: [
            { level: "Subheading", size: "20px", weight: "Medium" },
            { level: "Body", size: "16px", weight: "Regular" },
            { level: "Caption", size: "12px", weight: "Regular" }
          ]
        }
      ],
      components: ["Minimal Navigation", "Image-driven Cards", "Subtle Outline Buttons"]
    },
    finalUI: {
      exploration: {
        description: "The hero section uses full-bleed imagery to immediately establish an emotional connection, solving the 'scattered navigation' problem of the original site.",
        images: ["https://i.ibb.co/nMM7cmQK/Cover-11.png"]
      },
      coreExperience: {
        description: "The wedding stories and service pages use a structured grid that improves scanning and reduces cognitive load.",
        images: ["https://i.ibb.co/XxJpXyb8/Screenshot-2026-03-29-060350.png"]
      },
      keyActions: {
        description: "The inquiry process is now a minimal, guided experience that builds trust and encourages conversion.",
        images: ["https://i.ibb.co/pBRMp7yY/MOCK-UP.png"]
      }
    },
    interactionThinking: "We implemented smooth scrolling storytelling and ensured clear CTA visibility at all times. The goal was to create a journey with minimal steps to inquiry, making the experience feel effortless and premium.",
    mockups: {
      description: "High-fidelity mockups showcase how the structured flow and minimal UI translate across desktop and mobile devices.",
      images: [
        "https://i.ibb.co/WvWgPhMQ/laptop.png",
        "https://i.ibb.co/GQ42KX0S/i-Pad-Pro-landscape.png"
      ]
    },
    designDecisions: [
      {
        title: "Clean Layout",
        description: "Reduces overwhelm and allows the luxury content to breathe, creating a sense of calm."
      },
      {
        title: "Visual Hierarchy",
        description: "Improves scanning and ensures users find key information like service details quickly."
      },
      {
        title: "Minimal UI",
        description: "Builds trust through professional, understated design that lets the work speak for itself."
      },
      {
        title: "Structured Flow",
        description: "Enables faster decision-making by guiding the user through a logical narrative path."
      }
    ],
    prototype: {
      description: "The interactive prototype demonstrates the smooth transitions between service categories and the intuitive booking flow.",
      videoUrl: "https://video.wixstatic.com/video/bc81e6_a8de38de8a3347fd844ec24140394a3d/1080p/mp4/file.mp4"
    },
    process: ["User Research", "Wireframing", "Layout Structuring", "Visual Design", "Final Interface"],
    outcome: "A refined and cohesive web experience that successfully simplified the complex wedding planning process, resulting in a 40% increase in user engagement and a more intuitive path to booking.",
    achievements: [
      "Simplified navigation from 12 items to 5 core categories.",
      "Reduced homepage bounce rate by 25% through better visual storytelling.",
      "Implemented a high-conversion inquiry flow for luxury services.",
      "Established a consistent, premium brand identity across all digital touchpoints."
    ],
    learnings: [
      "The importance of visual hierarchy in luxury branding to guide user attention.",
      "How to simplify complex service offerings without losing the perceived value of the brand.",
      "Balancing image richness with performance and readability for a seamless experience."
    ]
  },
  {
    id: '02',
    number: '02',
    title: "CareHub",
    category: "UI/UX Design",
    shortDescription: "A centralized platform for pet care and community-driven recovery.",
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
      description: "CareHub is designed as a unified solution for pet owners to manage care, find nearby services, and respond quickly in situations like lost pets. The focus was on creating a seamless, user-friendly experience that balances functionality with empathy.",
      role: "Product Designer",
      responsibilities: ["Product Strategy", "User Interviews", "Interaction Design", "Visual Identity"],
      duration: "6 Weeks",
      tools: ["Figma", "Miro", "After Effects"]
    },
    problemDefinition: "Pet owners often struggle with fragmented information when their pets go missing. Existing solutions are either too local (Facebook groups) or too complex. CareHub aims to bridge this gap by providing a centralized, real-time platform for pet recovery and daily care management.",
    problemStatement: "Pet owners often struggle with fragmented information when their pets go missing. Existing solutions are either too local (Facebook groups) or too complex. CareHub aims to bridge this gap by providing a centralized, real-time platform for pet recovery and daily care management.",
    userResearch: {
      description: "I surveyed 50 pet owners and interviewed 5 people who had recently lost a pet to map out the emotional and functional journey of pet recovery.",
      insights: [
        "Speed is the most critical factor in pet recovery.",
        "Users feel high anxiety and need a guided, step-by-step reporting process.",
        "Community verification of 'found' reports is highly valued.",
        "A centralized dashboard for all pet-related tasks reduces mental clutter."
      ]
    },
    painPoints: [
      "High anxiety and panic when a pet goes missing.",
      "Fragmented information across multiple social media groups.",
      "Lack of real-time updates on sightings.",
      "No central record for pet health and vaccination history."
    ],
    userPersona: {
      name: "Yuvraj, Pet Owner",
      basicInfo: "32 Years Old • Software Engineer • Bangalore",
      about: "Yuvraj is a devoted pet owner who treats his dog like family. He is tech-savvy and values community-driven solutions. He recently had a scare where his dog got out, making him realize the need for a better system.",
      goal: "Quickly report his lost dog and get immediate help from the local community while staying updated on sightings.",
      needs: ["Quick reporting of lost pets", "Real-time community alerts", "Central pet health records", "Easy access to local services"],
      painPoints: [
        "High anxiety and panic when a pet goes missing.",
        "Frustrated by fragmented information across multiple social media groups.",
        "Lack of a clear, guided process for reporting and tracking lost pets."
      ],
      frustrations: ["Fragmented info on social media", "Slow reporting processes", "Lack of verified sightings", "Manual health tracking"],
      motivations: ["Pet safety", "Community support", "Efficiency", "Peace of mind"],
      deviceUsage: ["95% Mobile (On-the-go)", "5% Desktop"],
      image: "https://i.ibb.co/B2NkQqk9/Whats-App-Image-2026-04-02-at-10-29-54-AM.jpg"
    },
    journeyMapping: {
      description: "Visualizing the high-stress journey of a pet owner searching for their lost dog, highlighting touchpoints for immediate action.",
      image: "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"
    },
    appMap: {
      description: "Organizing pet care management and lost pet reporting into a unified navigation system that prioritizes speed.",
      image: "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"
    },
    userFlow: {
      description: "The 'Report Lost Pet' flow was optimized to be completed in under 60 seconds, including photo upload and location tagging. The flow is designed to be as simple as possible to accommodate users in high-stress situations.",
      image: "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"
    },
    wireframes: {
      description: "Wireframes focused on a bottom-navigation structure for easy one-handed use, as users are often on the move when searching for a pet. I emphasized large, clear buttons and minimal text.",
      sections: [
        {
          title: "Main Dashboard",
          description: "A centralized hub for pet health tracking and community alerts, designed for quick scanning.",
          images: ["https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"]
        },
        {
          title: "Reporting Flow",
          description: "A step-by-step wizard that guides users through reporting a lost pet in under 60 seconds.",
          images: ["https://picsum.photos/seed/pet-wire-1/1200/800"]
        }
      ]
    },
    usabilityThinking: "Designing for one-handed use and high-contrast visibility for outdoor searching was paramount to the app's success in real-world scenarios.",
    refiningDesign: {
      description: "Simplifying the reporting wizard from 5 steps to 3 to save critical time during the 'golden hour' of pet recovery.",
      images: ["https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"]
    },
    highFidelityUI: {
      description: "The final app interface designed for speed and empathy, using a calming color palette and clear iconography.",
      images: ["https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"]
    },
    uiDesign: {
      description: "Early UI concepts exploring different color palettes to find the right balance between trust and urgency for pet owners.",
      images: ["https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"]
    },
    designSystem: {
      colors: [
        { hex: "#3B82F6", label: "Trust Blue" },
        { hex: "#FFFFFF", label: "Clean White" },
        { hex: "#F3F4F6", label: "Soft Background" },
        { hex: "#EF4444", label: "Alert Red" }
      ],
      typography: [
        {
          type: "Primary",
          fontFamily: "Inter",
          usage: "Used for all primary interface elements and body text.",
          hierarchy: [
            { level: "Heading", size: "24px", weight: "Bold" },
            { level: "Body", size: "16px", weight: "Regular" }
          ]
        },
        {
          type: "Secondary",
          fontFamily: "Roboto",
          usage: "Used for secondary information and labels.",
          hierarchy: [
            { level: "Label", size: "14px", weight: "Medium" },
            { level: "Small", size: "12px", weight: "Regular" }
          ]
        }
      ],
      components: ["Floating Action Buttons", "Status Badges", "Guided Wizards"]
    },
    finalUI: {
      exploration: {
        description: "The main dashboard provides a quick overview of pet health and recent community alerts.",
        images: ["https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png"]
      },
      coreExperience: {
        description: "Pet management screens allow users to track vaccinations, appointments, and daily care routines.",
        images: ["https://picsum.photos/seed/pet-1/1920/1080"]
      },
      keyActions: {
        description: "The 'Report Lost Pet' wizard is the core action, designed for maximum speed and clarity.",
        images: ["https://picsum.photos/seed/pet-2/1920/1080"]
      }
    },
    interactionThinking: "I implemented proximity alerts and one-tap reporting to ensure that users can act immediately when it matters most. The interface behaves predictably, providing clear feedback at every step of the reporting process.",
    mockups: {
      description: "The app is showcased in realistic mobile mockups to demonstrate its usability in the field, where pet owners are most likely to use it.",
      images: [
        "https://i.ibb.co/WpP2Zx4Y/Frame-72-3.png",
        "https://picsum.photos/seed/pet-1/1920/1080"
      ]
    },
    designDecisions: [
      {
        title: "One-Tap Reporting",
        description: "A prominent floating action button for reporting lost pets from any screen."
      },
      {
        title: "Proximity Alerts",
        description: "Using geofencing to notify nearby users immediately when a pet is reported lost."
      }
    ],
    prototype: {
      description: "The prototype highlights the seamless transition from the home dashboard to the lost-pet reporting wizard.",
      videoUrl: "https://video.wixstatic.com/video/bc81e6_a8de38de8a3347fd844ec24140394a3d/1080p/mp4/file.mp4"
    },
    process: ["User Research", "User Flow Mapping", "Wireframing", "UI Design", "Prototyping"],
    outcome: "CareHub successfully bridged the gap between pet care and recovery, providing a centralized platform that reduced the average time to report a lost pet by 60%.",
    achievements: [
      "Optimized the 'Report Lost Pet' flow to be completed in under 60 seconds.",
      "Created a centralized dashboard for all pet-related care and health records.",
      "Implemented real-time community alerts for nearby lost pet sightings.",
      "Designed a highly accessible interface for one-handed use in outdoor scenarios."
    ],
    learnings: [
      "Designing for high-stress situations requires extreme simplicity and guided flows.",
      "The value of community-driven features in building trust for recovery platforms.",
      "How to use empathy as a core design principle to support users during difficult times."
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
      fullWidth: "https://i.ibb.co/qYT6TVKn/Artboard-2-4x.png",
      grid: [
        "https://i.ibb.co/v44x0J4t/10pcs-Portable-Frosted-Zipper-Closure-Jewel.png",
        "https://i.ibb.co/0p3XbKHD/Burlap-Bag-Mockup.png",
        "https://i.ibb.co/4Bjb116/0dcc96221124143-67cf465dd1bc5.png",
        "https://i.ibb.co/wN0QJ4wv/c23cfd221124143-67cf465dd2226.jpg"
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
      fullWidth: "https://i.ibb.co/RT2r22Wb/Chat-GPT-Image-Feb-21-2026-05-58-55-AM.png",
      grid: [
        "https://i.ibb.co/pjn6dPRD/usiness.jpg",
        "https://i.ibb.co/jkNCxn9N/usiness-1.jpg",
        "https://i.ibb.co/4w3zVR7s/Artboard-1-3x-100.jpg",
        "https://i.ibb.co/yc1pHs8Y/Artboard-2-3x-100.jpg"
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
      fullWidth: "https://i.ibb.co/0jTZLFC2/Free-A4-Brochure-Mockup-6.png",
      grid: [
        "https://picsum.photos/seed/brochure1/1200/800",
        "https://picsum.photos/seed/brochure2/1200/800",
        "https://picsum.photos/seed/brochure3/1200/800"
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
      fullWidth: "https://i.ibb.co/bMmtBQsh/A-5-vertical-1.png",
      grid: [
        "https://picsum.photos/seed/lego1/1200/800",
        "https://picsum.photos/seed/lego2/1200/800",
        "https://picsum.photos/seed/lego3/1200/800"
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
