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
  User,
  Users,
  Lightbulb,
  Layers,
  CheckCircle,
  Clock,
  Briefcase,
  Wrench,
  Search
} from 'lucide-react';
import { PROJECTS, PHOTOGRAPHY, MOTION } from './constants';
import { Project, PhotographyItem, MotionItem } from './types';
import InMotion from './components/InMotion';

// --- Components ---

const IANode = ({ node, allNodes, depth = 0 }: { node: any, allNodes: any[], depth?: number }) => {
  const children = node.children?.map((childId: string) => allNodes.find(n => n.id === childId)).filter(Boolean) || [];
  
  return (
    <div className="flex flex-col items-center">
      {/* Node Box */}
      <div className={`
        px-2 py-1 rounded-lg border border-line bg-white shadow-sm min-w-[70px] text-center transition-all
        ${node.type === 'root' ? 'bg-ink text-white border-ink font-bold scale-105 px-4 py-2' : 'text-ink'}
        ${node.type === 'page' ? 'text-[9px] font-semibold bg-ink/[0.02]' : ''}
        ${node.type === 'category' ? 'text-[7px] px-1 py-0.5 opacity-60 bg-ink/[0.01] border-dashed min-w-[60px]' : 'text-[10px] font-medium'}
      `}>
        {node.label}
      </div>
      
      {children.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical line from parent */}
          <div className="w-px h-1.5 bg-line/20" />
          
          <div className="relative flex justify-center gap-0.5 md:gap-1">
            {children.map((child: any, idx: number) => (
              <div key={child.id} className="flex flex-col items-center relative">
                {/* Horizontal connector lines */}
                {children.length > 1 && (
                  <div 
                    className={`absolute top-0 h-px bg-line/20 ${
                      idx === 0 ? 'left-1/2 right-0' : 
                      idx === children.length - 1 ? 'left-0 right-1/2' : 
                      'left-0 right-0'
                    }`} 
                  />
                )}
                
                {/* Vertical line to child */}
                <div className="w-px h-1.5 bg-line/20" />
                
                <IANode node={child} allNodes={allNodes} depth={depth + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const IATree = ({ nodes, rootId }: { nodes: any[], rootId: string }) => {
  const rootNode = nodes.find(n => n.id === rootId);
  if (!rootNode) return null;
  return <IANode node={rootNode} allNodes={nodes} />;
};

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
          
          <a 
            href="https://i.ibb.co/Vp2H3GT5/Resume-purvi.png" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 border border-line text-muted rounded-full text-[17px] font-semibold hover:border-ink hover:text-ink transition-all flex items-center gap-2"
          >
            Resume <ExternalLink size={16} />
          </a>

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
            <a 
              href="https://i.ibb.co/Vp2H3GT5/Resume-purvi.png" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-medium flex items-center gap-2"
            >
              Resume <ExternalLink size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroVideo = ({ isTransitioning }: { isTransitioning?: boolean }) => {
  const scrollToHero = () => {
    const element = document.getElementById('hero-text');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black md:bg-bg">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full"
      >
        {!isTransitioning && (
          <video
            src="https://video.wixstatic.com/video/bc81e6_d5aa37e6da2f47c1807957fca600cbe3/1080p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain md:object-cover"
          />
        )}
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.05) 100%)' 
          }} 
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button 
        onClick={scrollToHero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40 hover:text-accent transition-colors cursor-pointer z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
};

const HeroContent = () => {
  return (
    <section id="hero-text" className="pt-24 pb-12 bg-bg">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          className="space-y-10"
        >
          <div className="">
            <h2 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-6">
              Purvi Singhvi
            </h2>
            <h1 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.15] tracking-tighter pb-6 overflow-visible h-auto">
              Communication <br />
              <span className="inline-block text-gradient">Designer</span>
            </h1>
          </div>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-muted max-w-[700px] mt-3">
            Crafting meaningful visual and digital experiences through purposeful design and storytelling.
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const isUIUX = project.category === "UI/UX Design";

  const GridSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`max-w-[1200px] mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </section>
  );

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-[12px] tracking-[0.2em] uppercase font-bold text-accent mb-4 flex items-center gap-2">
      <span className="w-8 h-px bg-accent/30" />
      {children}
    </h4>
  );

  const Subheading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <h3 className={`text-[24px] md:text-[32px] font-semibold leading-tight tracking-tight text-ink ${className}`}>
      {children}
    </h3>
  );

  const BodyText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`text-[16px] md:text-[18px] leading-[1.6] text-muted ${className}`}>
      {children}
    </p>
  );

  if (!isUIUX) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-bg min-h-screen pb-32"
      >
        {/* Simple Hero for Non-UI/UX */}
        <section className="relative pt-32 pb-24 border-b border-line">
          <GridSection>
            <motion.button 
              onClick={onBack}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 text-accent hover:text-ink transition-all duration-500 mb-12 group font-bold text-xs uppercase tracking-[0.2em]"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" />
              Back to Work
            </motion.button>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p className="text-[14px] tracking-[0.3em] uppercase font-bold text-accent mb-6">{project.category}</p>
                  <h1 className="text-[clamp(40px,5vw,72px)] font-bold leading-[1.1] tracking-tighter mb-8 text-ink">
                    {project.title}
                  </h1>
                  <p className="text-[18px] md:text-[22px] leading-relaxed text-muted max-w-[600px]">
                    {project.shortDescription || project.overview.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </GridSection>
        </section>

        {/* Featured Image */}
        <section className="py-12">
          <GridSection>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[40px] overflow-hidden shadow-2xl border border-line"
            >
              <img 
                src={project.heroImage || project.image} 
                alt={project.title} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </GridSection>
        </section>

        {/* Project Info */}
        <GridSection className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <SectionLabel>Overview</SectionLabel>
              <BodyText className="mb-12">{project.overview.description}</BodyText>
              
              <div className="space-y-8">
                <div>
                  <h5 className="text-[13px] font-bold uppercase tracking-widest text-accent mb-4">The Objective</h5>
                  <BodyText className="text-[16px]">{project.overview.objective}</BodyText>
                </div>
                {project.process && (
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-widest text-accent mb-4">Process</h5>
                    <div className="flex flex-wrap gap-3">
                      {project.process.map((step, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-ink/[0.03] border border-line text-[14px] font-medium">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="p-10 rounded-[32px] border border-line bg-ink/[0.02] space-y-10">
                {project.overview.role && (
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-ink/40 mb-3">Role</h5>
                    <p className="text-[18px] font-semibold text-ink">{project.overview.role}</p>
                  </div>
                )}
                {project.overview.duration && (
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-ink/40 mb-3">Duration</h5>
                    <p className="text-[18px] font-semibold text-ink">{project.overview.duration}</p>
                  </div>
                )}
                {project.overview.tools && (
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-ink/40 mb-3">Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.overview.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-bg border border-line text-[12px] font-medium text-muted">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GridSection>
        
        {/* Custom Sections for Non-UI/UX */}
        {project.customSections && project.customSections.map((section, idx) => (
          <section key={section.id} className={`${idx % 2 === 0 ? 'bg-bg' : 'bg-ink/[0.02] border-y border-line'} py-24 md:py-32`}>
            <GridSection>
              {section.fullWidth ? (
                <div className="space-y-12">
                  <div className="max-w-3xl">
                    <SectionLabel>{section.label || section.title}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                    {section.description && <BodyText className="max-w-[600px]">{section.description}</BodyText>}
                  </div>
                  {section.image && (
                    <div 
                      className="rounded-[32px] overflow-hidden border border-line shadow-2xl cursor-pointer"
                      onClick={() => setSelectedImage(section.image!)}
                    >
                      <img src={section.image} alt={section.title} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  {section.images && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {section.images.map((img, i) => (
                        <div 
                          key={i} 
                          className="rounded-3xl overflow-hidden border border-line shadow-lg cursor-pointer"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} alt={`${section.title} ${i}`} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : section.research ? (
                <div className="space-y-12">
                  <div className="max-w-3xl">
                    <SectionLabel>{section.label || section.title}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {section.research.map((col: any, i: number) => (
                      <div key={i} className="space-y-10">
                        <h4 className="text-[20px] font-bold text-ink border-b border-line pb-4">{col.title}</h4>
                        <div className="space-y-8">
                          {col.content.map((item: any, j: number) => (
                            <div key={j} className="space-y-4">
                              <h5 className="text-[14px] font-bold uppercase tracking-widest text-accent">{item.heading}</h5>
                              <ul className="space-y-3">
                                {item.points.map((point: string, k: number) => (
                                  <li key={k} className="flex gap-3 items-start text-[16px] text-muted leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : section.labeledImages ? (
                <div className="space-y-16">
                  <div className="max-w-3xl">
                    <SectionLabel>{section.label || section.title}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                    {section.description && <BodyText className="max-w-[600px]">{section.description}</BodyText>}
                  </div>
                  <div className={`grid ${section.labeledImages.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4 md:gap-8`}>
                    {section.labeledImages.map((item, i) => (
                      <div 
                        key={i} 
                        className="space-y-4 md:space-y-6 group cursor-pointer"
                        onClick={() => setSelectedImage(item.src)}
                      >
                        <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-line shadow-lg bg-white aspect-[4/3]">
                          <img 
                            src={item.src} 
                            alt={item.label} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            referrerPolicy="no-referrer" 
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-[14px] font-bold uppercase tracking-widest text-ink/40">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-5">
                    <SectionLabel>{section.label || section.title}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                    {section.description && <BodyText className="max-w-[600px] mb-8">{section.description}</BodyText>}
                    
                    {section.points && (
                      <ul className="space-y-4 mb-8">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex gap-3 items-start text-[15px] text-ink/80">
                            <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.insights && (
                      <div className="grid grid-cols-1 gap-4 mb-8">
                        {section.insights.map((insight, i) => (
                          <div key={i} className="p-6 rounded-2xl border border-line bg-bg">
                            <p className="text-[15px] font-medium text-ink">{insight}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-6 lg:col-start-7">
                    {section.image && (
                      <div 
                        className="rounded-[32px] overflow-hidden border border-line shadow-2xl cursor-pointer"
                        onClick={() => setSelectedImage(section.image!)}
                      >
                        <img src={section.image} alt={section.title} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    {section.images && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.images.map((img, i) => (
                          <div 
                            key={i} 
                            className="rounded-2xl overflow-hidden border border-line shadow-lg cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img src={img} alt={`${section.title} ${i}`} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </GridSection>
          </section>
        ))}

        {/* Video Showcase */}
        {project.showcaseVideo && (
          <section className="py-24 bg-ink">
            <GridSection>
              <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
                <video 
                  src={project.showcaseVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto"
                />
              </div>
            </GridSection>
          </section>
        )}

        {/* Image Showcase */}
        {project.imageShowcase && (
          <section className="py-24 space-y-24">
            {project.imageShowcase.fullWidth && (
              <GridSection>
                <div className="rounded-[40px] overflow-hidden border border-line shadow-2xl">
                  {typeof project.imageShowcase.fullWidth === 'string' ? (
                    <img src={project.imageShowcase.fullWidth} alt="Full Width" className="w-full h-auto" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="relative">
                      <img src={project.imageShowcase.fullWidth.src} alt={project.imageShowcase.fullWidth.label} className="w-full h-auto" referrerPolicy="no-referrer" />
                      {project.imageShowcase.fullWidth.label && (
                        <div className="absolute bottom-8 left-8 bg-black/60 text-white text-[12px] px-4 py-2 rounded-full backdrop-blur-md">
                          {project.imageShowcase.fullWidth.label}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </GridSection>
            )}
            
            {project.imageShowcase.grid && (
              <GridSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project.imageShowcase.grid.map((img, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-[32px] overflow-hidden border border-line shadow-xl group"
                    >
                      {typeof img === 'string' ? (
                        <img src={img} alt={`Grid ${i}`} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="relative h-full">
                          <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                          {img.label && (
                            <div className="absolute bottom-6 left-6 bg-black/60 text-white text-[11px] px-3 py-1.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                              {img.label}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </GridSection>
            )}
          </section>
        )}

        {/* Outcome for Non-UI/UX */}
        {project.outcome && (
          <GridSection className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <SectionLabel>The Outcome</SectionLabel>
                <Subheading className="mb-6">Final Results</Subheading>
                <BodyText>{project.outcome}</BodyText>
              </div>
              {project.achievements && (
                <div className="lg:col-span-6 lg:col-start-7 space-y-6">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-ink/[0.02] border border-line">
                      <CheckCircle size={20} className="text-accent shrink-0 mt-1" />
                      <p className="text-[16px] font-medium text-ink">{achievement}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </GridSection>
        )}

        {/* Footer Navigation */}
        <GridSection className="pt-32 border-t border-line">
          <div className="flex justify-between items-center">
            <button onClick={onBack} className="flex items-center gap-4 text-muted hover:text-accent transition-colors group font-bold uppercase tracking-widest text-[12px]">
              <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
              Previous Project
            </button>
            <button onClick={onBack} className="flex items-center gap-4 text-muted hover:text-accent transition-colors group font-bold uppercase tracking-widest text-[12px]">
              Next Project
              <ArrowUpRight size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </button>
          </div>
        </GridSection>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </motion.button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-bg min-h-screen pb-32"
    >
      {/* 1. HERO - Redesigned Full-Width Layout */}
      <section className="relative pt-32 md:pt-40 border-b border-line bg-bg overflow-hidden">
        <GridSection>
          {/* Text Block (Top) */}
          <div className="max-w-[600px] mb-16 md:mb-24 relative z-10">
            <motion.button 
              onClick={onBack}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 text-accent hover:text-ink transition-all duration-500 mb-12 group font-bold text-xs uppercase tracking-[0.2em]"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" />
              Back to Work
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-[14px] tracking-[0.3em] uppercase font-bold text-accent mb-6">{project.category}</p>
              <h1 className="text-[clamp(40px,8vw,96px)] font-bold leading-[0.9] tracking-tighter mb-8 text-ink">
                {project.title}
              </h1>
              <p className="text-[18px] md:text-[24px] leading-[1.4] text-muted font-medium">
                {project.shortDescription || project.overview.objective}
              </p>
            </motion.div>
          </div>
        </GridSection>

        {/* Image Block (Full Width, Controlled Height) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-full border-t border-line overflow-hidden"
        >
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={project.heroImage || project.image} 
            alt={project.title} 
            className="w-full h-[380px] md:h-[450px] object-cover block"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {project.customSections ? (
        project.customSections.map((section, idx) => (
          <section key={section.id} className={`${idx % 2 === 0 ? 'bg-bg' : 'bg-ink/[0.02] border-y border-line'} py-24 md:py-32`}>
            <GridSection>
              {section.fullWidth ? (
                <div className="space-y-12">
                  <div className="max-w-3xl">
                    <SectionLabel>{section.label}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                    <BodyText className="max-w-[600px]">{section.description}</BodyText>
                  </div>
                  {section.image && (
                    <div 
                      className="rounded-[32px] overflow-hidden border border-line shadow-2xl cursor-pointer"
                      onClick={() => setSelectedImage(section.image!)}
                    >
                      <img src={section.image} alt={section.title} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  {section.images && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {section.images.map((img, i) => (
                        <div 
                          key={i} 
                          className="rounded-3xl overflow-hidden border border-line shadow-lg cursor-pointer"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} alt={`${section.title} ${i}`} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : section.research ? (
                <div className="space-y-12">
                  <div className="max-w-3xl">
                    <SectionLabel>{section.label}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {section.research.map((col: any, i: number) => (
                      <div key={i} className="space-y-10">
                        <h4 className="text-[20px] font-bold text-ink border-b border-line pb-4">{col.title}</h4>
                        <div className="space-y-8">
                          {col.content.map((item: any, j: number) => (
                            <div key={j} className="space-y-4">
                              <h5 className="text-[14px] font-bold uppercase tracking-widest text-accent">{item.heading}</h5>
                              <ul className="space-y-3">
                                {item.points.map((point: string, k: number) => (
                                  <li key={k} className="flex gap-3 items-start text-[16px] text-muted leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : section.labeledImages ? (
                <div className="space-y-16">
                  <div className="max-w-3xl">
                    <SectionLabel>{section.label}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                    <BodyText className="max-w-[600px]">{section.description}</BodyText>
                  </div>
                  <div className="grid grid-cols-3 gap-4 md:gap-8">
                    {section.labeledImages.map((item, i) => (
                      <div 
                        key={i} 
                        className="space-y-4 md:space-y-6 group cursor-pointer"
                        onClick={() => setSelectedImage(item.src)}
                      >
                        <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-line shadow-lg bg-white aspect-[4/3]">
                          <img 
                            src={item.src} 
                            alt={item.label} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            referrerPolicy="no-referrer" 
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-[14px] font-bold uppercase tracking-widest text-ink/40">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-5">
                    <SectionLabel>{section.label}</SectionLabel>
                    <Subheading className="mb-6">{section.title}</Subheading>
                    <BodyText className="max-w-[600px] mb-8">{section.description}</BodyText>
                    
                    {section.points && (
                      <ul className="space-y-4 mb-8">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex gap-3 items-start text-[15px] text-ink/80">
                            <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.insights && (
                      <div className="grid grid-cols-1 gap-4 mb-8">
                        {section.insights.map((insight, i) => (
                          <div key={i} className="p-6 rounded-2xl border border-line bg-bg">
                            <p className="text-[15px] font-medium text-ink">{insight}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.content && (
                      <div className="mt-8 whitespace-pre-wrap font-mono text-[13px] text-ink/60 bg-ink/[0.03] p-6 rounded-2xl border border-line">
                        {section.content}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-6 lg:col-start-7">
                    {section.image && (
                      <div 
                        className="rounded-[32px] overflow-hidden border border-line shadow-2xl cursor-pointer"
                        onClick={() => setSelectedImage(section.image!)}
                      >
                        <img src={section.image} alt={section.title} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    )}
                    {section.images && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.images.map((img, i) => (
                          <div 
                            key={i} 
                            className="rounded-2xl overflow-hidden border border-line shadow-lg cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img src={img} alt={`${section.title} ${i}`} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                    )}
                    {section.decisions && (
                      <div className="space-y-6">
                        {section.decisions.map((decision, i) => (
                          <div key={i} className="p-8 rounded-3xl border border-line bg-white shadow-sm">
                            <h5 className="text-[18px] font-bold text-ink mb-2">{decision.title}</h5>
                            <p className="text-[15px] text-muted leading-relaxed">{decision.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </GridSection>
          </section>
        ))
      ) : (
        <>
          {/* 1. OVERVIEW */}
          <GridSection className="py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
                <SectionLabel>Overview</SectionLabel>
                <Subheading className="mb-8">Project Summary</Subheading>
                <BodyText className="mb-8 max-w-[600px]">{project.overview.description}</BodyText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                      <Target size={16} /> Objective
                    </h5>
                    <BodyText className="text-[16px]">{project.overview.objective}</BodyText>
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                      <Zap size={16} /> Challenges
                    </h5>
                    <BodyText className="text-[16px]">{project.overview.challenges}</BodyText>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="p-8 rounded-3xl border border-line bg-ink/[0.02] space-y-8">
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-ink/40 mb-3 flex items-center gap-2">
                      <Briefcase size={14} /> Role
                    </h5>
                    <p className="text-[16px] font-semibold text-ink">{project.overview.role || "Lead Designer"}</p>
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-ink/40 mb-3 flex items-center gap-2">
                      <Clock size={14} /> Duration
                    </h5>
                    <p className="text-[16px] font-semibold text-ink">{project.overview.duration || project.overview.timeline || "4 Weeks"}</p>
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-ink/40 mb-3 flex items-center gap-2">
                      <Wrench size={14} /> Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(project.overview.tools || ["Figma", "Adobe CC"]).map((tool, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-bg border border-line text-[12px] font-medium text-muted">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GridSection>

          {/* 2. CONTEXT */}
          {project.context && (
            <section className="bg-ink/[0.02] py-24 md:py-32 border-y border-line">
              <GridSection>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-5">
                    <SectionLabel>Context</SectionLabel>
                    <Subheading className="mb-6">The Background</Subheading>
                    <BodyText className="max-w-[600px]">{project.context}</BodyText>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7">
                    <div className="aspect-video rounded-3xl bg-ink/5 border border-line overflow-hidden shadow-sm">
                      {project.contextImage ? (
                        <img 
                          src={project.contextImage} 
                          alt="Context Visual" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center p-12">
                            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                              <Search size={32} />
                            </div>
                            <p className="text-[14px] font-bold uppercase tracking-widest text-ink/40">Market Research & Analysis</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </GridSection>
            </section>
          )}

          {/* 3. PROBLEM */}
          {project.problemStatement && (
            <section className="bg-ink text-white py-32 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <GridSection>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-10 lg:col-start-2 text-center">
                    <SectionLabel><span className="text-accent/60">Problem</span></SectionLabel>
                    <h2 className="text-[32px] md:text-[56px] font-bold leading-[1.1] tracking-tight mb-12 max-w-[900px] mx-auto">
                      {project.problemStatement}
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                  </div>
                </div>
              </GridSection>
            </section>
          )}

          {/* 4. USER UNDERSTANDING */}
          <section className="py-24 md:py-32">
            <GridSection>
              <div className="max-w-3xl mb-24">
                <SectionLabel>User Understanding</SectionLabel>
                <Subheading className="mb-6">Empathizing with the User</Subheading>
                <BodyText className="max-w-[600px]">To build a solution that truly resonates, I deep-dived into user behaviors, motivations, and pain points through extensive research and mapping.</BodyText>
              </div>

              {project.userResearch && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                  <div className="lg:col-span-5">
                    <h4 className="text-[24px] font-bold text-ink mb-6">Research Insights</h4>
                    <BodyText className="mb-8 max-w-[600px]">{project.userResearch.description}</BodyText>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.userResearch.insights.map((insight, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl border border-line bg-bg hover:border-accent/30 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                          <Lightbulb size={20} />
                        </div>
                        <p className="text-[16px] font-medium leading-relaxed text-ink">{insight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Persona */}
              {project.userPersona && (
                <div className="mb-32">
                  <div className="bg-white rounded-[48px] p-8 md:p-16 border border-line shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                      <div className="lg:col-span-4 flex flex-col items-center text-center">
                        <div className="relative mb-8">
                          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-bg shadow-xl">
                            <img 
                              src={project.userPersona.image || "https://picsum.photos/seed/persona/400/400"} 
                              alt={project.userPersona.name} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-[14px] font-bold shadow-lg whitespace-nowrap">
                            {project.userPersona.name.split(',')[1]?.trim() || "User"}
                          </div>
                        </div>
                        <h3 className="text-[24px] font-bold text-ink mb-2">{project.userPersona.name.split(',')[0]}</h3>
                        <p className="text-muted text-[15px] max-w-[280px]">{project.userPersona.profile.split('.')[0]}</p>
                      </div>
                      
                      <div className="lg:col-span-8 space-y-12">
                        <div>
                          <h5 className="text-[12px] font-bold uppercase tracking-widest text-accent mb-4">Profile</h5>
                          <p className="text-muted text-[16px] leading-relaxed max-w-[600px]">{project.userPersona.profile}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div>
                            <h5 className="text-[12px] font-bold uppercase tracking-widest text-accent mb-6">Goals & Needs</h5>
                            <ul className="space-y-4">
                              {project.userPersona.goals.map((item, i) => (
                                <li key={`goal-${i}`} className="flex gap-3 items-start text-[15px] text-ink/80">
                                  <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                              {project.userPersona.needs.map((item, i) => (
                                <li key={`need-${i}`} className="flex gap-3 items-start text-[15px] text-ink/80">
                                  <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-[12px] font-bold uppercase tracking-widest text-accent mb-6">Pain Points & Behavior</h5>
                            <ul className="space-y-4">
                              {project.userPersona.painPoints.map((item, i) => (
                                <li key={`pain-${i}`} className="flex gap-3 items-start text-[15px] text-ink/80">
                                  <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                              {project.userPersona.behavior.map((item, i) => (
                                <li key={`behavior-${i}`} className="flex gap-3 items-start text-[15px] text-ink/80">
                                  <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Journey Map */}
              {project.journeyMapping && (
                <div className="space-y-12">
                  <div className="max-w-2xl">
                    <h4 className="text-[24px] font-serif font-bold text-ink mb-4">User Journey Map</h4>
                    <BodyText className="max-w-[600px]">{project.journeyMapping.description}</BodyText>
                  </div>
                  
                  {project.journeyMapping.image ? (
                    <div className="rounded-[48px] overflow-hidden border border-line shadow-2xl bg-white p-4 md:p-8">
                      <img 
                        src={project.journeyMapping.image} 
                        alt="User Journey Map" 
                        className="w-full h-auto mx-auto rounded-3xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : project.journeyMapping.steps && (
                    <div className="overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                      <div className="flex items-start gap-4 min-w-max">
                        {project.journeyMapping.steps.map((step, i) => (
                          <React.Fragment key={i}>
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="w-72 p-10 rounded-[32px] border border-line bg-white shadow-sm flex flex-col gap-8"
                            >
                              <div className="space-y-1">
                                <h5 className="text-[22px] font-serif font-bold text-ink leading-tight">{i + 1}. {step.stage}</h5>
                              </div>
                              
                              <div className="space-y-6">
                                <div className="space-y-2">
                                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/40">Action</p>
                                  <div className="space-y-1">
                                    {step.actions.map((action, ai) => (
                                      <p key={ai} className="text-[15px] font-sans text-ink/80 leading-relaxed">{action}</p>
                                    ))}
                                  </div>
                                </div>
                                
                                {step.touchpoints && (
                                  <div className="space-y-2">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/40">Touchpoint</p>
                                    <div className="space-y-1">
                                      {step.touchpoints.map((tp, ti) => (
                                        <p key={ti} className="text-[15px] font-sans text-ink/80 leading-relaxed">{tp}</p>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                            
                            {i < project.journeyMapping.steps.length - 1 && (
                              <div className="flex items-center pt-28">
                                <div className="w-10 h-px bg-line/60 relative">
                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-line/60 rotate-45" />
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </GridSection>
          </section>

          {/* 5. INFORMATION ARCHITECTURE */}
          {project.appMap && (
            <section className="bg-ink/[0.02] py-24 md:py-32 border-y border-line">
              <GridSection>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-5">
                    <SectionLabel>Information Architecture</SectionLabel>
                    <Subheading className="mb-6">The Structural Backbone</Subheading>
                    <BodyText className="max-w-[600px] mb-8">{project.appMap.description}</BodyText>
                  </div>
                  {project.appMap.image ? (
                    <div className="lg:col-span-12">
                      <div className="rounded-[40px] overflow-hidden border border-line shadow-2xl bg-white p-6 md:p-12 flex flex-col items-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-8">Information Architecture</p>
                        <img src={project.appMap.image} alt="App Map" className="w-full h-auto max-h-[700px] object-cover mx-auto rounded-3xl" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  ) : project.appMap.nodes && (
                    <div className="lg:col-span-12">
                      <div className="rounded-[48px] border border-line shadow-2xl bg-white p-6 md:p-12 flex flex-col items-center overflow-hidden">
                        <div className="w-full flex justify-center px-4">
                          <div className="scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-top transition-all duration-500 py-4">
                            <IATree nodes={project.appMap.nodes} rootId="root" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </GridSection>
            </section>
          )}

          {/* 6. USER FLOW */}
          {project.userFlow && (
            <GridSection className="py-24 md:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {project.userFlow.image && (
                  <div className="lg:col-span-12 order-2 lg:order-1">
                    <div className="rounded-[40px] overflow-hidden border border-line shadow-2xl bg-white p-6 md:p-12">
                      <img src={project.userFlow.image} alt="User Flow" className="w-full h-auto max-h-[600px] object-contain mx-auto rounded-2xl" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                )}
                <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
                  <SectionLabel>User Flow</SectionLabel>
                  <Subheading className="mb-6">Mapping the Journey</Subheading>
                  <BodyText className="max-w-[600px] mb-8">{project.userFlow.description}</BodyText>
                </div>
              </div>
            </GridSection>
          )}

          {/* 7. WIREFRAMES */}
          {project.wireframes && (
            <section className="bg-ink/5 py-24 md:py-32 border-y border-line">
              <GridSection>
                <div className="max-w-3xl mb-16">
                  <SectionLabel>Wireframes</SectionLabel>
                  <Subheading className="mb-6">Low-Fidelity Explorations</Subheading>
                  <BodyText className="max-w-[600px]">{project.wireframes.description}</BodyText>
                </div>
                
                {project.wireframes.sections ? (
                  <div className="space-y-24">
                    {project.wireframes.sections.map((section, i) => (
                      <div key={i} className="space-y-10">
                        <div className="max-w-2xl">
                          <h5 className="text-[20px] font-bold text-ink mb-3">{section.title}</h5>
                          <p className="text-muted text-[15px] max-w-[600px]">{section.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {section.images.map((img, j) => (
                            <div key={j} className="rounded-2xl overflow-hidden border border-line shadow-lg bg-white">
                              <img src={img} alt={`${section.title} ${j}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.wireframes.images?.map((img, i) => (
                      <div key={i} className="rounded-3xl overflow-hidden border border-line shadow-xl bg-white">
                        <img src={img} alt={`Wireframe ${i}`} className="w-full h-auto" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                )}
              </GridSection>
            </section>
          )}

          {/* 8. KEY DESIGN DECISIONS */}
          {project.designDecisions && (
            <GridSection className="py-24 md:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4">
                  <SectionLabel>Key Design Decisions</SectionLabel>
                  <Subheading className="mb-6">Strategic Choices</Subheading>
                  <BodyText className="max-w-[600px]">Critical decisions made during the design process to balance user needs with functional requirements.</BodyText>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.designDecisions.map((decision, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-line bg-ink/[0.02] hover:border-accent/30 transition-colors">
                      <h5 className="text-[18px] font-bold text-ink mb-3">{decision.title}</h5>
                      <p className="text-[15px] text-muted leading-relaxed">{decision.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GridSection>
          )}

          {/* 9. FINAL INTERFACE */}
          {project.finalUI && (
            <section className="py-24 md:py-32 bg-ink text-white overflow-hidden">
              <GridSection>
                <div className="max-w-3xl mb-16 md:mb-24">
                  <SectionLabel><span className="text-accent/60">Final Interface</span></SectionLabel>
                  <Subheading className="text-white mb-6">The Polished Experience</Subheading>
                  <BodyText className="text-white/60 max-w-[600px]">The final interface combines strategic UX with refined visual aesthetics to deliver a seamless and engaging user journey.</BodyText>
                </div>
                
                <div className="space-y-32">
                  {Object.entries(project.finalUI).map(([key, flow], i) => (
                    <div key={i} className="space-y-12">
                      <div className="max-w-2xl">
                        <h5 className="text-[13px] font-bold uppercase tracking-widest text-accent mb-3">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h5>
                        <p className="text-[24px] md:text-[32px] font-bold text-white leading-tight">{flow.description}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-12">
                        {flow.images.map((img, j) => (
                          <motion.div 
                            key={j}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.1 }}
                            className="w-full rounded-[48px] overflow-hidden border border-white/10 shadow-2xl"
                          >
                            <img src={img} alt={`${key} ${j}`} className="w-full h-[400px] md:h-[600px] object-cover" referrerPolicy="no-referrer" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GridSection>
            </section>
          )}

          {/* 10. OUTCOME & 11. LEARNING */}
          <GridSection className="py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
              <div className="lg:col-span-5">
                <SectionLabel>Outcome</SectionLabel>
                <Subheading className="mb-6">Results & Impact</Subheading>
                <BodyText className="max-w-[600px]">{project.outcome}</BodyText>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {(project.achievements || []).map((achievement, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-line bg-ink/[0.02] flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-[15px] font-bold text-ink leading-snug">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {project.learnings && (
              <div className="pt-24 border-t border-line">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-4">
                    <SectionLabel>Learning</SectionLabel>
                    <Subheading className="mb-6">Key Takeaways</Subheading>
                    <BodyText className="max-w-[600px]">Reflecting on the process and the valuable lessons learned during the development of this project.</BodyText>
                  </div>
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {project.learnings.map((learning, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <span className="text-[32px] font-bold text-accent/20 leading-none">0{i+1}</span>
                        <p className="text-[16px] text-muted leading-relaxed">{learning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </GridSection>
        </>
      )}

      {/* 10. OUTCOME & 11. LEARNING */}
      {(project.outcome || project.learnings) && (
        <GridSection className="py-24 md:py-32">
          {project.outcome && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
              <div className="lg:col-span-5">
                <SectionLabel>Outcome</SectionLabel>
                <Subheading className="mb-6">Results & Impact</Subheading>
                <BodyText className="max-w-[600px]">{project.outcome}</BodyText>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {(project.achievements || []).map((achievement, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-line bg-ink/[0.02] flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-[15px] font-bold text-ink leading-snug">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {project.learnings && (
            <div className={`pt-24 ${project.outcome ? 'border-t border-line' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4">
                  <SectionLabel>Learning</SectionLabel>
                  <Subheading className="mb-6">Key Takeaways</Subheading>
                  <BodyText className="max-w-[600px]">Reflecting on the process and the valuable lessons learned during the development of this project.</BodyText>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project.learnings.map((learning, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <span className="text-[32px] font-bold text-accent/20 leading-none">0{i+1}</span>
                      <p className="text-[16px] text-muted leading-relaxed">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </GridSection>
      )}

      {/* Footer Navigation */}
      <GridSection className="pt-32 border-t border-line">
        <div className="flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-4 text-muted hover:text-accent transition-colors group font-bold uppercase tracking-widest text-[12px]">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            Previous Project
          </button>
          <button onClick={onBack} className="flex items-center gap-4 text-muted hover:text-accent transition-colors group font-bold uppercase tracking-widest text-[12px]">
            Next Project
            <ArrowUpRight size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </button>
        </div>
      </GridSection>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
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
    <section id="projects" className="pt-12 pb-32 md:pb-48 bg-bg">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[12px] tracking-[1.5px] uppercase opacity-70 font-bold text-accent mb-2">Portfolio</h2>
          <h3 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-tighter">Design Stories.</h3>
        </motion.div>

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
      <div className="max-w-[1200px] mx-auto px-10">
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
                I’m a Communication Designer dedicated to crafting meaningful visual and digital experiences through purposeful design and storytelling.
              </p>
              <p className="text-[16px] leading-[1.6] text-muted max-w-[600px]">
                I believe that design is not just about how things look, but how they function and communicate at a deeper level. My approach is rooted in clarity, simplicity, and thoughtful decision-making—ensuring every design is purposeful, usable, and engaging.
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
      <div className="max-w-7xl mx-auto px-10">
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
    <section id="contact" className="relative py-32 md:py-48 overflow-visible bg-bg">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-10 relative z-10">
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
    <footer className="py-12 border-t border-line bg-bg">
      <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-muted text-[14px] leading-[1.5]">
          © {new Date().getFullYear()} Purvi Singhvi
        </p>
        <div className="flex gap-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
          <a href="https://www.linkedin.com/in/purvi-singhvi-65a52927a/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors"><Github size={20} /></a>
        </div>
        <p className="text-muted text-[12px] font-mono uppercase tracking-[1.5px] opacity-70">
          Crafting with Purpose
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
      <HeroVideo isTransitioning={isTransitioning} />
      <HeroContent />
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
