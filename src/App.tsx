import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  ChevronDown, 
  ExternalLink,
  Code,
  Palette,
  Layout,
  Video,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize2,
  Eye,
  ArrowLeft
} from 'lucide-react';
import { PHOTOGRAPHY, MOTION } from './constants';
import { PhotographyItem, MotionItem } from './types';
import InMotion from './components/InMotion';

// --- Data ---

const EXPERIENCE = [
  {
    company: "Untangle Design",
    location: "Jaipur",
    role: "Graphic Designer",

  },
  {
    company: "IIS University",
    location: "Jaipur",
    role: "Video Editor",

  },
  {
    company: "Event Crafters",
    location: "Jaipur",
    role: "Video Editor & Graphic Designer",
  
  },
  {
    company: "The Design For You",
    location: "Jaipur",
    role: "Video Editor & Graphic Designer"
  }
];

const SKILLS = {
  design: ["UI/UX Design", "Graphic Design", "Branding", "Motion Graphics"],
  tools: ["Adobe Photoshop", "Illustrator", "After Effects", "Premiere Pro", "Figma", "Coral Draw", "Autodesk Maya", "ZBrush", ]
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', to: '/' },
    { name: 'Still Stories', to: '/still-stories' },
    { name: 'In Motion', to: '/in-motion' },
    { name: 'About', to: '/#about' },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md py-4 border-b border-line' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-display text-xl font-bold tracking-tighter">
          P.S<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/#contact" 
            className="px-5 py-2 border border-line text-ink rounded-full text-sm font-semibold hover:bg-accent hover:text-white transition-all"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-ink" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-line py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image Transforms
  // Start: Centered, Dominant, Large (~90% width)
  // End: Left side, Smaller (~45-50% width)
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const imageX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-45%"]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "0vh"]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 0.5], ["16px", "40px"]);
  
  // Text Transforms
  // Start: Positioned below, large, secondary
  // End: Right side, structured, aligned
  const textX = useTransform(scrollYProgress, [0, 0.5], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["40vh", "0vh"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.5, 1]);

  // Parallax effect for the video card (interactive tilt)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);
  const rotateX = useTransform(dy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(dx, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-bg">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-[-1] overflow-hidden opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        </div>

        {/* Text Container */}
        <motion.div 
          style={{ 
            x: textX,
            y: textY,
            scale: textScale,
            opacity: textOpacity,
          }}
          className="absolute z-10 text-center px-6 w-full max-w-5xl"
        >
          <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            Purvi Singhvi
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter mb-8">
            Multidisciplinary <br />
            <span className="text-gradient">Designer</span>
          </h1>
          <p className="text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            I design intuitive and visually engaging digital experiences that combine strong aesthetics with purposeful interaction.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 border border-line text-ink rounded-full font-bold overflow-hidden transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-line rounded-full font-bold hover:border-accent hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Container (Main Visual) */}
        <motion.div 
          style={{ 
            scale: imageScale, 
            x: imageX,
            y: imageY,
            borderRadius: imageBorderRadius,
            rotateX,
            rotateY
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute z-20 w-[90vw] max-w-6xl aspect-[16/10] overflow-hidden perspective-1000 shadow-[0_0_100px_rgba(0,0,0,0.3)] glass"
        >
          <img 
            src="https://i.ibb.co/pBRMp7yY/MOCK-UP.png"
            alt="Hero Visual"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Subtle glow/glass effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 border border-line rounded-[inherit] pointer-events-none" />
          
          {/* Inner glass reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-ink/5 to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </div>
  );
};

interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  media: MediaItem[];
  overview: {
    objective: string;
    challenges: string;
    description: string;
  };
  process: string[];
  outcome: string;
  achievements: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Silver Leaf Identity",
    category: "Branding",
    shortDescription: "Luxury silver jewelry branding",
    image: "https://i.ibb.co/qYT6TVKn/Artboard-2-4x.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/qYT6TVKn/Artboard-2-4x.png" },
      { type: 'image', src: "https://picsum.photos/seed/silverleaf-2/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/silverleaf-3/1920/1080" }
    ],
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
    id: 2,
    title: "Wedding Experience Interface",
    category: "UI/UX Design",
    shortDescription: "UI/UX Design for Weddings by Event Crafters",
    image: "https://i.ibb.co/pBRMp7yY/MOCK-UP.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/pBRMp7yY/MOCK-UP.png" },
      { type: 'image', src: "https://picsum.photos/seed/wedding-2/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/wedding-3/1920/1080" }
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
    id: 3,
    title: "FHRAI Brochure Design",
    category: "Print & Graphic Design",
    shortDescription: "Print & Graphic Design",
    image: "https://i.ibb.co/0jTZLFC2/Free-A4-Brochure-Mockup-6.png",
    media: [
      { type: 'image', src: "https://i.ibb.co/0jTZLFC2/Free-A4-Brochure-Mockup-6.png" },
      { type: 'image', src: "https://picsum.photos/seed/fhrai-2/1920/1080" },
      { type: 'video', src: "https://video.wixstatic.com/video/11062b_1639f75869404c009951307b2786a345/1080p/mp4/file.mp4" }
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
    id: 4,
    title: "UI/UX Case Study",
    category: "Product Design",
    shortDescription: "App design & user experience",
    image: "https://picsum.photos/seed/uiux/1200/800",
    media: [
      { type: 'image', src: "https://picsum.photos/seed/uiux/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/uiux-1/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/uiux-2/1920/1080" }
    ],
    overview: {
      objective: "Improve the user experience of a complex financial management application.",
      challenges: "Simplifying complex data while maintaining high functionality.",
      description: "This case study focuses on redesigning the core user flows of a fintech app to reduce cognitive load and improve user retention."
    },
    process: ["User Research", "Information Architecture", "Wireframing", "Prototyping", "Usability Testing"],
    outcome: "A streamlined user interface that significantly improved user task completion rates and overall satisfaction.",
    achievements: [
      "Reduced task completion time by 30%.",
      "Improved accessibility scores across the application.",
      "Developed a scalable design system for future updates."
    ]
  },
  {
    id: 5,
    title: "Eco-Friendly Packaging",
    category: "Sustainable Design",
    shortDescription: "Biodegradable packaging solutions",
    image: "https://picsum.photos/seed/eco/1200/800",
    media: [
      { type: 'image', src: "https://picsum.photos/seed/eco/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/eco-1/1920/1080" }
    ],
    overview: {
      objective: "Create a sustainable packaging system for a new organic skincare line.",
      challenges: "Finding materials that are both eco-friendly and durable enough for shipping.",
      description: "This project explored various biodegradable materials and minimalist design principles to create a packaging system that reflects the brand's commitment to nature."
    },
    process: ["Material Research", "Prototyping", "Stress Testing", "Visual Design"],
    outcome: "A 100% plastic-free packaging solution that reduced environmental impact while maintaining a premium feel.",
    achievements: [
      "Eliminated all single-use plastics from the packaging.",
      "Reduced shipping weight by 15% through optimized design.",
      "Received positive feedback from eco-conscious consumers."
    ]
  },
  {
    id: 6,
    title: "Smart Home Dashboard",
    category: "Interface Design",
    shortDescription: "Centralized control for IoT devices",
    image: "https://picsum.photos/seed/smarthome/1200/800",
    media: [
      { type: 'image', src: "https://picsum.photos/seed/smarthome/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/smarthome-1/1920/1080" }
    ],
    overview: {
      objective: "Design a unified dashboard for managing various smart home devices.",
      challenges: "Creating a consistent interface for devices with vastly different functions.",
      description: "The Smart Home Dashboard provides a seamless way to control lighting, temperature, and security from a single, intuitive interface."
    },
    process: ["User Interviews", "Task Analysis", "UI Design", "Prototyping"],
    outcome: "A highly customizable dashboard that simplifies the management of complex smart home ecosystems.",
    achievements: [
      "Achieved a 95% user satisfaction rate in beta testing.",
      "Integrated support for over 50 different IoT device types.",
      "Designed a dark mode that reduces eye strain during night use."
    ]
  },
  {
    id: 7,
    title: "Urban Mobility App",
    category: "Mobile App Design",
    shortDescription: "Simplifying city travel",
    image: "https://picsum.photos/seed/mobility/1200/800",
    media: [
      { type: 'image', src: "https://picsum.photos/seed/mobility/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/mobility-1/1920/1080" }
    ],
    overview: {
      objective: "Develop a mobile application that integrates various public and private transport options.",
      challenges: "Real-time data integration and providing accurate travel time estimates.",
      description: "The Urban Mobility App helps users find the fastest and most cost-effective way to get around the city, combining buses, trains, and bike-sharing."
    },
    process: ["Market Analysis", "User Personas", "Wireframing", "API Integration Planning"],
    outcome: "A comprehensive travel companion that has become the go-to app for thousands of daily commuters.",
    achievements: [
      "Reached 100,000 downloads within the first month of launch.",
      "Partnered with major city transport authorities for real-time data.",
      "Implemented an offline mode for basic navigation without data."
    ]
  },
  {
    id: 8,
    title: "Coffee Brand Reimagined",
    category: "Brand Strategy",
    shortDescription: "Modernizing a heritage coffee roaster",
    image: "https://picsum.photos/seed/coffee/1200/800",
    media: [
      { type: 'image', src: "https://picsum.photos/seed/coffee/1920/1080" },
      { type: 'image', src: "https://picsum.photos/seed/coffee-1/1920/1080" }
    ],
    overview: {
      objective: "Refresh the visual identity of a 50-year-old coffee roasting company.",
      challenges: "Honoring the brand's heritage while appealing to a younger, modern audience.",
      description: "We updated the logo, packaging, and digital presence of Heritage Roasters, focusing on storytelling and the craft of coffee making."
    },
    process: ["Brand Audit", "Visual Identity Design", "Packaging Design", "Digital Strategy"],
    outcome: "A revitalized brand that successfully bridged the gap between traditional quality and modern aesthetics.",
    achievements: [
      "Increased online sales by 40% post-rebrand.",
      "Won a regional design award for the new packaging.",
      "Successfully launched a new line of specialty single-origin beans."
    ]
  }
];

const DynamicMediaShowcase: React.FC<{ media: MediaItem[] }> = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % media.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, media.length]);

  return (
    <div className="space-y-8">
      {/* Main Media Display */}
      <div 
        className="relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl bg-ink/10 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {media[activeIndex].type === 'image' ? (
              <img 
                src={media[activeIndex].src} 
                alt={`Media ${activeIndex}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                src={media[activeIndex].src} 
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Overlay Gradient - Removed for pure light theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Thumbnails / Controls */}
      <div className="flex justify-center gap-4">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setIsAutoPlaying(false);
            }}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              activeIndex === index ? 'border-accent scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            {item.type === 'image' ? (
              <img src={item.src} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-full h-full bg-ink/10 flex items-center justify-center">
                <Video size={16} className="text-ink" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectDetail: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg text-ink pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted hover:text-accent transition-colors font-medium group mb-12"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Works
        </button>

        {/* 1. Dynamic Hero Media */}
        <div className="mb-24">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <DynamicMediaShowcase media={project.media} />
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">{project.title}</h1>
              <p className="text-xl text-muted uppercase tracking-widest">{project.shortDescription}</p>
            </motion.div>
          </div>
        </div>

        <div className="space-y-32">
          {/* 2. Project Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32"
          >
            <div className="space-y-12">
              <div>
                <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Project Overview</h4>
                <p className="text-3xl font-bold tracking-tight">Objective</p>
                <p className="text-muted mt-4 text-lg leading-relaxed">{project.overview.objective}</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight">Challenges</p>
                <p className="text-muted mt-4 text-lg leading-relaxed">{project.overview.challenges}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xl text-muted leading-relaxed border-l border-accent/30 pl-8">
                {project.overview.description}
              </p>
            </div>
          </motion.div>

          {/* 3. Image Section - Replaced by Dynamic Media for consistency or removed if redundant */}
          {/* We keep the rest of the sections as they provide context */}

          {/* 4. Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-12">Design Process</h4>
            <div className="flex flex-wrap gap-6">
              {project.process.map((step, i) => (
                <motion.div 
                  key={step} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-10 py-5 bg-ink/5 border border-line rounded-full text-xl font-medium"
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 5. Outcome & 6. Key Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32"
          >
            <div>
              <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Outcome</h4>
              <p className="text-2xl leading-relaxed font-medium">
                {project.outcome}
              </p>
            </div>
            <div>
              <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Key Achievements</h4>
              <ul className="space-y-6">
                {project.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 text-muted text-lg"
                  >
                    <span className="text-accent font-bold">0{i + 1}</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const WorkShowcase: React.FC<{ onProjectClick: (project: Project) => void }> = ({ onProjectClick }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const totalProjects = PROJECTS.length;

  const handleToggle = () => {
    if (visibleCount < totalProjects) {
      setVisibleCount(prev => Math.min(prev + 4, totalProjects));
    } else {
      setVisibleCount(4);
    }
  };

  return (
    <section id="projects" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">ALL WORKS.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {PROJECTS.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                layout
                onClick={() => onProjectClick(project)}
                className="group cursor-pointer"
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6 border border-line shadow-xl shadow-black/5">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.7 }}
                    referrerPolicy="no-referrer"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-white border border-line rounded-full flex items-center justify-center text-ink transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-lg">
                      <ArrowUpRight size={32} />
                    </div>
                  </motion.div>
                </div>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted uppercase tracking-widest text-sm">{project.category}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalProjects > 4 && (
          <div className="mt-20 flex justify-center">
            <motion.button
              onClick={handleToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full border border-line text-sm font-semibold tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300"
            >
              {visibleCount < totalProjects ? 'View More' : 'Show Less'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};



const About = () => {
  return (
    <section id="about" className="py-24 lg:py-48 bg-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Who I Am</h2>
            <h3 className="text-5xl font-bold tracking-tighter mb-8">ABOUT.</h3>
            
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://i.ibb.co/ks4vhZcr/ME.png" 
                alt="Purvi Singhvi" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl font-medium leading-tight">
                I’m a multidisciplinary designer with a background in graphic and digital design, currently focusing on UI/UX and user-centered design.
              </p>
              <p className="text-xl text-muted leading-relaxed">
                I create visually strong and intuitive digital experiences, combining aesthetics with functionality to solve real user problems. My approach is rooted in clarity, simplicity, and thoughtful decision-making—ensuring every design is purposeful, usable, and engaging.
              </p>
              <div className="py-8 border-y border-line">
                <p className="text-3xl font-display italic text-accent">
                  "Good design gets attention. Great design keeps people."
                </p>
              </div>
              <p className="text-lg text-muted leading-relaxed">
                Outside of design, I enjoy observing everyday experiences, exploring ideas, and constantly learning to improve my craft.
              </p>
              
              <div className="flex gap-12 pt-8">
                <div>
                  <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-2">Based in</h4>
                  <p className="font-bold">Jaipur, India</p>
                </div>
                <div>
                  <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-2">Experience</h4>
                  <p className="font-bold">4+ Years</p>
                </div>
                <div>
                  <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-2">Focus</h4>
                  <p className="font-bold">UI/UX & Branding</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StillStoriesPage = () => {
  const [selectedImage, setSelectedImage] = useState<PhotographyItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-ink transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <div className="mb-24">
          <h2 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Visuals</h2>
          <h3 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">Still Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHOTOGRAPHY.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl aspect-[3/4]"
              onClick={() => setSelectedImage(photo)}
            >
              <motion.img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">{photo.category}</p>
                <h4 className="text-2xl font-bold text-ink">{photo.title}</h4>
                <div className="mt-4 w-12 h-12 bg-white border border-line rounded-full flex items-center justify-center text-ink transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-md">
                  <Eye size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-ink/60 hover:text-ink transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center">
                <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">{selectedImage.category}</p>
                <h4 className="text-3xl font-bold">{selectedImage.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const InMotionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-ink transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>
      <InMotion items={MOTION} />
    </div>
  );
};


const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-48 overflow-hidden bg-bg">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Thin Divider Line Above Section */}
        <div className="w-full h-px bg-line mb-32" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Emotional Hook */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-10">
                Let’s build <br />
                <span className="text-gradient">something</span> <br />
                meaningful.
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl text-muted max-w-md leading-relaxed mb-16"
              >
                I’m always open to new projects, collaborations, and creative conversations.
              </motion.p>

              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col gap-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent/80">Email</span>
                  <a href="mailto:purvisinghvi10@gmail.com" className="text-2xl md:text-4xl font-medium hover:text-accent transition-all duration-300">
                    purvisinghvi10@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent/80">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/purvi-singhvi-65a52927a/" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl font-medium hover:text-accent transition-all duration-300">
                    LinkedIn Profile
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-ink/[0.02] p-8 md:p-14 rounded-[40px] border border-line backdrop-blur-2xl shadow-2xl">
              <form className="space-y-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-line py-5 focus:border-accent focus:shadow-[0_4px_20px_-10px_rgba(99,102,241,0.3)] outline-none transition-all duration-500 placeholder:text-ink/10 text-lg" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-line py-5 focus:border-accent focus:shadow-[0_4px_20px_-10px_rgba(99,102,241,0.3)] outline-none transition-all duration-500 placeholder:text-ink/10 text-lg" 
                    placeholder="Your Email" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-transparent border-b border-line py-5 focus:border-accent focus:shadow-[0_4px_20px_-10px_rgba(99,102,241,0.3)] outline-none transition-all duration-500 resize-none placeholder:text-ink/10 text-lg" 
                    placeholder="Tell me about your project..." 
                  />
                </div>
                <MagneticButton>
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-7 bg-transparent border border-line text-ink rounded-full font-bold text-xl hover:bg-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl shadow-black/5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span> Send Message
                  </motion.button>
                </MagneticButton>
              </form>
            </div>
            
            {/* Floating Glow Behind Form */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Purvi Singhvi
        </p>
        <div className="flex gap-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
          <a href="https://www.linkedin.com/in/purvi-singhvi-65a52927a/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Github size={20} /></a>
        </div>
        <p className="text-muted text-sm font-mono uppercase tracking-widest">
          Designed with Purpose
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

const HomePage = ({ onProjectClick }: { onProjectClick: (project: Project) => void }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <WorkShowcase onProjectClick={onProjectClick} />
      <About />
      <Contact />
    </>
  );
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    navigate(`/project/${project.id}`);
  };

  const handleBackToWorks = () => {
    navigate('/');
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-ink relative">
      <div className="noise-overlay" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage onProjectClick={handleProjectClick} />
              <Footer />
            </motion.div>
          } />
          
          <Route path="/project/:id" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {selectedProject ? (
                <ProjectDetail 
                  project={selectedProject} 
                  onBack={handleBackToWorks} 
                />
              ) : (
                <div className="min-h-screen flex items-center justify-center">
                  <p className="text-muted">Project not found. <Link to="/" className="text-accent underline">Go back</Link></p>
                </div>
              )}
              <Footer />
            </motion.div>
          } />

          <Route path="/still-stories" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StillStoriesPage />
              <Footer />
            </motion.div>
          } />

          <Route path="/in-motion" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InMotionPage />
              <Footer />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
