import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';
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
import { PROJECTS, PHOTOGRAPHY, MOTION } from './constants';
import { Project, PhotographyItem, MotionItem } from './types';
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg/80 backdrop-blur-md py-4 border-b border-line' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.ibb.co/vrFdk6Z/Asset-1-4x.png" alt="Logo" className="nav-logo" />
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

const Hero = ({ isTransitioning }: { isTransitioning?: boolean }) => {
  return (
    <section className="min-h-screen pt-48 pb-48 flex items-center bg-bg overflow-visible">
      <div className="max-w-7xl mx-auto px-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] items-center gap-16 lg:gap-24 overflow-visible">
        {/* Left: Video */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl glass group"
        >
          {!isTransitioning && (
            <video
              src="https://video.wixstatic.com/video/bc81e6_d5aa37e6da2f47c1807957fca600cbe3/1080p/mp4/file.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          {/* Subtle glow/glass effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 border border-line rounded-[inherit] pointer-events-none" />
          
          {/* Inner glass reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-ink/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          className="space-y-10 overflow-visible"
        >
          <div className="overflow-visible">
            <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 opacity-80">
              Purvi Singhvi
            </h2>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-[1.2] tracking-tighter overflow-visible pb-4">
              Multidisciplinary <br />
              <span className="inline-block text-gradient">Designer</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted max-w-xl leading-relaxed font-light">
            I design intuitive and visually engaging digital experiences that combine strong aesthetics with purposeful interaction.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <a 
              href="#projects" 
              className="px-10 py-5 border border-line text-ink rounded-full font-bold hover:border-accent hover:text-accent transition-all duration-500 flex items-center gap-2 group"
            >
              View Work <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 border border-line text-ink rounded-full font-bold hover:border-accent hover:text-accent transition-all duration-500"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  label?: string;
}

// PROJECTS is now imported from constants.ts

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
        className="relative aspect-[16/9] rounded-[32px] overflow-hidden shadow-2xl bg-ink/10 group"
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
            {media[activeIndex].label && (
              <div className="absolute top-4 left-4 bg-black/60 text-white text-[12px] px-3 py-1.5 rounded-full backdrop-blur-[6px] z-10 pointer-events-none">
                {media[activeIndex].label}
              </div>
            )}
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

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-12 opacity-80">{children}</h4>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg text-ink pt-48 pb-32"
    >
      <div className="max-w-7xl mx-auto px-10">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-muted hover:text-accent transition-all duration-500 font-bold text-xs uppercase tracking-[0.2em] group mb-16"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" /> Back to Works
        </button>

        {/* 1. Hero Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="mb-16"
          >
            <DynamicMediaShowcase media={project.media} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.65, 0, 0.35, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 leading-[0.9]">{project.title}</h1>
            <p className="text-lg md:text-xl text-muted uppercase tracking-[0.2em] font-semibold opacity-70">{project.shortDescription}</p>
          </motion.div>
        </div>

        <div className="space-y-64">
          {/* 2. Project Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-20"
          >
            <div className="lg:col-span-8 space-y-12">
              <SectionLabel>Project Overview</SectionLabel>
              <p className="text-2xl md:text-3xl text-muted leading-relaxed font-light">
                {project.overview.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                <div>
                  <h5 className="text-xl font-bold mb-4">Objective</h5>
                  <p className="text-muted leading-relaxed">{project.overview.objective}</p>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-4">Challenges</h5>
                  <p className="text-muted leading-relaxed">{project.overview.challenges}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pl-12 space-y-12 border-l border-line">
              {project.overview.role && (
                <div>
                  <h5 className="text-xs uppercase tracking-widest font-bold text-muted mb-2">Role</h5>
                  <p className="text-lg">{project.overview.role}</p>
                </div>
              )}
              {project.overview.timeline && (
                <div>
                  <h5 className="text-xs uppercase tracking-widest font-bold text-muted mb-2">Timeline</h5>
                  <p className="text-lg">{project.overview.timeline}</p>
                </div>
              )}
              {project.overview.tools && (
                <div>
                  <h5 className="text-xs uppercase tracking-widest font-bold text-muted mb-2">Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.overview.tools.map(tool => (
                      <span key={tool} className="text-sm bg-ink/5 px-3 py-1 rounded-full">{tool}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* 3. Problem Statement */}
          {project.problemStatement && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="max-w-4xl"
            >
              <SectionLabel>Problem Statement</SectionLabel>
              <p className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {project.problemStatement}
              </p>
            </motion.div>
          )}

          {/* 4. User Research */}
          {project.userResearch && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20"
            >
              <div className="space-y-12">
                <SectionLabel>User Research</SectionLabel>
                <p className="text-xl text-muted leading-relaxed">
                  {project.userResearch.description}
                </p>
              </div>
              <div className="bg-ink/[0.02] p-12 rounded-[32px] border border-line">
                <h5 className="text-xs uppercase tracking-widest font-bold text-accent mb-8">Key Insights</h5>
                <ul className="space-y-6">
                  {project.userResearch.insights.map((insight, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="text-accent font-mono text-sm mt-1">0{i+1}</span>
                      <p className="text-lg leading-relaxed">{insight}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* 5. User Flow */}
          {project.userFlow && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="space-y-12"
            >
              <SectionLabel>User Flow</SectionLabel>
              <p className="text-xl text-muted max-w-3xl leading-relaxed">
                {project.userFlow.description}
              </p>
              <div className="rounded-[32px] overflow-hidden border border-line bg-ink/5">
                <img 
                  src={project.userFlow.image} 
                  alt="User Flow" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          )}

          {/* 6. Wireframes */}
          {project.wireframes && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="space-y-12"
            >
              <SectionLabel>Wireframes</SectionLabel>
              <p className="text-xl text-muted max-w-3xl leading-relaxed">
                {project.wireframes.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.wireframes.images.map((img, i) => (
                  <div key={i} className="rounded-[24px] overflow-hidden border border-line bg-ink/5">
                    <img 
                      src={img} 
                      alt={`Wireframe ${i+1}`} 
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 7. UI Design */}
          {project.uiDesign && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="space-y-12"
            >
              <SectionLabel>UI Design</SectionLabel>
              <p className="text-xl text-muted max-w-3xl leading-relaxed">
                {project.uiDesign.description}
              </p>
              <div className="space-y-12">
                {project.uiDesign.images.map((img, i) => (
                  <div key={i} className="rounded-[32px] overflow-hidden shadow-2xl">
                    <img 
                      src={img} 
                      alt={`UI Design ${i+1}`} 
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 8. Design Decisions */}
          {project.designDecisions && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            >
              <SectionLabel>Design Decisions</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.designDecisions.map((decision, i) => (
                  <div key={i} className="space-y-4">
                    <h5 className="text-2xl font-bold tracking-tight">{decision.title}</h5>
                    <p className="text-muted leading-relaxed">{decision.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 9. Prototype / Interaction */}
          {project.prototype && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="space-y-12"
            >
              <SectionLabel>Prototype / Interaction</SectionLabel>
              <p className="text-xl text-muted max-w-3xl leading-relaxed">
                {project.prototype.description}
              </p>
              {project.prototype.videoUrl && (
                <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-video bg-ink/10">
                  <video 
                    src={project.prototype.videoUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          )}

          {/* 10. Outcome & 11. Learnings */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40"
          >
            <div className="space-y-12">
              <div>
                <SectionLabel>Outcome</SectionLabel>
                <p className="text-3xl leading-relaxed font-medium tracking-tight">
                  {project.outcome}
                </p>
              </div>
              <div className="pt-12">
                <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-8 opacity-80">Key Achievements</h4>
                <ul className="space-y-8">
                  {project.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                      className="flex gap-8 text-muted text-xl font-light leading-relaxed"
                    >
                      <span className="text-accent font-bold tracking-tighter text-2xl">0{i + 1}</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            {project.learnings && (
              <div className="bg-ink/[0.02] p-12 rounded-[32px] border border-line h-fit">
                <SectionLabel>Learnings</SectionLabel>
                <ul className="space-y-8">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-3 shrink-0" />
                      <p className="text-lg text-muted leading-relaxed">{learning}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSlideshow: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full h-full group/slideshow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/slideshow:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
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
    <section id="projects" className="py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-32">
          <h2 className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-6 opacity-80">Portfolio</h2>
          <h3 className="text-7xl md:text-9xl font-bold tracking-tighter">Design Stories.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
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
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-8 border border-line shadow-2xl shadow-black/5 transition-all duration-700 group-hover:shadow-black/10">
                  {project.slideshowImages ? (
                    <ProjectSlideshow images={project.slideshowImages} title={project.title} />
                  ) : (
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      variants={{
                        hover: { scale: 1.08 }
                      }}
                      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <div className="w-20 h-20 bg-white border border-line rounded-full flex items-center justify-center text-ink transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-100 shadow-2xl">
                      <ArrowUpRight size={36} />
                    </div>
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold mb-3 tracking-tight">{project.title}</h4>
                <p className="text-muted uppercase tracking-[0.15em] text-xs font-semibold opacity-70">{project.category}</p>
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
    <section id="about" className="py-48 bg-ink/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          <div className="lg:col-span-4">
            <h2 className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-6 opacity-80">Who I Am</h2>
            <h3 className="text-7xl md:text-9xl font-bold tracking-tighter mb-12">ABOUT.</h3>
            
            <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
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
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="space-y-12"
            >
              <p className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">
                I’m a multidisciplinary designer with a background in graphic and digital design, currently focusing on UI/UX and user-centered design.
              </p>
              <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
                I create visually strong and intuitive digital experiences, combining aesthetics with functionality to solve real user problems. My approach is rooted in clarity, simplicity, and thoughtful decision-making—ensuring every design is purposeful, usable, and engaging.
              </p>
              <div className="py-12 border-y border-line">
                <p className="text-4xl md:text-5xl font-serif italic text-accent leading-tight">
                  "Good design gets attention. Great design keeps people."
                </p>
              </div>
              <p className="text-xl text-muted leading-relaxed font-light">
                Outside of design, I enjoy observing everyday experiences, exploring ideas, and constantly learning to improve my craft.
              </p>
              
              <div className="flex flex-wrap gap-16 pt-8">
                <div>
                  <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-3 opacity-80">Based in</h4>
                  <p className="text-xl font-bold tracking-tight">Jaipur, India</p>
                </div>
                <div>
                  <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-3 opacity-80">Experience</h4>
                  <p className="text-xl font-bold tracking-tight">4+ Years</p>
                </div>
                <div>
                  <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-3 opacity-80">Focus</h4>
                  <p className="text-xl font-bold tracking-tight">UI/UX & Branding</p>
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
    <section className="min-h-screen py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-10">
        <Link to="/" className="inline-flex items-center gap-3 text-accent hover:text-ink transition-all duration-500 mb-16 group font-bold text-xs uppercase tracking-[0.2em]">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" />
          Back to Portfolio
        </Link>
        
        <div className="mb-32">
          <h2 className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-6 opacity-80">Visuals</h2>
          <h3 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.9]">Still Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PHOTOGRAPHY.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="group relative cursor-pointer overflow-hidden rounded-[32px] aspect-[3/4] shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all duration-700"
              onClick={() => setSelectedImage(photo)}
            >
              <motion.img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.1]"
                referrerPolicy="no-referrer"
              />
              
              {/* Title */}
              <div className="absolute top-6 left-6 text-white text-[14px] font-bold uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-all duration-700 z-10">
                {photo.title}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
              
              {/* Caption */}
              {photo.caption && (
                <p className="absolute bottom-6 left-6 text-white text-[16px] font-light italic opacity-0 group-hover:opacity-90 transition-all duration-700 delay-100 z-10 pr-12 leading-relaxed">
                  {photo.caption}
                </p>
              )}

              {/* Minimal Eye Icon on Hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white">
                  <Eye size={20} />
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
              <div className="mt-8 text-center max-w-2xl">
                <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">{selectedImage.category}</p>
                <h4 className="text-3xl font-bold mb-4">{selectedImage.title}</h4>
                {selectedImage.caption && (
                  <p className="text-muted text-lg italic">"{selectedImage.caption}"</p>
                )}
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
      <div className="max-w-7xl mx-auto px-10 pt-32 -mb-32 relative z-10">
        <Link to="/" className="inline-flex items-center gap-3 text-accent hover:text-ink transition-all duration-500 group font-bold text-xs uppercase tracking-[0.2em]">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" />
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
    <section id="contact" className="relative py-[120px] px-6 md:px-[60px] overflow-visible bg-bg">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Thin Divider Line Above Section */}
        <div className="w-full h-px bg-line mb-32" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-[100px] items-center">
          {/* Left Side: Emotional Hook */}
          <div className="max-w-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-[clamp(48px,6vw,72px)] font-bold tracking-tighter leading-[1.05] max-w-[520px] whitespace-normal break-normal">
                Let’s build <br />
                <span className="text-gradient">something</span> <br />
                meaningful.
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl text-muted leading-relaxed mt-5 mb-8"
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
            className="relative max-w-[420px] lg:ml-auto w-full"
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
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">
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

const HomePage = ({ onProjectClick, isTransitioning }: { onProjectClick: (project: Project) => void; isTransitioning?: boolean }) => {
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
      <Hero isTransitioning={isTransitioning} />
      <WorkShowcase onProjectClick={onProjectClick} />
      <About />
      <Contact />
    </>
  );
};

const ProjectDetailWrapper = ({ onBack, selectedProject }: { onBack: () => void; selectedProject: Project | null }) => {
  const { id } = useParams<{ id: string }>();
  const project = selectedProject || PROJECTS.find(p => p.id.toString() === id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {project ? (
        <ProjectDetail 
          project={project} 
          onBack={onBack} 
        />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted">Project not found. <Link to="/" className="text-accent underline">Go back</Link></p>
        </div>
      )}
      <Footer />
    </motion.div>
  );
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleProjectClick = (project: Project) => {
    setIsTransitioning(true);
    
    // Smooth transition logic
    setTimeout(() => {
      setSelectedProject(project);
      navigate(`/project/${project.id}`);
      window.scrollTo(0, 0);
      
      // Reset transition state after a delay to allow the new page to start its entry animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 500);
  };

  const handleBackToWorks = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/');
      setSelectedProject(null);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 500);
  };

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-ink relative">
      <div className="noise-overlay" />
      <Navbar />
      
      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-bg z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <HomePage onProjectClick={handleProjectClick} isTransitioning={isTransitioning} />
              <Footer />
            </motion.div>
          } />
          
          <Route path="/project/:id" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProjectDetailWrapper onBack={handleBackToWorks} selectedProject={selectedProject} />
            </motion.div>
          } />

          <Route path="/still-stories" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <StillStoriesPage />
              <Footer />
            </motion.div>
          } />

          <Route path="/in-motion" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
