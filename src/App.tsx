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
  ArrowLeft,
  Smartphone,
  Info,
  Target,
  AlertCircle,
  Zap,
  User
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg/95 backdrop-blur-xl py-5 border-b border-line shadow-lg' : 'bg-bg/50 backdrop-blur-md py-6 border-b border-white/5'}`}>
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
              className="text-[17px] font-medium text-muted hover:text-ink transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/#contact" 
            className="px-6 py-3 bg-ink text-bg rounded-full text-[17px] font-semibold hover:bg-accent hover:text-white transition-all shadow-sm"
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
    <section className="min-h-screen pt-64 pb-48 flex items-center bg-bg overflow-visible">
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
            <h2 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-6">
              Purvi Singhvi
            </h2>
            <h1 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-tighter overflow-visible pb-4">
              Multidisciplinary <br />
              <span className="inline-block text-gradient">Designer</span>
            </h1>
          </div>
          <p className="text-[16px] leading-[1.6] text-muted max-w-[600px] mt-3">
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

  const isUIUX = project.category.toLowerCase().includes('ui/ux');

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase font-bold text-accent mb-4">{children}</h4>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-[28px] md:text-[40px] font-semibold leading-[1.1] tracking-tighter text-ink mb-10">{children}</h3>
  );

  const Subheading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <h4 className={`text-[20px] md:text-[24px] font-semibold text-ink mb-5 ${className}`}>{children}</h4>
  );

  const BodyText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <p className={`text-[16px] md:text-[18px] leading-[1.6] text-ink/70 font-medium ${className}`}>{children}</p>
  );

  const GridSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-24 md:mb-32 ${className}`}
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg text-ink pb-32 pt-20 md:pt-24"
    >
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden mb-16 md:mb-24">
        <div className="absolute inset-0 z-0">
          {project.media && project.media.length > 0 && (
            <div className="w-full h-full">
              {project.media[0].type === 'image' ? (
                <img 
                  src={project.media[0].src} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  src={project.media[0].src} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10" />
        
        <div className="absolute top-8 md:top-12 left-6 md:left-10 z-30">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 hover:border-white/20 transition-all duration-300 rounded-full font-semibold text-[14px] md:text-[15px] group shadow-xl"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" /> 
            <span>Back</span>
          </button>
        </div>

        <div className="absolute bottom-12 md:bottom-20 left-0 right-0 z-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <h1 className="text-[clamp(32px,8vw,72px)] font-semibold leading-[1.1] tracking-tighter text-white mb-6">
                {project.title}
              </h1>
              <p className="text-[16px] md:text-[20px] leading-[1.5] text-white/90 max-w-2xl font-medium">
                {project.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* 1. PROJECT OVERVIEW */}
        <GridSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: Objective/Goal */}
            <div className="lg:col-span-7">
              <SectionLabel>Overview</SectionLabel>
              <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.2] text-ink mb-8">
                {project.overview.objective}
              </h2>
              <BodyText className="max-w-2xl">
                {project.overview.description}
              </BodyText>
            </div>

            {/* Right: Project Details Meta */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12 pt-4">
              <div>
                <SectionLabel>Role</SectionLabel>
                <p className="text-[16px] md:text-[17px] font-bold text-ink">{project.overview.role || 'Designer'}</p>
              </div>
              <div>
                <SectionLabel>Duration</SectionLabel>
                <p className="text-[16px] md:text-[17px] font-bold text-ink">{project.overview.duration || project.overview.timeline || '4 Weeks'}</p>
              </div>
              <div className="col-span-2">
                <SectionLabel>Responsibilities</SectionLabel>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {project.overview.responsibilities?.map(res => (
                    <span key={res} className="text-[15px] md:text-[16px] font-medium text-ink/60">{res}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <SectionLabel>Tools</SectionLabel>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {project.overview.tools?.map(tool => (
                    <span key={tool} className="text-[15px] md:text-[16px] font-medium text-ink/60">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GridSection>

        {/* SHOWCASE VIDEO */}
        {project.showcaseVideo && (
          <div className="mb-24 md:mb-40">
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-line shadow-2xl bg-black/5">
              <video 
                src={project.showcaseVideo} 
                controls 
                className="w-full h-full object-cover"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* 2. THE PROCESS (For Non-UI/UX) */}
        {!isUIUX && project.process && (
          <GridSection>
            <div className="max-w-4xl">
              <SectionLabel>Process</SectionLabel>
              <SectionTitle>How it came to life</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {project.process.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-[32px] font-display font-bold text-accent/20 leading-none">0{i+1}</span>
                    <div>
                      <h5 className="text-[18px] font-bold text-ink mb-2">{step}</h5>
                      <div className="w-8 h-0.5 bg-accent/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GridSection>
        )}

        {/* UI/UX SPECIFIC SECTIONS */}
        {isUIUX && (
          <>
            {/* 2. THE PROBLEM */}
            <GridSection>
              <div className="max-w-[800px]">
                <SectionLabel>Problem</SectionLabel>
                <BodyText className="text-[24px] md:text-[28px] font-bold text-ink leading-tight">
                  {project.problemDefinition || project.problemStatement || project.overview.challenges}
                </BodyText>
              </div>
            </GridSection>

            {/* 2. USER RESEARCH */}
            {(project.userResearch || project.painPoints || project.userPersona || project.journeyMapping) && (
              <div className="mb-24 md:mb-32">
                <SectionLabel>User Research</SectionLabel>
                <SectionTitle>Understanding the User</SectionTitle>
                
                {/* Pain Points - 3 Columns */}
                {project.painPoints && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {project.painPoints.map((point, i) => (
                      <div key={i} className="p-8 bg-ink/[0.02] border border-line rounded-2xl">
                        <span className="text-accent font-bold text-[13px] mb-4 block uppercase tracking-wider">Pain Point 0{i+1}</span>
                        <BodyText className="font-medium text-ink">{point}</BodyText>
                      </div>
                    ))}
                  </div>
                )}

                {/* Persona - Card Layout */}
                {project.userPersona && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-ink/[0.02] p-8 lg:p-16 rounded-[40px] border border-line mb-16">
                    {/* Left: Circular Image & Basic Info */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
                        <img src={project.userPersona.image} alt={project.userPersona.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-[28px] font-bold text-ink">{project.userPersona.name}</h3>
                        <p className="text-accent font-bold uppercase tracking-widest text-[12px]">{project.userPersona.basicInfo}</p>
                      </div>
                      
                      {/* Device Usage - Small Icons/Text */}
                      {project.userPersona.deviceUsage && (
                        <div className="mt-10 pt-10 border-t border-line w-full">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-4 flex items-center gap-2">
                            <Smartphone size={14} /> Device Usage
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.userPersona.deviceUsage.map((device, i) => (
                              <span key={i} className="px-3 py-1 bg-white border border-line rounded-full text-[12px] font-medium text-ink/70">{device}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Content Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {/* About */}
                      <div className="md:col-span-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-3 flex items-center gap-2">
                          <Info size={14} /> About
                        </h4>
                        <p className="text-[16px] leading-relaxed text-ink/80 font-medium">{project.userPersona.about}</p>
                      </div>

                      {/* Goals & Needs */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-4 flex items-center gap-2">
                          <Target size={14} /> Goals & Needs
                        </h4>
                        <ul className="space-y-3">
                          {(project.userPersona.needs || [project.userPersona.goal]).map((goal, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span className="text-[14px] leading-tight font-medium text-ink/80">{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Frustrations */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-4 flex items-center gap-2">
                          <AlertCircle size={14} /> Frustrations
                        </h4>
                        <ul className="space-y-3">
                          {(project.userPersona.frustrations || project.userPersona.painPoints).map((p, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                              <span className="text-[14px] leading-tight font-medium text-ink/80">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Motivations */}
                      {project.userPersona.motivations && (
                        <div className="md:col-span-2 pt-6 border-t border-line">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-4 flex items-center gap-2">
                            <Zap size={14} /> Motivations
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.userPersona.motivations.map((m, i) => (
                              <span key={i} className="px-4 py-2 bg-accent/5 text-accent rounded-xl text-[13px] font-bold border border-accent/10">{m}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Journey - Full Width Visual */}
                {project.journeyMapping && (
                  <div className="space-y-8">
                    <div className="max-w-2xl">
                      <Subheading>User Journey Map</Subheading>
                      <BodyText>{project.journeyMapping.description}</BodyText>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-line">
                      <img src={project.journeyMapping.image} alt="Journey Map" className="w-full h-auto" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3. STARTING DESIGN */}
            {(project.appMap || project.userFlow || project.wireframes || project.uiDesign) && (
              <div className="mb-24 md:mb-32">
                <SectionLabel>Starting Design</SectionLabel>
                <SectionTitle>Architecting the Solution</SectionTitle>
                
                <div className="space-y-24">
                  {/* App Map */}
                  {project.appMap && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                      <div className="lg:col-span-5 space-y-4">
                        <Subheading>Information Architecture</Subheading>
                        <BodyText>{project.appMap.description}</BodyText>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="rounded-xl overflow-hidden border border-line bg-ink/[0.02]">
                          <img src={project.appMap.image} alt="App Map" className="w-full h-auto" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* User Flow */}
                  {project.userFlow && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                      <div className="lg:col-span-5 lg:order-2 space-y-4">
                        <Subheading>User Flow</Subheading>
                        <BodyText>{project.userFlow.description}</BodyText>
                      </div>
                      <div className="lg:col-span-7 lg:order-1">
                        <div className="rounded-xl overflow-hidden border border-line bg-ink/[0.02]">
                          <img src={project.userFlow.image} alt="User Flow" className="w-full h-auto" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Wireframes */}
                  {project.wireframes && (
                    <div className="space-y-12 py-16 md:py-24 flex flex-col items-center text-center">
                      <div className="max-w-3xl">
                        <Subheading>Digital Wireframes</Subheading>
                        <BodyText className="text-center">{project.wireframes.description}</BodyText>
                      </div>
                      <div className="w-full max-w-5xl">
                        {project.wireframes.images?.map((img, i) => (
                          <div key={i} className="rounded-2xl overflow-hidden border border-line bg-ink/[0.02] p-4 shadow-sm mb-8 last:mb-0">
                            <img src={img} alt="Wireframe" className="w-full h-auto rounded-lg" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                        {project.wireframes.sections?.map((section, idx) => (
                          <div key={idx} className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 last:mb-0">
                            {section.images.map((img, i) => (
                              <div key={i} className="rounded-2xl overflow-hidden border border-line bg-ink/[0.02] p-4">
                                <img src={img} alt={section.title} className="w-full h-auto rounded-lg" referrerPolicy="no-referrer" />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. REFINING DESIGN */}
            {(project.mockups || project.highFidelityUI || project.finalUI) && (
              <div className="mb-24 md:mb-32">
                <SectionLabel>Refining Design</SectionLabel>
                <SectionTitle>Polishing the Experience</SectionTitle>

                {/* Mockups - Grid Layout */}
                {project.mockups && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {project.mockups.images.map((img, i) => (
                      <div key={i} className="rounded-3xl overflow-hidden border border-line shadow-lg">
                        <img src={img} alt="Mockup" className="w-full h-auto" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                )}

                {/* High Fidelity - Aligned Rows */}
                {project.highFidelityUI && (
                  <div className="space-y-16">
                    <div className="max-w-2xl">
                      <Subheading>High-Fidelity Interface</Subheading>
                      <BodyText>{project.highFidelityUI.description}</BodyText>
                    </div>
                    <div className="space-y-12">
                      {project.highFidelityUI.images.map((img, i) => (
                        <div key={i} className="rounded-[32px] overflow-hidden border border-line shadow-2xl">
                          <img src={img} alt="High Fidelity" className="w-full h-auto" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Final UI Groups */}
                {project.finalUI && (
                  <div className="mt-24 space-y-24">
                    {Object.entries(project.finalUI).map(([key, section]) => (
                      <div key={key} className="space-y-8">
                        <div className="max-w-2xl">
                          <Subheading className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</Subheading>
                          <BodyText>{section.description}</BodyText>
                        </div>
                        <div className="grid grid-cols-1 gap-12">
                          {section.images.map((img, i) => (
                            <div key={i} className="rounded-[32px] overflow-hidden border border-line shadow-xl">
                              <img src={img} alt={key} className="w-full h-auto" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 5. USABILITY STUDIES */}
            {(project.usabilityThinking || project.interactionThinking) && (
              <div className="mb-24 md:mb-32">
                <SectionLabel>Usability Studies</SectionLabel>
                <SectionTitle>Testing & Iteration</SectionTitle>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 bg-ink/[0.02] border border-line rounded-2xl md:col-span-2">
                    <SectionLabel>Key Insights</SectionLabel>
                    <p className="text-[20px] leading-[1.5] font-semibold text-ink/90">
                      {project.usabilityThinking}
                    </p>
                  </div>
                  <div className="p-8 bg-accent/5 border border-accent/10 rounded-2xl">
                    <SectionLabel>Interaction Goal</SectionLabel>
                    <BodyText className="font-medium">
                      {project.interactionThinking || "Ensuring seamless transitions and intuitive feedback loops across all user touchpoints."}
                    </BodyText>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* IMAGE SHOWCASE (For non-UI/UX projects) */}
        {project.imageShowcase && (
          <GridSection className="mb-32 md:mb-48 space-y-24 md:space-y-40">
            {project.imageShowcase.fullWidth && (
              <div className="w-full rounded-[32px] md:rounded-[48px] overflow-hidden border border-line shadow-2xl">
                <img 
                  src={project.imageShowcase.fullWidth} 
                  alt="Project Showcase Full" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            
            {project.imageShowcase.grid && project.imageShowcase.grid.length > 0 && (
              <div className={`grid grid-cols-1 ${
                project.imageShowcase.grid.length === 2 ? 'md:grid-cols-2' : 
                project.imageShowcase.grid.length === 3 ? 'md:grid-cols-3' : 
                'md:grid-cols-2'
              } gap-8 md:gap-16`}>
                {project.imageShowcase.grid.map((img, i) => (
                  <div key={i} className="rounded-3xl overflow-hidden border border-line shadow-xl bg-ink/[0.02]">
                    <img 
                      src={img} 
                      alt={`Showcase Grid ${i}`} 
                      className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            )}
          </GridSection>
        )}

        {/* 6. OUTCOME */}
        <GridSection className="mb-24 md:mb-32 pt-24 border-t border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Project Outcome</SectionLabel>
              <h3 className="text-[28px] md:text-[36px] font-semibold leading-tight text-ink">
                Final Reflections & Results
              </h3>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <Subheading>Takeaways</Subheading>
                <BodyText className="text-ink/60">{project.outcome}</BodyText>
              </div>
              <div>
                <Subheading>Impact</Subheading>
                <ul className="space-y-4">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <BodyText className="text-[15px] md:text-[16px] !leading-snug">{achievement}</BodyText>
                    </li>
                  ))}
                </ul>
              </div>
              {project.learnings && project.learnings.length > 0 && (
                <div className="md:col-span-2 pt-12 border-t border-line/50">
                  <Subheading>Key Learnings</Subheading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.learnings.map((learning, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="text-accent font-bold text-[14px]">0{i+1}</span>
                        <BodyText className="text-[15px] md:text-[16px]">{learning}</BodyText>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </GridSection>

        {/* DESIGN SYSTEM */}
        {project.designSystem && (
          <GridSection className="mb-24 md:mb-32 pt-24 border-t border-line">
            <SectionLabel>Design System</SectionLabel>
            <div className="space-y-24">
              {/* Color Palette */}
              <div>
                <Subheading className="mb-8">Color Palette</Subheading>
                <div className="flex flex-wrap gap-8 md:gap-12">
                  {project.designSystem.colors.map((color, i) => (
                    <div key={i} className="flex flex-col items-center gap-4">
                      <div 
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-line shadow-sm" 
                        style={{ backgroundColor: color.hex }} 
                      />
                      <div className="text-center">
                        <p className="text-[14px] font-bold text-ink">{color.label}</p>
                        <p className="text-[12px] font-mono text-ink/40 uppercase tracking-wider">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              {project.designSystem.typography && project.designSystem.typography.length > 0 && (
                <div>
                  <Subheading className="mb-8">Typography</Subheading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {project.designSystem.typography.map((font, i) => (
                      <div key={i} className="space-y-6">
                        <div className="border-b border-line pb-4">
                          <p className="text-[12px] text-accent font-bold uppercase tracking-widest mb-1">{font.type} — {font.usage}</p>
                          <h4 className="text-[24px] font-semibold text-ink">{font.fontFamily}</h4>
                        </div>
                        <div className="py-4">
                          {font.type === 'Heading' ? (
                            <p className="text-[80px] md:text-[120px] leading-none font-bold text-ink/10" style={{ fontFamily: font.fontFamily }}>Aa</p>
                          ) : (
                            <p className="text-[16px] md:text-[18px] leading-relaxed text-ink/60 max-w-md" style={{ fontFamily: font.fontFamily }}>
                              The quick brown fox jumps over the lazy dog. A refined and cohesive brand identity that elevated Silver Leaf’s visual presence and established it as a minimal, premium jewelry brand across all touchpoints.
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </GridSection>
        )}
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
    <section id="projects" className="py-32 md:py-48 bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="mb-20">
          <h2 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-6">Portfolio</h2>
          <h3 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-tighter">Design Stories.</h3>
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
                <h4 className="text-[28px] font-medium leading-[1.2] tracking-tight mb-3">{project.title}</h4>
                <p className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent">{project.category}</p>
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
    <section id="about" className="py-32 md:py-48 bg-ink/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-6">Who I Am</h2>
            <h3 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-tighter mb-12">ABOUT.</h3>
            
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
              <p className="text-[28px] font-medium leading-[1.2] tracking-tight">
                I’m a multidisciplinary designer with a background in graphic and digital design, currently focusing on UI/UX and user-centered design.
              </p>
              <p className="text-[16px] leading-[1.6] text-muted max-w-[600px]">
                I create visually strong and intuitive digital experiences, combining aesthetics with functionality to solve real user problems. My approach is rooted in clarity, simplicity, and thoughtful decision-making—ensuring every design is purposeful, usable, and engaging.
              </p>
              <div className="py-12 border-y border-line">
                <p className="text-[28px] font-serif italic text-accent leading-[1.2]">
                  "Good design gets attention. Great design keeps people."
                </p>
              </div>
              <p className="text-[16px] leading-[1.6] text-muted max-w-[600px]">
                Outside of design, I enjoy observing everyday experiences, exploring ideas, and constantly learning to improve my craft.
              </p>
              
              <div className="flex flex-wrap gap-16 pt-8">
                <div>
                  <h4 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-3">Based in</h4>
                  <p className="text-[16px] font-bold tracking-tight">Jaipur, India</p>
                </div>
                <div>
                  <h4 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-3">Experience</h4>
                  <p className="text-[16px] font-bold tracking-tight">4+ Years</p>
                </div>
                <div>
                  <h4 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-3">Focus</h4>
                  <p className="text-[16px] font-bold tracking-tight">UI/UX & Branding</p>
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
    <section className="min-h-screen py-32 md:py-48 bg-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Link to="/" className="inline-flex items-center gap-3 text-accent hover:text-ink transition-all duration-500 mb-16 group font-bold text-xs uppercase tracking-[0.2em]">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" />
          Back to Portfolio
        </Link>
        
        <div className="mb-32">
          <h2 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-6">Visuals</h2>
          <h3 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-tighter uppercase">Still Stories</h3>
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
                <p className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-2">{selectedImage.category}</p>
                <h4 className="text-[28px] font-medium leading-[1.2] tracking-tight mb-4">{selectedImage.title}</h4>
                {selectedImage.caption && (
                  <p className="text-[16px] leading-[1.6] text-muted italic">"{selectedImage.caption}"</p>
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-32 -mb-32 relative z-10">
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
    <section id="contact" className="relative py-32 md:py-48 overflow-visible bg-bg">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
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
              <h2 className="text-[clamp(48px,6vw,72px)] font-semibold leading-[1.05] tracking-tighter max-w-[520px] whitespace-normal break-normal">
                Let’s build <br />
                <span className="text-gradient">something</span> <br />
                meaningful.
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[16px] leading-[1.6] text-muted max-w-[600px] mt-5 mb-8"
              >
                I’m always open to new projects, collaborations, and creative conversations.
              </motion.p>

              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent">Email</span>
                  <a href="mailto:purvisinghvi10@gmail.com" className="text-[16px] font-medium hover:text-accent transition-all duration-300">
                    purvisinghvi10@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/purvi-singhvi-65a52927a/" target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium hover:text-accent transition-all duration-300">
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
                  <label className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-line py-5 focus:border-accent focus:shadow-[0_4px_20px_-10px_rgba(99,102,241,0.3)] outline-none transition-all duration-500 placeholder:text-ink/10 text-[16px]" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-line py-5 focus:border-accent focus:shadow-[0_4px_20px_-10px_rgba(99,102,241,0.3)] outline-none transition-all duration-500 placeholder:text-ink/10 text-[16px]" 
                    placeholder="Your Email" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-transparent border-b border-line py-5 focus:border-accent focus:shadow-[0_4px_20px_-10px_rgba(99,102,241,0.3)] outline-none transition-all duration-500 resize-none placeholder:text-ink/10 text-[16px]" 
                    placeholder="Tell me about your project..." 
                  />
                </div>
                <MagneticButton>
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-7 bg-transparent border border-line text-ink rounded-full font-bold text-[16px] hover:bg-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl shadow-black/5"
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-muted text-[14px] leading-[1.5]">
          © {new Date().getFullYear()} Purvi Singhvi
        </p>
        <div className="flex gap-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
          <a href="https://www.linkedin.com/in/purvi-singhvi-65a52927a/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Github size={20} /></a>
        </div>
        <p className="text-muted text-[12px] font-mono uppercase tracking-[1.5px] opacity-70">
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
