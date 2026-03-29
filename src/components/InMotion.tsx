import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MotionItem } from '../types';

interface VideoCardProps {
  item: MotionItem;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl bg-black aspect-[3/4]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ 
          scale: isHovered ? 1.03 : 1,
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full"
      >
        <video
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-contain bg-black"
        >
          <source src={item.videoUrl} type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
};

const InMotion: React.FC<{ items: MotionItem[] }> = ({ items }) => {
  return (
    <section id="in-motion" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Living Gallery</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">IN MOTION.</h3>
          <p className="text-xl text-muted mt-8 max-w-2xl leading-relaxed">
            A curated collection of motion design and video editing work. 
            Immersive, continuous, and dynamic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <VideoCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InMotion;
