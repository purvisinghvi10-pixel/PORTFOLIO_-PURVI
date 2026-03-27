import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-bg text-white">
        <h1 className="text-4xl font-serif italic mb-6">Project not found</h1>
        <Link to="/" className="text-sm font-mono uppercase tracking-widest border-b border-white pb-1">
          Return Home
        </Link>
      </div>
    );
  }

  const nextProject = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

  return (
    <div className="bg-bg text-white min-h-screen">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-6 md:left-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-[8vw] font-serif italic leading-none tracking-tighter"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-b border-line">
        <div className="space-y-12">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">Project Overview</h3>
            <p className="text-xl md:text-2xl font-serif leading-relaxed">{project.overview.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">Objective</h3>
              <p className="text-sm text-white/70 leading-relaxed">{project.overview.objective}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">Challenges</h3>
              <p className="text-sm text-white/70 leading-relaxed">{project.overview.challenges}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted">Details</h3>
            <div className="flex justify-between py-4 border-b border-line">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">Category</span>
              <span className="text-sm">{project.category}</span>
            </div>
            <div className="flex justify-between py-4 border-b border-line">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">Year</span>
              <span className="text-sm">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.gridImages.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-square md:aspect-[4/3]"
          >
            <img 
              src={img} 
              alt={`${project.title} grid ${i}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </section>

      {/* Design Process Section */}
      <section className="py-24 px-6 md:px-20 bg-white/5">
        <h2 className="text-4xl font-serif italic mb-16">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {Object.entries(project.process).map(([key, value], i) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <span className="text-xs font-mono text-muted">0{i + 1}</span>
              <h3 className="text-sm font-mono uppercase tracking-widest border-b border-white/10 pb-2 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Outcome</h3>
          <p className="text-2xl font-serif leading-relaxed italic">"{project.outcome}"</p>
        </div>
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Key Achievements</h3>
          <ul className="space-y-4">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next Project Teaser */}
      <section className="py-40 px-6 md:px-20 border-t border-line">
        <Link 
          to={`/project/${nextProject.id}`}
          className="group block text-center space-y-8"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted">Next Project</span>
          <h2 className="text-5xl md:text-[10vw] font-serif italic leading-none tracking-tighter group-hover:opacity-50 transition-opacity">
            {nextProject.title}
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight size={24} />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
