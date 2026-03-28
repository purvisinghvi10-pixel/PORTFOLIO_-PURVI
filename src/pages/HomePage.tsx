import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectItem = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between min-h-screen py-20 px-6 md:px-20 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Left Side: Faded Number and Name */}
      <div className="hidden md:flex flex-col items-start relative w-1/3">
        <span className="faded-number absolute -top-20 -left-10 select-none">
          {project.number}
        </span>
        <div className="mt-20">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            {project.category}
          </h3>
          <h2 className="text-4xl font-serif italic">{project.title}</h2>
        </div>
      </div>

      {/* Right Side: Large Image */}
      <Link
        to={`/project/${project.id}`}
        className="w-full md:w-2/3 group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/5] md:aspect-video"
      >
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        
        {/* Mobile Title */}
        <div className="absolute bottom-6 left-6 md:hidden">
          <span className="text-xs font-mono uppercase tracking-widest text-white/70 mb-1 block">
            {project.number} / {project.category}
          </span>
          <h2 className="text-2xl font-serif italic text-white">{project.title}</h2>
        </div>
      </Link>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-[15vw] md:text-[10vw] font-serif leading-none tracking-tighter uppercase">
            Latest <br />
            <span className="italic ml-[5vw] md:ml-[10vw]">Work</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-white/30" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
            Scroll to explore
          </span>
        </motion.div>
      </section>

      {/* Projects List */}
      <section className="pb-40">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* Footer Teaser */}
      <footer className="py-40 px-6 md:px-20 border-t border-line text-center">
        <h2 className="text-2xl md:text-4xl font-serif italic mb-8">Let's create something meaningful.</h2>
        <a 
          href="mailto:purvisinghvi10@gmail.com" 
          className="text-sm font-mono uppercase tracking-widest hover:text-muted transition-colors"
        >
          purvisinghvi10@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
