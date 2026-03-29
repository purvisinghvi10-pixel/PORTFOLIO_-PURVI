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

const TransitionOverlay = () => {
  return (
    <div id="transition-overlay">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="draw-path" d="M0,500 Q250,250 500,500 T1000,500" />
      </svg>
    </div>
  );
};

const TransitionLink = ({ to, children, className, onClick, setIsTransitioning }: { to: string, children: React.ReactNode, className?: string, onClick?: () => void, setIsTransitioning: (val: boolean) => void }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    // Handle anchor links separately if they are on the same page
    if (to.startsWith('/#')) {
      const id = to.substring(2);
      const element = document.getElementById(id);
      if (element && location.pathname === '/') {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        if (onClick) onClick();
        return;
      }
    }

    e.preventDefault();
    if (location.pathname === to) {
      if (onClick) onClick();
      return;
    }

    const overlay = document.getElementById('transition-overlay');
    const path = document.getElementById('draw-path');

    if (overlay && path) {
      setIsTransitioning(true);
      overlay.classList.add('active');
      path.classList.add('draw-animation');

      setTimeout(() => {
        if (onClick) onClick();
        navigate(to);
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          overlay.classList.remove('active');
          path.classList.remove('draw-animation');
          setIsTransitioning(false);
        }, 600);
      }, 900);
    } else {
      if (onClick) onClick();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Navbar = ({ setIsTransitioning }: { setIsTransitioning: (val: boolean) => void }) => {
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
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <TransitionLink to="/" setIsTransitioning={setIsTransitioning} className="flex items-center">
          <img src="https://i.ibb.co/vrFdk6Z/Asset-1-4x.png" alt="Logo" className="nav-logo" />
        </TransitionLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <TransitionLink 
              key={link.name} 
              to={link.to} 
              setIsTransitioning={setIsTransitioning}
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              {link.name}
            </TransitionLink>
          ))}
          
          <TransitionLink 
            to="/#contact" 
            setIsTransitioning={setIsTransitioning}
            className="px-5 py-2 border border-line text-ink rounded-full text-sm font-semibold hover:bg-accent hover:text-white transition-all"
          >
            Let's Talk
          </TransitionLink>
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
              <TransitionLink 
                key={link.name} 
                to={link.to} 
                setIsTransitioning={setIsTransitioning}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-medium"
              >
                {link.name}
              </TransitionLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ isTransitioning }: { isTransitioning?: boolean }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center bg-bg overflow-visible">
      <div className="max-w-7xl mx-auto px-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] items-center gap-10 lg:gap-20 overflow-visible">
        {/* Left: Video */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[16/10] rounded-[20px] overflow-hidden shadow-2xl glass group"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-8 overflow-visible"
        >
          <div className="overflow-visible">
            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Purvi Singhvi
            </h2>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.15] tracking-tighter overflow-visible pb-2">
              Multidisciplinary <br />
              <span className="inline-block transform translate-y-[2px] text-gradient">Designer</span>
            </h1>
          </div>
          <p className="text-xl text-muted max-w-xl leading-relaxed">
            I design intuitive and visually engaging digital experiences that combine strong aesthetics with purposeful interaction.
          </p>
          <div className="flex flex-wrap gap-6">
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg text-ink pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-10">
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
          className="w-full h-full object-cover rounded-[20px]"
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
    <section id="projects" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-10">
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
                  {project.slideshowImages ? (
                    <ProjectSlideshow images={project.slideshowImages} title={project.title} />
                  ) : (
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
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center pointer-events-none"
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
      <div className="max-w-7xl mx-auto px-10">
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

const StillStoriesPage = ({ setIsTransitioning }: { setIsTransitioning: (val: boolean) => void }) => {
  const [selectedImage, setSelectedImage] = useState<PhotographyItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-10">
        <TransitionLink to="/" setIsTransitioning={setIsTransitioning} className="inline-flex items-center gap-2 text-accent hover:text-ink transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </TransitionLink>
        
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
              className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[3/4]"
              onClick={() => setSelectedImage(photo)}
            >
              <motion.img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              
              {/* Title */}
              <div className="absolute top-3 left-3 text-white text-[13px] font-medium opacity-0 group-hover:opacity-85 transition-opacity duration-500 z-10">
                {photo.title}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Caption */}
              {photo.caption && (
                <p className="absolute bottom-3 left-3 text-white text-[14px] font-normal opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-10 pr-6 leading-tight">
                  {photo.caption}
                </p>
              )}

              {/* Minimal Eye Icon on Hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white">
                  <Eye size={18} />
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

const InMotionPage = ({ setIsTransitioning }: { setIsTransitioning: (val: boolean) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto px-10 pt-32">
        <TransitionLink to="/" setIsTransitioning={setIsTransitioning} className="inline-flex items-center gap-2 text-accent hover:text-ink transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </TransitionLink>
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
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
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
    const overlay = document.getElementById('transition-overlay');
    const path = document.getElementById('draw-path');

    if (overlay && path) {
      setIsTransitioning(true);
      overlay.classList.add('active');
      path.classList.add('draw-animation');

      setTimeout(() => {
        setSelectedProject(project);
        navigate(`/project/${project.id}`);
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          overlay.classList.remove('active');
          path.classList.remove('draw-animation');
          setIsTransitioning(false);
        }, 600);
      }, 900);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedProject(project);
        navigate(`/project/${project.id}`);
        window.scrollTo(0, 0);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }, 500);
    }
  };

  const handleBackToWorks = () => {
    const overlay = document.getElementById('transition-overlay');
    const path = document.getElementById('draw-path');

    if (overlay && path) {
      setIsTransitioning(true);
      overlay.classList.add('active');
      path.classList.add('draw-animation');

      setTimeout(() => {
        navigate('/');
        setSelectedProject(null);
        window.scrollTo(0, 0);
        
        setTimeout(() => {
          overlay.classList.remove('active');
          path.classList.remove('draw-animation');
          setIsTransitioning(false);
        }, 600);
      }, 900);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate('/');
        setSelectedProject(null);
        window.scrollTo(0, 0);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }, 500);
    }
  };

  return (
    <div className={`min-h-screen selection:bg-accent/30 selection:text-ink relative transition-all duration-700 ${isTransitioning ? 'page-scale-down' : ''}`}>
      <div className="noise-overlay" />
      <TransitionOverlay />
      <Navbar setIsTransitioning={setIsTransitioning} />

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
              <StillStoriesPage setIsTransitioning={setIsTransitioning} />
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
              <InMotionPage setIsTransitioning={setIsTransitioning} />
              <Footer />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
